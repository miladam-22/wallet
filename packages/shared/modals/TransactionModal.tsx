import { Steezy, Modal, View } from '@tonkeeper/uikit';
import { memo } from 'react';
import { useTransaction } from '@tonkeeper/core/src/query/useTransaction';
import { formatter } from '../formatter';

type TransactionModalParams = {
  transactionId: string;
};

// export const TransactionModalController = createRouteController<TransactionModalParams>(
//   async (router, params) => {
//     try {
//       const cachedEvent = transactions.getCachedById(params.eventId);
//       if (cachedEvent) {
//         return router.pass(cachedEvent);
//       } else {
//         Toast.loading();
//         const event = await transactions.fetchById(params.eventId);
//         Toast.hide();

//         return router.pass(event);
//       }
//     } catch (err) {
//       Toast.fail('Message');
//     }
//   },
// );

interface TransactionModalProps {
  transactionId: string;
}

export const TransactionModal = memo<TransactionModalProps>((props) => {
  const { transactionId } = props;
  const t = useTransaction(transactionId);

  return (
    <Modal>
      <Modal.Header />
      <Modal.Content>
        <View style={{ height: 200 }}>

        </View>
      </Modal.Content>
    </Modal>
  );
});

const styles = Steezy.create({
  container: {},
});
