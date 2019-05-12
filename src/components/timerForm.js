import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <Card>
        <CardContent>
          <FormControl required={true} margin='normal' fullWidth={true}>
            <InputLabel htmlFor="component-simple">Title</InputLabel>
            <Input id="input_title_id" value={this.props.title} onChange={this.handleChange} />
          </FormControl>

          <FormControl required={true} margin='normal' fullWidth={true}>
            <InputLabel htmlFor="component-simple">Project</InputLabel>
            <Input id="input_project_id" value={this.props.project} onChange={this.handleChange} />
          </FormControl>
          <div style={{width: '100%', marginTop: '10px'}}>
            <Button variant="outlined" color='primary' size="large" style={{width: '50%'}}>
              {submitText}
            </Button>
            <Button variant="outlined" color='secondary' size="large" style={{width: '50%'}}>
              Cancel
            </Button>
          </div>

        </CardContent>
      </Card>
    );
  }
}

export default TimerForm;
