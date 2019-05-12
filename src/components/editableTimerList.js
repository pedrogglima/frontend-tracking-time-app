import React from 'react';
import EditableTimer from './editableTimer.js';
import Grid from '@material-ui/core/Grid';

class EditableTimerList extends React.Component {
  render() {
    return (
      <div id='timers'>
        <Grid
          container
          direction="column"
          alignItems="stretch"
          justify="center"
          spacing={8}
        >
          <Grid item>
            <EditableTimer
              title='Learn React'
              project='Web Domination'
              elapsed='8986300'
              runningSince={null}
              editFormOpen={false}
            />
          </Grid>
          <Grid item>
            <EditableTimer
              title='Learn extreme ironing'
              project='World Domination'
              elapsed='3890985'
              runningSince={null}
              editFormOpen={true}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default EditableTimerList;