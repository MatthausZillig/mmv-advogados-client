import Areas, { AreaTemplateProps } from 'templates/Areas'
import { GetStaticProps } from 'next'
import { client } from 'lib/prismic'
import Prismic from '@prismicio/client'

export default function index(props: AreaTemplateProps) {
  return <Areas {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const areas = await client().query(
    Prismic.Predicates.at('document.type', 'areas')
  )
  console.log(areas.results)
  return {
    props: {
      areas: areas && areas.results
    }
  }
}
