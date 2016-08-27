import TheWireCharactersRoute from 'routes/TheWireCharacters'

describe('(Route) TheWireCharacters', () => {
  let _component

  beforeEach(() => {
    _component = TheWireCharactersRoute.component()
  })

  it('Should return a route configuration object', () => {
    expect(typeof(TheWireCharactersRoute)).to.equal('object')
  })

  it('Should define a route component', () => {
    expect(_component.type).to.equal('div')
  })
})
