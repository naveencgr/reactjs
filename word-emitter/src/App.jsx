import { WordOmitter } from "./components/wordOmitter";

import { MovieList } from "./components/MovieList";

import "./App.css";

import "h8k-components";

function App() {
  return (
    <>
      <h8k-navbar header="Word Omitter"></h8k-navbar>
      <div className="App">
        <MovieList />
      </div>
    </>
  );
}

export default App;
