import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 70 96" {...props}>
      <image  width="70" height="96" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAAXNSR0IB2cksfwAAAlVQTFRFANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjKkwLRAAAAMd0Uk5TAAIfCgxn9JcTtvUaaPv/ScvG0XH5wRAFldukCPpYFbummDZOGMnQPdWHMx1j7yfgvwPqNw3FlHQmzPNP/NiJc13yQrXAW94Xs1/36VVTSLdarG2uPkOcorpK9kzZXiTIaTHoNGorZOXXeX2nBMSN5PhEObBQwiqxFJp/nW4sId8WYdzH/gbakdaboPBHL2bhHJK46y7OoVQjqaMp7DoBSz96qA6ttHLufJBXUk1ZEq8gzc8tYoLKnnZleN2G/aq8n+0b00B+Ru1NI9EAAARWSURBVHiclZb9Q1NVGMcPu7ixy/iO2djttgEmY26Mm7CgghZRDJUp5tYaVrheqCDxvdTM0lI0rQbOykqzzNLoTXuzF8vK3v6uzr3n7r7g3QvPDzvPPZwPzznP8z0vhFRvNTau6NbaFsERssTuUL06J1+/CNDVALcKNsLDlR9sBvkiuHRR4E1eXo/Y5KswWrhZvMWvRvQGmpnX0gpPJZBbBuBWxV3ewLexzmA7nBWn6kBoRRgRgbodojrVaHsVa+yEdBuxrcQSQ19dFzwtlcDuWOB2ORpiUa2vp7earLpwh9LeqS5VjthbOavUenGX0gp9/UHWE9XLcXekTOj4PaozgHuVtqVdK8fgfYEywoVTde6PDylTTWhrHPYGXGVmq5H+VSL9Xb0GTjWrI0m+HKiTRFwbJX494rokRi0JLuJcL7e8pJF0jzyggRtKgikquTR1HkSmSMYfyurlEEuANWPYOKKo+2E4BXXsI10GkT/aZr06V3w8SDZ5pRwhj+FxpeuJflShHNuT0gRtnoonOPK0xDbWM3T6k6IoTj3bVuYI2YxpudmSAM17RpI3c+1WaLZ2W0nxbd/B5L0TU/R3F0/R58Avc8vBgs1DQOx5azAIUfV2Yw/9zSSx1yjyFyI8IpakG/tUz4UX5WYTEDZNMBPG/h5L8iXVe1mRkDAN8Oby2USWihvIMdU74D1IQQc8w/28uYC5GF4xfHKvpuUk1ONQDevwHwbhHLLI3ZOmqMLAjHTE8O0EGuX1HFVzS4QESIoJgBZngz7yNcxkTOCx4wi1yPV8nfVE30CqqJxdPBIdrPvNMA7lDeAs5k6QfQj5iS0msf+Yo3XXyjHRCEwVqNmBk8ZU59+ae1s517bRcwLvKPt3kJKn5MHvvke/fM1dioZm3l9nXCM5zaR9pj+QUdJJ5yg0aYr7YO/ZD6kecx+l0+dypiwTX2wHW8/HOM8q4fvkU0gXLuaouQvjgUDqDLG0XLGItfiMKFu7aSM8e7S/j4awssOSnMfnWoq/kJvUgv0ozKPhSyuygBHV+woDViQhXyfRaUnOq95ZWaw9dLanFt4763H00o3kChRUbwsla0/TDFGlm6NGELLYISeS2vkIp+8yqwpFv9FGCBHY3RazJa3FN8clfLtbvZGFAvhBJhfu3HcY/94KpHurt+hAX+APdFPvT6fTV34E+krctt3n8ZPi/AxIv1y92uZW1hR08ExF4RInrGy/4jf5DbJUk1xiVokyTGOmD5Tm6D6KXfud47LAHxF57OYLPLbPlgN0y0uYpunc2a1+567YMVbFxU5tYnKBcOr70FjVq7DuMJAy9fT8yQ6YSiB9PEj6XcusgKHKoPx6zMcWoFl4qolIJ0bRlGGpWfCWkjOY9nrMX0dr8WSrvwy+jAIYqD8e/vIgkBqmh8ho1o7Q8gqg6fXIdf4dUER0be5ipWtafpMb9Xzkn3/pWTnwn9WFZbati3qTG+16Na9HK/sfyfzBm3jtEokAAAAASUVORK5CYII="/>
    </Svg>
  );
};

export default Icon;
