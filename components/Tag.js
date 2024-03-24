import styled from 'styled-components'

const StyledTag = styled.span`
  padding: 5px 10px;
  background-color: hsl(100, 40%, 90%);
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-size: 0.8em;
`

export default function Tag({ children }) {
  return <StyledTag>{children}</StyledTag>
}
