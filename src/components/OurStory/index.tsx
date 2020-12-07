import Image from 'next/image'
import * as S from './styles'
import Heading from 'components/Heading'

const OurStory = () => (
  <S.Wrapper>
    <S.FirstColumn>
      <div>
        <Heading>Qualidade</Heading>
        <p>
          Aqui nós priorizamos a competência técnica na área juridica sem
          esquecer do atendimento aos clientes. Focando em uma parceria para
          gerar os melhores resultados nas atividades empresarias dessas
          parcerias.
        </p>
      </div>
      <div>
        <Heading>Visão de Negócios</Heading>
        <p>
          Aqui nós priorizamos a competência técnica na área juridica sem
          esquecer do atendimento aos clientes. Focando em uma parceria para
          gerar os melhores resultados nas atividades empresarias dessas
          parcerias.
        </p>
      </div>
    </S.FirstColumn>
    <S.SecondColumn>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          src="/img/ourStory1.png"
          role="img"
          aria-label="Ilustração dois emrpesarios apertando as mãos"
          unsized
        />
      </div>
      <div>
        <Heading>Visão de Negócios</Heading>
        <p>
          Aqui nós priorizamos a competência técnica na área juridica sem
          esquecer do atendimento aos clientes. Focando em uma parceria para
          gerar os melhores resultados nas atividades empresarias dessas
          parcerias.
        </p>
      </div>
    </S.SecondColumn>
  </S.Wrapper>
)

export default OurStory
