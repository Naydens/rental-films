import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/film-description/:id" component={FilmPage} />
      <Route path="/playground">
        <PlaygroundPage />
      </Route>

    </BrowserRouter>
  );
}
