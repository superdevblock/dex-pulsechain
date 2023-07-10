import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <defs>
          <image  width="32" height="32" id="img1" href="data:image/png;base64,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"/>
        </defs>
        <use id="Background" href="#img1" x="0" y="0"/>
      </svg>
    </Svg>
  );
};

export default Icon;
