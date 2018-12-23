import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
      {this.props.loading === true
      ? <LoadingBar style={{ backgroundColor: 'blue', height: '30px' }} updateTime={100} maxProgress={95} progressIncrease={30} />
      : <Dashboard />}
        
      </div>
    )
  }
}
function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null,
  }
}
export default connect(mapStateToProps)(App)