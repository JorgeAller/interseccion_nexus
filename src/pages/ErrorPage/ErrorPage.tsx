import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <>
      <h1>SE PRODUJO UN ERROR</h1>
      <span>{error.message} </span>
      <Link to="/" > Recargar la página</Link>
    </>
  );
};
