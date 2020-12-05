import React, { Component } from "react";
import ShowMoreBt from "./ShowMoreBt";

export default class Playground extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) =>
        this.setState({
          posts: posts.slice(0, 10),
        })
      );
  }

  handleButtonClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        this.setState((prevState) => {
          return {
            posts: [...prevState.posts, ...posts.slice(0, 10)],
          };
        });
      });
  };

  render() {
    const { posts } = this.state;

    const postsList = posts.map((post) => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });

    return (
      <div>
        {posts.length ? postsList : "Подождите, идет загрузка"}
        <ShowMoreBt onClick={this.handleButtonClick} />
      </div>
    );
  }
}
