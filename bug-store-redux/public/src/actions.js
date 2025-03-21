import store from "./store";
import * as actions from "./actionTypes";

export const createBug = (description) => {
  return store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
      description,
    },
  });
};

export const deleteBug = (id) => {
  return store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
      id,
    },
  });
};

export const bugResolved = (id) => {
  return store.dispatch({
    type: actions.BUG_RESOLVED,
    payload: {
      id,
    },
  });
};
