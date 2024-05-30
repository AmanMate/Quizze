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
<<<<<<< HEAD
              setData(response.data);
=======
              setData(response);
>>>>>>> 1cb34f9a77217e1a6737a5ece13555d4ea1ccd4d
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
            <h2 >
              <span id="spanId">{data.quizCreated}</span>Quiz Created
            </h2>
           
          </div>
          <div class="inline ques">
            <h2>
              <span>{data.questionsCreated}</span>Questions Created
            </h2>
          </div>
          <div class="inline imp">
            <h2>
              <span>{data.totalImpression}</span>Total Imprresions
            </h2>
          </div>
        </div>
        <div>
          
          <h2 class="trending">Trending Quizs</h2>
          <div class="grid-container container">
            {data && data.trendingQuiz && data.trendingQuiz.map((data, index) => (
              <div class="grid-item" key={index}>
                <p>
                  <span class="heading">{data.quiz_name}</span>
                  <span class="views">{data.impression_count}</span>
                </p>
                <p class="created-on">{data.created_date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
>>>>>>> 1cb34f9a77217e1a6737a5ece13555d4ea1ccd4d
