import axios from "axios";
import React from "react";

class App07 extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  
  getMovie = async () => {
    
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?_by=rating");
    
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "영화 데이터 출력"}</div>;
  }
}

export default App07;