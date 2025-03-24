import { useNavigate } from "react-router";
import { useCreateGame } from "../../api/gamesApi.js";

export default function GameCreate() {
    const navigate = useNavigate();
    const { create } = useCreateGame()

    const submitAction = async (formData) => {
        const gameData = Object.fromEntries(formData);

        await create(gameData);
        navigate('/games')
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" action={submitAction}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}