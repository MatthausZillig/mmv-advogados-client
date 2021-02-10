import styled, { css } from 'styled-components'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme, active }) => css`
    transform: ${active ? 'translate3d(0,0,0)' : 'translate3d(50rem,0,0)'};
    background: ${theme.colors.lightGray};
    color: #fff;
    height: 100vh;
    right: 0;
    top: 0;
    position: fixed;
    width: 50rem;
    transition: all 0.25s ease-in-out;
    z-index: 1000;
    padding: ${theme.spacings.large} ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    color: black;
    ${media.lessThan('medium')`
      width 100%;
      transform: ${active ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)'};
    `}
  `}
`

export const CloseWrapper = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border: none;
  background: none;
  outline: none;
`

export const Modal = styled.div`
  margin-top: 0.8rem;
  padding: 0.8rem;
  font-size: 1.6rem;
  display: flex;

  justify-content: space-between;
  align-items: center;
  background-color: #3cd3c1;
  color: white;
  z-index: 2000;
`

export const Close = styled(CloseOutline)`
  color: black;
  width: 30px;
  height: 30px;
  cursor: pointer;
`
export const CloseModal = styled(CloseOutline)`
  color: white;
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xsmall};
    input {
      width: 30rem;
      height: 4rem;
      padding: 1rem;
      border: none;
      outline: none;
    }
    textarea {
      width: 30rem;
      height: 10rem;
      padding: 1rem;
      border: none;
      outline: none;
    }
    select {
      width: 30rem;
      height: 4rem;
      padding: 1rem;
      border: none;
      outline: none;
    }
  `}
`
