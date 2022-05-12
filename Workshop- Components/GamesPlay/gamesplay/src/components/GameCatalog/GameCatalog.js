import { useEffect, useState } from 'react';
import GameCard from './GameCard';

const GameCatalog = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('https://localhost:3030/data/games?sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(res => {
                setGames(result);
            })
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(x => <GameCard game={x} />)}

            <h3 class="no-articles">No articles yet</h3>
        </section>
    );
};

export default GameCatalog;