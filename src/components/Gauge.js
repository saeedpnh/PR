import { Chart } from "react-google-charts";
import { useContext } from "react";
import ApartmentContext from "../context/data";

const options = {
  title: "p to r",
  min: 0,
  max: 50,
  width: 300,
  height: 300,
  // redFrom: 90,
  // redTo: 100,
  // yellowFrom: 75,
  // yellowTo: 90,
  // majorTicks: ["خیلی ضعیت", "ضعیف", "کم ریسک", "خوب", "عالی"],
  minerTicks: 5,
};

function Gauge() {
  const { apartmentPrice, fullYearRent, pr } = useContext(ApartmentContext);

  // function conditionA() {
  //   if (info.region == 2) {
  //     return info.region * 10;
  //   }
  //   if (info.region == 3) {
  //     return info.region - 2;
  //   }
  // }

  // function gaugeData() {
  //   return [
  //     ["Label", "Value"],
  //     ["PR", "conditionA()"],
  //   ];
  // }

  function gaugeData() {
    return [
      ["Label", "Value"],
      ["P - R", pr],
    ];
  }

  return (
    <>
      <Chart
        chartType="Gauge"
        width="400"
        height="400"
        data={gaugeData()}
        options={options}
      />
    </>
  );
}
export default Gauge;
