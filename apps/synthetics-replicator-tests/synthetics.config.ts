import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'http://localhost:5173',
    },
    playwrightOptions: {
      ignoreHTTPSErrors: false,
    },
    /**
     * Configure global monitor settings
     */
    monitor: {
      schedule: 10,
      locations: ['united_kingdom'],
      privateLocations: [''],
    },
    /**
     * Project monitors settings
     */
    project: {
      id: 'synthetics-replicator-tests',
      url: 'https://fe8f3eff95d246c6a166d76a9dff6090.uksouth.azure.elastic-cloud.com:443',
      space: 'default',
    },
  };
  if (env === 'production') {
    config.params = { url: 'https://synthetics-replicator.netlify.app/' }
  }
  return config;
};
