import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import router from './router';

import 'ui/less/animations.less';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentRoute: { component: 'div' }
    };

    this.routeChange = this.routeChange.bind(this);
  }

  componentDidMount() {
    router(this.routeChange);
  }

  routeChange(route) {
    this.setState({ currentRoute: route }, () => {
      this.forceUpdate();
    });
  }

  renderComponent(component, props) {
    return component && React.createElement(component, props);
  }

  render() {
    const { component, props } = this.state.currentRoute;

    return (
      <div className="appWrapper">
        <ReactCSSTransitionGroup
          transitionName="anim-route"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.renderComponent(component, props)}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
