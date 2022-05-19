import { useState } from 'react';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import GameDetails from "./components/GameDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from './components/ErrorPage';


function App() {

  const [page, setPage] = useState('/home');


  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  const router = (path) => {
    let pathNames = path.split('/');

    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      '/home': <WelcomeWorld />,
      '/create-game': <CreateGame />,
      '/login': <Login />,
      '/register': <Register />,
      '/games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
      '/details': <GameDetails id={argument}/>,
      '/edit': <EditGame id={argument}/>
    }

    return routes[rootPath]
  }

  return (
    <div id="box">
      <Header
        navigationChangeHandler={navigationChangeHandler}
      />
      <main id="main-content">
        {routes[page] ||
          <ErrorPage />}
      </main>
    </div>
  );
}

export default App;
