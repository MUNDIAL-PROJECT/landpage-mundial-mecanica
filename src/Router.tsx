import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./Layout/DefaultLayout"
import { Home } from "./pages/Home"
import { TrabalheConosco } from "./pages/TrabalheConosco"
import { Servicos } from "./pages/Serviços"


export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/serviços" element={<Servicos />} />
        <Route path="/trabalheconosco" element={<TrabalheConosco />} />
      </Route>
    </Routes>
  )
}