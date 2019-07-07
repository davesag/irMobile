const rne = jest.genMockFromModule('react-native-elements')

rne.withTheme = jest.fn(fn => fn)

module.exports = rne
