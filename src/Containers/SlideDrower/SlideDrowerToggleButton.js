import React, { Component } from 'react'
import './SlideDrowerToggleButton.css'

class SlideDrowerToggleButton extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <button className="toggle_button" onClick={this.props.click}>
                <div className="toggle_button_line"></div>
                <div className="toggle_button_line"></div>
                <div className="toggle_button_line"></div>
            </button>

        )
    }

}

export default SlideDrowerToggleButton 