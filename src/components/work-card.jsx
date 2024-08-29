/* eslint-disable react/prop-types */

const WorkCard = (props) => {
  return (
    <div
      className="work-card"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <img src={props.image} alt="" />
      <h1>{props.heading}</h1>
      <p>
        {props.text}
      </p>
    </div>
  );
};

export default WorkCard;
