import Center from '@/components/Center'
import ProductsGrid from '@/components/ProductsGrid'
import TitleH2 from './TitleH2'

export default function NewProducts({ products }) {
  console.log('🚀 ~ NewProducts ~ products:', products)
  return (
    <Center>
      <TitleH2>New Arrivals</TitleH2>
      <ProductsGrid products={products} />
    </Center>
  )
}
