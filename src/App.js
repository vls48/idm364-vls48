import React, { Component } from 'react';
import signs from './js/signs.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './components/Main';
import Admin from './components/Admin';
import AdminArea from './components/AdminArea';
import Listing from './components/Listing';
import NotFound from './components/NotFound';

class App extends Component {

  state = {
    signs: []
  }

  componentDidMount() {
   /* this.ref = base.syncState('signs', {
      context: this,
      state: 'signs'
    });*/
    this.loadSigns()
  }

  loadSigns = () => {
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
      <Router>
        <div className="App">
        <div>
            <ul className="signs">
                {Object.keys(this.state.signs).map(key => (
                    <Listing 
                        key={key}
                        details={this.state.signs[key]} 
                    />
                ))}
            </ul>
        </div>
        <section className="admin">
            <AdminArea
              updateSign={this.updateSign}
              deleteSign={this.deleteSign}
              signs={this.state.signs}
            />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;

/*<Switch>
    <Route exact path="/" component={Main} />
    <Route path="/admin" component={Admin} />
    <Route component={NotFound} />
</Switch>*/