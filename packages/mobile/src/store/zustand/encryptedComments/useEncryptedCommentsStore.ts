import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IEcryptedCommentsStore } from './types';

const initialState: Omit<IEcryptedCommentsStore, 'actions'> = {
  decryptedComments: {},
};

export const useEncryptedCommentsStore = create(
  persist<IEcryptedCommentsStore>(
    (set, getState) => ({
      ...initialState,
      actions: {
        saveDecryptedComment: (id, comment) => {
          const decryptedComments = getState().decryptedComments;

          decryptedComments[id] = comment;

          set({ decryptedComments });
        },
      },
    }),
    {
      name: 'encryptedComments',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ decryptedComments }) =>
        ({ decryptedComments } as IEcryptedCommentsStore),
    },
  ),
);
