import "./App.css";
import Tour from './component/Tour';
import data from './data';
import {useState} from 'react';

function App() {

  const [tour, setTours] = useState(data);
  
  function removeTour(id) {
    setTours(tour.filter(tour => tour.id !== id));
    
  }

  if (tour.length === 0)
  {
    return(
      <div className="refresh-container">
        <div className="refresh-text">No Tour Left</div>
        <button className="refresh-btn" onClick={()=> setTours(data)}>Refresh</button>
      </div>
    );
    

  }

  return (
    <div>
      <Tour tours={tour} removeTour= {removeTour}></Tour>
    </div>
    
  );
}

export default App;
