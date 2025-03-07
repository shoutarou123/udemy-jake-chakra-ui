import { useCallback, useEffect, useState } from 'react'
import { User } from '../../types/api/user';

type Props = {
  id: number;
  users: Array<User>;
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // 初期値は未選択のためnull

  const onSelectUser = useCallback((props: Props) => {
    const { id, users} = props;
    const targetUser = users.find((user) => user.id === id) // usersという配列から、userという任意名の要素を1つずつ取出し、そのuser.idとPropsのidが＝のものを取得する
    setSelectedUser(targetUser ?? null); // 上記で取得したユーザー情報をset関数へ渡す ?? 左辺がnullまたはundifinedの時に右辺を返す
  }, []);

  return { onSelectUser, selectedUser }
}
