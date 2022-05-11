import { useState, createElement} from 'react';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameCatalog from "./components/GameCatalog";
import GameDetails from "./components/GameDetails";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {

  const [page, setPage] = useState('/home');

  const routes = {
    '/home': WelcomeWorld,
    '/create-game': CreateGame,
    '/login': Login,
    '/register': Register,
    '/games': GameCatalog,
    '/details/:id': GameDetails,
    '/edit/:id': EditGame
  }

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  return (
    <div id="box">
      <Header
        navigationChangeHandler={navigationChangeHandler} />
      <main id="main-content">
        {createElement(routes[page]) ||
          <h2>No sich page found!</h2>}
      </main>
    </div>
  );
}

export default App;
