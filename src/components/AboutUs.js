import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function AboutUs() {
  const location = useLocation();
  const params = useParams();
  const searchParams = useSearchParams();
  //   React.useEffect(() => {
  //     console.log(location, params, searchParams);
  //   }, []);
  return (
    <div>
      <h3>Hello{params.id}</h3>
    </div>
  );
}
