import Sales from '@/components/heros/Sales'
import Laptop from '@/components/heros/Laptop'
import styled from 'styled-components'
import ShopButton from './ShopButton'
import { secondary } from '@/lib/colors'

const SaleSection = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  gap: 200px;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const ShopLaptop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 300px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: unset;
    width: 30%;
  }
`
const LaptopWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export default function ProductSales() {
  return (
    <SaleSection>
      <LaptopWrapper>
        <Laptop />
      </LaptopWrapper>
      <ShopLaptop>
        <Sales />
        <ShopButton
          text="BUY LAPTOP"
          bgColor={secondary}
          fontSize={'1.4rem'}
          paddingX={'20px'}
          paddingY={'10px'}
        />
      </ShopLaptop>
    </SaleSection>
  )
}
