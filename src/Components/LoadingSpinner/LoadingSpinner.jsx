import React from "react";
import { SpinnerContainer, SpinnerLoading } from "./LoadingSpinner.styled";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerLoading className="loading-spinner" />
    </SpinnerContainer>
  );
}

export default LoadingSpinner