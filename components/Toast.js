import styled, { keyframes } from 'styled-components'

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
    background-color: #333;
    color: white;
    font-size: 26px;
    padding: 20px 40px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: none;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    animation: ${FadeIn} 500ms cubic-bezier(0.23, 0.82, 0.16, 1.46);
  `
  const Text = styled.p`
    margin: 0;
  `
  const Close = styled.button`
    background-color: transparent;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin: 0px 4px;
    all: unset;
    cursor: pointer;
  `

  function closeToast() {
    const toast = document.getElementById('toast')
    toast.style.display = 'none'
  }
  return (
    <Wrapper id="toast">
      <Text>{text}</Text>
      <Close onClick={() => closeToast()}>x</Close>
    </Wrapper>
  )
}
