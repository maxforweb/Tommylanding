import { motion } from "framer-motion";
import { Box } from "@mui/material";

import car from "../../assets/icons/car.svg";
import coin from "../../assets/icons/coin.svg";
import cup from "../../assets/icons/cup.svg";
import ellipse from "../../assets/ellipse.svg";
import ellipseFull from "../../assets/icons/ellipse-full.svg";
import heartLg from "../../assets/icons/heart-lg.svg";
import heartSm from "../../assets/icons/heart-sm.svg";
import message from "../../assets/icons/message.svg";
import moon from "../../assets/icons/moon.svg";
import petFood from "../../assets/icons/pet-food.svg";
import robo from "../../assets/icons/robo.svg";
import starDouble from "../../assets/icons/star-double.png";
import starSingle from "../../assets/icons/star-single.png";
import startGrad from "../../assets/icons/star-gradient.svg";
import star from "../../assets/star.svg";
import coinLg from "../../assets/coin-lg.png";
import coinSm from "../../assets/coin-sm.png";
import coinLgOpacity from "../../assets/coin-lg-opacity.png";

const icons = {
	star: {
		src: star,
		top: "5%",
		left: "5%",
		width: "60px",
		height: "60px",
		animation: {
			initial: { rotate: 0 },
			animate: { rotate: [0, 360] },
			transition: { duration: 5, repeat: Infinity, ease: "linear" },
		},
	},
	coinLg: {
		src: coinLg,
		top: "10%",
		right: "5%",
		width: "60px",
		height: "60px",
		animation: {
			initial: { rotate: 0 },
			animate: { rotate: [0, 360] },
			transition: { duration: 5, repeat: Infinity, ease: "linear" },
		},
	},
	coinSm: {
		src: coinSm,
		bottom: "-35%",
		right: "-20%",
		width: "120px",
		height: "133px",
		animation: {
			initial: {},
			animate: {},
			transition: {},
		},
	},
	coinLgOpacity: {
		src: coinLgOpacity,
		top: "-45%",
		left: "-25%",
		width: "200px",
		height: "220px",
		animation: {
			initial: {},
			animate: {},
			transition: {},
		},
	},
	starGrad: {
		src: startGrad,
		top: "7%",
		left: "-10%",
		width: "190px",
		height: "190px",
		widthMd: "120px",
		heightMd: "120px",
		animation: {
			initial: { rotate: 0, y: 0 },
			animate: { rotate: [0, 180], y: [0, 100, 0] },
			transition: { duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	ellipseFull: {
		src: ellipseFull,
		bottom: "-10%",
		right: "100%",
		width: "250px",
		height: "168px",
		widthMd: "150px",
		heightMd: "100px",
		animation: {
			initial: { x: 0 },
			animate: { x: [0, 320] },
			transition: { duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	ellipse: {
		src: ellipse,
		top: "-5%",
		left: "-15%",
		width: "168px",
		height: "168px",
		widthMd: "100px",
		heightMd: "100px",
		animation: {
			initial: { rotate: 0 },
			animate: { rotate: [0, 15] },
			transition: { duration: 3, repeat: Infinity, ease: "linear", repeatType: "mirror" },
		},
	},
	moon: {
		src: moon,
		top: "7%",
		left: "-5%",
		leftMd: "5%",
		width: "113px",
		height: "113px",
		widthMd: "45px",
		heightMd: "45px",
		animation: {
			initial: { y: 0, rotate: 0 },
			animate: { y: [0, -30, 0], rotate: [0, 0] },
			transition: { duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	car: {
		src: car,
		bottom: "0",
		left: "0",
		width: "49px",
		height: "35px",
		animation: {
			initial: { x: -150, opacity: 0 },
			animate: { x: [0, 250, 0], opacity: [0, 1, 0] },
			transition: { duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	coin: {
		src: coin,
		top: "10%",
		left: "0",
		width: "53px",
		height: "75px",
		animation: {
			initial: { rotate: 0 },
			animate: { rotate: 360 },
			transition: { duration: 7, repeat: Infinity, ease: "linear" },
		},
	},
	cup: {
		src: cup,
		bottom: "15%",
		left: "5%",
		width: "57px",
		height: "57px",
		animation: {
			initial: { y: 20 },
			animate: { y: [0, 20, 0] },
			transition: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	heartLg: {
		src: heartLg,
		bottom: "5%",
		right: "5%",
		width: "72px",
		height: "62px",
		animation: {
			initial: { scale: 1 },
			animate: { scale: [1, 1.1, 1] },
			transition: { duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	heartSm: {
		src: heartSm,
		top: "17%",
		left: "0",
		width: "41px",
		height: "35px",
		animation: {
			initial: { scale: 1 },
			animate: { scale: [1, 1.2, 1] },
			transition: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	message: {
		src: message,
		bottom: "50%",
		right: "10%",
		width: "70px",
		height: "70px",
		animation: {
			initial: { rotate: 0 },
			animate: { rotate: [-20, 10, 0] },
			transition: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	petFood: {
		src: petFood,
		animation: {
			initial: { scale: 0.8 },
			animate: { scale: [0.8, 1.1, 0.8] },
			transition: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	robo: {
		src: robo,
		top: "40%",
		right: "8%",
		width: "45px",
		height: "40px",
		animation: {
			initial: { rotate: 0 },
			animate: { rotate: [-15, 15, 0] },
			transition: { duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	starDouble: {
		src: starDouble,
		bottom: "10%",
		right: "0",
		width: "75px",
		height: "85px",
		widthMd: "33px",
		heightMd: "37px",
		animation: {
			initial: { y: 0 },
			animate: { y: [0, -15, 0] },
			transition: { duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
	starSingle: {
		src: starSingle,
		top: "12%",
		right: "5%",
		width: "60px",
		height: "60px",
		widthMd: "30px",
		heightMd: "30px",
		animation: {
			initial: { opacity: 1 },
			animate: { opacity: [1, 0.5, 1], y: [0, -15, 0], x: [0, 15, 0] },
			transition: { duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
		},
	},
};

const DecorBlock = ({ iconName, customStyles = {} }) => {
	const icon = icons[iconName];
	if (!icon) return null;

	const style = {
		position: "absolute",
		top: icon.top,
		left: icon.left,
		right: icon.right,
		bottom: icon.bottom,
		zIndex: 2,
		...customStyles, // Custom styles will override default values if provided
	};

	return (
		<motion.div
			initial={icon.animation.initial}
			animate={icon.animation.animate}
			transition={icon.animation.transition}
			style={style}>
			<Box
				component='img'
				src={icon.src}
				alt={iconName}
				sx={{
					width: { xs: icon.widthMd, md: icon.width },
					height: { xs: icon.heightMd, md: icon.height },
					...customStyles,
				}}
			/>
		</motion.div>
	);
};

export default DecorBlock;
