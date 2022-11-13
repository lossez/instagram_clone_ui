import React from "react";
import { Path, Svg, Polygon } from "react-native-svg";

const ReelsOutline = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><Path fill="#000" fillRule="evenodd" d="M1 6.5A5.5 5.5 0 0 1 6.5 1h11A5.5 5.5 0 0 1 23 6.5v11a5.5 5.5 0 0 1-5.5 5.5h-11A5.5 5.5 0 0 1 1 17.5v-11ZM6.5 3A3.5 3.5 0 0 0 3 6.5v11A3.5 3.5 0 0 0 6.5 21h11a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3h-11Z" clipRule="evenodd" /><Path fill="#000" fillRule="evenodd" d="M9.038 10.113a1 1 0 0 1 1.035.068l5 3.5a1 1 0 0 1 0 1.638l-5 3.5A1 1 0 0 1 8.5 18v-7a1 1 0 0 1 .538-.887zm1.462 2.808v3.158l2.256-1.579-2.256-1.58zM1 8a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1z" clipRule="evenodd" /><Path fill="#000" fillRule="evenodd" d="M7.684 1.051a1 1 0 0 1 1.265.633l2 6a1 1 0 0 1-1.897.632l-2-6a1 1 0 0 1 .632-1.265zm6 0a1 1 0 0 1 1.265.633l2 6a1 1 0 0 1-1.897.632l-2-6a1 1 0 0 1 .632-1.265z" clipRule="evenodd" /></Svg>

    );
};
export const ReelsFilled = () => {
    return (
        <Svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px"><Path d="M13.34,4.13L20.26,16H4v-1C4,9.48,8.05,4.92,13.34,4.13z" /><Polygon points="33.26,16 22.57,16 15.57,4 26.26,4" /><Path d="M46,15v1H35.57l-7-12H35C41.08,4,46,8.92,46,15z" /><Path d="M4,18v17c0,6.08,4.92,11,11,11h20c6.08,0,11-4.92,11-11V18H4z M31,32.19l-7.99,4.54C21.68,37.49,20,36.55,20,35.04v-9.08	c0-1.51,1.68-2.45,3.01-1.69L31,28.81C32.33,29.56,32.33,31.44,31,32.19z" /></Svg>


    );
};



export default ReelsOutline