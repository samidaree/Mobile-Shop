import Header from '@/components/Header'
import Featured from '@/components/Featured'
import { Product } from '@/models/Product'
import { Category } from '@/models/Category'
import { mongooseConnect } from '@/lib/mongoose'
import Footer from '@/components/Footer'
import NewProducts from '@/components/NewProducts'

export default function HomePage({ newProducts }) {
  return (
    <div>
      <Featured />
      <NewProducts products={newProducts} />
    </div>
  )
}

export async function getServerSideProps() {
  await mongooseConnect()

  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  }).populate('category')

  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  }
}
