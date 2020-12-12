import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/film-description/:id" component={FilmPage} />

      <ProtectedRoute path="/playground">
        <PlaygroundPage />
      </ProtectedRoute>

      <Route path="/login">
        <LoginPage />
      </Route>
    </BrowserRouter>
  );
}
