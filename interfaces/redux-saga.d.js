declare module 'redux-saga' {
  declare function takeEvery(pattern: any, saga: Function, args: ?Array<any>): Function
  declare var exports: any
}

declare module 'redux-saga/effects' {
  declare function fork(fn: function, ...args: any[]): Function
  declare function call(fn: function, ...args: any[]): Function
  declare function put(action: Object): Function
  declare function take(pattern: string | Array<any> | Function): Function
}
