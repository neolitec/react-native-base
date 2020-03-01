import { useEffect, useState } from 'react';
import { autorun } from 'mobx';
import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import { useRootStore } from '../../store';
import RootStore from '../../store/root-store';
import translator from './translator';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  /* eslint-disable global-require */
  en: () => require('../../../i18n/en.json'),
  fr: () => require('../../../i18n/fr.json'),
  /* eslint-enable global-require */
};

export type Language = {
  languageTag: keyof typeof translationGetters;
  isRTL: boolean;
};

// fallback if no available language fits
const fallback: Language = { languageTag: 'en', isRTL: false };

export async function selectTranslations(language?: Partial<Language>) {
  const { languageTag, isRTL } = language?.languageTag
    ? { ...fallback, ...language }
    : (RNLocalize.findBestAvailableLanguage(
        Object.keys(translationGetters),
      ) as Language) || fallback;

  // update layout direction
  I18nManager.forceRTL(isRTL);

  translator.configure({
    lng: languageTag,
    translations: {
      [languageTag]: translationGetters[languageTag](),
    },
  });
  return { languageTag, isRTL };
}

export function useConfigureI18n(rootStore: RootStore) {
  const init = async () => {
    try {
      const language = await selectTranslations();
      rootStore.i18nStore.setLanguage(language);
      rootStore.i18nStore.setReady();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, []);
}

export function useI18n() {
  const { i18nStore } = useRootStore();
  const [, setCurrentLanguage] = useState(i18nStore.language);

  useEffect(
    () =>
      autorun(
        () => {
          setCurrentLanguage(i18nStore.language);
        },
        {
          name: 'update-locales',
        },
      ),
    [],
  );

  return {
    tr(key: string, params?: any): string {
      return translator.translate(key, params);
    },
    async setLanguage(language: Partial<Language>) {
      i18nStore.setLanguage(await selectTranslations(language));
    },
  };
}
