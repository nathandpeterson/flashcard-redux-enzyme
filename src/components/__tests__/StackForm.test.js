import React from 'react'
import { shallow } from 'enzyme'
import { StackForm } from '../../components/StackForm'
const changeTitle = 'Change Title'
const changePrompt = 'Change Prompt'
const changeAnswer = 'Change Answer'

describe('StackForm', () => {
    const stackform = shallow(<StackForm />)
    it('renders the create label', () => {
       expect(stackform.find('h4').at(1).text()).toEqual('Create a New Stack')
    })
    it('renders the home label', () => {
       expect(stackform.find('h4').at(0).text()).toEqual('Home')
    })
    it('renders a Form component', () => {
       expect(stackform.find('Form').exists()).toBe(true)
    })
    it('renders a button to add a new card', () => {
       expect(stackform.find('Button').at(0).props().children).toEqual('Add Card')
    })
    it('renders a button to save and add new stack', () => {
        expect(stackform.find('Button').at(1).props().children).toEqual('Add Stack')
     })

    describe('and updating the title', () => {
        beforeEach(() => {
            stackform.find('FormControl')
                .simulate('change', {target: { value: changeTitle }})
        })
        it('updates the title in state', () => {
            expect(stackform.state().title).toEqual(changeTitle)
        })
    })
    describe('when adding each card', () => {
        const cardQuantity = stackform.state().cards.length
        beforeEach(() => {
            stackform.find('Button').at(0).simulate('click')
        })
        afterEach(() => {
            stackform.setState({cards: []})
        })
        it('adds a new card to the state', () => {
            expect(stackform.state().cards.length).toEqual(cardQuantity + 1)
        })
        it('renders the prompt section', () => {
            expect(stackform.find('ControlLabel').at(1).props().children).toEqual('Prompt:')
        })
        it('renders the answer section', () => {
            expect(stackform.find('ControlLabel').at(2).props().children).toEqual('Answer:')
        })
        describe('and updating the card prompt', () => {
            beforeEach(() =>{
                stackform.find('FormControl').at(1)
                    .simulate('change', { target: { value: changePrompt}})
            })
            it('changes the prompt in the state', () => {
                expect(stackform.state().cards[0].prompt).toEqual(changePrompt)
            })
        })
        describe('and updating the card answer', () => {
            beforeEach(() => {
                stackform.find('FormControl').at(2)
                    .simulate('change', {target: { value : changeAnswer}})
            })
            it('changes the answer in the state', () => {
                expect(stackform.state().cards[0].answer).toEqual(changeAnswer)
            })
        })
    })
})