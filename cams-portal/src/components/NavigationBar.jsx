import React, { Component } from "react";
// import DatePicker from "react-datepicker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';

import logo from "../images/icon.png";
// import { ReactComponent as ReactLogo } from './Icon.svg'

import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

class NavigationBar extends Component {

  render() {
    const { selectedDate, onDateChange } = this.props;

    return (
      <div className="flexbox_container p-3">
        <a className="logo_item col-lg-2" href="http://cams.seti.org">
          <img src={logo} alt="NASA" width="100" />
        </a>

        <p className="title_item col-lg-7">NASA Meteor Shower Portal</p>
        <div className="search_box col-lg-3">
            <img src="https://img.icons8.com/ios-filled/50/e74c3c/down2.png" alt=""/>
            <br />
            <DayPickerInput
                style={{ textAlign: 'center' }}
                value={selectedDate}
                onDayChange={onDateChange}
            />
        </div>
      </div>
    );
  }
}

export default NavigationBar;
        