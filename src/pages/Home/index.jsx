import { Container, TopBackground, Form, Title, ContainerInputs, InputLabel, Input, Button } from './styles'
import MainImage from '../../assets/users.png'
import { useRef } from 'react'
import api from '../../services/api'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

async function registerNewUsers(){
  const data = await api.post('/usuarios',{
    email: inputEmail.current.value,
    age: parseInt(inputAge.current.value),
    name: inputName.current.value

  })
  console.log(data)
} 


  return (
    <Container>
      <TopBackground>
        <img src={MainImage} alt='imagem-de-fundo' />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuários</Title>
        <ContainerInputs>

          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName}/>
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge}/>
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Seu e-mail" ref={inputEmail}/>
        </div>

        <Button type='button' onClick={registerNewUsers}>Cadastrar Usuário</Button>
      </Form>
    </Container>

  )
}

export default Home
