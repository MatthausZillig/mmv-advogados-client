import Articles, { ArticlesTemplateProps } from 'templates/Articles'
import { GetStaticProps } from 'next'
import { client } from 'lib/prismic'
import Prismic from '@prismicio/client'

export default function index(props: ArticlesTemplateProps) {
  return <Articles {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await client().query(
    Prismic.Predicates.at('document.type', 'articles')
  )
  return {
    props: {
      articles: articles && articles.results
    }
  }
}
