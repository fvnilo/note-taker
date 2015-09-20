export default {
  path: ':userName',

  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../containers/ProfilePage'));
    });
  }
};
