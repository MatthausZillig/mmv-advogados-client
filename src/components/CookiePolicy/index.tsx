import { useState } from 'react'
import * as S from './styles'
import Button from 'components/Button'

export type CookieProps = {
  close: boolean
}

const CookiePolicy = () => {
  const [isclose, setIsClose] = useState(false)

  const handleClose = () => {
    setIsClose(!isclose)
    console.log('close', isclose)
  }

  return (
    <S.Wrapper close={isclose}>
      <div>
        <p>Este site salva seu histórico de uso.</p>
        <p>
          Ao continuar navegando você concorda com a política de privacidade.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%'
        }}
      >
        <Button onClick={handleClose}>Aceitar</Button>
        <Button withBorder onClick={handleClose}>
          Fechar
        </Button>
      </div>
    </S.Wrapper>
  )
}

export default CookiePolicy
