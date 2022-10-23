import { ethers } from 'ethers';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { fecthBlockchainDataActionAsync } from '../../../../../store/actions/blockchain-actions';
import { blockchainIsConnectedSelector } from '../../../../../store/selectors/blockchain-selectors';
import { contractDataSelector, contractIsPresaleOpen } from '../../../../../store/selectors/contract-selectors';
import {
  McButton,
  McButtonsSection,
  McContainer,
  McImage,
  McInformationContainer,
  McmdpLabel,
  McmdqLabel,
  MCmdqValue,
  McMintDetails,
  McmdpEthereumImage,
  McMintDetailsQuantity,
  McText,
  McTitle,
  McmdpPrice,
  McValue,
  McSection,
  McSub,
  McAdd,
} from './styles';
import IMintCardProps from './types';

const MintCard = (props: IMintCardProps): JSX.Element => {
  const { title, text, image, quantity, price, isGenesis } = props;
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<number>(1);
  const contractData = useAppSelector(contractDataSelector);
  const isPresale = useAppSelector(contractIsPresaleOpen);
  const isConnected = useAppSelector(blockchainIsConnectedSelector);
  const handleAddAmount = () => {
    setAmount(prev => prev + 1);
  };
  const handleSubAmount = () => {
    setAmount(prev => prev - 1);
  };
  const handleConnect = () => {
    dispatch(fecthBlockchainDataActionAsync());
  };
  const buildMintingOption = () => {
    return (
      <>
        <McButton isMint>Mint</McButton>
        <McSection>
          <McSub disabled={amount === 1} onClick={handleSubAmount}>
            -
          </McSub>
          <McValue>{amount}</McValue>
          <McAdd disabled={amount === 2} onClick={handleAddAmount}>
            +
          </McAdd>
        </McSection>
      </>
    );
  };
  const buildQuantity = () => {
    return `${quantity}`;
  };

  const buildPrice = () => {
    let contractPrice = '';
    if (isConnected) {
      if (isPresale) {
        contractPrice = isGenesis ? contractData.prices.genesisPresaleCost : contractData.prices.alphaPresaleCost;
      } else {
        contractPrice = isGenesis ? contractData.prices.genesisCost : contractData.prices.alphaCost;
      }
    }
    if (!contractPrice) {
      return `${price} ETH`;
    }
    return `${ethers.utils.formatEther(contractPrice)} ETH`;
  };

  return (
    <McContainer>
      <McInformationContainer>
        <McTitle>{title}</McTitle>
        <McText>{text}</McText>
        <McMintDetails>
          <McMintDetailsQuantity>
            <McmdqLabel>Quantity</McmdqLabel>
            <MCmdqValue>{buildQuantity()}</MCmdqValue>
          </McMintDetailsQuantity>
          <McMintDetailsQuantity>
            <McmdpLabel>Price</McmdpLabel>
            <McmdpPrice>
              <McmdpEthereumImage src="assets/ethereum-logo.png" />
              <MCmdqValue>{buildPrice()}</MCmdqValue>
            </McmdpPrice>
          </McMintDetailsQuantity>
        </McMintDetails>
        <McButtonsSection>{!isConnected ? <McButton onClick={handleConnect}>connect</McButton> : buildMintingOption()}</McButtonsSection>
      </McInformationContainer>
      <McImage src={image} />
    </McContainer>
  );
};

export default MintCard;
