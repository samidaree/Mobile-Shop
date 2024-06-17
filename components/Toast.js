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

    padding: 20px 35px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: none;
    border-left: 5px solid #82c785;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    animation: ${FadeIn} 500ms cubic-bezier(0.23, 0.82, 0.16, 1.46);
    z-index: 20;
  `

  const FirstLine = styled.div`
    display: flex;
    align-items: start;
    gap: 10px;
    justify-content: space-between;
  `
  const ToastTitle = styled.h3`
    color: black;

    font-size: 19px;
    font-weight: 600;
    margin: 5px 0 10px 0;
  `
  const Text = styled.p`
    margin: 0;
  `
  const Close = styled.button`
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
      <FirstLine>
        <TablerCheck
          style={{
            color: 'white',
            backgroundColor: '#82C785',
            borderRadius: '10px',
          }}
        />
        <div>
          <ToastTitle>Success</ToastTitle>
          <div>
            <Text>{text}</Text>
          </div>
        </div>
        <Close onClick={() => closeToast()}>
          <CloseIcon />
        </Close>
      </FirstLine>
    </Wrapper>
  )
}
