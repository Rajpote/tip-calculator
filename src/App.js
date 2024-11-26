import { useState } from "react";
import "./index.css";

function App() {
   return (
      <div className="App">
         <TipCalculator />
      </div>
   );
}

function TipCalculator() {
   const [bill, setBill] = useState("");
   const [percentage1, setPercentage1] = useState(0);
   const [percentage2, setPercentage2] = useState(0);
   const tip = bill * ((percentage1 + percentage2) / 2 / 100);
   function handleReset() {
      setBill("");
      setPercentage1(0);
      setPercentage2(0);
   }

   return (
      <div>
         <div className="container">
            <BillInput bill={bill} onSetBill={setBill} />
            <SelectPercentage percentage1={percentage1} onSelect={setPercentage1}>
               How was the service
            </SelectPercentage>
            <SelectPercentage percentage2={percentage2} onSelect={setPercentage2}>
               how did your friend like our service
            </SelectPercentage>
         </div>
         {bill > 0 && (
            <>
               <Output bill={bill} tip={tip} />
               <Reset onReset={handleReset} />
            </>
         )}
      </div>
   );
}

function BillInput({ bill, onSetBill }) {
   return (
      <div>
         <label>How much was the bill</label>
         <input type="number" placeholder="Bill Value" value={bill} onChange={(e) => onSetBill(Number(e.target.value))} />
      </div>
   );
}

function SelectPercentage({ children, percentage, onSelect }) {
   return (
      <div>
         <label>{children}</label>
         <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
            <option value="0">Dissatifird (0%)</option>
            <option value="5">It was Okay (5%)</option>
            <option value="10">It was Good (10%)</option>
            <option value="20">It was Very Good (20%)</option>
         </select>
      </div>
   );
}

function Output({ bill, tip }) {
   const pay = bill + tip;
   return (
      <h3>
         You paid ${pay} (${bill} + ${tip} tip)
      </h3>
   );
}

function Reset({ onReset }) {
   return <button onClick={onReset}>Reset</button>;
}

export default App;
