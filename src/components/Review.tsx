import React, { useState } from "react";
import people from "./Data";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import {
	Box,
	Button,
	Card,
	CardMedia,
	Icon,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { relative } from "path";
const useStyles = makeStyles(() => ({
	circularImage: {
		borderRadius: "50%",
	},
}));
const Review = () => {
	const classes = useStyles();
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index];
	const checkNumber = (number: number) => {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
		}
		return number;
	};
	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};
	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};
	const randomPerson = () => {
		let randomNumber = Math.floor(Math.random() * people.length);
		if (randomNumber === index) {
			randomNumber = index + 1;
		}
		setIndex(checkNumber(randomNumber));
	};

	return (
		<Box>
			<Card sx={{ width: "500px",height:'500px', m: 1, p: 1 ,display:'block'}}>
				<Box
					sx={{
						justifyContent: "center",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Box sx={{
						position : 'relative',
						width : '150px',
						height : '150px',
						borderRadius : '50%'
					}}>
						<CardMedia
							className={classes.circularImage}
							component='img'
							image={image}
							alt={name}
							sx={{
								imageResolution: "200px",
								maxHeight: "150px",
								maxWidth: "150px",
								objectFit: "cover",
								position: "relative",
								display: "block",
								m: 0.5,
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "2.5rem",
								height: "2.5rem",
								diplay: "grid",
								display: "grid",
								placeItems: "center",

								borderRadius: "50%",
								transform: "traslateY(25%)",
								background: "lightblue",
								color: "white",
							}}
						>
							<FaQuoteRight />
						</Box>
					</Box>
				</Box>

				<Typography
					variant='h4'
					sx={{
						justifyContent: "center",
						display: "flex",
						alignContent: "center",
						m: 1,
					}}
				>
					{name}
				</Typography>
				<Typography
					variant='h5'
					sx={{
						justifyContent: "center",
						display: "flex",
						alignContent: "center",
						color: "lightblue",
						m: 1,
						p: 0.5,
					}}
				>
					{job}
				</Typography>
				<Typography
					paragraph
					sx={{
						justifyContent: "center",
						display: "block",
						alignContent: "center",
						m: 1,
						p: 0.5,
					}}
				>
					{text}
				</Typography>

				<Box sx={{ justifyContent: "center", display: "flex", m: 1, p: 0.5 }}>
					<IconButton color='primary' onClick={prevPerson}>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton color='primary' onClick={nextPerson}>
						<ChevronRightIcon />
					</IconButton>
				</Box>
				<Box sx={{ justifyContent: "center", display: "flex", m: 1, p: 0.5 }}>
					<Button variant='outlined' onClick={randomPerson}>
						surprise me
					</Button>
				</Box>
			</Card>
		</Box>
	);
};

export default Review;
