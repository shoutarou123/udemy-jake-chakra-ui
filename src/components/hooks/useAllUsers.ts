import { useCallback, useState } from 'react'
import axios from 'axios'
import { User } from '../../types/api/user'
import { useMessage } from './useMessage'

export const useAllUsers = () => {
  const { showMessge } = useMessage()
  const [loading, setLoading] = useState<boolean>(false)
  const [users, setUsers] = useState<Array<User>>([])

  const getUsers = useCallback(() => {
    setLoading(true);
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => 
        setUsers(res.data) // ここでデータが取得できているのは確認済
      ) 
      .catch(() => { showMessge({ title: "ユーザー取得に失敗しました", status: "error" }) })
      .finally(() => { setLoading(false) })
  }, []);

  return { getUsers, loading, users }
}

// usresに更新された情報が入っているのは確認済
