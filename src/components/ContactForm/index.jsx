/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'
import { useState } from 'react'

import Button from 'components/Button'
import Heading from 'components/Heading'

const ContactForm = ({ active, set }) => {
  const [query, setQuery] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    assunto: '',
    areas: '',
    como: ''
  })
  const [statusFeedback, setStatusFeedback] = useState(false)

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value)
    })

    fetch('https://getform.io/f/5d69d6ef-4847-4b5d-a7f0-11a44ab717e9', {
      method: 'POST',
      body: formData
    })
      .then(
        () =>
          setQuery({
            name: '',
            email: '',
            message: '',
            phone: '',
            assunto: '',
            areas: '',
            como: ''
          }),
        setStatusFeedback(true)
      )
      .catch(() => {
        alert('Ocorreu um erro, tente novamente')
      })
  }

  const handleModal = () => {
    set(!active)
    setStatusFeedback(false)
  }

  return (
    <S.Wrapper active={active}>
      <S.CloseWrapper onClick={() => set(!active)}>
        <S.Close />
      </S.CloseWrapper>
      <Heading lineBottom color="black">
        Mande sua mensagem
      </Heading>
      <form onSubmit={formSubmit}>
        <S.InputWrapper>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="form-control"
            value={query.name}
            onChange={handleParam()}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label>DDD + Telefone</label>
          <input
            type="phone"
            name="phone"
            required
            placeholder="Telefone"
            className="form-control"
            value={query.phone}
            onChange={handleParam()}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="form-control"
            value={query.email}
            onChange={handleParam()}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label>Como nos conheceu?</label>
          <select
            name="como"
            id="como"
            defaultValue={query.como}
            onChange={handleParam()}
          >
            <option value="Internet">Internet</option>
            <option value="Jornal">Jornal</option>
            <option value="Indicação">Indicação</option>
            <option value="outros">Outros</option>
          </select>
        </S.InputWrapper>
        <S.InputWrapper>
          <label>Area de interesse</label>
          <select
            name="areas"
            id="areas"
            value={query.areas}
            onChange={handleParam()}
          >
            <option value="Imobiliário/Condominial">
              Imobiliário/Condominial
            </option>
            <option value="Trabalhista">Trabalhista</option>
            <option value="Civil">Civil</option>
            <option value="Penal">Penal</option>
            <option value="Empresarial">Empresarial</option>
            <option value="Consumidor">Consumidor</option>
          </select>
        </S.InputWrapper>
        <S.InputWrapper>
          <label>Assunto</label>
          <input
            type="text"
            name="assunto"
            required
            placeholder="Assunto"
            className="form-control"
            value={query.assunto}
            onChange={handleParam()}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label>Mensagem</label>
          <textarea
            type="text"
            name="message"
            required
            placeholder="Message"
            className="form-control"
            value={query.message}
            onChange={handleParam()}
          />
        </S.InputWrapper>
        <Button fullWidth type="submit">
          Enviar
        </Button>
        {statusFeedback && (
          <S.Modal>
            Mensagem enviada com sucesso
            <S.CloseModal onClick={handleModal} />
          </S.Modal>
        )}
      </form>
    </S.Wrapper>
  )
}

export default ContactForm
