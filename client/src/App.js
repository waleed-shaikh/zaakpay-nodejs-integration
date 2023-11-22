import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './component/Success';
import Failure from './component/Failure';
import ZaakPay from './file/zaakpay/ZaakPay';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          {/* ZaakPay*/}
          <Route exact path="/" element={<ZaakPay />} />
          <Route exact path='/success' element={<Success />} />
          <Route exact path='/failure' element={<Failure />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
