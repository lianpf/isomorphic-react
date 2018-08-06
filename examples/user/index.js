import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h3>--component---</h3>
          <h5>User</h5>
        </div>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

