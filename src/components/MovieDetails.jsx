import { Component } from "react";
import { useParams } from 'react-router-dom';
import MyNavBar from './navbar'

class MovieDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movie: null,
        comments: [],
        loading: true,
        error: null,
      };
    }

    componentDidMount() {
        const { movieId } = this.props.params;
        this.fetchMovieDetails(movieId);
        this.fetchMovieComments(movieId);
      }

      fetchMovieDetails = async (movieId) => {
        try {
          const response = await fetch(`http://www.omdbapi.com/?apikey=2c0caa62&i=${movieId}`);
          const data = await response.json();
          if (data.Response === "True") {
            this.setState({ movie: data, loading: false });
          } else {
            this.setState({ error: data.Error, loading: false });
          }
        } catch (err) {
          this.setState({ error: err.message, loading: false });
        }
      };
    
      fetchMovieComments = async (movieId) => {
        try {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNjcxYzNhMzhjYjAwMTVmNjNkMDUiLCJpYXQiOjE3MTk4NDA3ODksImV4cCI6MTcyMTA1MDM4OX0.B4Ac2In37D7jG2-Qdv5MVa8OIekmjB-RbStLDhWn4qY"
              
            }
          });
          const data = await response.json();
          this.setState({ comments: data, loading: false });
        } catch (err) {
          this.setState({ error: err.message, loading: false });
        }
      };
    
      render() {
        const { movie, comments, loading, error } = this.state;
    
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
        if (!movie) return null;
    
        return (
          <div style={{color:"white"}}>
            <MyNavBar />
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Plot}</p>
            <h3>Comments</h3>
            {comments.map(comment => (
              <div key={comment._id}>
                <p>{comment.comment}</p>
                <p>Rating: {comment.rate}</p>
              </div>
            ))}
          </div>
        );
      }
    }
    
    const withRouter = (Component) => {
      return (props) => {
        const params = useParams();
        return <Component {...props} params={params} />;
      };
    };
    
    export default withRouter(MovieDetails);
    
