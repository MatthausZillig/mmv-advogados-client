import Prismic from '@prismicio/client'

export const apiEndPoint = 'https://mmvadvogados.cdn.prismic.io/api/v2'

export const client = (req = null) => {
  const options = req ? { req } : req

  return Prismic.client(apiEndPoint, options)
}
