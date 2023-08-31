import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import HookForm from "./components/HookForm";
import Formula from "./components/Formula";
import Gauge from "./components/Gauge";
import Pr from "./components/Pr";

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
        <div className="mt-5" dir="rtl">
          <Formula />
        </div>
      </div>
    </>
  );
}

export default App;
