import Header from '@/components/Header'
import FifthHero from '@/components/heros/FifthHero'
import styled from 'styled-components'
import ProductSales from '@/components/ProductSales'
import Center from '@/components/Center'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import ProductsGrid from '@/components/ProductsGrid'
import TitleH2 from '@/components/TitleH2'

const SaleBox = styled.div`
  background-color: #f7f7f7;
  padding: 20px 0;
`

export default function ProductsPage({ products }) {
  return (
    <>
      <FifthHero />

      <Center>
        <TitleH2>Products</TitleH2>
        <ProductsGrid products={products} />
      </Center>
      <SaleBox>
        <ProductSales />
      </SaleBox>
    </>
  )
}

export async function getServerSideProps() {
  await mongooseConnect()
  const products = await Product.find({}, null, { sort: { _id: -1 } }).populate(
    'category',
  )
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  }
}
