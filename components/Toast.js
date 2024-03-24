import styled, { keyframes } from 'styled-components'
import TablerCheck from './icons/Check'
import CloseIcon from './icons/Close'
export default function Toast({ text }) {
  const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }

    `
  const Wrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: hsl(100, 40%, 90%);
    color: black;
    font-size: 21px;
    font-weight: 600;
    padding: 20px 35px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: none;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    animation: ${FadeIn} 500ms cubic-bezier(0.23, 0.82, 0.16, 1.46);
    z-index: 20;
  `
  const Text = styled.p`
    margin: 0;
  `
  const Close = styled.button`
    font-size: 20px;
    cursor: pointer;
    margin: 0px 4px;
    all: unset;
    color: hsl(350, 90%, 60%);
    cursor: pointer;
  `

  function closeToast() {
    const toast = document.getElementById('toast')
    toast.style.display = 'none'
  }
  return (
    <Wrapper id="toast">
      <TablerCheck style={{ color: 'hsl(120, 90%, 50%)' }} />
      <Text>{text}</Text>
      <Close onClick={() => closeToast()}>
        <CloseIcon />
      </Close>
    </Wrapper>
  )
}
