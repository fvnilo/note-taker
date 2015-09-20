export default {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('../containers/SearchGitHubApp'),
    indexRoute: require('./Home'),
    childRoutes: [
      require('./Profile')
    ]
  }]
};
