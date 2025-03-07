import { useCallback } from "react"
import { useToast } from "@chakra-ui/react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error"
}

export const useMessage = () => {
  const toast = useToast()
  const showMessge = useCallback((props: Props) => {
    const { title, status } = props;
    toast({
      title: title,
      status: status,
      position: 'top', // 上に表示
      duration: 2000, // 2秒だけ表示
      isClosable: true, // 閉じれるかどうか
    })
  }, []);
  return { showMessge }
}