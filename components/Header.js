import Link from 'next/link'
import CartIcon from '@/components/icons/CartIcon'
import styled from 'styled-components'
import Center from '@/components/Center'
import { useContext, useState } from 'react'
import { CartContext } from '@/components/CartContext'
import BarsIcon from '@/components/icons/Bars'
import LogoIcon from '@/components/icons/Logo'
import { third } from '@/lib/colors'
const StyledHeader = styled.header`
  background-color: hsl(0, 0%, 100%);
`
const Logo = styled(Link)`
  z-index: 3;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: hsl(0, 0%, 100%);
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
    align-items: center;
  }
`
const NavLink = styled(Link)`
  display: block;
  color: ${third};
  font-weight: 600;

  margin-top: 40px;
  text-decoration: none;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 0;
  }
`
const NavButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 0;
  margin-top: 10px;
  color: black;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export default function Header() {
  const { cartProducts } = useContext(CartContext)
  const [mobileNavActive, setMobileNavActive] = useState(false)
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>
            <LogoIcon />
          </Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink
              href={'/cart'}
              style={{ color: 'black' }}
            >
              <CartIcon style={{ width: '40px', height: '30px' }} />(
              {cartProducts.length})
            </NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}
