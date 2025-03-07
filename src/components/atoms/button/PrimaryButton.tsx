import React, { memo, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
 children: ReactNode; // React コンポーネントが子要素（children）として受け入れることができるデータ型を表す
 disabled?: boolean; // 何も渡していない場合は非活性にしなくてよいので?として任意にしている
 loading?: boolean;
 onClick: () => void;
}

export const PrimaryButton: React.FC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick }  = props; // 必須ではない箇所はpropsで渡されない場合もあるのでﾃﾞﾌｫﾙﾄをfalseとしている
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}  disabled={disabled || loading} isLoading={loading} onClick={onClick}>
      {children}
    </Button>
  )
})

// 非活性はdidabledの時とloadingの時に発火