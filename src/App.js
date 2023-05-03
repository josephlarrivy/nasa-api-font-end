import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AppRoutes from './common/AppRoutes';
import Nav from './common/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      {/* <AppRoutes /> */}
    </div>
  );
}

export default App;