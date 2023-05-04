import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ selectedDate, setSelectedDate }) => {
  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    const formattedDate = new Date(inputDate).toISOString().slice(0, 10);
    setDate(inputDate);
    setSelectedDate(formattedDate);
  };

  return (
    <div>
      <label htmlFor="datepicker">Select a date: </label>
      <input type="date" id="datepicker" value={date} onChange={handleDateChange} />
    </div>
  );
};

export default DatePickerComponent;