import DeviceInfo from 'react-native-device-info';
import ky from 'ky';

type Url = string;
type Options = object;

export interface ApiClient {
  get(url: Url, options?: Options): Promise<unknown>;
  post(url: Url, options?: Options): Promise<unknown>;
  put(url: Url, options?: Options): Promise<unknown>;
  patch(url: Url, options?: Options): Promise<unknown>;
  delete(url: Url, options?: Options): Promise<unknown>;
  head(url: Url, options?: Options): Promise<unknown>;
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
