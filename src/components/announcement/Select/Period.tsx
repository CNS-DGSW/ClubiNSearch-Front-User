import React from "react";

const Period = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const handleStartDateChange = (event: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = event.target;
    setStartDate((prevStartDate: any) => ({
      ...prevStartDate,
      [name]: value,
    }));
  };

  const handleEndDateChange = (event: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = event.target;
    setEndDate((prevEndDate: any) => ({
      ...prevEndDate,
      [name]: value,
    }));
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h5>시작 기간</h5>
        <select
          name="year"
          value={startDate.year}
          onChange={handleStartDateChange}
        >
          <option>년도</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <select
          name="month"
          value={startDate.month}
          onChange={handleStartDateChange}
        >
          <option>월</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select
          name="day"
          value={startDate.day}
          onChange={handleStartDateChange}
        >
          <option>일</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select>
          <option>일</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div>
        <h5>종료 기간</h5>
        <select>
          <option>년도</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <select>
          <option>월</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select>
          <option>일</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select>
          <option>일</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};
export default Period;
