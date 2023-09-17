import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import formatThousands from "format-thousands";
import ApartmentContext from "../context/data";

function HookForm() {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex">
        <select className="form-select w-50 mb-1" {...register("region")}>
          <option defaultValue="">انتخاب محدوده</option>
          <option value="1">مناطق شمالی - بالای همت</option>
          <option value="2">
            مناطق مرکزی - بالاتر از انقلاب پایین تر از همت
          </option>
          <option value="3">مناطق جنوبی</option>
        </select>
        {/* {(() => {
          if (watch("region") == 1) {
            return (
              <p
                className="text-success text-center region-text d-flex align-items-center"
                style={{ marginRight: "0.5rem" }}
              >
                نسبت در مناطق شمالی 30 تا 35
              </p>
            );
          }
          if (watch("region") == 2) {
            return (
              <p
                className="text-success text-center region-text d-flex align-items-center"
                style={{ marginRight: "0.5rem" }}
              >
                نسبت در مناطق مرکزی 25 تا 30
              </p>
            );
          }
          if (watch("region") == 3) {
            return (
              <p
                className="text-success text-center region-text d-flex align-items-center"
                style={{ marginRight: "0.5rem" }}
              >
                نسبت در مناطق جنوبی 20 تا 25
              </p>
            );
          }
        })()} */}
      </div>

      <div className="d-flex mb-1">
        <input
          className="form-control w-50"
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
              <p
                className="thousand-separator text-success text-center d-flex align-items-center"
                style={{ marginRight: "0.5rem" }}
              >
                {formatThousands(convert_mortgage, ",")} تومان پیش
              </p>
            );
          }
        })()}
      </div>

      <div className="d-flex mb-1">
        <input
          className="form-control w-50"
          placeholder="مبلغ اجاره"
          type="text"
          {...register("rent")}
        />
        {(() => {
          if (watch("rent")) {
            return (
              <p
                className="thousand-separator text-success text-center d-flex align-items-center"
                style={{ marginRight: "0.5rem" }}
              >
                {formatThousands(convert_rent, ",")} تومان اجاره
              </p>
            );
          }
        })()}
      </div>

      <div className="d-flex mb-1">
        <input
          className="form-control w-50"
          placeholder="متراژ آپارتمان"
          type="text"
          {...register("meter")}
        />
        {(() => {
          if (watch("meter")) {
            return (
              <p
                className="thousand-separator text-success text-center d-flex align-items-center"
                style={{ marginRight: "0.5rem" }}
              >
                {formatThousands(convert_meter, ",")} متر
              </p>
            );
          }
        })()}
      </div>

      <div className="d-flex mb-1">
        <input
          className="form-control w-50"
          placeholder="قیمت هر متر آپارتمان"
          type="text"
          {...register("meterPrice")}
        />
        {(() => {
          if (watch("meterPrice")) {
            return (
              <p
                className="thousand-separator text-success text-center d-flex align-items-center"
                style={{ marginRight: "0.5rem" }}
              >
                {formatThousands(convert_meterPrice, ",")} تومان
              </p>
            );
          }
        })()}
      </div>
      <div className="d-grid">
        <input className="btn btn-sm btn-info w-50" type="submit" value="ثبت" />
      </div>
    </form>
  );
}

export default HookForm;
