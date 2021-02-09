import Equipe, { EquipeTemplateProps } from 'templates/Equipe'
import { GetServerSideProps } from 'next'
import { client } from 'lib/prismic'
import Prismic from '@prismicio/client'

export default function index(props: EquipeTemplateProps) {
  return <Equipe {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const equipe = await client().query(
    Prismic.Predicates.at('document.type', 'equipe')
  )
  return {
    props: {
      equipe: equipe && equipe.results
    }
  }
}
