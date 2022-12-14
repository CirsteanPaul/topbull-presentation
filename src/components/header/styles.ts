import * as Scroll from 'react-scroll';
import styled, { css } from '../../theme';

export const HeaderContainer = styled.header<{ isScrolled?: boolean }>`
  position: fixed;
  display: flex;
  padding: 0 24px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  z-index: 10;
  ${props =>
    props.isScrolled &&
    css`
      -webkit-backdrop-filter: blur(7px);
      backdrop-filter: blur(7px);
      background-color: rgba(0, 0, 0, 0.3);
    `};
`;
export const HeaderLeftSection = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderLogo = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 10px;
  align-self: center;
`;
export const HeaderTitle = styled.h2<{ isRed?: boolean }>`
  display: flex;
  align-self: center;
  text-transform: uppercase;
  margin-right: 2px;
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => (props.isRed ? props.theme.colors.primary : props.theme.colors.white)};
`;
export const HeaderNavContainer = styled.nav`
  display: flex;
  gap: 20px;
  align-self: center;
  align-items: center;
`;
export const HeaderNavItem = styled(Scroll.Link)`
  outline: 0;
  border: 0;
  background-color: transparent;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
`;
export const HeaderNavIconDiscord = styled.img`
  width: 25px;
  height: 25px;
  align-self: center;
`;
export const HeaderNavIconTwitter = styled.img`
  width: 25px;
  height: 20px;
  align-self: center;
`;
export const InsideLink = styled(Scroll.Link).attrs(props => ({
  spy: true,
  activeClass: `color:${props.theme.colors.primary}`,
  offset: -50,
  smooth: 'easeInOutQuint',
  duratioon: 500,
}))<{ isOpen?: boolean }>`
  transition: visibility 0.2s ease;
  ${props =>
    !props.isOpen &&
    css`
      visibility: hidden;
    `};
  text-transform: uppercase;
  background-color: transparent;
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }
`;
export const NavLink = styled(Scroll.Link).attrs(props => ({
  spy: true,
  activeClass: `color:${props.theme.colors.primary}`,
  offset: -50,
  smooth: 'easeInOutQuint',
  duratioon: 500,
}))`
  text-transform: uppercase;
  background-color: transparent;
  font-size: ${props => props.theme.fontSize.mSmall};
  color: ${props => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }
`;
export const HeaderMobileMenu = styled.nav<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  flex-grow: 1;
  flex-direction: column;
  gap: 30px;
  padding: 0;
  align-items: center;
  z-index: 50;
  transition: width 0.7s ease;
  ${props =>
    props.isOpen &&
    css`
      padding: 20px 10px;
      width: 100vw;
    `}
`;
export const HeaderLogoMobile = styled.img<{ isOpen: boolean }>`
  width: 0;
  height: 70px;
  ${props =>
    props.isOpen &&
    css`
      width: 70px;
      transition: width 1s ease-out;
    `}
`;
