
const path = process.env.ENV === 'development' ? "./dev" : "./app"
const Module = require(path).default

const initialState = {};
const app = Module.NS.MainApplication.new(initialState);
console.log('>>>>QQQQ 333');
app.start();
console.log('>>>>QQQQ 444');
const { ERROR, DEBUG, LEVELS, SEND_TO_LOG } = Module.NS.Pipes.NS.LogMessage;
app.setLogLevelMethod(DEBUG);
console.log('>>>>QQQQ 1010+1++');

console.log('>>>>QQQQ 444++', ERROR, DEBUG, LEVELS, SEND_TO_LOG);
app.send(
  SEND_TO_LOG, 'Hello world', LEVELS[DEBUG]
);
console.log('>>>>QQQQ 555');
