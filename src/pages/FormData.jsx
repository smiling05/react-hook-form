import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaxForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    salary: "",
    bonus: "",
    social: "",
    children: "",
    jbo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/result", { state: { formData: formValues } });
  };

  return (
    <div>
      <h1>คำนวนภาษี</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="salary">เงินเดือน:</label>
          <input
            type="text"
            name="salary"
            id="salary"
            value={formValues.salary}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="bonus">โบนัส:</label>
          <input
            type="text"
            name="bonus"
            id="bonus"
            value={formValues.bonus}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="social">หักประกันสังคมต่อเดือน:</label>
          <input
            type="text"
            name="social"
            id="social"
            value={formValues.social}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="children">จำนวนบุตร:</label>
          <input
            type="text"
            name="children"
            id="children"
            value={formValues.children}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="jbo">ค่าเบี้ยประกันชีวิต:</label>
          <input
            type="text"
            name="jbo"
            id="jbo"
            value={formValues.jbo}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaxForm;