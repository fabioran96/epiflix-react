import { Container } from 'react-bootstrap';
import MyNavBar from './navbar'
import Footer from './footer';
import MovieGallery from './MovieGallery';


const HomePage = () => {
  return (
    <div>
      <MyNavBar />
      <Container fluid className="px-4">
        <MovieGallery title="Marvel" searchQuery="Marvel" />
        <MovieGallery title="Harry Potter" searchQuery="Harry Potter" />
        <MovieGallery title="Star Wars" searchQuery="Star Wars" />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;

