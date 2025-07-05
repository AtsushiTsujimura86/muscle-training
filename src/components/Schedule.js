import React, { useState, useEffect } from "react";
import './layout.css';
import './Schedule.css';


function Schedule() {
  return (
    <div>
        <div className="now-schedule">
            <div className="now-schedlue-label">
                <h2>現在のスケジュール</h2>
            </div>
            <div className="now-schedule-body">
                <p>トレ1</p>
                <p>⇒</p>
                <p>トレ2</p>
                <p>⇒</p>
                <p>トレ3</p>
            </div>
      </div>
    </div>
  );
}

export default Schedule;