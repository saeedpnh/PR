import { useContext } from "react";
import ApartmentContext from "../context/data";

function Pr() {
  const { pr, region } = useContext(ApartmentContext);

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
          {(() => {
            if (region == 3 && pr > 25) {
              return (
                <div className="pt-3 text-danger">قیمت اجاره عادلانه است</div>
              );
            }
            if (region == 2 && pr > 30) {
              return (
                <div className="pt-3 text-danger">قیمت اجاره عادلانه است</div>
              );
            }
            if (region == 2 && pr < 30 && pr > 25) {
              return (
                <div className="pt-3 text-danger">قیمت اجاره قابل توجه است</div>
              );
            }
            if (region == 2 && pr < 25) {
              return (
                <div className="pt-3 text-danger">قیمت اجاره خیلی زیاد است</div>
              );
            }
            if (region == 1 && pr == 30) {
              return (
                <div className="pt-3 text-danger">قیمت اجاره عادلانه است</div>
              );
            }
            if (region == 1 && pr > 30 && pr < 35) {
              return (
                <div className="pt-3 text-danger">
                  قیمت اجاره تقریبا عادلانه است
                </div>
              );
            }
            if (region == 1 && pr < 30) {
              return (
                <div className="pt-3 text-danger">قیمت اجاره عادلانه نیست</div>
              );
            }
          })()}
        </div>
      </>
    );
  }
}

export default Pr;
