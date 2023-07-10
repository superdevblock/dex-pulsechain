import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" {...props}>
    <path d="M22.3843 15.4979L20.6572 14.0214C20.739 13.5204 20.7812 13.0089 20.7812 12.4974C20.7812 11.9858 20.739 11.4743 20.6572 10.9733L22.3843 9.49677C22.5146 9.38525 22.6078 9.23673 22.6516 9.07094C22.6954 8.90515 22.6877 8.72995 22.6295 8.56865L22.6058 8.50009C22.1303 7.17125 21.4184 5.9394 20.5043 4.86405L20.4569 4.80868C20.346 4.6783 20.1982 4.58458 20.033 4.53986C19.8678 4.49515 19.6929 4.50154 19.5314 4.55819L17.3877 5.32021C16.5967 4.67157 15.7134 4.16005 14.7589 3.80145L14.3449 1.56024C14.3137 1.3916 14.2319 1.23646 14.1104 1.11542C13.9889 0.994384 13.8334 0.913182 13.6647 0.882605L13.5935 0.869421C12.2197 0.62157 10.7748 0.62157 9.40109 0.869421L9.3299 0.882605C9.16114 0.913182 9.00567 0.994384 8.88417 1.11542C8.76266 1.23646 8.68085 1.3916 8.64962 1.56024L8.23302 3.812C7.28614 4.17067 6.40437 4.68192 5.62267 5.32548L3.46319 4.55819C3.30173 4.50109 3.12672 4.49447 2.96141 4.53921C2.7961 4.58395 2.64832 4.67794 2.5377 4.80868L2.49024 4.86405C1.57727 5.94016 0.865431 7.17181 0.388775 8.50009L0.365044 8.56865C0.246392 8.89824 0.343951 9.26738 0.61026 9.49677L2.35841 10.9892C2.27667 11.4849 2.23712 11.9911 2.23712 12.4947C2.23712 13.001 2.27667 13.5072 2.35841 14.0003L0.61026 15.4927C0.479994 15.6042 0.386762 15.7527 0.342959 15.9185C0.299157 16.0843 0.30686 16.2595 0.365044 16.4208L0.388775 16.4894C0.866021 17.8183 1.57266 19.0443 2.49024 20.1254L2.5377 20.1808C2.64859 20.3111 2.79638 20.4049 2.96159 20.4496C3.1268 20.4943 3.30168 20.4879 3.46319 20.4313L5.62267 19.664C6.40841 20.31 7.28644 20.8215 8.23302 21.1774L8.64962 23.4292C8.68085 23.5978 8.76266 23.753 8.88417 23.874C9.00567 23.9951 9.16114 24.0763 9.3299 24.1068L9.40109 24.12C10.7874 24.3692 12.2071 24.3692 13.5935 24.12L13.6647 24.1068C13.8334 24.0763 13.9889 23.9951 14.1104 23.874C14.2319 23.753 14.3137 23.5978 14.3449 23.4292L14.7589 21.188C15.713 20.8303 16.6013 20.3171 17.3877 19.6692L19.5314 20.4313C19.6928 20.4884 19.8678 20.495 20.0331 20.4502C20.1985 20.4055 20.3462 20.3115 20.4569 20.1808L20.5043 20.1254C21.4219 19.0417 22.1285 17.8183 22.6058 16.4894L22.6295 16.4208C22.7482 16.0965 22.6506 15.7273 22.3843 15.4979ZM18.7852 11.2845C18.8511 11.6826 18.8854 12.0913 18.8854 12.5C18.8854 12.9087 18.8511 13.3174 18.7852 13.7155L18.6112 14.7728L20.5808 16.4577C20.2822 17.1456 19.9053 17.7968 19.4575 18.3983L17.0107 17.5309L16.1827 18.2111C15.5526 18.7279 14.8512 19.134 14.0918 19.4188L13.0872 19.7958L12.6152 22.3534C11.8706 22.4378 11.1187 22.4378 10.374 22.3534L9.90206 19.7905L8.90538 19.4082C8.15392 19.1234 7.45519 18.7174 6.83028 18.2032L6.00235 17.5203L3.53966 18.3957C3.09141 17.7919 2.717 17.1406 2.41641 16.4551L4.40714 14.7544L4.23575 13.6997C4.17247 13.3068 4.13819 12.9008 4.13819 12.5C4.13819 12.0966 4.16983 11.6932 4.23575 11.3003L4.40714 10.2456L2.41641 8.54491C2.71436 7.85673 3.09141 7.2081 3.53966 6.60429L6.00235 7.47968L6.83028 6.79677C7.45519 6.28261 8.15392 5.87655 8.90538 5.59179L9.9047 5.21474L10.3767 2.65184C11.1176 2.56747 11.8743 2.56747 12.6179 2.65184L13.0899 5.20946L14.0944 5.58651C14.8512 5.87128 15.5552 6.27734 16.1854 6.79413L17.0133 7.47441L19.4602 6.60693C19.9084 7.21073 20.2828 7.862 20.5834 8.54755L18.6138 10.2324L18.7852 11.2845ZM11.4999 7.5957C8.93702 7.5957 6.85929 9.67343 6.85929 12.2363C6.85929 14.7992 8.93702 16.877 11.4999 16.877C14.0628 16.877 16.1405 14.7992 16.1405 12.2363C16.1405 9.67343 14.0628 7.5957 11.4999 7.5957ZM13.5882 14.3246C13.3143 14.5993 12.9888 14.8171 12.6304 14.9655C12.272 15.114 11.8878 15.1901 11.4999 15.1895C10.7115 15.1895 9.97062 14.881 9.41163 14.3246C9.13695 14.0507 8.91913 13.7252 8.77071 13.3668C8.62228 13.0084 8.54618 12.6242 8.54679 12.2363C8.54679 11.4479 8.85528 10.707 9.41163 10.148C9.97062 9.58906 10.7115 9.2832 11.4999 9.2832C12.2883 9.2832 13.0292 9.58906 13.5882 10.148C13.8629 10.4219 14.0807 10.7474 14.2291 11.1058C14.3775 11.4642 14.4536 11.8484 14.453 12.2363C14.453 13.0247 14.1445 13.7656 13.5882 14.3246Z"/>
    </Svg>
  );
};

export default Icon;