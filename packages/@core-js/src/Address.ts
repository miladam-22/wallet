import TonWeb from 'tonweb';

const ContractVersions = ['v3R1', 'v3R2', 'v4R1', 'v4R2'] as const;

export type AddressFormats = {
  friendly: string;
  short: string;
  raw: string;
};

export type AddressesByVersion = {
  [key in (typeof ContractVersions)[number]]: AddressFormats;
};

type FormatOptions = {
  testOnly?: boolean;
  bounceable?: boolean;
  urlSafe?: boolean;
};

const defaultOptions: FormatOptions = {
  bounceable: true,
  testOnly: false,
  urlSafe: true,
};

function toShortAddress(address: string, symbolsInPart: number = 4) {
  if (!address) {
    address = '';
  }

  const initialPart = address.substring(0, symbolsInPart);
  const finalPart = address.substring(address.length - symbolsInPart);
  const ellipsis = '...';

  return initialPart + ellipsis + finalPart;
}

function AddressFactory(source: string) {
  const address = new TonWeb.Address(source);

  function toAll(options: FormatOptions = defaultOptions): AddressFormats {
    const { bounceable, testOnly, urlSafe } = Object.assign(defaultOptions, options);
    const friendly = address.toString(true, urlSafe, bounceable, testOnly);
    const raw = address.toString(false, false, bounceable, testOnly);
    const short = toShortAddress(friendly);

    return { friendly, raw, short };
  }

  function toFriendly(options: FormatOptions = defaultOptions) {
    const { bounceable, urlSafe, testOnly } = Object.assign(defaultOptions, options);
    return address.toString(true, urlSafe, bounceable, testOnly);
  }

  function toRaw(options: FormatOptions = defaultOptions) {
    const { bounceable, testOnly } = Object.assign(defaultOptions, options);
    return address.toString(false, false, bounceable, testOnly);
  }

  // toFriendly alias
  function toString(options: FormatOptions = defaultOptions) {
    const { bounceable, testOnly, urlSafe } = Object.assign(defaultOptions, options);
    return address.toString(true, urlSafe, bounceable, testOnly);
  }

  function toShort(symbolsInPart: number = 4) {
    const friendly = toFriendly();
    return toShortAddress(friendly, symbolsInPart);
  }

  function toTonWeb() {
    return address;
  }

  return { toAll, toFriendly, toRaw, toString, toShort, toTonWeb };
}

export const Address = Object.assign(AddressFactory, {
  toShort: toShortAddress,
  isValid(address: string) {
    return TonWeb.Address.isValid(address);
  },
  compare(adr1?: string, adr2?: string) {
    if (adr1 === undefined || adr2 === undefined) {
      return false;
    }

    if (!TonWeb.Address.isValid(adr1) || !TonWeb.Address.isValid(adr2)) {
      return false;
    }

    try {
      const address1 = new TonWeb.Address(adr1).toString(false);
      const address2 = new TonWeb.Address(adr2).toString(false);

      return address1 === address2;
    } catch {
      return false;
    }
  },
  async fromPubkey(
    pubkey: string | null,
    options: FormatOptions = defaultOptions,
  ): Promise<AddressesByVersion | null> {
    if (!pubkey) return null;

    const tonweb = new TonWeb();
    const addresses = {} as AddressesByVersion;
    for (let contractVersion of ContractVersions) {
      const wallet = new tonweb.wallet.all[contractVersion](tonweb.provider, {
        publicKey: pubkey as any,
        wc: 0,
      });

      const address = await wallet.getAddress();
      const friendly = address.toString(true, true, options.bounceable, options.testOnly);
      const raw = address.toString(false, false, options.bounceable, options.testOnly);
      const short = toShortAddress(friendly);

      addresses[contractVersion] = { friendly, raw, short };
    }

    return addresses;
  },
});
