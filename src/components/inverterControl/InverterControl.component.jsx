import React, { useContext, useState } from "react";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import inverter from "../../assets/inverter.png";

import "./InverterControl.styles.css";
import { authContext } from "../../context/AuthContext";

const InverterControl = () => {
  const { token } = useContext(authContext);

  const [inverterSwitch, setInverterSwitch] = useState(false);

  const handleInverterSwitch = () => {
    setInverterSwitch(!inverterSwitch);
    console.log(token);
    if (inverterSwitch) {
      fetch(
        "https://inverterdev.herokuapp.com/dashboard/status/control_alarmOff",
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
        }
      ).then((res) => console.log(res));
    } else {
      fetch(
        "https://inverterdev.herokuapp.com/dashboard/status/control_alarmOn",
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
        }
      ).then((res) => console.log(res));
    }
  };

  return (
    <div className="inverter--ctrl">
      <div className="control--switch">
        <h3>Inverter Telemetry</h3>
        <div className="switch--meter">
          <img src={inverter} alt="" />
          <p onClick={handleInverterSwitch}>
            {inverterSwitch ? (
              <BsToggle2On
                className={
                  inverterSwitch ? "on--switch toggleFont" : "toggleFont"
                }
              />
            ) : (
              <BsToggle2Off
                className={
                  !inverterSwitch ? "off--switch toggleFont" : "toggleFont"
                }
              />
            )}
            <br />
            <span className={!inverterSwitch ? "off--switch" : ""}>OFF</span>/
            <span className={inverterSwitch ? "on--switch" : ""}>ON</span>
          </p>
        </div>
      </div>
      <div className="inverter--details">
        <div className="client-ss-mex">
          <p>
            Client SS <span>2A521</span>
          </p>
          <p className="mexD">MexD: R12</p>
        </div>
        <p className="members">2 Members have access</p>
      </div>
    </div>
  );
};

export default InverterControl;
