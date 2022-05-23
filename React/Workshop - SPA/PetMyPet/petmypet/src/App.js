import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Create from './components/Create/Create';
import MyPets from './components/MyPet/MyPets';

import * as authService from './services/authService.js';

function App() {
    const [userInfo, setUserInfo] = useState(
        {
            isAuthenticated: false,
            username: ''
        }
    );

    useEffect(() => {
        let usre = authService.getUser();

        setUserInfo({
            isAuthenticated: Boolean(user),
            username: user
        })
    }, []);

    const onLogin = (username) => {
        setUserInfo({
            isAuthenticated: true,
            username: username
        });
    };


    return <div id="container">

        <Header {...userInfo} />

        <main id="site-content">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login onLogin={onLogin} />} />
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
