import Escritorio, { EscritorioTemplateProps } from 'templates/Escritorio'
import { GetStaticProps } from 'next'
import { client } from 'lib/prismic'
import Prismic from '@prismicio/client'

export default function index(props: EscritorioTemplateProps) {
  return <Escritorio {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const escritorio = await client().query(
    Prismic.Predicates.at('document.type', 'escritorio')
  )
  console.log(escritorio.results)
  return {
    props: {
      banner: escritorio && escritorio.results
    }
  }
}
