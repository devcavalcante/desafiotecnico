import React, { Component } from "react";
import "./styles.css";
import { BiSearch } from "react-icons/bi";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      values: [],
      redirectTo: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.handleSubmit();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    window.location.href = `/${this.state.value}`;
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Olá, Bem Vindo</h1>
          <h4>Utilize a barra de pesquisa para encontrar um usuário =)</h4>
          <div className="body-search">
            <div className="div-search">
              <input
                className="input-search"
                id="nameGroup"
                type="text"
                name="search"
                placeholder="Pesquise um usuário"
                value={value}
                onChange={this.handleChange}
              />
              <input
                className="input-search"
                type="submit"
                id="btn-search"
                name="search"
                style={{ display: "none" }}
              />
              <label className="label-search" onClick={this.handleClick}>
                <BiSearch />
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Home);
