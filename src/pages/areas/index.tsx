import Areas, { AreaTemplateProps } from 'templates/Areas'

import bannersGridMock from 'components/BannerGrid/mock'

export default function index(props: AreaTemplateProps) {
  return <Areas {...props} />
}

export function getStaticProps() {
  return {
    props: {
      bannerGrid: bannersGridMock
    }
  }
}
