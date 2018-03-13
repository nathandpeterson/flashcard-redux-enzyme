import React from 'react'
import { shallow } from 'enzyme'
import { StackList } from '../../components/StackList'
import { stacks } from '../../data/fixtures'

const props = { stacks }

describe('StackList', () => {
    const stacklist = shallow(<StackList {...props} />)
    it('renders the correct number of links', () => {
        expect(stacklist.find('Link').length).toEqual(props.stacks.length)
    })
})