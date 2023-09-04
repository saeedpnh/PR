import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import formatThousands from "format-thousands";
import ApartmentContext from "../context/data";

function HookForm() {
  const [show, setShow] = useState(false);
  const { createData } = useContext(ApartmentContext);

  const schema = yup
    .object({
      mortgage: yup.number().positive(),
      rent: yup.number().integer().required("it is required"),
      region: yup.number().positive().integer(),
      meter: yup.number().positive().integer(),
      meterPrice: yup.number().positive().integer(),
    })
    .required();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    createData(data);
    e.target.reset();
  };

  const watch_mortgage = watch("mortgage");
  let convert_mortgage = parseFloat(watch_mortgage);

  const watch_rent = watch("rent");
  let convert_rent = parseFloat(watch_rent);

  const watch_meter = watch("meter");
  let convert_meter = parseFloat(watch_meter);

  const watch_meterPrice = watch("meterPrice");
  let convert_meterPrice = parseFloat(watch_meterPrice);

  if (watch("mortgage")) {
    console.log("fuck");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select className="form-select mb-2" {...register("region")}>
        <option defaultValue="">انتخاب محدوده</option>
        <option value="1">مناطق شمالی - بالای همت</option>
        <option value="2">
          مناطق مرکزی - بالاتر از انقلاب پایین تر از همت
        </option>
        <option value="3">مناطق جنوبی</option>
      </select>
      <input
        className="form-control mb-2"
        placeholder="مبلغ رهن"
        type="text"
        {...register("mortgage", {
          // onChange: (e) => console.log(e.target.value),
        })}
        // style={{ borderColor: errors["rent"] ? "#dc3545" : null }}
      />
      {(() => {
        if (watch("mortgage")) {
          return (
            <p className="thousand-separator text-success text-center">
              {formatThousands(convert_mortgage, ",")} تومان
            </p>
          );
        }
      })()}

      <input
        className="form-control mb-2"
        placeholder="مبلغ اجاره"
        type="text"
        {...register("rent")}
      />
      {(() => {
        if (watch("rent")) {
          return (
            <p className="thousand-separator text-success text-center">
              {formatThousands(convert_rent, ",")} تومان
            </p>
          );
        }
      })()}
      <input
        className="form-control mb-2"
        placeholder="متراژ آپارتمان"
        type="text"
        {...register("meter")}
      />
      {(() => {
        if (watch("meter")) {
          return (
            <p className="thousand-separator text-success text-center">
              {formatThousands(convert_meter, ",")} متر
            </p>
          );
        }
      })()}
      <input
        className="form-control mb-2"
        placeholder="قیمت هر متر آپارتمان"
        type="text"
        {...register("meterPrice")}
      />
      {(() => {
        if (watch("meterPrice")) {
          return (
            <p className="thousand-separator text-success text-center">
              {formatThousands(convert_meterPrice, ",")} تومان
            </p>
          );
        }
      })()}
      <div className="d-grid">
        <input className="btn btn-sm btn-info" type="submit" value="ثبت" />
      </div>
    </form>
  );
}

export default HookForm;
