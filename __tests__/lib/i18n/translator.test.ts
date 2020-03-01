import translator, {
  Translator,
} from '../../../src/shared/lib/i18n/translator';

const translations = {
  en: {
    test: 'test_en',
    interpolation1: 'Hi, {{name}}!',
    interpolation2: 'Hi, {{name}}! Why are you {{mood}}.',
    interpolation3: 'Hi, {{name}}! You are {{age}} which is {{judgment}}.',
  },
  fr: {
    test: 'test_fr',
  },
};

describe('Translator', () => {
  it('should be not configured by default', () => {
    expect(translator.isConfigured).toBeFalsy();
  });

  describe('when configured', () => {
    let testTranslator: Translator;
    let errorSpy: jest.Mock;

    beforeEach(() => {
      errorSpy = jest.fn();
      testTranslator = new Translator();
      testTranslator.configure({
        lng: 'en',
        translations,
        onError: errorSpy,
      });
    });

    it('should get translated text', () => {
      expect(testTranslator.translate('test')).toEqual(translations.en.test);
    });

    it("should default to key when key does't exist", () => {
      expect(testTranslator.translate('non-existent')).toEqual('non-existent');
    });

    it('should switch language', () => {
      // Cache current translation
      testTranslator.translate('test');
      testTranslator.configure({ lng: 'fr' });
      expect(testTranslator.translate('test')).toEqual(translations.fr.test);
    });

    describe('Interpolation', () => {
      const params = {
        name: 'Calimero',
        mood: 'happy',
      };

      describe('when no params are provided', () => {
        it('should replace placeholder with ?', () => {
          const result = testTranslator.translate('interpolation1', params);
          expect(result).toEqual(`Hi, ${params.name}!`);
        });
      });

      describe('when translation already called', () => {
        it('should not be recalculated', () => {
          // Call once...
          testTranslator.translate('interpolation1', params);
          // and delete translations!
          testTranslator.translations = {};
          const result = testTranslator.translate('interpolation1', params);
          expect(result).toEqual(`Hi, ${params.name}!`);
        });
      });

      describe('when params are provided', () => {
        it('should replace placeholder with the value', () => {
          const result = testTranslator.translate('interpolation2', params);
          expect(result).toEqual(
            `Hi, ${params.name}! Why are you ${params.mood}.`,
          );
        });

        it('should replace all placeholders', () => {
          const result = testTranslator.translate('interpolation3', params);
          expect(result).toEqual(`Hi, ${params.name}! You are ? which is ?.`);
        });

        it('should raise an error on missing param', () => {
          testTranslator.translate('interpolation3', params);
          expect(errorSpy).toHaveBeenCalledWith(
            'Translation "interpolation3" needs parameter "age".',
          );
          expect(errorSpy).toHaveBeenCalledWith(
            'Translation "interpolation3" needs parameter "judgment".',
          );
        });
      });
    });
  });
});
