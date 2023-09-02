import { useState } from "react";
import formatThousands from "format-thousands";
import Num2persian from "num2persian";

function MortgageToRent() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value * 0.03);
  };

  const val = parseFloat(value);
  let p_val = Num2persian(val);

  return (
    <>
      <h5 className="text-light">تبدیل رهن به اجاره</h5>
      <form>
        <div className="col-auto">
          <label className="col-form-label text-light">مبلغ رهن</label>
        </div>
        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </form>
      <p className="text-light pt-2">{value}</p>
      <small className="text-light">{p_val}</small>
    </>
  );
}

export default MortgageToRent;
