import { bugResolved, createBug, deleteBug } from "./public/src/actions";
import store from "./public/src/store";

let unsubscribe = store.subscribe(() => {
  //console.log("state chaned", store.getState());
});

createBug("null Pointer description");
createBug("server error");

console.log(store.getState());

bugResolved(1);

console.log(store.getState());
unsubscribe();
deleteBug(2);
console.log(store.getState());
