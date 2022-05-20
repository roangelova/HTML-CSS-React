import * as gameService from "../services/GameService.js";
import { useEffect, useState } from 'react';

const WelcomeWorld = () => {

    const [games, setGames] = useState[];

    useEffect(() => {
        gameService.getLatest()
            .then(res => {
                setGames(res)
            })
    }, []);

    return (
        <section id="welcome-world">

            <div class="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                
                
                <p class="no-articles">No games yet</p>
            </div>
        </section>
    )
}

export default WelcomeWorld;