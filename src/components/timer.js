import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class Timer extends React.Component {
  render() {
    const elapsedString = ''; //helpers.renderElapsedString(this.props.elapsed);
    return (
      <Card>
        <CardContent>
          <Typography variant='title' color="primary">
            {this.props.title}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {this.props.project}
          </Typography>
          <Typography variant='h3' align='center' color="default" gutterBottom>
            {elapsedString}02:20:30
          </Typography>

          <IconButton aria-label="Delete" style={{ float: 'right' }}>
            <span className="material-icons">delete</span>
          </IconButton>
          <IconButton aria-label="Edit" style={{ float: 'right' }}>
            <span className="material-icons">edit</span>
          </IconButton>
          <Button variant="contained" size="large" fullWidth={true}>
            Start
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default Timer;
