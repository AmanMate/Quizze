import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import "./Timer.css";

const TimerComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const logOnClick= () => {
        console.log('1');
    }
    return (
        <div class="Timer-container">
            <div className='timer-option'>
                <h3>Timer</h3>
                <button onClick={() => logOnClick()}>OFF</button>
                <button onClick={() => logOnClick()}>5 sec</button>
                <button onClick={() => logOnClick()}>10 sec</button>
            </div>
        </div>
    );
}
export default function Timer() {
    return <TimerComponent />;;
}