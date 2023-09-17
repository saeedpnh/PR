import { useContext } from "react";
import ApartmentContext from "../context/data";
import Fair from "../svg/Fair";
import AlmostFair from "../svg/AlmostFair";
import Expensive from "../svg/Expensive";
import LessExpensive from "../svg/LessExpensive";

function Pr() {
  const { pr, region } = useContext(ApartmentContext);

  if (isNaN(pr)) {
    return false;
  } else {
    return (
      <>
        <div className="text-center desc">
          <h5 className="pb-2 pt-2">
            نسبت قیمت به اجاره<span>(P/R)</span>
          </h5>
          <div className="d-flex justify-content-center">
            <div className="pr-result shadow  bg-body rounded w-50">
              <h1 className="text-secondary">{pr}</h1>
            </div>
          </div>
          {(() => {
            if (region == 1 && pr >= 35) {
              return (
                <div>
                  <p className="pt-3 text-success">
                    قیمت اجاره تا حد زیادی عادلانه است
                  </p>
                  <Fair />
                </div>
              );
            }
            if (region == 1 && pr >= 30 && pr <= 40) {
              return (
                <div>
                  <p className="pt-3 text-success">قیمت اجاره عادلانه است</p>
                  <Fair />
                </div>
              );
            }
            if (region == 1 && pr >= 25 && pr <= 29) {
              return (
                <div>
                  <p className="pt-3 text-danger">قیمت اجاره قابل توجه است</p>
                  <LessExpensive />
                </div>
              );
            }
            if (region == 1 && pr <= 25) {
              return (
                <div>
                  <p className="pt-3 text-danger">قیمت اجاره خیلی زیاد است</p>
                  <Expensive />
                </div>
              );
            }
            if (region == 2 && pr >= 36) {
              return (
                <div>
                  <p className="pt-3 text-success">
                    قیمت اجاره تا حد زیادی عادلانه است
                  </p>
                  <Fair />
                </div>
              );
            }
            if (region == 2 && pr >= 31 && pr <= 35) {
              return (
                <div>
                  <p className="pt-3 text-success">قیمت اجاره عادلانه است</p>
                  <Fair />
                </div>
              );
            }
            if (region == 2 && pr >= 25 && pr <= 30) {
              return (
                <div>
                  <p className="pt-3 text-danger">قیمت اجاره قابل توجه است</p>
                  <LessExpensive />
                </div>
              );
            }
            if (region == 2 && pr <= 25) {
              return (
                <div>
                  <p className="pt-3 text-danger">قیمت اجاره خیلی زیاد است</p>
                  <Expensive />
                </div>
              );
            }

            if (region == 3 && pr >= 31) {
              return (
                <div>
                  <p className="pt-3 text-success">
                    قیمت اجاره تا حد زیادی عادلانه
                  </p>
                  <Fair />
                </div>
              );
            }
            if (region == 3 && pr >= 26 && pr <= 30) {
              return (
                <div>
                  <p className="pt-3 text-success">قیمت اجاره عادلانه است</p>
                  <Fair />
                </div>
              );
            }
            if (region == 3 && pr >= 20 && pr <= 25) {
              return (
                <div>
                  <p className="pt-3 text-danger">قیمت اجاره قابل توجه است</p>
                  <LessExpensive />
                </div>
              );
            }

            if (region == 3 && pr <= 20) {
              return (
                <div>
                  <p className="pt-3 text-danger">قیمت اجاره خیلی زیاد است</p>
                  <Expensive />
                </div>
              );
            }
          })()}
        </div>
        <p className="description text-muted">
          نسبت P/R بسته به موقعیت مکانی و خصوصیت ملک می‌تواند متغیر باشد.
        </p>
      </>
    );
  }
}

export default Pr;
