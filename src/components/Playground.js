import React, { Component } from "react";

export default class Playground extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) =>
        this.setState({
          posts: posts.slice(0, 5),
        })
      );
  }

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

    return <div>{posts.length ? postsList : "Подождите, идет загрузка"}</div>;
  }
}
