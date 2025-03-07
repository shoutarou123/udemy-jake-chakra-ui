import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: React.FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHmome = useCallback(() => navigate("/home"), []); // homeに遷移する挙動はタイトル押下でも使用するし再度メニューでも使用するのでmemoだと再レンダリングされるのでuseCallbackを使用する
  const onClickUserManagement = useCallback(() => navigate("/home/user_management"), []);
  const onClickUserSetting = useCallback(() => navigate("/home/setting"), []);
  

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        {/* asを入れることでどのタグでレンダリングするか指定できる */}
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHmome} >
          <Heading as="h1" fontSize={{ base: "md", md: 'lg' }}>
            ユーザー管理アプリ
          </Heading>
        </Flex> 

        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickUserSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHmome={onClickHmome} onClickUserManagement={onClickUserManagement} onClickUserSetting={onClickUserSetting} />
    </>
  )
});
// fontSizeがベースはmdでmd以上になったらlgになる
