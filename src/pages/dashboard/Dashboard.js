import "./Dashboard.css";
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://127.0.0.1:4000/dashboard/getDetails?user_email=a@gmail.com');
              console.log(response.data)
              setData(response);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
        }
      };
      fetchData();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts.

  if (loading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error: {error.message}</div>;
}

return (
    <div>
      <Navbar></Navbar>
      <div class="page inline">
        <div class="highligths">
          <div class="inline quiz">
            <h2>
              <span>120</span>Quiz Created
            </h2>
          </div>
          <div class="inline ques">
            <h2>
              <span>120</span>Questions Created
            </h2>
          </div>
          <div class="inline imp">
            <h2>
              <span>120</span>Total Imprresions
            </h2>
          </div>
        </div>
        <div>
          <h2 class="trending">Trending Quizs</h2>
          <div class="grid-container container">
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
            <div class="grid-item">
              <p>
                <span class="heading">Quiz 1</span>
                <span class="views">789</span>
              </p>
              <p class="created-on">Created on 04 Sep 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
