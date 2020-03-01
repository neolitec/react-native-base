/* eslint-disable no-underscore-dangle */
import memoize from 'lodash.memoize';

type Dict = Record<string, string>;
type Translations = Record<string, Dict>;

export class Translator {
  public lng: string | null = null;

  public translations: Translations | null = null;

  public translate = memoize(
    (key: string, params?: Dict) => this._translate(key, params),
    (key: string, params?: Dict) =>
      params ? key + JSON.stringify(params) : key,
  );

  private onError: (...args: any[]) => void = console.log;

  public configure({
    lng,
    translations,
    onError = console.log,
  }: {
    lng: string;
    translations?: Translations;
    onError?: (...args: []) => void;
  }) {
    this.lng = lng;
    this.translations = translations || this.translations || {};

    this.onError = onError;
    if (this.translate.cache.clear) this.translate.cache.clear();
    if (!this.translations[lng]) {
      this.onError(`Language ${lng} is not available.`);
    }
  }

  private _translate(key: string, params?: Dict): string {
    if (!this.translations || !this.lng) {
      this.onError('Translator has not been initialized!');
      return key;
    }
    const currentDict = this.translations[this.lng];
    if (!currentDict) return key;
    const translated = currentDict[key];
    const result = translated || key;
    return params ? this.interpolate(result, params, key) : result;
  }

  private interpolate(text: string, params: Dict, key: string): string {
    let output = String(text);

    // Replace every available params in the text.
    Object.entries(params).forEach(([paramKey, value]) => {
      output = output.replace(`{{${paramKey}}}`, value);
    });

    // Possibly not implemented method on some platforms...
    if (output.matchAll) {
      const matches = Array.from(
        output.matchAll(/\{\{[a-zA-Z][a-zA-Z0-9]*\}\}/g),
        m => m[0],
      );
      matches.forEach(match => {
        this.onError(
          `Translation "${key}" needs parameter "${match.replace(
            /(\{{2})|(\}{2})/g,
            '',
          )}".`,
        );
        output = output.replace(match, '?');
      });
    }

    return output;
  }

  get isConfigured() {
    return !!this.lng && !!this.translations;
  }
}

const translator = new Translator();

export default translator;
