import React from 'react'
import RouterMap from './RouterMap'
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div className='App-header'>
        <h2>考勤记录查询</h2>
        <RouterMap></RouterMap>
      </div>
    )
  }
}

export default App;
