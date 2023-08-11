import React from "react";

function PageLoading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="loading-spinner"></div>
      <div className="container loading">{children}</div>
    </>
  );
}

export default PageLoading;
