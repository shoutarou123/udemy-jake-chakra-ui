import { Button, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Link } from 'react-router'

import theme from './theme/theme'
import { Router } from './router/Router'

export default function App () {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
        <Link to="/">Homeに戻る</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/user_management">Usermanagement</Link>
        <br />
        <Link to="/setting">Setting</Link>
      </BrowserRouter>
    </ChakraProvider>
  )
}
