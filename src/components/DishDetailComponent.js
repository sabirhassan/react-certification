import { getDefaultNormalizer } from '@testing-library/react';
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent'

class DishDetail extends Component {


    configureDate(date){
        let d1= new Date(date)
        d1= d1.toDateString()
        const arr = d1.split(" ")        
          
        return arr[1] + ' ' + arr[2] + ', '+ arr[3]
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(Comments){
        
        return Comments.map((Comment) => {
            return (
            <li>
                <div className="mb-2">{Comment.comment}</div>
                <div className="mb-2">-- {Comment.author} , {this.configureDate(Comment.date)}</div>
            </li>
            );
        });

    }

    render() {

        if (this.props.dish)
        {
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        
                        {this.renderDish(this.props.dish)}

                    </div>

                    <div  className="col-12 col-md-5 m-1">
                        
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {this.renderComments(this.props.dish.comments)}
                        </ul>

                    </div>

                </div>
            );
        }
        else
        {
            return <div></div>
        }
    }
}

export default DishDetail;