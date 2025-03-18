import { useState, useEffect } from "react";
import gameService from "../../services/gameService.js";
import CatalogItem from "./gameCatalogItem.jsx";
import { useGames } from "../../api/gamesApi.js";

export default function GameCatalog() {
    const { games } = useGames();

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}

            {games.length > 0 ? games.map(game => <CatalogItem key={game._id} {...game} />) : <h3 className="no-articles">No articles yet</h3>}

        </section>
    )
}