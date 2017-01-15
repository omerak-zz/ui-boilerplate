export default {
  home: '/',
  main: '/main',
  someOtherComponent: '/some-other-component',
  someOtherComponentDetail: '/some-other-component/:pk/:anotherPk'
};


//
String.prototype.url = function() {
  const params = this.match(/:([^\/]+)/ig);
  let str = this;

  if (params) {
    params.forEach((param, i) => {
      str = str.replace(param, arguments[i]);
    });
  }

  return '/#' + str;
};
