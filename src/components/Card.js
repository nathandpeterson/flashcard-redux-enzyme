import React, { Component } from 'react'

class Card extends Component {
    constructor(){
        super()
        this.state = { reveal: false }
    }

    reveal = () => {
        return this.state.reveal ? 'text-revealed' : 'text-hidden'
    }

    render(){
        const { prompt, answer } = this.props.card
        return (
            <div className='card' onClick={() => this.setState({reveal: !this.state.reveal})}>
                <div className='card-prompt'>
                    <h4>{ prompt }</h4>
                </div>
                <div className='card-answer'>
                    <h4 className={this.reveal()}>{ answer }</h4>
                </div>
            </div>
        )
    }
}

export default Card 