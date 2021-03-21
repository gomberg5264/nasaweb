import React from 'react';
import Grid from '@material-ui/core/Grid';
import StationSelect from './Stations';
import DatePicker from './DatePicker';

import { useNavigationState } from '../contexts/navigation';

import logo from '../images/logo.svg';

const Header = () => {
  const navigationState = useNavigationState();
  return (
    <div className="flexbox_container">
      <div className="title_item col-lg-9">
        <div className="row">
          <a
            className="logo_item"
            target="_blank"
            rel="noopener noreferrer"
            href="http://cams.seti.org"
          >
            <img src={logo} alt="NASA" width="36.7" height="30" />
          </a>
          Meteor Shower Portal
        </div>
      </div>
      <div className="search_box col-lg-3 text-right">
        <DatePicker
          date={navigationState.date}
          changeDate={navigationState.changeDate}
          showArrows={true}
        />
        <StationSelect
          source={navigationState.source}
          changeSource={navigationState.changeSource}
        />
      </div>
    </div>
  );
};

export default React.memo(Header);
