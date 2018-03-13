import React from 'react'
import { mount } from 'enzyme'
import Card from '../../components/Card'

const props = { card: 
    { id: 0, prompt: 'card prompt test', answer: 'card test answer'} 
        }

describe('Card', () => {
    const card = mount(<Card {...props} />)
    it('sets `reveal` state to be `false`', () => {
        expect(card.state().reveal).toBe(false)
    })
    it('displays the prompt', () => {
        expect(card.find('.card-prompt').at(0).text()).toBe(props.card.prompt)
    })
    it('renders the card answer', () => {
        expect(card.find('h4').at(1).text()).toBe(props.card.answer)
    })
    it('applies the text-hidden class to the card answer', () => {
        expect(card.find('.card-answer h4').hasClass('text-hidden')).toBe(true)
    })

    describe('and clicking the card', () => {
        beforeEach(() => card.simulate('click'))
        it('changes the state to reveal', () => {
            expect(card.state().reveal).toBe(true)
        })
        it('updates the class of the card', () => {
            expect(card.find('.card-answer h4').hasClass('text-revealed')).toBe(true)
        })
    })
})
