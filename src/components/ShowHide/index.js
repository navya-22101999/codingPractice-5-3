// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isClicked: false,
    isState: false,
  }

  onFirstName = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  onLastName = () => {
    this.setState(prevState => ({
      isState: !prevState.isState,
    }))
  }

  render() {
    const {isClicked, isState} = this.state
    return (
      <div className="cont">
        <h1>Show/Hide</h1>
        <br />
        <div className="butCont">
          <div>
            <button type="button" onClick={this.onFirstName} className="button">
              Show/Hide Firstname
            </button>
            <br />
            {isClicked ? (
              <div className="popup">
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div>
            <button type="button" onClick={this.onLastName} className="button">
              Show/Hide Lastname
            </button>
            <br />
            {isState ? (
              <div className="popup">
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
