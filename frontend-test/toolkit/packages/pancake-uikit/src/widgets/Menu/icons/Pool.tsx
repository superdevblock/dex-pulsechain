import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 105" {...props}>
      <image  width="128" height="105" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAA3CAMAAABtuXfRAAAAAXNSR0IB2cksfwAAAk9QTFRFANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvjANvj+RxN6AAAAMV0Uk5TAEhJFQ6h/9UgL+rggFzI/GMP6fmHS+xDhptTywo05R/BbfWsXgVYgpIQIv2zagPd7yrQNRQkcrIEbrYaKe1mDNeZCWH2O6D41KXk39FlvH3b6LGQjKl0yvFCxERgG/DmdjfhIV+n5xiKeE69Aa0T3GeNgaN5Mu6Dn6hsuwu1xkW6aKIGjp17Ky70JpM+zK9ZtDOP+8L6UCXaMNZamIUxTCjzEYkC41ZR034Xwwd6/kG39xxiOQjJ2NLHLZyXGSdNaZo8b8CFueMqAAAD1klEQVR4nO2X6V8TZxDHl134KRsrGqgKhMQ8EkgUwxoVdcF6Uau0arwRFREVbzFaPFrrgWKNB2oxbZV6gkfrfVVb7+MPc5OQzT5HgA9914/zgp15Zp4vz+4zzzwTSepJ0mRZ6TGoe0nPQFT69f8vkEwVtgHyFwORNajvkMH27JyY8uUQDO0zZRhyu7Q85Dt6OalAZsSpuhK+4XCzXjHERcDKCNM5iPOhUEjxFLlpKYbXdMoYwXjdvt694chRJaY+Gu7eTeLEX6qNSegBjO31vHHjKbMMEybGtUnQPVZPeXlqSMVkfGW1p0zNmhbN/ukzKgm1JV8TknJpnpnI/sZlHXHNgjbbPaAKNMT3bTa+S0VJQ2AO5lJD6fOCxp7OX0C/wEIsWowlYohvafUyqQbLmeEVyF9Jj2TWrlIUTRXvdF0031dX1jOpvgY6EzghmnBrsc4j8VJOGtYbjw3Y2ANlEzYbf7cEuFVHZWs8r8Y5KzO7pWxrRCyLxiLAv9NybPbHlO0ooRwsJYQdcWUnvmchjlLS1KUGsKkbSlPtrq4CqjhVtgTuxp6EWoDG1BT/3uRZ/gE/0hAXce4zjWEoTkkpwk9JYz8OUJSDmGNB2qubkhZFSZ9PCpLWMuK0pkUavbZDaD4spoRwxBrYgqNJQ3GSn6mlLbV8YCvlWLieOmc+VTtuGkdwgoJIJ8kpMxcsFH8rTtOB23EmoZ7VVPb2+yX5gS2UtW3nmKz35Ed+7VJ1zGAgkquK/MZRHL9HzrOBBZEL8U/YHtH5c+VGq5+lhPAHFyd5cTH2HzRyiXc6akZdZihXrq4SFINr9urVxqMDC3mfUUQiF/ZRFH8J2kWBK7CgU3IB14MiicSXalJutMEmirOh7aZxXalCiOG9RVG8Ykg00GtQ/hStU5KOYytF6UCeODDPyIq/cPuO0LkRdymKfK9FTGlpuy9JD4SVzzgFDx9RlGvXNWFnptSWGldfO5pFzqJEw2Du9Dz2nMTlBMqij4F4zPtcavgYQ5nSQAQ9yxNSFVvi2bCayfqe/m1eBcncvYFnXEPleJ51P67dzCYMxrhr9ycmWE5jDgIMxhFATkLPhXbS6lNqMFxUGTpb8M+/1sDzp/AiaRVX4mWFaRXaLRCqSnV2QCszd0qpq0ZHpwUq24CMQqObeCXvtmNI3URJSDF6KhXwykbVeP0mN4zwW/oFFfcsgASDDYD6jupNmPtofKgemBwM7gIaQxUSK4PfT2rWdf1oEdMmcfe08uaDEdfqTtvGMVIL3zP0RT5T/ncUX4Yuko9QheM6V05iotj430DdiaUMfAIUbNzKnNgRjQAAAABJRU5ErkJggg=="/>
    </Svg>
  );
};

export default Icon;
