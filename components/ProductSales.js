import Sales from '@/components/heros/Sales'
import Laptop from '@/components/heros/Laptop'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import ShopButton from './ShopButton'

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
  width: 40%;
`
const LaptopWrapper = styled.div`
  display: flex;
  width: 50%;
`

export default function ProductSales() {
  return (
    <SaleSection>
      <LaptopWrapper>
        <Laptop />
      </LaptopWrapper>
      <ShopLaptop>
        <Sales />
        <ShopButton />
      </ShopLaptop>
    </SaleSection>
  )
}
