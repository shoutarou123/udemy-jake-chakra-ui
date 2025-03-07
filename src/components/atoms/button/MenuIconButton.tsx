import React, { memo } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

type Props = {
  onOpen: () => void; // 引数のないただの関数で返却値もなし
}
export const MenuIconButton: React.FC<Props> = memo((props) => {
  const {onOpen} = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  )
})
