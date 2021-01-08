import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import * as S from './styles'

const AnyReactComponent = ({ children }) => <div>{children}</div>

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: -23.5671945,
      lng: -46.6547147
    },
    zoom: 17
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <S.Map>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCk9JTophAOebvN3LHIjL1csa-U1VrsSRQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-23.5671945}
            lng={-46.6547147}
            text="My Marker"
          >
            <S.Marker />

            {/* <img
              src="/img/icon-512.png"
              role="img"
              width="30px"
              height="30px"
            /> */}
          </AnyReactComponent>
        </GoogleMapReact>
      </S.Map>
    )
  }
}

export default Maps
