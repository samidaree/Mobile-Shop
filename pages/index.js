import Featured from '@/components/Featured'
import Carousel from '@/components/carousel/Carousel'
import Devices from '@/components/icons/Devices'
import { Product } from '@/models/Product'
import { Category } from '@/models/Category'
import { mongooseConnect } from '@/lib/mongoose'
import NewProducts from '@/components/NewProducts'
import Marketing from '@/components/icons/Marketing'
import styled from 'styled-components'
import mongoose from 'mongoose'
const MarketingSection = styled.div`
  background-color: #f7f7f7;
`
export default function HomePage({ newProducts }) {
  return (
    <div>
      <Featured />
      <NewProducts products={newProducts} />
      <MarketingSection>
        <Marketing
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            padding: '40px 0px',
            maxWidth: '1200px',
          }}
        />
        <Devices
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            paddingTop: '40px',
            maxWidth: '1200px',
          }}
        />
      </MarketingSection>
    </div>
  )
}

export async function getServerSideProps() {
  await mongooseConnect()

  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  }).populate('category')

  await mongoose.disconnect()
  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  }
}
