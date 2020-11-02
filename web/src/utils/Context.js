import {useContext, createContext} from 'react';


const StoreContext = createContext({
  token: null,
  setToken: () => {},
});

export default StoreContext;