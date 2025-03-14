import React, { memo, useCallback, useEffect } from "react"
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react"
import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../hooks/useSelectUser";
import { useLoginUser } from "../hooks/useLoginUser";

export const UserManagement: React.FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  
  useEffect(() => getUsers(), [getUsers])

  const onClickUser = useCallback((id: number) => { 
    onSelectUser({ id, users, onOpen })
  }, [users]) // ここの記述でクリックユーザー情報取得できた 指定しないとuserの初期情報のまま

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard id={user.id} imageUrl="https://picsum.photos/200" userName={user.username} fullName={user.name} onClick={onClickUser} />
            </WrapItem>
          ))}
        </Wrap >
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} />
    </>
  )
})
