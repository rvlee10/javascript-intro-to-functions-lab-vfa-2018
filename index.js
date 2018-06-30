'Hello!'.toUpperCase()
function shout(string) {
  return string.toUpperCase ()
}

'HELLO'.toLowerCase();
function whisper(string) {
  return string.toLowerCase();
}

"hello".toUpperCase();
function logShout(string) {
  console.log(string);
  spyOn(console, 'log').andCallThrough()
  string.toUpperCase()

}
