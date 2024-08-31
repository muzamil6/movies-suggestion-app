import Navbar from './component/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Movie from './pages/movie/Movie';
import SearchResults from './pages/searchResult/SearchResults';
import Error from './component/error/Error';
function App() {
  return (
   <>
  <Router>
    <Navbar />
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/series/:id' element={<Movie />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<Error  /> } /> 
      </Routes>

  </Router>
   </>
  );
}

export default App;
