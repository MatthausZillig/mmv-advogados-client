import Escritorio, { EscritorioTemplateProps } from 'templates/Escritorio'
import { GetServerSideProps } from 'next'
import { client } from 'lib/prismic'
import Prismic from '@prismicio/client'

export default function index(props: EscritorioTemplateProps) {
  return <Escritorio {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const escritorio = await client().query(
    Prismic.Predicates.at('document.type', 'escritorio')
  )
  return {
    props: {
      banner: escritorio && escritorio.results
    }
  }
}
