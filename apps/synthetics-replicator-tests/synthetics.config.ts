import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'https://elastic.github.io/synthetics-demo/',
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
  if (env !== 'development') {
    /**
     * Override configuration specific to environment
     * Ex: config.params.url = ""
     */
  }
  return config;
};
