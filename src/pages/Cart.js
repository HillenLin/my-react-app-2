
import React, {Component} from 'react';

class Card extends Component{
    render(){
        return(
            <section className="card-wrapper">
                <h1 className="cartTitle">{this.props.cardInfo.title}</h1>
                <img className="card-img-wrapper" alt="cart" src={this.props.cardInfo.imgUrl}/>
                <h2 className="cartSubTitle">{this.props.cardInfo.subTitle}</h2>
                <p>{this.props.cardInfo.content}</p>
            </section>
        );
    }
}

export default Card;