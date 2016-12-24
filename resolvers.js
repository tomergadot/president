const resolveFunctions = {
  RootQuery: {
    president(_, {name}, ctx) {
      const president = new ctx.constructor.Presindent();
      return president.findPresident(name);
    },
  },
};

module.exports = resolveFunctions;
