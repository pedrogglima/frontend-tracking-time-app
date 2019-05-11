import React from 'react';

class Timer extends React.Component {
  render() {
    const elapsedString = ''; //helpers.renderElapsedString(this.props.elapsed);
    return (
      <div className=''>
        <div className=''>
          <div className=''>
            {this.props.title}
          </div>
          <div className=''>
            {this.props.project}
          </div>
          <div className=''>
            <h2>
              {elapsedString}
            </h2>
          </div>
          <div className=''>
            <span className=''>
              <i className='' />
            </span>
            <span className=''>
              <i className='' />
            </span>
          </div>
        </div>
        <div className=''>
          Start
        </div>
      </div>
    );
  }
}

export default Timer;
