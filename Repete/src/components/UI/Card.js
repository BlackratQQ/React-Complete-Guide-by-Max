import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>; //children je reservovaný jméno Reactem. V ExpenseItemu -> <Card><children></Card>
};

export default Card;
