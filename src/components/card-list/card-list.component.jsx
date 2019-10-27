import React, { Component } from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export class CardList extends Component {
    render() {
        return (
            <div className='card-list'>
                {
                    this.props.monsters.map(monster =>
                        <Card key={monster.id} monster={monster}></Card>
                    )
                }
            </div>
        )
    }
}