const reactRedux = jest.genMockFromModule('react-redux')

reactRedux.connect.mockImplementation(() => fn => fn)

module.exports = reactRedux
