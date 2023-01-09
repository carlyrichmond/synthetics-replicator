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
      schedule: 3,
      locations: ['united_kingdom'],
      privateLocations: [''],
    },
    /**
     * Project monitors settings
     */
    project: {
      id: 'synthetics-replicator-tests',
      url: 'https://793f58c8b0214b9dab2ddf62a985ddb5.eu-west-2.aws.cloud.es.io:443',
      space: 'default',
    },
  };
  if (env === 'production') {
    config.params = { url: 'https://synthetics-replicator.netlify.app/' }
  }
  return config;
};
