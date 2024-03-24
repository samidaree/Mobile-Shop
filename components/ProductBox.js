import styled from 'styled-components'
import Button from '@/components/Button'
import CartIcon from '@/components/icons/CartIcon'
import Link from 'next/link'
import Tag from '@/components/Tag'
import { useContext } from 'react'
import { CartContext } from '@/components/CartContext'
import { secondary, third } from '@/lib/colors'

const ProductWrapper = styled.div`
  max-width: 240px;
  border-radius: 5px;
  background-color: #fcfcfc;
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

  const handleCartClick = () => {
    const toast = document.getElementById('toast')
    toast.classList.add('show')
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
          <Title href={url}>{title}</Title>
          <Tag>{category.name}</Tag>
        </TitleBox>
        <PriceRow>
          <Price>${price}</Price>
          <Button
            onClick={() => addProduct(_id)}
            primary
          >
            <CartIcon onClick={() => handleCartClick()} />
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  )
}
