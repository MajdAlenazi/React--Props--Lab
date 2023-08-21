import Services from "./Services";

interface companiesInfo {
  nameOfCompany: string;
  numberOfEmploy: number;
  years: number;
  ServicesType: string;
  price: number;
}
export default function Companies(companies: companiesInfo) {
  return (
    <>
      <h1> Company Name : {companies.nameOfCompany}</h1>
      <h2> number Employ : {companies.numberOfEmploy}</h2>
      <h3> Years : {companies.years}</h3>
      <Services
        ServicesType={companies.ServicesType}
        price={companies.price}
      ></Services>
    </>
  );
}
