import "./App.css";
import Programer from "./component/Programers";
import Companies from "./component/Companies";

function App() {
  return (
    <>
      <Programer
        name="Majd"
        language="Html - Css - JS - React"
        yearsExp={2}
        CompanieName="Sadia"
      ></Programer>

      <Programer
        name=" Reem"
        language="Html - Css"
        yearsExp={3}
        CompanieName="SnapChat"
      ></Programer>

      <Programer
        name="Hala"
        language="JS - React"
        yearsExp={5}
        CompanieName="X"
      ></Programer>

      <Companies
        nameOfCompany="Google"
        numberOfEmploy={2000}
        years={1998}
        ServicesType="Website"
        price={200}
      ></Companies>

      <Companies
        nameOfCompany="Facebook"
        numberOfEmploy={50000}
        years={2004}
        ServicesType="App"
        price={2000}
      ></Companies>
    </>
  );
}

export default App;
