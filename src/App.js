import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from './services/authService';
import ButtonToUp from './components/ButtonToUp';

export const UserContext = React.createContext();

export default function App() {
  const auth = useAuth();

  return (
    <UserContext.Provider value={auth}>
      <BrowserRouter>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/film-description/:id" component={FilmPage} />

        <ProtectedRoute path="/playground" exact>
          <PlaygroundPage />
        </ProtectedRoute>

        <Route path="/login">
          <LoginPage />
        </Route>
      
      </BrowserRouter>
      <ButtonToUp breakpoint={500} />
    </UserContext.Provider>
  );
}
