import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";

export default function ImageComparisonSlider({ beforeImage, afterImage }) {
	return (
		<ReactCompareSlider
			itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
			itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
			handle={
				<div
					style={{
						width: "20px",
						height: "20px",
						backgroundColor: "#000",
						borderRadius: "50%",
						cursor: "ew-resize",
					}}
				></div>
			}
		/>
	);
}
