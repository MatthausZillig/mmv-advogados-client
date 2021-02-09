import Areas, { AreaTemplateProps } from 'templates/Areas'
import { GetServerSideProps } from 'next'
import { client } from 'lib/prismic'
import Prismic from '@prismicio/client'

export default function index(props: AreaTemplateProps) {
  return <Areas {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const areas = await client().query(
    Prismic.Predicates.at('document.type', 'areas')
  )
  return {
    props: {
      areas: areas && areas.results
    }
  }
}
