import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";

export default function ImageComparisonSlider({ beforeImage, afterImage }) {
	return (
		<div >
			<ReactCompareSlider
				itemOne={
					<ReactCompareSliderImage
						src={beforeImage}
						alt="Before"
						style={{ width: "800px", height: "800px" }}
						loading="lazy"
					/>
				}
				itemTwo={
					<ReactCompareSliderImage
						src={afterImage}
						alt="After"
						style={{ width: "900px", height: "800px" }}
						loading="lazy"
					/>
				}
			/>
		</div>
	);
}
