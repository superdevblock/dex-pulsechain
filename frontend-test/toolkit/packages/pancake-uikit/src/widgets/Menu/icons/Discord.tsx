import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 17" {...props}>
		  <image  width="20" height="17" id="img1" href="data:image/png;base64,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"/>
    </Svg>
  );
};

export default Icon;