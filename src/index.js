import LANGUAGES_LIST from './data';

export default class ISO6391 {
  getLanguages(codes = []) {
    return codes.map(code => ({
      code,
      name: this.getName(code),
      nativeName: this.getNativeName(code),
    }));
  }

  getName(code) {
    return this.validate(code) ? LANGUAGES_LIST[code].name : '';
  }

  getAllNames() {
    return Object.values(LANGUAGES_LIST).map(l => l.name);
  }

  getNativeName(code) {
    return this.validate(code) ? LANGUAGES_LIST[code].nativeName : '';
  }

  getAllNativeNames() {
    return Object.values(LANGUAGES_LIST).map(l => l.nativeName);
  }

  getCode(name) {
    const code = Object.keys(LANGUAGES_LIST).find(code => {
      const language = LANGUAGES_LIST[code];

      return (
        language.name.toLowerCase() === name.toLowerCase() ||
        language.nativeName.toLowerCase() === name.toLowerCase()
      );
    });
    return code || '';
  }

  getAllCodes() {
    return Object.keys(LANGUAGES_LIST);
  }

  validate(code) {
    return LANGUAGES_LIST[code] !== undefined;
  }
}