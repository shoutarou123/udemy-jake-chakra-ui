import React, { memo } from "react"
import { Route, Routes } from "react-router"

import { Home } from "../components/pages/Home"
import { homeRoutes } from "./HomeRoutes"

export const Router: React.FC = memo(() => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        {homeRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.children} />
        ))}
      </Route>
    </Routes>
  )
})
