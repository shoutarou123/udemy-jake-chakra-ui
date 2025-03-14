import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import React, { ChangeEvent, memo, useState } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { useAuth } from "../hooks/useAuth"

export const Login: React.FC = memo(() => {
  const {login, loading} = useAuth();
  const [userId, setUserId] = useState<string>('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
  const onClickLogin = () => login(userId); // カスタムフックで取得したlogin関数に入力したIDを渡す
 
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center"> {/* ﾃﾞﾌｫﾙﾄでh2になっているのでh1にする*/}
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
        <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
        {/* userIdが空の時にボタンを押せない */}
        <PrimaryButton disabled={userId === ""} loading={loading} onClick={onClickLogin}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
