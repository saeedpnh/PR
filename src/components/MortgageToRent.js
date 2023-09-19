import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import formatThousands from "format-thousands";
import Num2persian from "num2persian";
import { useState } from "react";

function MortgageToRent() {
  const [value, setValue] = useState();
  const schema = yup.object({
    MortgageToRent: yup.number().positive(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    setValue(data.MortgageToRent * 3.3);
  };

  const observe = watch("MortgageToRent");
  let convert = parseFloat(observe);
  let p_convert = Num2persian(convert);

  return (
    <>
      <h5 className="text-light">تبدیل رهن به اجاره</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <label className="col-form-label text-light">مبلغ رهن</label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              {...register("MortgageToRent")}
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-secondary text-light">
              تبدیل
            </button>
          </div>
        </div>
      </form>
      <p className="text-light pt-1">
        <small>{formatThousands(convert, ",")}</small>
      </p>
      <p className="text-light" style={{ marginTop: "-1.2rem" }}>
        <small>{p_convert}</small>
      </p>
      {(() => {
        if (value != undefined) {
          return (
            <div className="text-bg-warning p-1 rounded text-center w-50 result">
              {formatThousands(value, ",")}
            </div>
          );
        }
      })()}
    </>
  );
}

export default MortgageToRent;
