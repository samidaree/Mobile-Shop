import { third } from '@/lib/colors'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 5px;
  margin-bottom: 10px;
  border: 1px solid ${third};
  border-radius: 5px;
  border: none;
  background-color: #fafafa;

  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`

export default function Input(props) {
  return <StyledInput {...props} />
}
