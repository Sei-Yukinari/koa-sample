import config from './config';

function getConfig() {
  const env = typeof process.env.NODE_ENV === 'undefined'
      ? 'development'
      : process.env.NODE_ENV;
  return config[env];
}

export default getConfig();
