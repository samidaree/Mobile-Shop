import { primary, primaryHover, secondary, third } from '@/lib/colors'
import CartIcon from '@/components/icons/CartIcon'
import styled from 'styled-components'

const Icon = styled.div`
  color: 'green',
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '3px',
`
const Btn = styled.button`
  background-color: ${(props) => props.bgColor};

  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  white-space: nowrap;
  color: hsla(150, 14%, 97%, 1);
  cursor: pointer;
  outline: none;
  font-weight : 800; 
  font-size: ${(props) => props.fontSize};
  text-transform: uppercase;
  border-radius: 5px;
  user-select: none;
  padding: ${(props) => props.paddingY} ${(props) => props.paddingX};
  margin: 1rem;
  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: ${(props) =>
      props.bgColor == '#39B54A' ? primaryHover : secondary};
    transform: translateY(-3px);
  }

  &:active {
    background-color: ${(props) =>
      props.bgColor == '#39B54A' ? primary : third};
    transform: translateY(-3px);
  }
  }

  @media screen and (max-width: 45em) {
    padding: ${(props) => props.paddingY / 2} ${(props) => props.paddingX / 2};
    font-size: ${(props) => props.fontSize / 2};
    margin: 0.5rem;
  }
`

const ShopButton = ({ text, fontSize, paddingX, paddingY, bgColor }) => {
  console.log('🚀 ~ ShopButton ~ bgColor:', bgColor)
  return (
    <>
      <Btn
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        bgColor={bgColor}
        type="button"
      >
        <Icon>
          <CartIcon />
        </Icon>
        {text}
      </Btn>
    </>
  )
}
export default ShopButton
