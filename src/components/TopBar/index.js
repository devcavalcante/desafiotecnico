import React, { Component } from "react";
import "./styles.css";
import api from "../../services/api";
import { withRouter } from "react-router-dom";
import Body from "../Usuario/index";
import Repositorio from "../Repositorios/index";
import Search from "../Search/index";

class TopBar extends Component {
  state = {
    login: "",
    avatar: "",
  };

  componentDidMount() {
    const username = this.props.match.params.username;
    api.get(`/${username}`).then(
      (res) => {
        this.setState({
          login: res.data.login,
          avatar: res.data.avatar_url,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div>
        <header className="top-app-bar top-app-bar--fixed" id="topAppBar-menu">
          <div className="top-app-bar__row">
            <section className="top-app-bar__section top-app-bar__section--align-start">
              <img
                alt="foto de perfil"
                src={this.state.avatar}
                className="top-app-img"
              />
              <span className="top-app-bar__title">Olá {this.state.login}</span>
              <Search />
            </section>
          </div>
        </header>
        <Body />
        <Repositorio />
      </div>
    );
  }
}

export default withRouter(TopBar);
