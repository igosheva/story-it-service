export type TEndpointConfig = 'getPokemons';

type TConfig = {
  client: TClientConfig;
};

type TServerConfig = {
  protocol: string;
  host: string;
};

type TEndpointUrlConfig = {
  pathname: string;
};

export type TQueryConfig = {
  name: string;
};

export type TConfigResponse = {
  query: TQueryConfig;
} & TServerConfig &
  TEndpointUrlConfig;

export type TClientConfig = {
  server: TServerConfig;
  endpoint: {
    [key: string]: {
      method: string;
      url: TEndpointUrlConfig;
    };
  };
};

const config: TConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        url: {
          pathname: '/api/v1/pokemons',
        },
      },
    },
  },
};

export default config;
