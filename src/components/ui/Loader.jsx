import React from "react";
import { Alert, Flex, Spin } from "antd";
const contentStyle = {
  padding: 50,
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
function Loader() {
  return (
    <Flex gap="middle" vertical>
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    </Flex>
  );
}

export default Loader;
