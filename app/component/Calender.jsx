import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day) => {
    setSelectedDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
  };

  const renderDays = () => {
    const startDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const daysArray = [];

    for (let i = 0; i < startDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();

      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentDate.getMonth();

      daysArray.push(
        <div
          key={day}
          className={`p-1 text-center cursor-pointer ${
            isToday
              ? "bg-orange text-white" // Highlight today's date
              : isSelected
              ? "bg-[#FF62318a] text-white" // Highlight selected date if not today
              : "bg-[#E6EBFC] hover:bg-gray-200" // Default style for other dates
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className="w-64 font-sans bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center text-lg mb-4">
        <button
          onClick={handlePrevMonth}
          className="text-[#CCCCCC] text-xl duration-300 transition-all hover:text-orange "
        >
          <FaArrowLeftLong />
        </button>
        <span className="font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </span>
        <button
          onClick={handleNextMonth}
          className="text-[#CCCCCC] text-xl duration-300 transition-all hover:text-orange"
        >
          <FaArrowRightLong />
        </button>
      </div>
      <div className="grid grid-cols-7 text-center text-gray-500 font-bold mb-2 rounded-md">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
