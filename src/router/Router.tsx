import React, { memo } from "react"
import { Route, Routes } from "react-router"

import { Home } from "../components/pages/Home"
import { homeRoutes } from "./HomeRoutes"
import { HeaderLayout } from "../components/templates/HeaderLayout"

export const Router: React.FC = memo(() => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HeaderLayout>{<Home />}</HeaderLayout>} />

         
        {homeRoutes.map((route, index) => {
          if (route.path === "setting" || route.path === "user_management") {
            // Setting と UserManagement にだけ HeaderLayout を適用
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
    </Routes>
  )
})
{/* homeRoutes を表示 */}