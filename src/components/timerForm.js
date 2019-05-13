import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

class TimerForm extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleProjectChange = e => {
    this.setState({ project: e.target.value });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project,
    });
  };

  render() {
    const submitText = this.props.id ? 'Update' : 'Create';
    return (
      <Card>
        <CardContent>
          <FormControl required={true} margin="normal" fullWidth={true}>
            <InputLabel htmlFor="component-simple">Title</InputLabel>
            <Input
              id="input_title_id"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </FormControl>

          <FormControl required={true} margin="normal" fullWidth={true}>
            <InputLabel htmlFor="component-simple">Project</InputLabel>
            <Input
              id="input_project_id"
              value={this.state.project}
              onChange={this.handleProjectChange}
            />
          </FormControl>
          <div style={{ width: '100%', marginTop: '10px' }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              style={{ width: '50%' }}
              onClick={this.handleSubmit}
            >
              {submitText}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              style={{ width: '50%' }}
              onClick={this.props.onFormClose}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default TimerForm;
