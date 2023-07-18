import ExpenselItem from "./ExpenselItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenselItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenselItem>
      <ExpenselItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenselItem>
      <ExpenselItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenselItem>
      <ExpenselItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenselItem>
    </Card>
  );
};
export default Expenses;