import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
};
