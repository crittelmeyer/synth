declare module 'redux' {
  declare class Redux {
    applyMiddleware(...middleware: Array<any>): Function;
    compose(...functions: Array<Function>): Function;
    createStore(reducer: Function, initialState: ?any, enhancer: ?Function): Object;
    bindActionCreators(actionCreators: Object, dispatch: Function): Object;
    combineReducers(reducers: Object): Function;
  }
  declare var exports: Redux;
}
