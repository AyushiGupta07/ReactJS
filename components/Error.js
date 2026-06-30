import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Kuch to hua hee,kuch galat hogya he!!</h2>
      <h2>{err.status}</h2>
    </div>
  );
};

export default Error;
