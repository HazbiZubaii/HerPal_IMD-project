import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
import { Link } from "react-router-dom";

export default function Services() {
	return (
		<Wrapper id="services">
			{/* <div className="lightBg" style={{ padding: "50px 0" }}>
				<div className="container">
					<ClientSlider />
				</div>
			</div> */}
			<div className="whiteBg" style={{ padding: "60px 0" }}>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">About Us : </h1>
						<p className="font13">
							This project is made by Hasbi Fathima VP.
							<br />
							Feel free to contribute. This platform can be used in several cases and can impact lives of
							several young girls.
						</p>
					</HeaderInfo>
					<ServiceBoxRow className="flex">
						<ServiceBoxWrapper>
							<ServiceBox
								icon="book"
								title="Publish your Blogs "
								subtitle="Our community provides a platform to publish blogs, share experiences, and spread awareness about periods. Explore our blogs today!"
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="monitor"
								title="Period tracker"
								subtitle="The Period Tracker predicts your menstrual cycle for the next three months, helping you stay prepared and plan ahead with ease! "
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="browser"
								title="Product Recognition"
								subtitle="Users can upload photos of feminine hygiene products . The application uses computer vision to recognize the product and usage instructions."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="printer"
								title="Get Medical Assistance"
								subtitle="Facing an emergency? Book a doctor’s appointment with us quickly and easily—your health, our priority!"
							/>
						</ServiceBoxWrapper>
					</ServiceBoxRow>
				</div>
				<div className="lightBg">
					<div className="container">
						<Advertising className="flexSpaceCenter">
							<AddLeft>
								<h4 className="font15 semiBold">
									Share your stories through us to the world
								</h4>
								<h2 className="font40 extraBold">Let's end Period Stigma</h2>
								<p className="font12">
									This project is made by Hasbi Fathima VP.
								</p>
								<ButtonsRow
									className="flexNullCenter"
									style={{ margin: "30px 0" }}
								>
									<div style={{ width: "190px" }}>
										<Link to="/login">
											<FullButton title="Join us !! " />
										</Link>
									</div>
								</ButtonsRow>
							</AddLeft>
							<AddRight>
								<AddRightInner>
									<div className="flexNullCenter">
										<AddImgWrapp1 className="flexCenter">
											<img
												src={
													"https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/blogs/october2023/detail-main-Period-Blood-Colour.jpeg"
												}
												alt="Stop_the_Stigma"
											/>
										</AddImgWrapp1>
										<AddImgWrapp2>
											<img
												src={
													"https://img.freepik.com/free-vector/girl-power-reproductive-system-concept_23-2148658188.jpg?w=1060&t=st=1673055245~exp=1673055845~hmac=db1b2a8914e263895b52c5e91dcadd63e91d589d2ef85a9f30061f9b310161a0"
												}
												alt="Girl_power"
											/>
										</AddImgWrapp2>
									</div>
									<div className="flexNullCenter">
										<AddImgWrapp3>
											<img
												src={
													"data:image/jpeg;base64,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"
												}
												alt="Stop_the_Stigma"
											/>
										</AddImgWrapp3>
										<AddImgWrapp4>
											<img
												src={
													"https://user-images.githubusercontent.com/73426684/211125598-97104550-8729-4b70-9eed-292edf632379.jpg"
												}
												alt="Stop_the_Stigma"
											/>
										</AddImgWrapp4>
									</div>
								</AddRightInner>
							</AddRight>
						</Advertising>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const ServiceBoxRow = styled.div`
	@media (max-width: 860px) {
		flex-direction: column;
	}
`;
const ServiceBoxWrapper = styled.div`
	width: 20%;
	margin-right: 5%;
	padding: 80px 0;
	@media (max-width: 860px) {
		width: 100%;
		text-align: center;
		padding: 40px 0;
	}
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Advertising = styled.div`
	margin: 80px 0;
	padding: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 100px 0 40px 0;
	}
	@media (max-width: 860px) {
		flex-direction: column;
		padding: 0 0 30px 0;
		margin: 80px 0 0px 0;
	}
`;
const ButtonsRow = styled.div`
	@media (max-width: 860px) {
		justify-content: space-between;
	}
`;
const AddLeft = styled.div`
	width: 50%;
	p {
		max-width: 475px;
	}
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
		text-align: center;
		h2 {
			line-height: 3rem;
			margin: 15px 0;
		}
		p {
			margin: 0 auto;
		}
	}
`;
const AddRight = styled.div`
	width: 50%;
	position: absolute;
	top: -70px;
	right: 0;
	@media (max-width: 860px) {
		width: 80%;
		position: relative;
		order: 1;
		top: -40px;
	}
`;
const AddRightInner = styled.div`
	width: 100%;
`;
const AddImgWrapp1 = styled.div`
	width: 80%;
	margin: 0 6% 10px 6%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp2 = styled.div`
	width: 60%;
	margin: 0 5% 10px 5%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp3 = styled.div`
	width: 50%;
	margin-left: 40%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp4 = styled.div`
	width: 60%;
	margin: 0 5%auto;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
