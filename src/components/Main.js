import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [ games, setGames ] = useState(null);

  const URL = "https://gameplan--backend.herokuapp.com/games/";

  const getGames = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setGames(data);
  };

  const createGames = async (game) => {
    // make post request to create games
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(game),
    });
    // update list of games
    getGames();
  };

  const updateGames = async (game, id) => {
    // make put request to create games
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(game),
    });
    // update list of games
    getGames();
  }

  const deleteGames = async id => {
    // make delete request to create games
    await fetch(URL + id, {
      method: "DELETE",
    })
    // update list of games
    getGames();
  }


  useEffect(() => getGames(), []);

  return (
    <main id ="main">
      <Switch>
        <Route exact path="/">
          <Index games={games} createGames={createGames} />
        </Route>
        <Route
          path="/games/:id"
          render={(rp) => (
            <Show
            games={games}
            updateGames={updateGames}
            deleteGames={deleteGames}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;