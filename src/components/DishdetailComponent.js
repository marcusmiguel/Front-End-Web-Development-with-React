import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    return (
      <div className="col-sm-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      return (
        <div className="col-sm-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul class="list-unstyled">
            {comments.map((comment) => (
              <li key={comment.id}>
                <div className="row">
                  <div className="col-12">{comment.comment} </div>
                </div>
                <div className="row">
                  <div className="col-12 m-1">
                    -- {comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",

                      month: "long",

                      day: "2-digit",
                    }).format(new Date(comment.date))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    } else return <div></div>;
  }
  render() {
    if (this.props.dish != null) {
      return (
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish.comments)}
        </div>
      );
    } else return <div></div>;
  }
}

export default DishDetail;
