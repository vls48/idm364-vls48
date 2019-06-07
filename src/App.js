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
    signs: [],
    list: [],
    total: 0
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

  setTotal = (cost) => {
    this.setState({total: this.state.total + cost });
  }

  addSign = (key, addSign) => {
    // console.log('update sign');
    // 1. copy the current state
    const list = { ...this.state.list };
    // 2. update that state key/value
    list[key] = addSign;
    // 3. set the new copy to the component state
    this.setState({ list });
  };

  render(){
    return (
      <React.Fragment>   
        <Header />

        <div className="App">
          <Switch>
            <Route exact path="/" render={(props) => <Main
              signs={this.state.signs}
              total={this.state.total}
              list={this.state.list}
              addSign={this.addSign} 
              setTotal={this.setTotal}                      
            />} />
            <Route path="/admin" render={(props) => <AdminArea
                loadSigns={this.loadSigns}
                updateSign={this.updateSign}
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