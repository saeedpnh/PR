import { createContext, useState } from "react";
import Num2persian from "num2persian";

const ApartmentContext = createContext();

function Provider({ children }) {
  const [info, setInfo] = useState([]);

  const createData = (data) => {
    // const updatedData = [info];
    setInfo(data);
  };

  const region = info.region;
  const toMortgage = Math.round(parseFloat(info.rent * 33.3));
  const mortgageToRent = Math.round(parseFloat(info.mortgage / 100) * 3.3);
  const fullMortgage = Math.round(
    parseFloat(toMortgage + Math.round(info.mortgage))
  );
  const mortgageForEachMeter = Math.round(
    parseFloat(fullMortgage / info.meter)
  );
  const fullRentInEachMonth = Math.round(
    parseFloat(mortgageToRent + info.rent)
  );
  const rentForEachMeter = Math.round(
    parseFloat(fullRentInEachMonth / info.meter)
  );
  const rentPrice = Math.round(parseFloat(info.rent));
  const apartmentPrice = parseFloat(info.meter * Math.round(info.meterPrice));
  const fullYearRent = parseFloat(fullRentInEachMonth * 12);
  const pr = Math.round(apartmentPrice / fullYearRent);

  const mortgage = parseFloat(info.mortgage);
  let p_mortgage = Num2persian(mortgage);
  let p_mortgageToRent = Num2persian(mortgageToRent);
  let p_fullMortgage = Num2persian(fullMortgage);
  let p_mortgageForEachMeter = Num2persian(mortgageForEachMeter);
  let p_rentPrice = Num2persian(rentPrice);
  let p_toMortgage = Num2persian(toMortgage);
  let p_fullRentInEachMonth = Num2persian(fullRentInEachMonth);
  let p_rentForEachMeter = Num2persian(rentForEachMeter);

  const valueToShare = {
    info,
    createData,
    toMortgage,
    mortgageToRent,
    fullMortgage,
    mortgageForEachMeter,
    fullRentInEachMonth,
    rentForEachMeter,
    rentPrice,
    apartmentPrice,
    fullYearRent,
    pr,
    mortgage,
    p_mortgage,
    p_mortgageToRent,
    p_fullMortgage,
    p_mortgageForEachMeter,
    p_rentPrice,
    p_toMortgage,
    p_fullRentInEachMonth,
    p_rentForEachMeter,
    region,
  };

  return (
    <ApartmentContext.Provider value={valueToShare}>
      {children}
    </ApartmentContext.Provider>
  );
}

export { Provider };
export default ApartmentContext;
