import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickedBtn = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="main-con">
        <div className="bg-con">
          <Message message={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClickedBtn} />
          ) : (
            <Login login={this.onClickedBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
