import React from "react";
import { Space, Spin } from "antd";

function Loader() {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col gap-[20px]">
      <p className="text-black font-medium">Loading..Plase Wait..</p>
      <Space align="center" gap="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
}

export default Loader;
