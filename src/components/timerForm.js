import React from 'react';

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className=''>
        <div className=''>
          <div className=''>
            <div className=''>
              <label>Title</label>
              <input type='text' defaultValue={this.props.title} />
            </div>
            <div className=''>
              <label>Project</label>
              <input type='text' defaultValue={this.props.project} />
            </div>
            <div className=''>
              <button className=''>
                {submitText}
              </button>
              <button className=''>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm;
