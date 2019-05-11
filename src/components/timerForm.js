import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <Card
        style={{ maxWidth: '280px', minWidth: '280px' }}
      >
        <CardContent>
          {this.props.title}
          {this.props.project}
          {submitText}
          Start
        </CardContent>
      </Card>
    );
  }
}

export default TimerForm;
