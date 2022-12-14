import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import {
  BLOCKCHAIN__SET_ACCOUNT,
  BLOCKCHAIN__SET_LOADING,
  BLOCKCHAIN__SET_PROVIDER,
  BLOCKCHAIN__FETCH,
  BLOCKCHAIN__SET_WEB3MODAL,
  BLOCKCHAIN__SET_IS_CONNECTED,
  BLOCKCHAIN__DISCONNECT,
  BLOCKCHAIN__UPDATE_ACCOUNT_ASYNC,
} from '../constants';
import { RootState } from '..';
import { blockchainWeb3ModalSelector } from '../selectors/blockchain-selectors';
import { switchNetworkByWallet } from './blockchain-utils';

export const setBlockchainLoadingAction = createAction<boolean>(BLOCKCHAIN__SET_LOADING);
export const setBlockchainAccountAction = createAction<string>(BLOCKCHAIN__SET_ACCOUNT);
export const setBlockchainWeb3ModalAction = createAction<Web3Modal>(BLOCKCHAIN__SET_WEB3MODAL);
export const setBlockchainProviderAction = createAction<ethers.providers.ExternalProvider>(BLOCKCHAIN__SET_PROVIDER);
export const setBlockchainIsConnectedAction = createAction<boolean>(BLOCKCHAIN__SET_IS_CONNECTED);

export const fecthBlockchainDataActionAsync = createAsyncThunk<void, never, { state: RootState }>(BLOCKCHAIN__FETCH, async (__: never, thunkApi) => {
  const web3Modal = blockchainWeb3ModalSelector(thunkApi.getState());
  thunkApi.dispatch(setBlockchainLoadingAction(true));
  try {
    const mainProvider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(mainProvider);
    const isChainRight = await switchNetworkByWallet({ library });
    if (!isChainRight) {
      return;
    }
    const accounts = await library.listAccounts();
    const account = library.getSigner(accounts[0]);
    thunkApi.dispatch(setBlockchainProviderAction(library.provider));
    thunkApi.dispatch(setBlockchainAccountAction(account as unknown as string));
    thunkApi.dispatch(setBlockchainIsConnectedAction(true));

    // something to be fetched
  } catch (err) {
    // swallow exception
  } finally {
    thunkApi.dispatch(setBlockchainLoadingAction(false));
  }
});
export const blockchainDisconnectAsyncAction = createAsyncThunk<void, never, { state: RootState }>(BLOCKCHAIN__DISCONNECT, async (__: never, thunkApi) => {
  const web3Modal = blockchainWeb3ModalSelector(thunkApi.getState());

  thunkApi.dispatch(setBlockchainLoadingAction(true));
  try {
    await web3Modal.clearCachedProvider();
    thunkApi.dispatch(setBlockchainAccountAction(''));
    thunkApi.dispatch(setBlockchainProviderAction({} as ethers.providers.ExternalProvider));
  } catch {
    // swallow exception
  } finally {
    thunkApi.dispatch(setBlockchainLoadingAction(false));
  }
});
export const updateBlockchainAccountActionAsync = createAsyncThunk<void, string[], { state: RootState }>(BLOCKCHAIN__UPDATE_ACCOUNT_ASYNC, async (accounts: string[], thunkApi) => {
  thunkApi.dispatch(setBlockchainLoadingAction(true));
  try {
    thunkApi.dispatch(setBlockchainAccountAction(accounts[0]));
    // fetch data contract
  } catch {
    // swallow exception
  } finally {
    thunkApi.dispatch(setBlockchainLoadingAction(false));
  }
});
