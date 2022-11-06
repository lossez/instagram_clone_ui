
import React from "react";
import { G, Svg, Rect, Line, Path, Defs, ClipPath } from "react-native-svg";
const AddIcon = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#clip0_280_16)">
                <Rect x="3" y="3" width="18" height="18" rx="5" stroke="black" strokeWidth="1.8" />
                <Line x1="12.1" y1="6.9" x2="12.1" y2="17.1" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
                <Line x1="6.9" y1="11.8" x2="17.1" y2="11.8" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
                <Path d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z" stroke="black" strokeWidth="1.8" />
                <Path d="M12.1 6.8999V17.0999" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
                <Path d="M6.90002 11.8H17.1" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_280_16">
                    <Rect width="24" height="24" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>


    );
};


export default AddIcon