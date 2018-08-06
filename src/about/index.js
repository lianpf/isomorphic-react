import React from 'react';
import {connect} from 'react-redux';
import '../utils/common.less';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div>
          <h3>--component---</h3>
          <h5>About</h5>
        </div>
    );
  }
}

export default connect()(Index);

