import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { DateContext } from '../context';

const NavigationBar = (props) => {
  const [value, setValue] = useState(React.useContext(DateContext));

  const incrementDate = () => {
    // Add One Day To Selected Date
    let newDate = new Date(value);

    newDate.setDate(newDate.getDate() + 1);

    let newdf = `${newDate.toISOString().slice(0, 10)}`;
    setValue(newdf);
    props.onChange(newdf);
  };

  const decrementDate = () => {
    // Minus One Dat To Selected Date
    let newDate = new Date(value);

    newDate.setDate(newDate.getDate() - 1);
    let newdf = newDate.toISOString().slice(0, 10);
    setValue(newdf);
    props.onChange(newdf);
  };

  const handleDateChange = (e) => {
    setValue(e.target.value);

    // Update Parent Component
    props.onChange(e.target.value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item onClick={decrementDate}>
        <Button
          style={{
            minHeight: '50px',
            minWidth: '50px',
            fontSize: '30px',
          }}
          variant="contained"
          color="secondary"
          active
        >
          <NavigateBeforeIcon />
        </Button>
      </Grid>
      <Grid item>
          <Button
            id="date"
            color="secondary"
            variant="contained"
            style={{
              maxWidth: '150px',
              minHeight: '50px',
              fontSize: '30px',
            }}
          >

            <InputBase
              id="date"
              type="date"
              variant="filled"
              style={{
                backgroundColor: "transparent"
              }}
              size="medium"
              fullWidth="true"
              value={value}
              onChange={handleDateChange}
            />

        </Button>
      </Grid>
      <Grid item onClick={incrementDate}>
        <Button
          style={{
            minHeight: '50px',
            minWidth: '50px',
            fontSize: '30px',
          }}
          variant="contained"
          color="secondary"
          active
        >
          <NavigateNextIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default React.memo(NavigationBar);
