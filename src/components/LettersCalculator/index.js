// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {inputValue: ''}
  }

  lettersCalculatorFunction = event => {
    this.setState({inputValue: event.target.value})
  }
  render() {
    const {inputValue} = this.state
    return (
      <div className="calculated-bg-container">
        <div className="calculated-part-card">
          <h1 className="heading-name">Calculate the Letters you enter</h1>
          <label htmlFor="textId" className="phrase">
            Enter the phrase
          </label>
          <input
            id="textId"
            type="text"
            placeholder="Enter the phrase"
            className="input-text-box"
            value={inputValue}
            onChange={this.lettersCalculatorFunction}
          />
          <p className="display-count-letter">
            No.of letters: {inputValue.length}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="hit-logo"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
