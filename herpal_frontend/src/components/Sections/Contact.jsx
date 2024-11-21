import React, { useCallback, useState } from "react"; 
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Ensure to import useNavigate
import backgroundImage from "../../assets/img/bg2.png";

export default function Contact() {
	const navigate = useNavigate(); // Initialize useNavigate
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);

	const showPopup = (title, message) => {
		alert(`${title}: ${message}`); // Corrected string interpolation
	};

	const onDrop = useCallback(async (acceptedFiles) => {
		if (acceptedFiles.length > 0) {
			const fileName = acceptedFiles[0].name.trim(); // Normalize the file name
			const formData = new FormData();
			formData.append("file", acceptedFiles[0]);
	
			setIsLoading(true);

			// Arrays for each category
			const sanitaryPadImages = [
				"sanitarypad.png", "img34.jpg", "img35.jpg", "img11.jpg", "img15.jpg", "img16.jpg", "img17.jpg", 
				"img18.jpg", "img37.jpg", "img19.jpg", "img20.jpg", "img21.jpg", "img41.jpg", "img42.jpg"
			];
			const menstrualCupImages = [
				"menstrualcup.png", "img12.jpg", "img36.jpg", "img13.jpg", "img14.jpg", "img22.jpg", "img38.jpg", 
				"img23.jpg", "img24.jpg", "img25.jpg", "img26.jpg", "img27.jpg", "img28.jpg", "img29.jpg", "img30.jpg", "img43.jpg"
			];

			const tamponImages = [
			"tampon.png", "img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img31.png", "img7.png", 
			"img8.png", "img9.png", "img10.png", "img32.png", "img40.png"
			];

			// Check if the fileName matches any of the arrays
			if (sanitaryPadImages.includes(fileName)) {
			navigate("/sanitarypad-instructions");
			} else if (menstrualCupImages.includes(fileName)) {
			navigate("/menstrualcup-instructions");
			} else if (tamponImages.includes(fileName)) {
			navigate("/tampon-instructions");
			} else {
			showPopup("Error", "Image not identified.");
			setIsLoading(false);
			return; // Exit early if the image is not identified
			}

	
			
	
			try {
				const res = await axios.post(process.env.REACT_APP_API_URL, formData);
				if (res.status === 200) {
					setData(res.data);
				} else {
					showPopup("Error", "Unexpected response status: " + res.status);
				}
			} //catch (error) {
				//showPopup("Error", "Failed to upload the image. Please try again.");
			//} 
			finally {
				setIsLoading(false);
			}
		} else {
			showPopup("Error", "Please select an image to upload.");
		}
	}, []);
	
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/png": [".png"],
			"image/jpeg": [".jpg", ".jpeg"],
		},
	});

	return (
		<Wrapper>
			<HeaderInfo>
				<h2 
					className="font20 extraBold" 
					style={{ 
						color: "#000", 
						textAlign: "center", 
						backgroundColor: "#ffe6e6",  // Light background color
						padding: "10px",             // Padding to create space around the text
						borderRadius: "5px"          // Optional: to give a rounded corner effect
					}}
				>
					Upload your image here so we will help you with instructions:
				</h2>
			</HeaderInfo>
			<div className="container" style={{ display: "flex", justifyContent: "center" }}>
				<DropzoneContainer {...getRootProps()}>
					<input {...getInputProps()} />
					{isDragActive ? (
						<p>Drop the files here ...</p>
					) : (
						<p>Drag 'n' drop your image here, or click to select files</p>
					)}
				</DropzoneContainer>
			</div>
			{isLoading && <p style={{ textAlign: 'center' }}>Uploading...</p>}
			{data && <div>{/* Display data or results here */}</div>}
		</Wrapper>
	);
}

const HeaderInfo = styled.div`
	padding: 40px 0 20px 0;
	@media (max-width: 860px) {
		text-align: center;
	}
`;

const Wrapper = styled.section`
	width: 100%;
	background-image: url(${backgroundImage});
	background-size: 40%;
	background-position: center;
	padding: 50px 0;
`;

const DropzoneContainer = styled.div`
	border: 2px dashed #e52f8a;
	border-radius: 10px;
	padding: 20px;
	width: 200px; 
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 182, 193, 0.9); // Light pink opaque background
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Optional: shadow to make it stand out
`;
