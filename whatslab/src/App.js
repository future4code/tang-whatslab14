import React from 'react'
import styled from 'styled-components'
import './App.css';

const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  `;
const Mensagens =  styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  `
const InputsContainer = styled.div`
  display: flex;
  `
const NameInput = styled.input`
  width: 100px;
  `
const InputMensagem = styled.input`
  flex-grow: 1;
  `

class App extends React.Component {
      state = {
        mensagens: [],
        nomeUsuario: '',
        mensagem: '',
    }

    enviarMensagem = () => {
        const novaMensagem = {
            usuario: this.state.nomeUsuario,
            texto: this.state.mensagem
        }

        const novoArrayDeMensagem = [novaMensagem, ...this.state.mensagens]

        this.setState({mensagens: novoArrayDeMensagem})
        this.setState({mensagem: ""})
    }

    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value })
    }

    onChangeUsuario = (event) => {
      this.setState({nomeUsuario: event.target.value})
    }

    render() {
        return (
          <AppContainer>
            <Mensagens>
              {this.state.mensagens.map((mensagem, index) => {
                return (
                  <p key={index}>
                    <strong>{mensagem.usuario}</strong>: {mensagem.texto}
                  </p>
                )
              } )}
            </Mensagens>
            <InputsContainer>
              <NameInput
                onChange={this.onChangeUsuario}
                value={this.state.nomeUsuario}
                placeholder={"Nome"}
              />
              <InputMensagem
                onChange={this.onChangeMensagem}
                value={this.state.mensagem}
                placeholder = {"Mensagem"}
              />
            </InputsContainer>
            <button onClick={this.enviarMensagem}>Enviar</button>
          </AppContainer>
        )
    }
}

export default App;
