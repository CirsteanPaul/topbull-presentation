import styled from '../../theme';

export const FooterContainer = styled.footer`
  position: relative;
  background-color: ${props => props.theme.colors.darkRed};
  min-height: 180px;
  margin-top: 300px;
  display: flex;
  padding: 0 20px;
  padding-top: 80px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 890px) {
    padding-top: 70px;
    min-height: 100px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  @media screen and (max-width: 512px) {
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
  }
`;
export const FooterLogoImg = styled.img`
  height: ${props => props.theme.fontSize.xGigant};
`;
export const FooterLogo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex: 1;
  @media screen and (max-width: 512px) {
    flex-direction: column;
  }
`;
export const FooterLogoTitle = styled.h3`
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fontSize.medium};
`;
export const FooterCopyRight = styled.p`
  max-width: 200px;
  text-align: center;
  color: ${props => props.theme.colors.mediumRed};
  font-size: ${props => props.theme.fontSize.mSmall};
  font-weight: ${props => props.theme.fonts.roboto};
  flex: 1;
  @media screen and (max-width: 890px) {
    text-align: right;
  }
  @media screen and (max-width: 512px) {
    text-align: center;
  }
`;
export const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  gap: 20px;
  @media screen and (max-width: 890px) {
    display: none;
  }
`;
export const FooterMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 35px;
`;
export const FooterMenuItem = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.xSmall};
  font-weight: ${props => props.theme.fonts.extraBold};
  text-align: center;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;
export const FooterIcon = styled.img`
  height: 20px;
  align-self: center;
`;
