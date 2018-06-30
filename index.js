'Hello!'.toUpperCase()
function shout(string) {
  return string.toUpperCase ()
}

'HELLO'.toLowerCase()
function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  
}
describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})