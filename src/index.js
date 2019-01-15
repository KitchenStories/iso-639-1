import LANGUAGES_LIST_DATA from './data';

export default class ISO6391 {
  constructor() {
    this.LANGS = LANGUAGES_LIST_DATA
  }

  getLanguages(codes = []) {
    return codes.map(code => ({
      code,
      name: this.getName(code),
      nativeName: this.getNativeName(code),
    }));
  }

  getName(code) {
    return this.validate(code) ? this.LANGS[code].name : '';
  }

  getAllNames() {
    return Object.values(this.LANGS).map(l => l.name);
  }

  getNativeName(code) {
    return this.validate(code) ? this.LANGS[code].nativeName : '';
  }

  getAllNativeNames() {
    return Object.values(this.LANGS).map(l => l.nativeName);
  }

  getCode(name) {
    const code = Object.keys(this.LANGS).find(code => {
      const language = this.LANGS[code];

      return (
        language.name.toLowerCase() === name.toLowerCase() ||
        language.nativeName.toLowerCase() === name.toLowerCase()
      );
    });
    return code || '';
  }

  getAllCodes() {
    return Object.keys(this.LANGS);
  }

  validate(code) {
    return this.LANGS[code] !== undefined;
  }
}
