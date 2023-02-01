import jetSkisImg00 from "../assets/images/products/jetSkis/jetSkis00.png";
import jetSkisImg01 from "../assets/images/products/jetSkis/jetSkis01.png";
import jetSkisImg02 from "../assets/images/products/jetSkis/jetSkis02.png";
import jetSkisImg03 from "../assets/images/products/jetSkis/jetSkis03.png";
import jetSkisImg04 from "../assets/images/products/jetSkis/jetSkis04.png";
import jetSkisImg05 from "../assets/images/products/jetSkis/jetSkis05.png";
import jetSkisImg06 from "../assets/images/products/jetSkis/jetSkis06.png";
import jetSkisImg07 from "../assets/images/products/jetSkis/jetSkis07.png";
import jetSkisImg08 from "../assets/images/products/jetSkis/jetSkis08.png";
import jetSkisImg09 from "../assets/images/products/jetSkis/jetSkis09.png";
import jetSkisImg10 from "../assets/images/products/jetSkis/jetSkis10.png";
import jetSkisImg11 from "../assets/images/products/jetSkis/jetSkis11.png";

import quadBikeImg01 from "../assets/images/products/quad-bike/quad-bike01.webp";
import quadBikeImg02 from "../assets/images/products/quad-bike/quad-bike02.webp";
import quadBikeImg03 from "../assets/images/products/quad-bike/quad-bike03.webp";
import quadBikeImg04 from "../assets/images/products/quad-bike/quad-bike04.webp";
import quadBikeImg05 from "../assets/images/products/quad-bike/quad-bike05.webp";
import quadBikeImg06 from "../assets/images/products/quad-bike/quad-bike06.jpg";
import quadBikeImg07 from "../assets/images/products/quad-bike/quad-bike07.jpg";
import quadBikeImg08 from "../assets/images/products/quad-bike/quad-bike08.jpg";
import quadBikeImg09 from "../assets/images/products/quad-bike/quad-bike09.jpg";
import quadBikeImg10 from "../assets/images/products/quad-bike/quad-bike10.jpg";
import quadBikeImg11 from "../assets/images/products/quad-bike/quad-bike11.jpg";
import quadBikeImg12 from "../assets/images/products/quad-bike/quad-bike12.jpg";

import boatImg01 from "../assets/images/products/boats/boat01.jpg";
import boatImg02 from "../assets/images/products/boats/boat02.jpg";
import boatImg03 from "../assets/images/products/boats/boat03.jpg";

import speedboatImg01 from "../assets/images/products/speedboats/speedboat01.webp";
import speedboatImg02 from "../assets/images/products/speedboats/speedboat02.webp";
import speedboatImg03 from "../assets/images/products/speedboats/speedboat03.webp";
import speedboatImg04 from "../assets/images/products/speedboats/speedboat04.webp";
import speedboatImg05 from "../assets/images/products/speedboats/speedboat05.jpg";

import roverImg01 from "../assets/images/products/rovers/rover01.webp";
import roverImg02 from "../assets/images/products/rovers/rover02.webp";
import roverImg03 from "../assets/images/products/rovers/rover03.png";
import roverImg04 from "../assets/images/products/rovers/rover04.png";

import snowshoesImg01 from "../assets/images/products/snowshoes/snowshoes01.png";
import snowshoesImg02 from "../assets/images/products/snowshoes/snowshoes02.png";
import snowshoesImg03 from "../assets/images/products/snowshoes/snowshoes03.jpg";

import motorImg01 from "../assets/images/products/motors/motor01.jpg";
import motorImg02 from "../assets/images/products/motors/motor02.jpg";
import motorImg03 from "../assets/images/products/motors/motor03.jpg";
import motorImg04 from "../assets/images/products/motors/motor04.jpg";

export const products = {
	jetSkis: [
		{
			id: 0,
			inStock: true,
			title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
			price: 262375,
			img: jetSkisImg00,
		},
		{
			id: 1,
			inStock: true,
			title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
			price: 275220,
			img: jetSkisImg01,
		},
		{
			id: 2,
			inStock: true,
			title: "Гидроцикл BRP SeaDoo GTR 230hp X California green",
			price: 330925,
			img: jetSkisImg02,
		},
		{
			id: 3,
			inStock: false,
			title: "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream",
			price: 0,
			img: jetSkisImg03,
		},
		{
			id: 4,
			inStock: true,
			title: "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal",
			price: 385750,
			img: jetSkisImg04,
		},
		{
			id: 5,
			inStock: true,
			title: "Гидроцикл BRP SeaDoo Spark 60hp 2 up",
			price: 183100,
			img: jetSkisImg05,
		},
		{
			id: 6,
			inStock: true,
			title: "Гидроцикл BRP SeaDoo Spark GTS 90hp Rental",
			price: 214500,
			img: jetSkisImg06,
		},
		{
			id: 7,
			inStock: true,
			title: "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue",
			price: 307450,
			img: jetSkisImg07,
		},
		{
			id: 8,
			inStock: true,
			title: "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper",
			price: 148000,
			img: jetSkisImg08,
		},
		{
			id: 9,
			inStock: true,
			title: "Гидроцикл Spark 2-UP 900 Ho Ace Pineapple ",
			price: 148000,
			img: jetSkisImg09,
		},
		{
			id: 10,
			inStock: false,
			title: "Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla ",
			price: 0,
			img: jetSkisImg10,
		},
		{
			id: 11,
			inStock: false,
			title: "Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry",
			price: 0,
			img: jetSkisImg11,
		},
	],
	quadBike: [
		{
			id: 0,
			inStock: true,
			title: "MW 49CC SPORTS BUGGY QUAD BIKE - BLACK",
			price: 20950,
			img: quadBikeImg01,
		},
		{
			id: 1,
			inStock: true,
			title: "GMX THE BEAST RED 110CC SPORTS QUAD BIKE",
			price: 52000,
			img: quadBikeImg02,
		},
		{
			id: 2,
			inStock: true,
			title: "MW 110CC SPORTS QUAD BIKE - GREEN",
			price: 37950,
			img: quadBikeImg03,
		},
		{
			id: 3,
			inStock: true,
			title: "MW 125CC JUNIOR FARM QUAD BIKE - BLACK",
			price: 44000,
			img: quadBikeImg04,
		},
		{
			id: 4,
			inStock: true,
			title: "CROSSFIRE MUSTANG EVO 3 250CC QUAD BIKE - BLUE",
			price: 191750,
			img: quadBikeImg05,
		},
		{
			id: 5,
			inStock: true,
			title: "GMX PINK 60CC 4 STROKE CHASER QUAD BIKE",
			price: 34000,
			img: quadBikeImg06,
		},
		{
			id: 6,
			inStock: true,
			title: "MW 49CC SPORTS BUGGY QUAD BIKE - GREEN",
			price: 20950,
			img: quadBikeImg07,
		},
		{
			id: 7,
			inStock: true,
			title: "GMX THE BEAST GREEN 110CC SPORTS QUAD BIKE",
			price: 52000,
			img: quadBikeImg08,
		},
		{
			id: 8,
			inStock: true,
			title: "CROSSFIRE X600 EPS FARM ATV QUAD BIKE - GREEN Out Of Stock",
			price: 408000,
			img: quadBikeImg09,
		},
		{
			id: 9,
			inStock: true,
			title: "CROSSFIRE E5 4X4 ELECTRIC UTV - WHITE",
			price: 467800,
			img: quadBikeImg10,
		},
		{
			id: 10,
			inStock: true,
			title: "CROSSFIRE BLAZER 200R 200CC GO KART - RED",
			price: 127080,
			img: quadBikeImg11,
		},
		{
			id: 11,
			inStock: true,
			title: "CROSSFIRE BLAZER 200R 200CC GO KART - WHITE",
			price: 127080,
			img: quadBikeImg12,
		},
	],
	boats: [
		{
			id: 0,
			inStock: true,
			title: "Надувна байдарка-двійка ZRay Drift 2 14'X32",
			price: 23110,
			img: boatImg01,
		},
		{
			id: 1,
			inStock: true,
			title:
				"Каркасна одномісна байдарка Neris Valkure-1 Standart Каркасна одномісна байдарка Neris Valkure-1 Standart",
			price: 20800,
			img: boatImg02,
		},
		{
			id: 2,
			inStock: true,
			title: "Каяк Blaze",
			price: 24288,
			img: boatImg03,
		},
	],
	speedboats: [
		{
			id: 0,
			inStock: true,
			title:
				"SX190 Fun Starts Here. Single 4-cylinder, 4-stroke, 1.8 Liter High Output Yamaha Marine Engine",
			price: 1424000,
			img: speedboatImg01,
		},
		{
			id: 1,
			inStock: true,
			title:
				"AR190 Watersports Fun and Excellent Value. Single 4-cylinder, 4-stroke, 1.8 Liter",
			price: 1540000,
			img: speedboatImg02,
		},
		{
			id: 2,
			inStock: true,
			title:
				"AR195 Supercharge Your Watersports. Single Supercharged 4-cylinder, 4-stroke, Super Vortex",
			price: 1804000,
			img: speedboatImg03,
		},
		{
			id: 3,
			inStock: true,
			title:
				"195S Refined Style Meets Sports Performance. Single Supercharged 4-cylinder, 4-stroke, Super",
			price: 1900000,
			img: speedboatImg04,
		},
		{
			id: 4,
			inStock: true,
			title: "Yamaha 222 FSH Sport E",
			price: 2932000,
			img: speedboatImg05,
		},
	],
	rovers: [
		{
			id: 0,
			inStock: true,
			title: "Мотовсюдихід Yamaha Wolverine RMAX 2 1000 SE",
			price: 962500,
			img: roverImg01,
		},
		{
			id: 1,
			inStock: true,
			title: "Мотовсюдихід Yamaha Wolverine RMAX 4 1000",
			price: 997150,
			img: roverImg02,
		},
		{
			id: 2,
			inStock: true,
			title: "MY23 COMMANDER MAX XT-P 1000R",
			price: 980000,
			img: roverImg03,
		},
		{
			id: 3,
			inStock: true,
			title: "Maverick MAX X RS SAS TurboRR",
			price: 1458000,
			img: roverImg04,
		},
	],
	snowshoes: [
		{
			id: 0,
			inStock: true,
			title: "Снігохід EXPEDITION SE 900 ACE TURBO (650W) ES STUDDED TRACK VIP",
			price: 806000,
			img: snowshoesImg01,
		},
		{
			id: 1,
			inStock: true,
			title: "Електро Gekkon Snow 1300W Снігохід (Снігоцикл)",
			price: 23375,
			img: snowshoesImg02,
		},
		{
			id: 2,
			inStock: false,
			title: "Mikro Snow Снігохід (Снігоцикл) ",
			price: 0,
			img: snowshoesImg03,
		},
	],
	motors: [
		{
			id: 0,
			inStock: true,
			title: "Човновий мотор Tohatsu MFS30CS",
			price: 114521,
			img: motorImg01,
		},
		{
			id: 1,
			inStock: true,
			title: "Човновий мотор Tohatsu TM25HS",
			price: 79721,
			img: motorImg02,
		},
		{
			id: 2,
			inStock: true,
			title: "Човновий мотор Tohatsu MFS40A ETL",
			price: 198650,
			img: motorImg03,
		},
		{
			id: 3,
			inStock: true,
			title: "Човновий мотор Tohatsu TM2.5A2S",
			price: 4968,
			img: motorImg04,
		},
	],
	spares: [],
};
