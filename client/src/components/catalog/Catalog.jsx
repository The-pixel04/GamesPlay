import { useState, useEffect } from "react";
import gameService from "../../services/gameService.js";
import CatalogItem from "./gameCatalogItem.jsx";

export default function GameCatalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(games=>setGames(games));
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            {games.map(game => <CatalogItem key={game._id} {...game} />)}


            {/* <!-- Display paragraph: If there is no games  --> */}
            <h3 className="no-articles">No articles yet</h3>
        </section>
    )
}