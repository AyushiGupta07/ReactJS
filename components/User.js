import { useEffect, useState } from "react";
const User = (props) => {
  const { name } = props;
  const [count,setCount] = useState(0);

  useEffect(()=>{},[]);
  
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : Gurugram</h3>
      <h4>Contact : 2767328632323</h4>
    </div>
  );
};

export default User;
