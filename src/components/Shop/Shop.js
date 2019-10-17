import "./Shop.scss";

import React from "react";

import { getGames, orderGames } from "../../services/games";
import Game from "../../components/Game/Game";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cart from "../../components/Cart/Cart";
import Page from "../../layouts/page/page";

class Shop extends React.Component {
  state = { games: [], cart: [] };

  async componentDidMount() {
    const games = await getGames();
    this.setState({ games });
  }

  onGameSelect = (gameId) => () => {
    this.setState({
      games: this.state.games.map(game =>
        game.id === gameId ? { ...game, isSelected: true } : game)
    })
  }

  onOrder = (games) => {
    const gameIds = games.map(game => game.id)

    orderGames(gameIds).then(response => {
      this.props.history.push('/success')
    })
  }

  render() {
    const { games } = this.state;

    return (
      <Page>
        <div className="u-screen-limiter">
          <h2>Games</h2>
          {games && (
            <div className="c-shop__games-container">
              {games.map(game => (
                <div className="c-shop__game" key={game.name}>
                  <Game {...game}  onAdd={this.onGameSelect(game.id)}/>
                </div>
              ))}
            </div>
          )}
        </div>

        <Cart selectedGames={this.state.games.filter(game => game.isSelected)} onSubmit={this.onOrder} />
      </Page>
    );
  }
}

export default Shop;
