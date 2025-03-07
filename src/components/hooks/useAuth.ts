import { useCallback, useState } from 'react'
import { User } from '../../types/api/user';
import { useNavigate } from 'react-router';
import axios from 'axios';

export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => { // idを受け取る
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) { // データがtrueであれば
        navigate("/home"); // home画面に遷移
      } else {
        alert("ユーザーが見つかりません");
      }
    })
      .catch(() => alert("ログインできません")) // dataと一致しなければ表示する
      .finally(() => setLoading(false));
  }, []);
  return { login, loading }; // カスタムフックは必要なものを最後取り出す
}
