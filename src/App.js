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
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p
              className="text-center h4 rounded mt-4 text-bg-info py-3"
              dir="rtl"
              style={{ textShadow: "1px 0 3px #fff" }}
            >
              می خوای بدونی آپارتمانت رو به قیمت منصفانه اجاره دادی یا اجاره
              کردی!
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center" dir="rtl">
          <div className="col-md-4 bg-light p-3 rounded d-flex justify-content-center align-items-center">
            <HookForm />
          </div>
          <div className="col-md-4 bg-light rounded d-flex justify-content-center align-items-center">
            <div>
              <Pr />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 mt-5" dir="rtl">
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
