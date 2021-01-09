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
      <S.Wrapper>
        <S.Column>
          <S.Card>
            <S.Title>Localização</S.Title>
            <S.Text>Al. Joaquim Eugênio de Lima, 696, 12º andar</S.Text>
            <S.Text>Jardim Paulista - São Paulo/SP CEP 01403-000</S.Text>
            <S.Title>Telefone</S.Title>
            <S.Text>+55 11 2359-9600</S.Text>
            <S.Title>Email</S.Title>
            <S.Text>atendimento@mmvadvogados.com.br</S.Text>
          </S.Card>
        </S.Column>
        <S.Column2>
          <S.Map>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyCk9JTophAOebvN3LHIjL1csa-U1VrsSRQ'
              }}
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
        </S.Column2>
      </S.Wrapper>
    )
  }
}

export default Maps
