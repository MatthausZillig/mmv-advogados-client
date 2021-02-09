import Articles, { ArticlesTemplateProps } from 'templates/Articles'
import { GetServerSideProps } from 'next'
import { client } from 'lib/prismic'
import Prismic from '@prismicio/client'

export default function index(props: ArticlesTemplateProps) {
  return <Articles {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await client().query(
    Prismic.Predicates.at('document.type', 'articles'),
    { orderings: '[document.last_publication_date desc]' }
  )
  return {
    props: {
      articles: articles && articles.results
    }
  }
}
