// options == {email, password}
const authenticateUser = (req, options, passport) => {
  return new Promise((resolve, reject) => {
    const done = (error, user) => {
      if (error) {
        return reject(new Error(error));
      }

      if (user) {
        req.login(user, (error) => {
          if (error) {
            return reject(new Error(error));
          }
          return resolve(user);
        });
      } else {
        return reject(new Error('Invalid password or email!'));
      }
    };

    const authFn = passport.authenticate('graphql', options, done);
    authFn();
    // return resolve({ username: 'testuser' });
  });
};

exports.buildAuthContext = (req, passport) => {
  const auth = {
    authenticate: (options) => authenticateUser(req, options, passport),
    logout: () => req.logout(),
    isAuthenticated: () => req.isAuthenticated(),
    getUser: () => req.user,
  };

  return auth;
};
