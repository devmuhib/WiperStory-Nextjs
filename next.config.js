const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "shahidul",
        mongodb_password: "qZGAzvHqJJVyURCl",
        mongodb_clusterName: "cluster0",
        mongodb_database: "wiper_final",
      },
    };
  }

  return {
    reactStrictMode: true,
    staticPageGenerationTimeout: 90000,
    env: {
      mongodb_username: "shahidul",
      mongodb_password: "qZGAzvHqJJVyURCl",
      mongodb_clusterName: "cluster0",
      mongodb_database: "wiper_final",
    },
  };
};
