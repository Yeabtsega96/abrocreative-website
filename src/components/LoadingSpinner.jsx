import "./loading-spinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;