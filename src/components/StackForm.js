import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { addStack } from '../actions'

export class StackForm extends Component {
    constructor(){
        super()

        this.state ={
            title: '',
            cards: []
        }
    }

    addCard(){        
        const { cards } = this.state
        const card = {id: cards.length,
                        prompt: '',
                        answer: ''}
        const updatedCards = [card, ...cards]
        this.setState({cards: updatedCards})
    }

    updateCard (e, i, part) {        
        const { cards } = this.state
        cards[i][part] = e.target.value
        this.setState({cards})
    }

    addStack () {
        this.props.addStack(this.state)
    }

    render(){
        return (
            <div>
                <Link className='link-home' to='/'>
                    <h4>Home</h4>
                </Link>
                <h4>Create a New Stack</h4>
                <br />
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Title:</ControlLabel>
                        {' '}
                        <FormControl onChange={e => this.setState({title: e.target.value})} />
                    </FormGroup>
                    {
                        this.state.cards.map((card, i)=> {
                            return <div key={card.id}>
                            <br />
                            <FormGroup>
                                <ControlLabel>Prompt:</ControlLabel>
                                {' '}
                                <FormControl onChange={e => this.updateCard(e, i, 'prompt')} />
                                {' '}
                                <ControlLabel >Answer:</ControlLabel>
                                {' '}
                                <FormControl onChange={e => this.updateCard(e, i, 'answer')}/>
                            </FormGroup>
                            </div>
                        })
                    }
                </Form>
                <Button onClick ={ () => this.addCard() }>Add Card</Button>
                {' '}
                <Button onClick ={() => this.addStack() }>Add Stack</Button>
            </div>
        )
    }
}

export default connect(null, { addStack })(StackForm)