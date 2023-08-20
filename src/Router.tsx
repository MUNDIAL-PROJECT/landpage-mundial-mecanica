import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./Layout/DefaultLayout"
import { Home } from "./pages/Home"
import { TrabalheConosco } from "./pages/TrabalheConosco"
import { Servicos } from "./pages/Serviços"
import { Sobre } from "./pages/Sobre"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
        <Route path="/sobre-nos" element={<Sobre />} />
      </Route>
    </Routes>
  )
}