import { useState } from "react"


function Show(props) {
    const id = props.match.params.id
    const games = props.games
    const game = games.find(p => p._id === id)

    // state for form
    const [editForm, setEditForm] = useState(game);

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault();
        props.updateGames(editForm, game._id);
        // redirect games back to index
        props.history.push("/");
    }

    const removeGame = () => {
        props.deleteGames(game._id);
        props.history.push("/");
    }

    return (
        <div className="game">
            <h1>{game.title}</h1>
            <h2>{game.progress}</h2>
            <img src={game.image} alt={game.title} />
            <h2>{game.list}</h2>
            <button id="delete" onClick={removeGame}>
                DELETE
            </button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.progress}
                    name="progress"
                    placeholder="progress"
                    onChange={handleChange}
                />
                <select name="list" onChange={handleChange}>
                    <option value="in progress">in progress</option>
                    <option value="interested in">interested in</option>
                    <option selected value={editForm.list}>{editForm.list}</option>
                    <option value="completed">completed</option>
                </select>
                <input type="submit" value="Update Game" />
            </form>
        </div>

    )
}

export default Show;