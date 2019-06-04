import React, { Component } from 'react';
import signs from './js/signs.js';
import { Route, Switch } from 'react-router-dom';
import base from './js/base';
import Header from './components/Header';
import Main from './components/Main';
import AdminArea from './components/AdminArea';
import NotFound from './components/NotFound';

class App extends Component {

  state = {
    signs: []
  };

  componentDidMount() {
    this.ref = base.syncState('signs', {
      context: this,
      state: 'signs'
    });
  }

  loadSigns = () => {
    console.log("it work");
    this.setState({ signs });
  };

  updateSign = (key, updatedSign) => {
    // console.log('update sign');
    // 1. copy the current state
    const signs = { ...this.state.signs };
    // 2. update that state key/value
    signs[key] = updatedSign;
    // 3. set the new copy to the component state
    this.setState({ signs });
  };

  deleteSign = () => {
    console.log('delete sign');
  };

  render(){
    return (
      <React.Fragment>   
        <Header />

        <div className="App">
          <Switch>
            <Route exact path="/" render={(props) => <Main
              signs={this.state.signs}           
            />} />
            <Route path="/admin" render={(props) => <AdminArea
                loadSigns={this.loadSigns}
                updateSign={this.updateSign}
                deleteSign={this.deleteSign}
                signs={this.state.signs}
              />} />
            <Route component={NotFound} />
          </Switch>
        </div>
        </React.Fragment>
    );
  }
}

export default App;