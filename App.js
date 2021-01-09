import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import PostLists from './components/Post/PostLists';
import Register from './components/User/Register';
import Login from './components/User/Login'
import { Route } from 'react-router-dom';

class App extends Component {
render(){
  return (
    
      <div className="App">
        <Header />
        <Route exact path="/" component={PostLists}/>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </div>
    
  );
}
}

export default App;
