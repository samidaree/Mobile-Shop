import { primary, third } from '@/lib/colors'
import FooterBus from './icons/FooterBus'
import styled from 'styled-components'

const Footer = styled.footer`
  color: #fff;
  overflow: hidden;
  background-image: linear-gradient(90deg, ${third} 0%, ${primary} 140%);
  position: relative;
  width: 100%;
  height: 100%;

  border-top-left-radius: 20px;
  font-size: 0.8rem;

  @media (max-width: 960px) {
    width: 100%;
  }
`

const Main = styled.div`
  padding-bottom: 50px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, 1fr);
`

const Row = styled.div`
  margin-top: 50px;
`

const FooterHeader = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;
`

const OfficeDes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const OfficeLink = styled.a`
  text-decoration: none;
  color: #98a8f8;

  &:hover {
    color: #fff;
  }
`

const Num = styled.p`
  font-size: 1rem;
  font-weight: 500;
`

const LinkDes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const LinkDesLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #fb2576;
    transition: linear 0.3s;
  }
`

const BtnKnow = styled.a`
  text-decoration: none;
  background-color: #fff;
  padding: 10px;
  position: relative;
  top: 30px;
  background-color: transparent;
  border: 1px solid #98a8f8;
  color: #98a8f8;
  text-transform: uppercase;
  border-radius: 10px;

  &:hover {
    color: white;
    background-color: #98a8f8;
    transition: linear 0.3s;
  }
`

const Subscribe = styled.div`
  display: flex;
`

const InputMail = styled.input`
  border: none;
  padding-bottom: 5px;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  font-size: 0.8rem;
`

const SubIcon = styled.i`
  margin: 7px;
  margin-right: 15px;
  margin-left: 0;
  font-size: 1.5rem;
`

const RightArrow = styled.i`
  margin-left: 0;
`

const Icons = styled.div`
  display: flex;
`

const SocialIcon = styled.i`
  position: relative;
  top: 2px;
`

const NewsletterDes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Copyright = styled.div`
  text-align: center;
`

const Hr = styled.hr`
  width: 90%;
  margin: 2px auto;
  opacity: 40%;
  border: 0.01px solid white;
`

const CopyrightP = styled.p`
  padding: 20px;
`

export default function FooterComponent() {
  return (
    <Footer>
      <Main>
        <FooterBus
          style={{
            position: 'absolute',
            maxWidth: '1000px',
            margin: 'auto',
            display: 'block',
            top: '-50px',
            left: '0',
            right: '0',
            maxHeight: '400px',
          }}
        />
        <Row>
          <FooterHeader>
            <img
              src="https://i.postimg.cc/tgk8X2w7/manik-low-resolution-logo-white-on-transparent-background.png"
              className="manik"
              alt=""
            />
          </FooterHeader>
          <div className="logo-des">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <BtnKnow href="#">Know More</BtnKnow>
          </div>
        </Row>
        <Row>
          <FooterHeader>
            <h3>Office</h3>
          </FooterHeader>
          <OfficeDes>
            <p>here are many variations of passages of Lorem Ipsum available</p>
            <OfficeLink href="#">manikmaity.haker2003@gmail.com</OfficeLink>
            <Num>+91-9999999999</Num>
          </OfficeDes>
        </Row>
      </Main>
    </Footer>
  )
}
