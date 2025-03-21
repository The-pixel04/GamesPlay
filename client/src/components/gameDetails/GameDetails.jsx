import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";
import CommentsShow from "../commentsShow/CommentsShow.jsx";
import CommentsCreate from "../commentsCrete/commentsCreate.jsx";
import commentsService from "../../services/commentsService.js";
import { useDeleteGame, useGame } from "../../api/gamesApi.js";
import useAuth from "../../hooks/useAuth.js";

export default function GameDetails() {
    const { gameId } = useParams();
    const { game } = useGame(gameId);
    const [comments, setComments] = useState([]);
    const { email } = useAuth();
    const navigate = useNavigate();
    const { deleteGame } = useDeleteGame();

    useEffect(() => {
        commentsService.getAll(gameId)
            .then(comments => setComments(comments));
    }, [gameId]);

    const deleteHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${game.title} game?`);

        if (!hasConfirm) {
            return;
        };

        await deleteGame(gameId)

        navigate('/games');
    };

    const commentsCreaeHandler = (comment) => {
        setComments((prevState) => [...prevState, comment]);
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <CommentsShow comments={comments} />

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/games/${game._id}/edit`} className="button">Edit</Link>
                    <button onClick={deleteHandler} className="button">Delete</button>
                </div>
            </div>

            <CommentsCreate email={email} gameId={gameId} onCrete={commentsCreaeHandler} />
        </section>
    )
}