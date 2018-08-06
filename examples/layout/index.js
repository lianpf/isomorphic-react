import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../home/index';
import About from '../about/index';
import User from '../user/index';
import Countdown from '../countdown/index';

import './index.less';
import RedArrow from './img/redArrow.png';
import names from 'classnames';

import { getUrl } from '../utils/index';
const menuListConfig = [
  {
    isShow: true,
    text: 'Home',
    path: '/home',
    exact: true,
    main: () => <Home />
  },
  {
    isShow: true,
    text: 'About',
    path: '/about',
    exact: true,
    main: () => <About />
  },
  {
    isShow: true,
    text: 'User',
    path: '/user',
    exact: true,
    main: () => <User />
  }
];

let routes = [];
menuListConfig.length && menuListConfig.map(({isShow, path, exact, main}) => {
  if (!isShow) {
    return
  }
  const childRouter = {
    path,
    exact,
    main,
  };
  routes.push(childRouter);
});

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location: {pathname} } = this.props;

    const activeUrl = pathname;
    // console.log('--activeUrl--', activeUrl);

    return (
        <div className={`layout`} >
          <div className={`header`}>
            <div className={'logo'}>
              {/*react + koa 服务端同构渲染*/}
              111
            </div>
          </div>
          <div className={`leftMenu`}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {
                menuListConfig.map((item, index) => {
                  if (item.isShow) {
                    return (
                        <li key={index} className={names(`menuItem ${item.path === pathname ? `activeItem` : ''}`)} >
                          <Link to={item.path}>{item.text}</Link>
                        </li>
                    )
                  }
                })
              }
            </ul>
          </div>
          <div className={`rightContent`}>
            <Router>
              <Switch>
                {
                  routes.map((route, index) => {
                    return <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                  })
                }
              </Switch>
            </Router>
          </div>
        </div>
    );
  }
}
// function mapStateToProps(state) {
//   const { activeItemUrl, userAccountAuth, cashAmt, award, creditsNum, showVerifyConfirm } = state.accountMenu;
//   return { activeItemUrl, userAccountAuth, cashAmt, award, creditsNum, riskTest: state.riskTest, showVerifyConfirm };
// }

export default connect()(Index);
