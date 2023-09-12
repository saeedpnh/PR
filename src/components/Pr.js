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
                <div>
                  <p className="pt-3 text-success">قیمت اجاره عادلانه است</p>
                  <p>مناطق جنوبی نسبت در مناطق جنوبی 20 تا 25</p>
                </div>
              );
            }
            if (region == 2 && pr > 30) {
              return (
                <div>
                  <p className="pt-3 text-success">قیمت اجاره عادلانه است</p>
                  <p>مناطق میانی- بالاتر از انقلاب پایین تر از همت</p>
                </div>
              );
            }
            if (region == 2 && pr < 30 && pr > 25) {
              return (
                <div>
                  <p className="pt-3 text-danger">قیمت اجاره قابل توجه است</p>
                  <p>مناطق میانی- بالاتر از انقلاب پایین تر از همت</p>
                </div>
              );
            }
            if (region == 2 && pr < 25) {
              return (
                <div>
                  <p className="pt-3 text-danger">قیمت اجاره خیلی زیاد است</p>
                  <p>مناطق میانی- بالاتر از انقلاب پایین تر از همت</p>
                </div>
              );
            }
            if (region == 1 && pr == 30) {
              return (
                <div>
                  <p className="pt-3 text-success">قیمت اجاره عادلانه است</p>
                  <p>مناطق شمالی- بالای همت نسبت در مناطق شمالی 30 تا 35</p>
                </div>
              );
            }
            if (region == 1 && pr > 30 && pr < 35) {
              return (
                <div>
                  <p className="pt-3 text-primary">
                    قیمت اجاره تقریبا عادلانه است
                  </p>
                  <p>مناطق شمالی- بالای همت نسبت در مناطق شمالی 30 تا 35</p>
                </div>
              );
            }
            if (region == 1 && pr < 30) {
              return (
                <div>
                  <p className="pt-3 text-danger">قیمت اجاره عادلانه نیست</p>
                  <p>مناطق شمالی- بالای همت نسبت در مناطق شمالی 30 تا 35</p>
                </div>
              );
            }
          })()}
        </div>
      </>
    );
  }
}

export default Pr;
