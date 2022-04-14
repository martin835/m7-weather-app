import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import mainReducer from "../reducers";

const composeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  myLocations: { locations: [] },
};

/* const persistConfig = {
  key: "root",
  storage: storageSession,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
}; */

/* const persistedReducer = persistReducer(persistConfig, mainReducer); */

export const configureStore = createStore(
  mainReducer,
  initialState,
  composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

/* export const persistor = persistStore(configureStore); */
