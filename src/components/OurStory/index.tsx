import * as S from './styles'
import Heading from 'components/Heading'

const OurStory = () => (
  <S.Wrapper>
    <S.FirstColumn>
      <S.Paragraphs>
        <Heading>Qualidade</Heading>
        <p>
          Aqui nós priorizamos a competência técnica na área juridica sem
          esquecer do atendimento aos clientes. Focando em uma parceria para
          gerar os melhores resultados nas atividades empresarias dessas
          parcerias.
        </p>
      </S.Paragraphs>
      <S.Paragraphs>
        <Heading>Visão de Negócio</Heading>
        <p>
          Aqui nós priorizamos a competência técnica na área juridica sem
          esquecer do atendimento aos clientes. Focando em uma parceria para
          gerar os melhores resultados nas atividades empresarias dessas
          parcerias.
        </p>
      </S.Paragraphs>
    </S.FirstColumn>
    <S.SecondColumn>
      <S.Paragraphs>
        <Heading>Confiança</Heading>
        <p>
          Criação e manutenção de um relacionamento de longo prazo com nossos
          clientes, gerando uma experiência positiva e fidedigna.
        </p>
      </S.Paragraphs>
      <div
        className="imageContainer"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <img
          src="/img/ourStory1.png"
          role="img"
          aria-label="Ilustração dois emrpesarios apertando as mãos"
        />
      </div>
    </S.SecondColumn>
  </S.Wrapper>
)

export default OurStory
