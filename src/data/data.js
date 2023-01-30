import partImg01 from "../assets/images/products/parts/part01.png";
import partImg02 from "../assets/images/products/parts/part02.png";
import partImg03 from "../assets/images/products/parts/part03.png";
import partImg04 from "../assets/images/products/parts/part04.png";

export const data = {
	Header: {
		link1: "Магазини",
		link2: "Акції",
		link3: "Доставка та оплата",
		address: "Київ, вул. Михайла Максимовича 24",
		quantityProduct: "1",
		categories: {
			link1: "Квадроцикли",
			link2: "Катери",
			link3: "Гідроцикли",
			link4: "Човни",
			link5: "Всюдиходи",
			link6: "Снігоходи",
			link7: "Двигуни",
			link8: "Запчастини",
		},
	},
	Main: {
		Promo: {
			info: "Акція",
			priceNew: "190 000",
			priceOld: "225 000",
			title: "Човновий мотор Suzuki DF9.9BRS",
			footer: "Акція діє до",
			date: "31.03.2023",
		},
		Search: {
			nameFirst: "Пошук за номером",
			placeholderFirst: "Введіть номер",
			nameSecond: "Пошук за маркою",
			placeholderSecond: "Введіть марку",
			nameThird: "Пошук за назвою товару",
			placeholderThird: "Введіть назву товару",
			nameButton: "Знайти",
		},
		Categories: {
			text: "Детальніше",
			nameFirst: "Квадроцикли",
			nameSecond: "Гідроцикли",
			nameThird: "Катери",
			nameFourth: "Снігоходи",
			nameFifth: "Всюдиходи",
			nameSixth: "Двигатели",
		},
		Products: {
			title: "Популярні товари",
			tabs: [
				"запчастини",
				"мотори",
				"шини",
				"електроніка",
				"інструменти",
				"аксесуари",
			],
			popularProductsPart: [
				{
					title: "Водонепроникний Рюкзак",
					img: partImg01,
					price: 9800,
				},
				{
					title: "Рятувальний жилет BRP Men's Airflow PFD",
					img: partImg02,
					price: 6900,
				},
				{
					title: "BRP Audio-Premium System",
					img: partImg03,
					price: 68000,
				},
				{
					title: "Рятувальне спорядження",
					img: partImg04,
					price: 1000,
				},
			],
			popularProducts: [
				{
					title: "інструменти",
					img: partImg01,
				},
				{
					title: "аксесуари",
					img: partImg02,
				},
			],
		},
	},
	Footer: {
		title: "Підпишіться на нашу розсилку і дізнавайтеся про акцію швидше",
		placeholder: "Введіть ваш e-mail:",
		nameBtn: "Відправити",
	},
};
