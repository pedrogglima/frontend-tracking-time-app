import React from 'react';
import EditableTimer from './editableTimer.js';
import Grid from '@material-ui/core/Grid';

class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map((timer) => (
      <Grid item>
        <EditableTimer
          key={timer.id}
          id={timer.id}
          title={timer.title}
          project={timer.project}
          elapsed={timer.elapsed}
          runningSince={timer.runningSince}
        />
      </Grid>
    ));
    return (
      <div id='timers'>
        <Grid
          container
          direction="column"
          alignItems="stretch"
          justify="center"
          spacing={8}
        >
          {timers}
        </Grid>
      </div>
    );
  }
}

export default EditableTimerList;
