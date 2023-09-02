import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import formatThousands from "format-thousands";
import Num2persian from "num2persian";

function RentToMortgage() {
  const schema = yup.object({
    rentToMortgage: yup.number().positive(),
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
  };

  const observe = watch("rentToMortgage");
  let convert = parseFloat(observe) * 50;
  let p_convert = Num2persian(convert);

  return (
    <>
      <h5 className="text-light">تبدیل اجاره به رهن</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-auto">
          <label className="col-form-label text-light">مبلغ اجاره</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            {...register("rentToMortgage")}
          />
        </div>
      </form>
      <p className="text-light pt-2">{formatThousands(convert, ",")}</p>
      <small className="text-light">{p_convert}</small>
    </>
  );
}

export default RentToMortgage;
