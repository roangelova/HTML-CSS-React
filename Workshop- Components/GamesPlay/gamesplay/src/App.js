import { useState } from 'react';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameCatalog from "./components/GameCatalog";
import GameDetails from "./components/GameDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from './components/ErrorPage';


function App() {

  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <WelcomeWorld />,
    '/create-game': <CreateGame />,
    '/login': <Login />,
    '/register': <Register />,
    '/games': <GameCatalog />,
    '/details/:id': <GameDetails />,
    '/edit/:id': <EditGame />
  }

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  return (
    <div id="box">
      <Header
        navigationChangeHandler={navigationChangeHandler} />
      <main id="main-content">
        {routes[page] ||
          <ErrorPage />}
      </main>
    </div>
  );
}

export default App;
