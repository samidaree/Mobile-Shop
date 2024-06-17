import styled from 'styled-components'
import EmptyCart from '@/components/icons/EmptyCart'
import Center from '@/components/Center'
import Button from '@/components/Button'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '@/components/CartContext'
import axios from 'axios'
import Table from '@/components/Table'
import Input from '@/components/Input'
import { primary, third } from '@/lib/colors'
import ThankYou from '@/components/icons/ThankYou'
import Title from '@/components/Title'

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 120px;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  max-width: 500px;
`

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`

const ProductInfoCell = styled.td`
  padding: 10px 0;
`

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  img {
    max-width: 60px;
    max-height: 60px;
  }
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`
const QuantityCell = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const QuantityLabel = styled.span`
  padding: 0 0.5rem;
  display: block;
  color: black;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`

const Price = styled.span`
  font-weight: 500;
  color: ${third};
`
const Name = styled.span`
  font-weight: 500;
`
const Total = styled.span`
  color: ${third};
  font-weight: 600;
`

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext)
  console.log(cartProducts)

  const [products, setProducts] = useState([])
  console.log('🚀 ~ CartPage ~ products:', products)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [country, setCountry] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  console.log('🚀 ~ CartPage ~ isLoading:', isLoading)
  useEffect(() => {
    if (cartProducts.length > 0) {
      fetchProducts()
    } else {
      setProducts([])
      setIsLoading(false)
    }
  }, [cartProducts])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true)
      clearCart()
    }
  }, [])
  async function fetchProducts() {
    await axios.post('/api/cart', { ids: cartProducts }).then((response) => {
      setProducts(response.data)
    })

    setIsLoading(false)
  }
  function moreOfThisProduct(id) {
    addProduct(id)
  }
  function lessOfThisProduct(id) {
    removeProduct(id)
  }
  async function goToPayment() {
    const response = await axios.post('/api/checkout', {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    })
    if (response.data.url) {
      window.location = response.data.url
    }
  }
  let total = 0
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0
    total += price
  }

  if (isLoading) {
    return <div style={{ minHeight: '100vh' }} />
  }
  if (isSuccess) {
    return (
      <>
        <Center>
          <ThankYou
            style={{
              maxWidth: '600px',
              display: 'flex',
              justifyContent: 'center',
              margin: '60px auto',
            }}
          />
        </Center>
      </>
    )
  }
  return (
    <>
      <Center>
        {cartProducts.length == 0 && products?.length === 0 && (
          <IconWrapper>
            <EmptyCart
              style={{
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            />
            <Title>Your cart is empty</Title>
          </IconWrapper>
        )}
        <ColumnsWrapper>
          {products?.length > 0 && (
            <Box>
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img
                            src={product.images[0]}
                            alt=""
                          />
                        </ProductImageBox>
                        <Name>{product.title}</Name>
                      </ProductInfoCell>
                      <td>
                        <QuantityCell>
                          <Button
                            style={{ padding: '3px 10px' }}
                            onClick={() => lessOfThisProduct(product._id)}
                          >
                            -
                          </Button>
                          <QuantityLabel>
                            {
                              cartProducts.filter((id) => id === product._id)
                                .length
                            }
                          </QuantityLabel>
                          <Button
                            style={{ padding: '3px 10px' }}
                            onClick={() => moreOfThisProduct(product._id)}
                          >
                            +
                          </Button>
                        </QuantityCell>
                      </td>

                      <td>
                        <Price>
                          $
                          {cartProducts.filter((id) => id === product._id)
                            .length * product.price}
                        </Price>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <Total>
                      <td>${total}</td>
                    </Total>
                  </tr>
                </tbody>
              </Table>
            </Box>
          )}
          {!!cartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(ev) => setCity(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(ev) => setPostalCode(ev.target.value)}
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(ev) => setStreetAddress(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(ev) => setCountry(ev.target.value)}
              />
              <Button
                black
                block
                onClick={goToPayment}
                style={{ marginTop: '20px' }}
              >
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  )
}
