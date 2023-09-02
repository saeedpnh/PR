import { useContext } from "react";
import ApartmentContext from "../context/data";
import formatThousands from "format-thousands";

function Formula() {
  const {
    toMortgage,
    mortgageToRent,
    fullMortgage,
    mortgageForEachMeter,
    fullRentInEachMonth,
    rentForEachMeter,
    rentPrice,
    mortgage,
    p_mortgage,
    p_mortgageToRent,
    p_fullMortgage,
    p_mortgageForEachMeter,
    p_rentPrice,
    p_toMortgage,
    p_fullRentInEachMonth,
    p_rentForEachMeter,
  } = useContext(ApartmentContext);

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-12 col-md-3">
          <p>مبلغ رهن</p>
          <p className="text-bg-warning p-1 rounded text-center result">
            {formatThousands(mortgage, ",")}
          </p>
          <p className="text-secondary">
            <small>{p_mortgage}</small>
          </p>
        </div>
        <div className="col-12 col-md-3">
          <p>تبدیل رهن فعلی به اجاره</p>
          <p className="text-bg-warning p-1 rounded text-center result">
            {formatThousands(mortgageToRent, ",")}
          </p>
          <p className="text-secondary">
            <small>{p_mortgageToRent}</small>
          </p>
        </div>
        <div className="col-12 col-md-3">
          <p>رهن کامل</p>
          <p className="text-bg-warning p-1 rounded text-center result">
            {formatThousands(fullMortgage, ",")}
          </p>
          <p className="text-secondary">
            <small>{p_fullMortgage}</small>
          </p>
        </div>
        <div className="col-12 col-md-3">
          <p>رهن به ازاء هر متر مربع</p>
          <p className="text-bg-warning p-1 rounded text-center result">
            {formatThousands(mortgageForEachMeter, ",")}
          </p>
          <p className="text-secondary">
            <small>{p_mortgageForEachMeter}</small>
          </p>
        </div>
      </div>

      <div className="row justify-content-between mt-1" dir="rtl">
        <div className="col-md-3">
          <p>مبلغ اجاره هر ماه</p>
          <p className="text-bg-warning p-1 rounded text-center result">
            {formatThousands(rentPrice, ",")}
          </p>
          <p className="text-secondary">
            <small>{p_rentPrice}</small>
          </p>
        </div>
        <div className="col-md-3">
          <p>تبدیل اجاره فعلی به رهن</p>
          <p className="text-bg-warning p-1 rounded text-center result">
            {formatThousands(toMortgage, ",")}
          </p>
          <p className="text-secondary">
            <small>{p_toMortgage}</small>
          </p>
        </div>
        <div className="col-md-3">
          <p>اجاره کامل در هر ماه</p>
          <p className="text-bg-warning p-1 rounded text-center result">
            {formatThousands(fullRentInEachMonth, ",")}
          </p>
          <p className="text-secondary">
            <small>{p_fullRentInEachMonth}</small>
          </p>
        </div>
        <div className="col-md-3">
          <p>اجاره به ازاء هر متر مربع</p>
          <p className="text-bg-warning p-1 rounded text-center result">
            {formatThousands(rentForEachMeter, ",")}
          </p>
          <p className="text-secondary">
            <small>{p_rentForEachMeter}</small>
          </p>
        </div>
      </div>
    </>
  );
}
export default Formula;