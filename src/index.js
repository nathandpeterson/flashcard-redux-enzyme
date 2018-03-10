import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { setStack } from './actions'

import { Switch, BrowserRouter, Route } from 'react-router-dom'
import App from './components/App'
import Stack from './components/Stack'
import StackForm from './components/StackForm'
import './index.css'

const store = createStore(rootReducer)
store.subscribe(() => console.log('store', store.getState()))
store.dispatch(setStack({id: 0, title: 'example', cards: []}))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/stack' component={Stack} />
                <Route exact path='/stack_form' component={StackForm} />
                <Route path='/' component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
)