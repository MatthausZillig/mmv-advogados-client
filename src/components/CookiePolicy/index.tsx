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
        <p>
          Este site salva os <b>Cookies</b> de navegação.
        </p>
        <p>Ao continuar você concorda com a política de privacidade.</p>
      </div>
      <S.WrapperButtons>
        <Button onClick={handleClose}>Aceitar</Button>
        <Button withBorder onClick={handleClose}>
          Fechar
        </Button>
      </S.WrapperButtons>
    </S.Wrapper>
  )
}

export default CookiePolicy
