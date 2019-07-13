const rne = jest.genMockFromModule('react-native-paper')

rne.withTheme = jest.fn(fn => fn)

module.exports = rne
