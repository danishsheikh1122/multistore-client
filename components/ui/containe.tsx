import React from "react";

const ContainerHomePage = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-7xl border-b pb-4">{children}</div>;
};

export default ContainerHomePage;
