const Header = () => {
    return (
        <header>
            <h1><a class="home" href="/home">GamesPlay</a></h1>
            <nav>
                <a href="/games">All games</a>
                <div id="user">
                    <a href="/create-game">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;