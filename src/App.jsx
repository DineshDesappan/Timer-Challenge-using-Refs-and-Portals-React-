import Player from './components/Player.jsx';
import Challenge from './components/Challenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge title="Challenge 1" targetTime={5} />
        <Challenge title="Challenge 2" targetTime={10} />
        <Challenge title="Challenge 3" targetTime={15} /> 
        <Challenge title="Challenge 4" targetTime={20} /> 
      </div>
    </>
  );
}

export default App;
