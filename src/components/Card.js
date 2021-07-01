import React, { Component } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import Axios from "axios";
import qs from "qs";

class Card extends Component {

    constructor(props) {
        super(props);
        this.HandleOpenDetails = this.HandleOpenDetails.bind(this);
    }
    HandleOpenDetails() {
        window.open(this.props.originalUrl, '_blank');

        var userAction = { entryType: 'Click', entryName: this.props.title };
        Axios.post('/UserAction', userAction);

    }

    render() {

        return (

            <div>
                {<div className="card-grid-space">
                    <a className="card" onClick={this.HandleOpenDetails} style={{ backgroundImage: `url(${this.props.image})` }}>
                        <h1 className='card-tittle'>{this.props.title}</h1>
                        <div className='card-p'>
                            <LinesEllipsis
                                text={this.props.description}
                                maxLine='4'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            />

                        </div>

                        <div className="date">{this.props.publishedAt.split('T')[0]}</div>
                    </a>
                </div>
                }

            </div>
        )
    }
}
export default Card;
