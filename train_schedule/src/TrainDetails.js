import React from 'react';
import { useParams } from 'react-router-dom';

function TrainDetails() {
  const { trainId } = useParams(); // Get the train ID from URL

  // You can fetch train details using trainId and display them here

  return (
    <div>
      <h2>Train Details</h2>
      <p>Train ID: {trainId}</p>
      {/* Display other train details here */}
    </div>
  );
}

export default TrainDetails;
