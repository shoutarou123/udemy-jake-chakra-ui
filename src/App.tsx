import { Button, ChakraProvider } from '@chakra-ui/react'

export default function App () {
  return (
    <ChakraProvider>
      <Button colorScheme='teal' size='md'>ボタン</Button>
    </ChakraProvider>
  )
}
