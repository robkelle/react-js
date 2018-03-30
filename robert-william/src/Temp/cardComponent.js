const Card = (props) => {
  return(
  	<div style={{color: '#4da6ff'}}>
    	<img width="75" src={props.avatar_url} />
      <div style={{display: "inline-block", marginLeft: 10}}>
      	<div>{props.name}</div>
      	<div>{props.company}</div>
      </div>
  	</div>
  );
}

const CardList = (props) => {
	return(
  	<div>
    	<Card name="Paul O’Shannessy"
        avatar_url="https://avatars1.githubusercontent.com/u/8445?v=4"
        company="Facebook"
      />
    </div>
  );
}

ReactDOM.render(<CardList />, mountNode);