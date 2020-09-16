import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) 
{
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

function RenderComments({Comments}){

        
    return Comments.map((Comment) => {
        return (
        <li>
            <div className="mb-2">{Comment.comment}</div>
            <div className="mb-2">-- {Comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(Comment.date)))} </div>
        </li>
        );
    });

}

const DishDetail = (props) => {

/*
    configureDate(date){
        let d1= new Date(date)
        d1= d1.toDateString()
        const arr = d1.split(" ")        
          
        return arr[1] + ' ' + arr[2] + ', '+ arr[3]
    }
*/
  

    if (props.dish)
    {
        return (
            <div className="container">

                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        
                        <RenderDish dish={props.dish}/>

                    </div>

                    <div  className="col-12 col-md-5 m-1">
                        
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            <RenderComments Comments={props.dish.comments}/>
                        </ul>

                    </div>

                </div>

            </div>

        );
    }
    else
    {
        return <div></div>
    }
    
}

export default DishDetail;