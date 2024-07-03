import { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyNavBar from './navbar'




class TVShows extends Component {
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
        let allMovies = [];
        let error = null;

        for (let page = 1; page <= 10; page++) {
            try {
              const response = await fetch(`http://www.omdbapi.com/?apikey=2c0caa62&s=movie&type=movie&page=${page}`);
              const data = await response.json();
              if (data.Response === "True") {
                allMovies = [...allMovies, ...data.Search];
              } else {
                error = data.Error;
                break;
              }
            } catch (err) {
              error = err.message;
              break;
            }
          }
      
          this.setState({
            movies: allMovies,
            loading: false,
            error: error,
          });
        };
      
        render() {
          const { movies, loading, error } = this.state;
      
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error: {error}</div>;

          const groupedMovies = [];
          for (let i = 0; i < movies.length; i += 6) {
          groupedMovies.push(movies.slice(i, i + 6));
          }

        
          
      
          return (
            <div style={{color:"white"}}>
            <MyNavBar />
            <Container>
              <h2>TV Shows</h2>
              {groupedMovies.map((group, idx) => (
                <Row key={idx} className="mb-4">
                  {group.map(movie => (
                    <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={2} className="text-center">
                        <Link to={`/movie-details/${movie.imdbID}`}>
                      <img src={movie.Poster} alt={movie.Title} style={{ width: '100px', height: '150px', marginRight: '10px' }} />
                      </Link>
                      <p>{movie.Title} ({movie.Year})</p>
                    </Col>
                  ))}
                </Row>
              ))}
            </Container>
            </div>
          );
        }
      }
      
      export default TVShows;
  


