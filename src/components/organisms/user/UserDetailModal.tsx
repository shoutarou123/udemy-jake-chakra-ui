import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from '@chakra-ui/react';
import React, { memo } from 'react'

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: React.FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInRight'>
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>

              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="じゃけぇ" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value="フルじゃけぇ" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value="12345@email.com" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value="090-0000-0000" isReadOnly />
              </FormControl>

            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
})

// 非活性はdidabledの時とloadingの時に発火