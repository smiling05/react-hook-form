import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  const salary = Number(formData.salary);
  const annualIncome = salary * 12 + Number(formData.bonus);
  const maxExpenses = 100000;
  const calculatedExpenses = Math.min(annualIncome * 0.5, maxExpenses);
  const childAllowance = Math.min(formData.children * 30000, 60000);
  const socialSecurity = Number(formData.social);
  const insurancePremium = Number(formData.jbo);

  const baseDeduction = 60000;
  const totalDeduction = baseDeduction + childAllowance + socialSecurity + insurancePremium;
  const netIncome = annualIncome - totalDeduction - calculatedExpenses;

  let taxRate = 0;
  if (netIncome > 100000 && netIncome <= 300000) {
    taxRate = 0.05;
  } else if (netIncome > 300000 && netIncome <= 1000000) {
    taxRate = 0.1;
  } else if (netIncome > 1000000) {
    taxRate = 0.15;
  }

  const taxAmount = netIncome * taxRate;

  return (
    <div>
      <h1>Result</h1>
      <p>
        <strong>เงินได้ทั้งปี: {annualIncome} </strong>
      </p>
      <p>
        <strong>ค่าใช้จ่าย: {calculatedExpenses} </strong>
      </p>
      <p>
        <strong>ค่าลดหย่อน: {totalDeduction} บาท</strong>
      </p>
      <p>
        <strong>เงินได้พึงประเมินสุทธิ: {netIncome} บาท</strong>
      </p>
      <p>
        <strong>อัตราภาษี%: {taxRate * 100}</strong>
      </p>
      <p>
        <strong>ภาษีที่ต้องชำระ: {taxAmount} บาท</strong>
      </p>
    </div>
  );
};

export default Results;
