/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AccountStakingInfo
 */
export interface AccountStakingInfo {
    /**
     * 
     * @type {string}
     * @memberof AccountStakingInfo
     */
    pool: string;
    /**
     * 
     * @type {number}
     * @memberof AccountStakingInfo
     */
    amount: number;
    /**
     * 
     * @type {number}
     * @memberof AccountStakingInfo
     */
    pendingDeposit: number;
    /**
     * 
     * @type {number}
     * @memberof AccountStakingInfo
     */
    pendingWithdraw: number;
    /**
     * 
     * @type {number}
     * @memberof AccountStakingInfo
     */
    readyWithdraw: number;
}

/**
 * Check if a given object implements the AccountStakingInfo interface.
 */
export function instanceOfAccountStakingInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pool" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "pendingDeposit" in value;
    isInstance = isInstance && "pendingWithdraw" in value;
    isInstance = isInstance && "readyWithdraw" in value;

    return isInstance;
}

export function AccountStakingInfoFromJSON(json: any): AccountStakingInfo {
    return AccountStakingInfoFromJSONTyped(json, false);
}

export function AccountStakingInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStakingInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pool': json['pool'],
        'amount': json['amount'],
        'pendingDeposit': json['pending_deposit'],
        'pendingWithdraw': json['pending_withdraw'],
        'readyWithdraw': json['ready_withdraw'],
    };
}

export function AccountStakingInfoToJSON(value?: AccountStakingInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pool': value.pool,
        'amount': value.amount,
        'pending_deposit': value.pendingDeposit,
        'pending_withdraw': value.pendingWithdraw,
        'ready_withdraw': value.readyWithdraw,
    };
}
