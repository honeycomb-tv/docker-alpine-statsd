(function() {
  var flushInterval = ((process.env.FLUSH_INTERVAL || 10000) * 1);
  var graphitePort = ((process.env.GRAPHITE_PORT || 2003) * 1);
  var graphiteHost = (process.env.GRAPHITE_HOST || "carbon.hostedgraphite.com");

  // If using Hosted Graphite this is your API key.
  var graphiteGlobalPrefix = process.env.GRAPHITE_GLOBAL_PREFIX || "";

  return {
    port: 8125,
    address: "0.0.0.0",

    debug: process.env.DEBUG,
    dumpMessages: process.env.DUMP_MESSAGES,

    deleteIdleStats: process.env.DELETE_IDLE_STATS || false,
    backends: [ "./backends/graphite" ],

    flushInterval: flushInterval,
    graphitePort: graphitePort,
    graphiteHost: graphiteHost,
    graphite: {
      legacyNamespace: false,
      globalPrefix: graphiteGlobalPrefix
    }
  };
}());
