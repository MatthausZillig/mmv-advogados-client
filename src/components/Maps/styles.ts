import styled from 'styled-components'
import { Googlemaps } from '@styled-icons/simple-icons/Googlemaps'

export const Wrapper = styled.main`
  padding: 8rem;
`

export const Map = styled.div`
  height: 100vh;
  width: 100%;
  padding: 8rem;
`
export const Marker = styled(Googlemaps)`
  color: red;
  width: 30px;
  height: 30px;
`
