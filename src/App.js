import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Celebrity from "./pages/Celebrity";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies/>} />
          <Route path="/movie/:title" element={<MovieDetail/>}/>
          <Route path="/tv" element={<TV/>} />
          <Route path="/person" element={<Celebrity/>} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;