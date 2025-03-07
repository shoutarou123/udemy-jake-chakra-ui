import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import React, { memo } from 'react'

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHmome: () => void;
  onClickUserManagement: () => void;
  onClickUserSetting: () => void;
}

export const MenuDrawer: React.FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHmome, onClickUserManagement, onClickUserSetting } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHmome}>TOP</Button>
            <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
            <Button w="100%" onClick={onClickUserSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
});
