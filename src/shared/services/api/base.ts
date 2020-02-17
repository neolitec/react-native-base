import DeviceInfo from 'react-native-device-info';
import ky from 'ky';

type Url = string;
type Options = object;

export interface ApiClient {
  get(url: Url, options?: Options): Promise<any>;
  post(url: Url, options?: Options): Promise<any>;
  put(url: Url, options?: Options): Promise<any>;
  patch(url: Url, options?: Options): Promise<any>;
  delete(url: Url, options?: Options): Promise<any>;
  head(url: Url, options?: Options): Promise<any>;
}
const appVersion = DeviceInfo.getReadableVersion();
const bundleId = DeviceInfo.getBundleId();
const buildNumber = DeviceInfo.getBuildNumber();
const osVersion = DeviceInfo.getSystemVersion();
const os = DeviceInfo.getSystemName();

const userAgent = `ReactNativeBase/${appVersion} (${bundleId}; build:${buildNumber}; ${os} ${osVersion})`;

const apiClient: ApiClient = ky.create({
  prefixUrl: '',
  headers: {
    Accept: 'application/json',
    'User-Agent': userAgent,
  },
});

const { get, post, put, patch, head, delete: destroy } = apiClient;
export { get, post, put, patch, head, destroy };
