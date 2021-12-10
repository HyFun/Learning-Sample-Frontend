import { createContext, useReducer } from "react";

export const ACTION_ADD = "ACTION_ADD";
export const ACTION_DELETE = "ACTION_DELETE";
export const ACTION_CHANGE_STATE = "ACTION_CHANGE_STATE";

export const Context = createContext();

const reducer = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case ACTION_ADD:
      return [data, ...state];
    case ACTION_DELETE:
      return [...state.filter((v) => v.id !== data.id)];
    case ACTION_CHANGE_STATE:
      return state.map((v) => {
        if (v.id === data.id) {
          v.done = !v.done;
        }
        return v;
      });
    default:
      return state;
  }
};

const initialState = [];

export const Provider = ({ children }) => {
  const [list, dispatch] = useReducer(reducer, initialState);
  const [action, dispatchAction] = useReducer((state, action) => {
    if (action.type) {
      return action.type;
    } else {
      return "all";
    }
  }, "all");
  return (
    <Context.Provider value={{ list, dispatch, action, dispatchAction }}>
      {children}
    </Context.Provider>
  );
};
