import styled from 'styled-components'
import { secondary, third } from '@/lib/colors'
const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  padding: 10px 0;
  font-weight: 600;
  font-family: 'Norwester';
  display: inline-block;
  text-transform: uppercase;
  position: relative;
  color: ${third};
  &:before {
    background-color: ${secondary};
    content: '';
    display: block;
    height: 3px;
    width: 75px;
    margin-bottom: 5px;
  }
  &::after {
    background-color: ${secondary};
    content: '';
    display: block;
    position: absolute;
    right: 0;
    margin-top: 5px;
    height: 3px;
    width: 75px;
    margin-bottom: 0.25em;
  }
`
export default function TitleH2({ children }) {
  return <Title>{children}</Title>
}
