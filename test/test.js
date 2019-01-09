import test from 'ava'
import ISO6391 from '../src/index'

const langCodes = new ISO6391()

test('getName en', (t) => {
  return t.is(langCodes.getName('en'), 'English')
})
test('getName zh', (t) => {
  return t.is(langCodes.getName('zh'), 'Chinese')
})
test('getName xx', (t) => {
  return t.is(langCodes.getName('xx'), '')
})

test('getNativeName en', (t) => {
  return t.is(langCodes.getNativeName('en'), 'English')
})
test('getNativeName zh', (t) => {
  return t.is(langCodes.getNativeName('zh'), '中文')
})
test('getNativeName xx', (t) => {
  return t.is(langCodes.getNativeName('xx'), '')
})

test('getCode English', (t) => {
  return t.is(langCodes.getCode('English'), 'en')
})
test('getCode Chinese', (t) => {
  return t.is(langCodes.getCode('Chinese'), 'zh')
})
test('getCode 中文', (t) => {
  return t.is(langCodes.getCode('中文'), 'zh')
})
test('getCode xx', (t) => {
  return t.is(langCodes.getCode('xx'), '')
})

test('validate en', (t) => {
  return t.is(langCodes.validate('en'), true)
})
test('validate zh', (t) => {
  return t.is(langCodes.validate('zh'), true)
})
test('validate xx', (t) => {
  return t.is(langCodes.validate('xx'), false)
})

test('getLanguages [en, zh, xx]', (t) => {
  return t.deepEqual(langCodes.getLanguages(['en', 'zh', 'xx']), [{
      code: 'en',
      name: 'English',
      nativeName: 'English',
    },
    {
      code: 'zh',
      name: 'Chinese',
      nativeName: '中文',
    },
    {
      code: 'xx',
      name: '',
      nativeName: '',
    },
  ])
})
