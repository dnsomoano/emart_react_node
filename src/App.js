import logo from './logo.svg';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from 'react-router-dom';
import { CustomerList } from './components/CustomerList';

import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<CustomerList/>} />
        </Routes>
      </Router>
  );
}

export default App;
