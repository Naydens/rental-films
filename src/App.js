import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import Playground from "./components/Playground";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <HomePage />
      </Route>

<Route path="/film-description/:id">
<FilmPage/>
</Route>
    
      {/* <Playground /> */}
    </BrowserRouter>
  );
}
