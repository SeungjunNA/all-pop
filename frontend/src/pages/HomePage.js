import MyCarousel from '../components/MyCarousel';
import CardExample from '../components/Card';
import '../css/HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <div className="carousel-container">
        <MyCarousel></MyCarousel>
      </div>
      <div className="cards-container">
        <CardExample></CardExample>
        <CardExample></CardExample>
        <CardExample></CardExample>
        <CardExample></CardExample>
        <CardExample></CardExample>
      </div>
    </div>
  );
}

export default HomePage;