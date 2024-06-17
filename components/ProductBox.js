import styled from 'styled-components'
import Button from '@/components/Button'
import CartIcon from '@/components/icons/CartIcon'
import Link from 'next/link'
import Tag from '@/components/Tag'
import { useContext } from 'react'
import { CartContext } from '@/components/CartContext'
import { secondary, third } from '@/lib/colors'

const ProductWrapper = styled.div`
  width: 230px;
  border-radius: 5px;
  background-color: #fcfcfc;
  @media screen and (min-width: 480px) and (max-width: 640px) {
    width: 210px;
  }
`

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`

const ProductInfoBox = styled.div`
  padding: 12px;
  border-top: 1px solid ${secondary};
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PriceRow = styled.div`
  display: flex;

  gap: 4px;
  align-items: center;
  justify-content: space-between;
  margin-top: 9px;
`

const Price = styled.div`
  font-size: 1rem;
  color: ${third};
  font-weight: 600;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    text-align: left;
  }
`

const TitleBox = styled.div`
  display: flex;
  gap: 3px;
  justify-content: space-between;
`
const OneLine = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export default function ProductBox({
  _id,
  title,
  description,
  price,
  images,
  category,
}) {
  const { addProduct } = useContext(CartContext)
  const url = '/product/' + _id

  const handleCartClick = (id) => {
    addProduct(id)
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
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img
            src={images?.[0]}
            alt=""
          />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <TitleBox>
          <Title href={url}>
            <OneLine>{title}</OneLine>
          </Title>
          <Tag>
            <OneLine>{category.name} </OneLine>
          </Tag>
        </TitleBox>
        <PriceRow>
          <Price>${price}</Price>
          <Button
            onClick={() => handleCartClick(_id)}
            primary
          >
            <CartIcon />
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  )
}
