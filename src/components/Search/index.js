import React, { Component } from "react";
import "./styles.css";
import { BiSearch } from "react-icons/bi";
import {withRouter } from "react-router-dom";

class Search extends Component {
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
    console.log("alguma coisa");
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
      <form onSubmit={this.handleSubmit}>
        <div className="div">
          <input
            id="nameGroup"
            type="text"
            name="search"
            placeholder="Pesquise um usuário"
            value={value}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            id="btn-search"
            name="search"
            style={{ display: "none" }}
          />
          <label onClick={this.handleClick}>
            <BiSearch />
          </label>
        </div>
      </form>
    );
  }
}

export default withRouter(Search);
