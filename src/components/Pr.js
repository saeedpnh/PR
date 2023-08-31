import { useContext } from "react";
import ApartmentContext from "../context/data";

function Pr() {
  const { pr } = useContext(ApartmentContext);

  if (isNaN(pr)) {
    return false;
  } else {
    return (
      <>
        <div className="text-center desc">
          <h5 className="pb-2">
            نسبت قیمت به اجاره<span>(P/R)</span>
          </h5>
          <div className="pr-result shadow  bg-body rounded">
            <h1 className="text-secondary">{pr}</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Pr;
