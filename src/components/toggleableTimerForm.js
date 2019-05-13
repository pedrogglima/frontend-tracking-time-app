import React from 'react';
import TimerForm from './timerForm.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Card>
          <CardContent style={{textAlign:'center'}}>
            <Fab
              color="primary"
              aria-label="Add"
              onClick={this.handleFormOpen}
            >
              <span className="material-icons">add</span>
            </Fab>
          </CardContent>
        </Card>
      );
    }
  }
}

export default ToggleableTimerForm;
