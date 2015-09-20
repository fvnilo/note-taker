export default {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('../containers/SearchGitHubApp'),
    childRoutes: [
      require('./Home'),
      require('./Profile')
    ]
  }]
};
