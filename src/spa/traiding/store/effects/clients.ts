import { ContractClient, LinearClient } from 'bybit-api';

const API_KEY = '';
const PRIVATE_KEY = '';
const testnet = false;
const baseUrl = 'https://api.bytick.com';

const axiosRequestConfig = {
  baseURL: baseUrl,
};

const restClientOptions = {
  // override the max size of the request window (in ms) [Переопределить максимальный размер окна запроса (в мс)]
  recv_window: 30000,
  /** Your API key */
  /*key: API_KEY,*/
  /** Your API secret */
  /*secret: PRIVATE_KEY,*/
  /** Set to `true` to connect to testnet. Uses the live environment by default. */
  testnet,

  // how often to sync time drift with bybit servers
  //sync_interval_ms?: number | string;

  // Default: false. Disable above sync mechanism if true.
  //disable_time_sync?: boolean;

  // Default: false. If true, we'll throw errors if any params are undefined
  //strict_param_validation?: boolean;

  // Optionally override API protocol + domain
  // e.g 'https://api.bytick.com'
  baseUrl,

  // Default: true. whether to try and post-process request exceptions.
  //parse_exceptions?: boolean;
};

export const getLinearClientClientPublic = () => {
  return new LinearClient(
    restClientOptions,
    axiosRequestConfig,
  );
};

export const getLinearClientClientPrivate = () => {
  return new LinearClient(
    restClientOptions,
    axiosRequestConfig,
  );
};

