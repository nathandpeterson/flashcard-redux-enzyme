import React from 'react'
import rootReducer from '../index'
import * as actions from '../../actions'
import { stack, stacks } from '../../data/fixtures'

describe('Root Reducer', () => {
    it('returns the initial state', () => {
        expect(rootReducer({},{})).toEqual({stack: {}, stacks: []})
    })
    it('sets the main stack', () => {
        expect(rootReducer({}, { type: actions.SET_STACK, stack}))
            .toEqual({ stack, stacks: [] })
    })
    it('it loads stacks', () => {
        expect(rootReducer({}, {type: actions.LOAD_STACKS, stacks}))
            .toEqual({stack: {}, stacks})
    })
    it('adds a new stack', () => {
        expect(rootReducer({}, {type: actions.ADD_STACK, stack}))
            .toEqual({stack: {}, stacks: [stack]})
    })
})