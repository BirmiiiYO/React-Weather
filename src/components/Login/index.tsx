import React from 'react'

import { useEvents } from 'hooks/useEvents'

import { Background, LoginButton } from './styles'

export function Login() {
  const [isLogin, setLogin] = useEvents()
  return (
    <Background>
      <LoginButton onClick={setLogin}>
        {isLogin ? 'sign out' : 'sign in'}
      </LoginButton>
    </Background>
  )
}
