import React, { memo, useCallback, useEffect } from "react"
import { Center, Modal, ModalContent, ModalOverlay, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react"
import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../hooks/useAllUsers";

export const UserManagement: React.FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), [])

  const onClickUser = useCallback(() => onOpen(), [])

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
              <UserCard imageUrl="https://picsum.photos/200" userName={user.username} fullName={user.name} onClick={onClickUser} />
            </WrapItem>
          ))}
        </Wrap >
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <p>test</p>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
})
