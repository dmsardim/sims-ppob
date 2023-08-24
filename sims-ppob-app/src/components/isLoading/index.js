import React from 'react';
import './Loading.css';
import { useSelector } from 'react-redux';

const Loading = () => {
  const { loading } = useSelector((state) => state.loading);
  if (!loading) return null;
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
