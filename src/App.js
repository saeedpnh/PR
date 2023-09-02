import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import HookForm from "./components/HookForm";
import Formula from "./components/Formula";
import Gauge from "./components/Gauge";
import Pr from "./components/Pr";
import RentToMortgage from "./components/RentToMortgage";
import MortgageToRent from "./components/MortgageToRent";

function App() {
  return (
    <>
      <section className="container">
        <p className="text-center h4 text-black-50 my-4" dir="rtl">
          می خوای بدونی آپارتمانت رو به قیمت منصفانه اجاره دادی یا اجاره کردی!
        </p>
        <div className="row d-flex justify-content-center" dir="rtl">
          <div className="col-md-3 bg-light p-3 rounded d-flex justify-content-center align-items-center">
            <HookForm />
          </div>
          <div className="col-md-5 bg-light rounded d-flex justify-content-center align-items-center">
            <div>
              {/* <Gauge /> */}
              <Pr />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="mt-5" dir="rtl">
            <Formula />
          </div>
        </div>
      </div>

      <div className="convertor py-5">
        <div className="container mt-2">
          <div className="row justify-content-around" dir="rtl">
            <div className="col-md-4">
              <RentToMortgage />
            </div>
            <div className="col-md-4">
              <MortgageToRent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
