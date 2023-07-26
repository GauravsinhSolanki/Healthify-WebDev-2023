//deprecated
import React, { useState } from "react";
import "./style.css";

const Features = () => {
  const [activeTab, setActiveTab] = useState("Book Appointment");

  const tabs = [
    {
      key: "Book Appointment",
      value: "Book Appointment",
    },
    {
      key: "View Appointment",
      value: "View Appointment",
    },
    {
      key: "Cancel Appointment",
      value: "Cancel Appointment",
    },
    {
      key: "Reschedule Appointment",
      value: "Reschedule Appointment",
    },
  ];

  const handleOnClick = (key) => {
    setActiveTab(key);
  };

  return (
    <>
      <div>
        {tabs.map((tab) => (
          <h4
            key={tab.key}
            onClick={() => handleOnClick(tab.key)}
            className={activeTab === tab.key ? "active" : ""}
          >
            {tab.value}
          </h4>
        ))}
      </div>
      <div className="box">
        <h1>You can {activeTab}</h1>
      </div>
    </>
  );
};

export default Features;
