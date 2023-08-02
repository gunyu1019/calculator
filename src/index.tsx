import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import rootReducer from "./reducers";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = createStore(rootReducer, applyMiddleware());

root.render(<React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
</React.StrictMode>);
