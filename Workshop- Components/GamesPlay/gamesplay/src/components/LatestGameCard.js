const LatestGameCard = ({ game }) => {
    return (
        <div class="game">
            <div class="image-wrap">
                <img src={game.imageUrl} />
            </div>
            <h3>{game.title}</h3>
            <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div class="data-buttons">
                <a href={`/details/${game._id}`} class="btn details-btn">Details</a>
            </div>
        </div>
    );

}

export default LatestGameCard;