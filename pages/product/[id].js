import Center from '@/components/Center'
import Title from '@/components/Title'
import ValueProposition from '@/components/icons/ValueProposition'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import { Category } from '@/models/Category'
import styled from 'styled-components'
import WhiteBox from '@/components/WhiteBox'
import ProductImages from '@/components/ProductImages'
import Button from '@/components/Button'
import CartIcon from '@/components/icons/CartIcon'
import { useContext } from 'react'
import { CartContext } from '@/components/CartContext'
import Carousel from '@/components/carousel/Carousel'
import Stars from '@/components/stars/Star'
import { primary, secondary, third } from '@/lib/colors'
import ShopButton from '@/components/ShopButton'
import Tag from '@/components/Tag'

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`
const RightContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`
const HeaderProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`
const Description = styled.p`
  font-size: 0.9rem;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const Properties = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-radius: 5px;
`
const Property = styled.div`
  background-color: #f7f7f7;
  padding: 10px 20px;
  margin: 0 10px;
  display: flex;
  gap: 8px;
`

const PropertyValue = styled.span`
  color: ${secondary};
`
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  margin: 5px 0;
  align-items: center;
`
const Price = styled.span`
  font-size: 1.6rem;
  color: ${third};
  padding: 9px;
  border-radius: 5px;

  font-weight: 600;
`

export default function ProductPage({ product, productsList }) {
  console.log('🚀 ~ ProductPage ~ product:', product)
  const { addProduct } = useContext(CartContext)
  const handleAddProduct = (productId) => {
    addProduct(productId)
    const toast = document.getElementById('toast')
    if (toast.style.display === 'flex') {
      toast.style.display = 'none'
      console.log(toast)
      setTimeout(() => {
        toast.style.display = 'flex'
      }, 1000)
      return
    }
    toast.style.display = 'flex'
  }
  return (
    <>
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <RightContainer>
            <Stars stars={product.rating}></Stars>
            <HeaderProduct>
              <Title>{product.title}</Title>
              <Tag>{product.category.name}</Tag>
            </HeaderProduct>

            <Description>{product.description}</Description>
            <Properties>
              {product.hasOwnProperty('properties') &&
                Object.keys(product.properties).map((key) => (
                  <Property key={key}>
                    <strong>{key}: </strong>
                    <PropertyValue>{product.properties[key]}</PropertyValue>
                  </Property>
                ))}
            </Properties>
            <PriceRow>
              <div>
                <Price>${product.price}</Price>
              </div>
              <div onClick={() => handleAddProduct(product._id)}>
                <ShopButton
                  text="Add to cart"
                  fontSize="1.2rem"
                  paddingX="10px"
                  paddingY="5px"
                  bgColor={primary}
                />
                {/* <Button
                  primary
                >
                  <CartIcon />
                  Add to cart
                </Button> */}
              </div>
            </PriceRow>
            <ValueProposition style={{ maxWidth: '400px' }} />
          </RightContainer>
        </ColWrapper>
      </Center>
      <Carousel
        text={'You may also like'}
        products={productsList}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  await mongooseConnect()
  const { id } = context.query
  const product = await Product.findById(id).populate('category')
  const productsList = await Product.find({}, null, {
    sort: { _id: -1 },
  }).populate('category')
  console.log('🚀 ~ getServerSideProps ~ productsList:', productsList)
  await mongoose.disconnect()
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      productsList: JSON.parse(JSON.stringify(productsList)),
    },
  }
}
