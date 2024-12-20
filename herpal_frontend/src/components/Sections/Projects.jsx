// health services section trackers included

import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import { Link } from "react-router-dom";
// Assets
// import ProjectImg1 from "../../assets/img/projects/1.png";
// import ProjectImg2 from "../../assets/img/projects/2.png";
// import ProjectImg3 from "../../assets/img/projects/3.png";
// import ProjectImg4 from "../../assets/img/projects/4.png";
// import ProjectImg5 from "../../assets/img/projects/5.png";
// import ProjectImg6 from "../../assets/img/projects/6.png";
// import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
	return (
		<Wrapper id="projects">
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Health Services for you</h1>
						<p className="font13">
							Period days are never easy.But HerPal is trying to make it easier for you,with our services:
							<br />
						</p>
					</HeaderInfo>
					<div className="row textCenter">
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/appointment"}>
								<ProjectBox
									img={
										"https://previews.123rf.com/images/artinspiring/artinspiring2003/artinspiring200300513/142303595-young-woman-have-in-vitro-fertilization-treatment-in-fertility-clinic-gynecologist-doctor-take-a-wom.jpg"
									}
									title="Get gynac's care"
									text="Take an appointment from the nearest available doctor"
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/"}>
								<ProjectBox
									img={
										"https://thumbs.dreamstime.com/b/feminine-hygiene-set-pads-lovely-collection-cute-vector-illustrations-menstruation-cosmetic-purse-110498143.jpg"
									}
									title="Product Recognition"
									text="I will help you to recognise your feminine product and help with the instructions for how to use it correctly!!"
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/track"}>
								<ProjectBox
									img={
										"https://img.freepik.com/free-vector/creative-menstrual-calendar-concept-illustrated_23-2148662282.jpg?w=740&t=st=1673051551~exp=1673052151~hmac=cc8dc3c63a9c7145f0fb7e473fb5ccd6ecd8692f5a841a58c8dedd9a689d9db7"
									}
									title="Period Tracker"
									text="Get complete details of your period cycles, for upto three months and plan accordingly. "
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/signup"}>
								<ProjectBox
									img={
										"https://img.freepik.com/free-vector/messaging-fun-concept-illustration_114360-1563.jpg?t=st=1673089953~exp=1673090553~hmac=bc161ad549e1ec1594195cc081b58200698d41165d0ab281e5b3a4c2e0262395"
									}
									title="ChatBot"
									text="You can ask your doubts about your periods or about your mood swings. I understands.!! "
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Advertising = styled.div`
	padding: 100px 0;
	margin: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 60px 0 40px 0;
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
	position: relative;
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
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
	}
`;
const AddLeftInner = styled.div`
	width: 100%;
	position: absolute;
	top: -300px;
	left: 0;
	@media (max-width: 1190px) {
		top: -250px;
	}
	@media (max-width: 920px) {
		top: -200px;
	}
	@media (max-width: 860px) {
		order: 1;
		position: relative;
		top: -60px;
		left: 0;
	}
`;
const ImgWrapper = styled.div`
	width: 100%;
	padding: 0 15%;
	img {
		width: 100%;
		height: auto;
	}
	@media (max-width: 400px) {
		padding: 0;
	}
`;
