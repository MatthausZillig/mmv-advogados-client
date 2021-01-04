import Equipe, { EquipeTemplateProps } from 'templates/Equipe'
import sociosMock from 'components/Socios/mock'

export default function index(props: EquipeTemplateProps) {
  return <Equipe {...props} />
}

export function getStaticProps() {
  return {
    props: {
      socios: sociosMock
    }
  }
}
