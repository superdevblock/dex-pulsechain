import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { LiquidityCardTheme } from "./types";

export interface LiquidityCardHeaderProps extends SpaceProps {
  variant?: keyof LiquidityCardTheme["cardHeaderBackground"];
}

const LiquidityCardHeader = styled.div<LiquidityCardHeaderProps>`
  border: #0553a1 1px solid;
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
  ${space}
`;

LiquidityCardHeader.defaultProps = {
  p: "24px",
};

export default LiquidityCardHeader;
