import React from 'react';
import './App.css';
import 'materialize-css'
import NotesPage from './pages/NotesPage'
import {Switch,Route, Redirect} from 'react-router-dom'
import EditPage from './pages/EditPage';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/notes" exact component={NotesPage}/>
        <Route path="/notes/:id" component={EditPage}/>
        <Redirect to="/notes"/>
      </Switch>
    </div>
  );
}



export default App;
