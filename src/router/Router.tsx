import React, { memo } from "react"
import { Route, Routes } from "react-router"

import { HeaderLayout } from "../components/templates/HeaderLayout"
import { homeRoutes } from "./HomeRoutes"
import { Home } from "../components/pages/Home"
import { Login } from "../components/pages/Login"
import { Page404 } from "../components/pages/Page404"
import { LoginUserProvider } from "../components/providers/LoginUserProvider"

export const Router: React.FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/home">
            <Route index element={<HeaderLayout>{<Home />}</HeaderLayout>} />
            {homeRoutes.map((route, index) => {
              if (route.path === "setting" || route.path === "user_management") {
                // HomeとSettingとUserManagementにだけHeaderLayoutを適用
                return (
                  <Route key={index} path={route.path} element={<HeaderLayout>{route.children}</HeaderLayout>} />
                )
              } else {
                return (
                  <Route key={index} path={route.path} element={route.children} />
                )
              }
            })}
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  )
})
{/* homeRoutes を表示 */ }