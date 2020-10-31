import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";

class Body extends Component {
  state = {
    name: "",
    avatar: "",
    blog: "",
    followers: "",
    following: "",
    login: "",
  };

  componentDidMount() {
    const username = this.props.match.params.username;
    api.get(`/${username}`).then(
      (res) => {
        this.setState({
          name: res.data.name,
          avatar: res.data.avatar_url,
          blog: res.data.blog,
          followers: res.data.followers,
          following: res.data.following,
          login: res.data.login,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  render() {
    const isEmptyBlog = this.state.blog;
    const isEmptyName = this.state.name;
    let texto;
    if (isEmptyBlog !== "" && isEmptyName !== "") {
      texto = (
        <div>
          <h2>{this.state.name}</h2>
          <a href={this.state.blog} className="body__subtitle2">
            {this.state.blog}
          </a>
        </div>
      );
    } else {
      texto = (
        <div>
          <h2>{this.state.login}</h2>
          <a href="https://github.com/" className="body__subtitle2">
            GIT
          </a>
        </div>
      );
    }

    return (
      <div className="background">
        <img
          alt="imagem de perfil"
          src={this.state.avatar}
          className="img-app"
        />
        <div style={{ position: "relative", top: "90px" }}>
          {texto}
          <div>
            <ul className="body__followers">
              <span> {this.state.followers} seguidores</span>
              <li style={{ marginLeft: "25px" }}>
                {this.state.following} seguindo
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Body);
