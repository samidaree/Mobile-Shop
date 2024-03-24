import Sales from '@/components/heros/Sales'
import Laptop from '@/components/heros/Laptop'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import ShopButton from './ShopButton'
import { secondary } from '@/lib/colors'

const SaleSection = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  display: flex;
  gap: 200px;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`

const ShopLaptop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 30%;
`
const LaptopWrapper = styled.div`
  display: flex;
  width: 40%;
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
          fontSize={'2rem'}
          paddingX={'20px'}
          paddingY={'10px'}
        />
      </ShopLaptop>
    </SaleSection>
  )
}
