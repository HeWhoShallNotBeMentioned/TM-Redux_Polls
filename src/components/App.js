import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';
 import Poll from './Poll'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
      {this.props.loading === true
      ? <LoadingBar style={{ backgroundColor: 'RoyalBlue', height: '30px' }} updateTime={100} maxProgress={95} progressIncrease={30} />
      : <Poll match={{params: {id: 'loxhs1bqm25b708cmbf3g'}}} />}
        
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