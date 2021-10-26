import { Link } from "react-router-dom";
import { useState } from "react";

function Index(props) {
    console.log(props);
    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: "",
        image: "",
        progress: "",
        list: ""
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createGames(newForm);
        setNewForm({
            title: "",
            image: "",
            progress: "",
            list: ""
        });
    };
    // loaded function
    const loaded = () => {

        // Array List Compilers
        let completed = props.games.filter(function (completedGame) {
            return completedGame.list === "completed";
        })

        let inProgress = props.games.filter(function (progressGame) {
            return progressGame.list === "in progress";
        })

        let interestedIn = props.games.filter(function (completedGame) {
            return completedGame.list === "interested in";
        })

        // List Divs
        const completedList = () => {
            return completed.map((completedGames) => {
                return (
                    <div className = "games3">
                        <Link to={`/games/${completedGames._id}`}>
                        <img className="gameImage" src={completedGames.image} alt={completedGames.title} />
                        </Link>
                        <h3 className="gameProgress">{completedGames.progress}</h3>
                      </div>
                )
            })

        }

        const progressList = () => {
            return inProgress.map((progressGames) => {
                return (
                    <div className = "games2">
                        <Link to={`/games/${progressGames._id}`}>
                        <img className="gameImage" src={progressGames.image} alt={progressGames.title} />
                        </Link>
                        <h3 className="gameProgress">{progressGames.progress}</h3>
                      </div>
                )
            })

        }

        const interestedList = () => {
            return interestedIn.map((interestedGames) => {
                return (
                    <div className = "games1">
                        <Link to={`/games/${interestedGames._id}`}>
                        <img className="gameImage" src={interestedGames.image} alt={interestedGames.title} />
                        </Link>
                        <h3 className="gameProgress">{interestedGames.progress}</h3>
                      </div>
                )
            })

        }


        return (
            <section className="bigContainer">
                <div className="interested">
                    <h3 className ="interestedHead">Interested In</h3>{interestedList()}
                </div>
                <div className="progress">
                    <h3 className = "progressHead">In Progress</h3>
                    {progressList()}
                </div>
                <div className="completed">
                    <h3 className = "completedHead">Completed</h3>
                    {completedList()}
                </div>

            </section>
        )
    }
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <section className="mainSection">
            <form className="formBar" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.progress}
                    name="progress"
                    placeholder="progress"
                    onChange={handleChange}
                />
                <select name="list" onChange={handleChange}>
                    <option value="in progress">in progress</option>
                    <option value="interested in">interested in</option>
                    <option selected value={newForm.list}>{newForm.list}</option>
                    <option value="completed">completed</option>
                </select>
                <input type="submit" value="Create Game" />
            </form>
            <div>{props.games ? loaded() : loading()}
            </div>
        </section>
    );
}

export default Index;