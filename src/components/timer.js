import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Timer extends React.Component {
  render() {
    const elapsedString = ''; //helpers.renderElapsedString(this.props.elapsed);
    return (
      <Card>
        <CardContent>
          {this.props.title}
          {this.props.project}
          {elapsedString}
          Start
        </CardContent>
      </Card>
    );
  }
}

export default Timer;
