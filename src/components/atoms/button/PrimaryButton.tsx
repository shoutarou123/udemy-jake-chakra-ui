import React, { memo, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
 children: ReactNode; // React コンポーネントが子要素（children）として受け入れることができるデータ型を表す
}
export const PrimaryButton: React.FC<Props> = memo((props) => {
  const {children} = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  )
})
