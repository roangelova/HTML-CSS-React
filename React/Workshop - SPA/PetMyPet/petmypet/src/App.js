import { Routes, Route } from 'react-router-dom'

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Create from './components/Create/Create';
import MyPets from './components/MyPet/MyPets';


function App() {
    return <div id="container">

        <Header />

        <main id="site-content">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create" element={<Create />} />
                <Route path="/my-pets" element={<MyPets />} />
            </Routes>

        </main>

        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

    </div>;
}

export default App;
