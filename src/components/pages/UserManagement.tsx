import React, { memo } from "react"
import { Wrap, WrapItem } from "@chakra-ui/react"
import { UserCard } from "../organisms/user/UserCard"

export const UserManagement: React.FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <UserCard imageUrl="https://picsum.photos/200" userName="ほげ" fullName="ふるほげ" />
      </WrapItem>
      
    </Wrap>
  )
})
