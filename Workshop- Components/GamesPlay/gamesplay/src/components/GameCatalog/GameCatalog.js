import { useEffect, useState } from 'react';
import * as gameService from '../../services/GameService';
import GameCard from './GameCard';

const GameCatalog = ({
    navigationChangeHandler
}) => {
    const [games, setGames] = useState([]);

    useEffect(() => {

        gameService.getAll()
            .then(result => {
                setGames(result);
            })
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {
                games.length > 0
                    ? games.map(x => <GameCard key={x._id} game={x} navigationChangeHandler={navigationChangeHandler} />)
                    : <h3 class="no-articles">No articles yet</h3>
            }

        </section>
    );
};

export default GameCatalog;