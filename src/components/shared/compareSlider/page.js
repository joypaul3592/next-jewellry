'use client'
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
export default function CompareSlider({ before, after }) {
    return (
        <div className="h-[250px] " >
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={before} srcSet={before} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={after} srcSet={after} alt="Image two" />}
                style={{ height: "100%", borderRadius: "12px 12px  0px 0px " }}
            />
        </div>
    );
}
