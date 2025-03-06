import { Button, ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'

export default function App () {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme='teal' size='md'>ボタン</Button>
    </ChakraProvider>
  )
}
