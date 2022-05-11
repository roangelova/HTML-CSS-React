import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameCatalog from "./components/GameCatalog";
import GameDetails from "./components/GameDetails";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {

  const routes = {
    '/home': WelcomeWorld,
    '/create-game': CreateGame,
    '/login': Login,
    '/register': Register,
    '/games': GameCatalog,
    '/details/:id': GameDetails,
    '/edit/:id': EditGame
  }

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <WelcomeWorld />
      </main>
    </div>
  );
}

export default App;
