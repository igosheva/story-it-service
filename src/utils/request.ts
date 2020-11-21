// libs
import Url from 'url';

// utils
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

// types
import type { TEndpointConfig, TQueryConfig } from '../config';

async function req(endpoint: TEndpointConfig, query: TQueryConfig): Promise<any> {
  const url = Url.format(getUrlWithParamsConfig(endpoint, query));

  /* eslint-disable no-return-await */
  return await fetch(url).then((res) => res.json());
}

export default req;
