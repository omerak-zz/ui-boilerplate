import { Router } from 'director';

import urls from 'src/urls';

import SomeComponent from 'ui/apps/SomeComponent';
import SomeOtherComponent from 'ui/apps/SomeOtherComponent';


const routerContainer = function(callback = function() {}) {
  let route = { props: {} };

  const container = {
    someComponent() {
      route = { component: SomeComponent, props: { key: 'some' } };
    },

    someOtherComponent() {
      route = { component: SomeOtherComponent, props: { key: 'someOther' } };
    },

    someOtherComponentDetail(pk, someOtherPk) {
      route = {
        component: SomeOtherComponent,
        props: {
          pk: pk,
          someOtherPk: someOtherPk,
          key: 'someOtherDetail'
        }
      };
    }
  };

  const allroutes = function() {
    window.scrollTo(0, 0);

    callback(route);
  };

  Router({ // eslint-disable-line
    [urls.home]: 'someComponent',
    [urls.main]: 'someComponent',
    [urls.someOtherComponent]: 'someOtherComponent',
    [urls.someOtherComponentDetail]: 'someOtherComponentDetail'
  }).configure({
    on: allroutes,
    resource: container
  }).init(['/']);
};


export default routerContainer;
