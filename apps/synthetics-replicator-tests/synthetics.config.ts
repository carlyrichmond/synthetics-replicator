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
      url: 'https://b1c2da524b264fcb8c3fb3060f2d2073.eu-west-2.aws.cloud.es.io:443',
      space: 'default',
    },
  };
  if (env === 'production') {
     config.params = { url: 'https://synthetics-replicator.netlify.app/' }
  }
  return config;
};
