import React, { memo, ReactNode } from 'react'

import { Header } from '../organisms/layout/Header';

type Props = {
  children: ReactNode; // タグで囲ったものを渡していけるような型
}

export const HeaderLayout: React.FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  )
});
