import './App.css';
import Banner from './Banner';
import Header from './Header';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Banner />
      <Row title="Netflix Originals" url={requests.fetchNetflixOriginals} isLarge={true}/>
      <Row title="Tendances" url={requests.fetchTrending}/>
      <Row title="Meilleures Notes" url={requests.fetchTopRated}/>
      <Row title="Films d'Actions" url={requests.fetchActionMovies}/>
      <Row title="Films de Comedies" url={requests.fetchComedyMovies}/>
      <Row title="Films d'Horreurs" url={requests.fetchHorrorMovies}/>
      <Row title="Films d'Amour " url={requests.fetchRomanceMovies}/>
      <Row title="Documentaires" url={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
