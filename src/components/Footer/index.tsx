import * as S from './styles'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'

const Footer = () => (
  <S.Wrapper>
    <S.FooterMap>
      LOGO
      <p>Al. Joaquim Eugênio de Lima, 696, 12º andar | +55 (11) 2359-9600</p>
      <p>Jardim Paulista - São Paulo/SP - CEP 01403-000</p>
      <S.IconStyleWrapper>
        <Facebook />
        <Instagram />
        <LinkedinSquare />
      </S.IconStyleWrapper>
    </S.FooterMap>
    <S.FooterCopyright>
      Copyright © 2021 MMV Advogados Associados
    </S.FooterCopyright>
  </S.Wrapper>
)

export default Footer
