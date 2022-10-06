import { Root } from 'react-dom/client';
import Web3Modal from 'web3modal';
import { RootState } from '..';

export const blockchainAccountSelector = (state: RootState): string => state.blockchain.account;
export const blockchainWeb3ModalSelector = (state: RootState): Web3Modal => state.blockchain.web3Modal;
export const blockchainLoadingSelector = (state: RootState): boolean => state.blockchain.loading;
