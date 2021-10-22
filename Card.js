function Card(props) {
  return (
    <div>
      {props.data.map((item, index) => (
        <div
          style={{
            border: "1px solid black",
            width: "200px",
            display: "inline-block",
            margin: "10px 10px",
            b,
          }}
        >
          <img src={props.data[index].img} width="200px" height="200px"></img>
          <h4>{props.data[index].name}</h4>
          <p>{props.data[index].price}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
