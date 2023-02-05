const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceActions = require("./features/icecream/iceCreamSlice").iceCreamActions;

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  // console.log("Updated State", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());

store.dispatch(cakeActions.restock(3));

store.dispatch(iceActions.ordered());
store.dispatch(iceActions.ordered());
store.dispatch(iceActions.ordered());
store.dispatch(iceActions.ordered());

store.dispatch(iceActions.restock(4));

unsubscribe();
