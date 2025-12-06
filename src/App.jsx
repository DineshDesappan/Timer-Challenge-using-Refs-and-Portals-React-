import Player from './components/Player.jsx';
import Challenge from './components/Challenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge title="Challenge 1" targetTime={1} />
        <Challenge title="Challenge 2" targetTime={2} />
        <Challenge title="Challenge 3" targetTime={3} /> 
        <Challenge title="Challenge 4" targetTime={4} /> 
      </div>
    </>
  );
}

export default App;
