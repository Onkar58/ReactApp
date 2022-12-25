
import Card from './elements/Cards/Cards';
import info from './elements/info/info';
import { Navbar } from './elements/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar info={info} />
      <Routes>
        <Route path='/' element={<Card info/>}/>
        {info.map((currentValue, index) => <Route path={currentValue.url} element={<Card info={currentValue}/>} />)}
        {/* {info.map((currentValue, index) => <Card info={currentValue} ind={index} />)} */}
      </Routes>
    </BrowserRouter>
  );

}

export default App;
