import { Button, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Link } from 'react-router'

import theme from './theme/theme'
import { Router } from './router/Router'

export default function App () {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
        
        <br />
        <Link to="/login">Login</Link>
        
      </BrowserRouter>
    </ChakraProvider>
  )
}
