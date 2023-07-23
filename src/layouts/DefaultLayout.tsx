import { CSSProperties } from "react";
import onboardImg from "../assets/onboard/new.jpg";
import onboardImg2 from "../assets/onboard/new 2.jpg";
import { AiOutlineCloudServer as Logo } from "react-icons/ai";

import { Outlet } from "react-router-dom";

import { useTheme } from "../context/ThemeProvider";
import Loading from "../compnents/Loading";

function DefaultLayout() {
	const { theme , themeType} = useTheme();

    return (
    
		<div className='auth-container' style={{ ...theme } as CSSProperties}>
			<div className='auth-form-area'>
				<div className=" logo-wrapper">
					<Logo size={50} className='app-logo' />
				</div>
				

				{/*  */}
				<Outlet />
				{/*  */}
				

				{/* <div className='auth-footer-note'>
					<p>
						Lorem ipsum dolor, sit amet? <a href='/'>Ducimus, amet!</a>
					</p>
				</div> */}
			</div>
			<div className='auth-onboard-area'>
				<div className='auth-onboarding-msg-container'>
					<h2 className='onboarding-msg-title'>
						Learn About the Features in Lezzy Cloud Files 1.0.0{" "}
					</h2>
					<p className='onboarding-msg-paragraph'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Minima consectetur necessitatibus hic adipisci repellendus
						fuga qui veritatis quaerat, ducimus harum!
					</p>
				</div>
				<img src={themeType === 'dark' ? onboardImg2 : onboardImg} alt='' className='onboarding-img' />
			</div>
		</div>
	);
}

export default DefaultLayout;
