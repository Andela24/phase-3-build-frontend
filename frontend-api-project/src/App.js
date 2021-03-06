import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';

import NavBar from './components/NavBar';
import AttractionList from './components/AttractionList';
import DestinationList from './components/DestinationList';
import PageNotFound from './components/PageNotFound';
import NewAttraction from './components/NewAttraction';
import DetailsAttraction from './components/DetailsAttraction';
import NewDestination from './components/NewDestination';

function App() {

  return (
    <Router>
      <div className="App">
       
      <NavBar />
      <Routes>
          <Route exact path="/" element= { <Home /> }>
          </Route>
          <Route exact path="/destination" element= { <DestinationList /> }>
          </Route>
          <Route exact path="/destination/new" element= { <NewDestination /> }>
          </Route>
          <Route exact path="/attraction" element= { <AttractionList /> }>
         </Route>
         <Route exact path="/attraction/new" element={ <NewAttraction />} >
          </Route>
          <Route exact path="/attractions/:id" element={ <DetailsAttraction />} >
          </Route>
         <Route element= { <PageNotFound/> }>
          
         </Route>
     </Routes>
     </div>
    </Router>
  );
}

export default App;
