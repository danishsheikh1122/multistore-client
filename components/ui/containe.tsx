import React from "react";

const ContainerHomePage = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-7xl border-b">{children}</div>;
};

export default ContainerHomePage;
