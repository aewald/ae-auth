exports.userMutation = {
  signUp: async (root, { input }, ctx) => {
    const registeredUser = await ctx.models.User.signUp(input);
    return registeredUser._id;
  },
  signIn: (root, args, ctx) => {
    return ctx.models.User.signIn();
  },
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut();
  },
};
