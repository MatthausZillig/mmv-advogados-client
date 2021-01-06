import Equipe, { EquipeTemplateProps } from 'templates/Equipe'
import sociosMock from 'components/Socios/mock'
import teamMock from 'components/Team/mock'

export default function index(props: EquipeTemplateProps) {
  return <Equipe {...props} />
}

export function getStaticProps() {
  return {
    props: {
      socios: sociosMock,
      team: teamMock
    }
  }
}
