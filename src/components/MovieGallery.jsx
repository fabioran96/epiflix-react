import { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './MovieGallery.css'

class MovieGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const { searchQuery } = this.props;
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=2c0caa62&s=${searchQuery}`);
      const data = await response.json();
      if (data.Response === "True") {
        this.setState({ movies: data.Search.slice(0,6), loading: false });
      } else {
        this.setState({ error: data.Error, loading: false });
      }
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };

  render() {
    const { title } = this.props;
    const { movies, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const groupedMovies = [];
    for (let i = 0; i < movies.length; i += 6) {
      groupedMovies.push(movies.slice(i, i + 6));
    }

    return (
      <div>
        <h4>{title}</h4>
        <Carousel>
          {groupedMovies.map((group, idx) => (
            <Carousel.Item key={idx}>
              <div className="d-flex justify-content-center">
                {group.map(movie => (
                  <Image
                    key={movie.imdbID}
                    className="img-fluid mx-1"
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{ width: '150px', height: '225px' }} 
                  />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default MovieGallery;
