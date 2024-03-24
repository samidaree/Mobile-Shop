import { secondary, third } from '@/lib/colors'
import styled from 'styled-components'

const Container = styled.div`
  // your CSS here
`

const HoverBox = styled.div`
  // your CSS here
`

const Row = styled.div`
  // your CSS here
`

const Col = styled.div`
  // your CSS here
`

const DescriptionBtn = styled.a`
  // your CSS here
`

const NameDescription = styled.span`
  // your CSS here
`

const BtnIcon = styled.div`
  // your CSS here
`

const Heart = styled(BtnIcon)`
  // your CSS here
`

const Book = styled(BtnIcon)`
  // your CSS here
`

const Brain = styled(BtnIcon)`
  // your CSS here
`

const Icon = styled.i`
  // your CSS here
`

const Btn = styled.button`
  background-color: ${secondary};

  white-space: nowrap;
  color: hsla(150, 14%, 97%, 1);
  cursor: pointer;
  outline: none;
  font-size: 2.4rem;
  font-family: 'Norwester';
  text-transform: uppercase;
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  user-select: none;
  padding: 1.5rem 2rem;
  margin: 1rem;
  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: ${secondary};
    transform: translateY(-3px);
  }

  &:active {
    background-color: ${third};
  }

  @media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`

const ShopButton = () => {
  return (
    <Container>
      <Btn
        type="button"
        buynow
      >
        Buy Laptop
      </Btn>
    </Container>
  )
}
export default ShopButton
