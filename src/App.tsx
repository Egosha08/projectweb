import { ToDo } from "./containers/TodoApp/ToDo"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Header/Layout.tsx";
import About from "./components/About/About.tsx";



function App() {
 
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path='/work' element={<ToDo/>}/>
                    <Route path='/about' element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
