// config
import config from '../config';

// types
import type { TEndpointConfig, TConfigResponse, TQueryConfig } from '../config';

function getUrlWithParamsConfig(endpointConfig: TEndpointConfig, query: TQueryConfig): TConfigResponse {
  return { ...config.client.server, ...config.client.endpoint[endpointConfig].url, query };
}

export default getUrlWithParamsConfig;
