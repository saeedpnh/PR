import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ApartmentContext from "../context/data";

function HookForm() {
  const [show, setShow] = useState(false);
  const { createData, showAndHide } = useContext(ApartmentContext);

  const schema = yup
    .object({
      mortgage: yup.number().positive(),
      rent: yup.number().positive().integer().required("it is required"),
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select className="form-select mb-2" {...register("region")}>
        <option defaultValue="">منطقه شهری را انتخاب کنید</option>
        <option value="1">منطقه 1</option>
        <option value="2">منطقه 2</option>
        <option value="3">منطقه 3</option>
        <option value="4">منطقه 4</option>
        <option value="5">منطقه 5</option>
        <option value="6">منطقه 6</option>
        <option value="7">منطقه 7</option>
        <option value="8">منطقه 8</option>
        <option value="9">منطقه 9</option>
        <option value="10">منطقه 10</option>
        <option value="11">منطقه 11</option>
        <option value="12">منطقه 12</option>
        <option value="13">منطقه 13</option>
        <option value="14">منطقه 14</option>
        <option value="15">منطقه 15</option>
        <option value="16">منطقه 16</option>
        <option value="17">منطقه 17</option>
        <option value="18">منطقه 18</option>
        <option value="19">منطقه 19</option>
        <option value="20">منطقه 20</option>
        <option value="21">منطقه 21</option>
        <option value="22">منطقه 22</option>
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
      <input
        className="form-control mb-2"
        placeholder="مبلغ اجاره"
        type="text"
        {...register("rent")}
      />
      <input
        className="form-control mb-2"
        placeholder="متراژ آپارتمان"
        type="text"
        {...register("meter")}
      />
      <input
        className="form-control mb-2"
        placeholder="قیمت هر متر آپارتمان"
        type="text"
        {...register("meterPrice")}
      />
      <div className="d-grid">
        <input className="btn btn-sm btn-info" type="submit" value="ثبت" />
      </div>
    </form>
  );
}

export default HookForm;
