import React from 'react';
import {connect} from 'react-redux';

import './index.less';
import '../utils/common.less';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'homePage'}>
          <h3>--component---</h3>
          <h5>Home</h5>
        </div>
    );
  }
}

export default connect()(Index);

