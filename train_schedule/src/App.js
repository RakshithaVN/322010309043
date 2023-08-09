import logo from './logo.svg';
import './App.css';

function App() {
  const trains = [
    {
      name: 'Train A',
      location: 'Location A',
      source: 'Source A',
      destination: 'Destination A',
      timings: 'Timings A',
    },
    {
      name: 'Train B',
      location: 'Location B',
      source: 'Source B',
      destination: 'Destination B',
      timings: 'Timings B',
    },
    // Add more train data as needed
  ];
 return (
    <div className="App">
      <div className="App-header">
        <img src="https://st3.depositphotos.com/16149430/18810/i/600/depositphotos_188106010-stock-photo-train.jpg" alt="Train Logo" className="train-logo" />
        <h1>Train App</h1>
        <input type="text" placeholder="Search" />
      </div>
      <div className="App-content">
        {trains.map((train, index) => (
          <div className="train-card" key={index}>
            <h2>{train.name}</h2>
            <p>Location: {train.location}</p>
            <p>Source: {train.source}</p>
            <p>Destination: {train.destination}</p>
            <p>Timings: {train.timings}</p>
            <img src="/book-logo.png" alt="Book Logo" className="book-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
