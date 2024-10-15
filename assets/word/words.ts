export type Label =
	| "niv-1:mot-qui-se-ressemble"
	| "niv-1:mot-facile"
	| "niv-1:premieres-phrases";

export type Word = {
	wordInFrench: string;
	wordInRussian: string;
	labels: Label[];
};

export const words = [
	// Niveau 1: Mot qui se ressemble
	{
		wordInFrench: "Parc",
		wordInRussian: "Парк",
		labels: ["niv-1:mot-qui-se-ressemble", "niv-1:mot-facile"],
	},
	{
		wordInFrench: "Sport",
		wordInRussian: "Спорт",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Soup",
		wordInRussian: "Суп",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Banque",
		wordInRussian: "Банк",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Box",
		wordInRussian: "Бокс",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Texte",
		wordInRussian: "Текст",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Stop",
		wordInRussian: "Стоп",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Faxes",
		wordInRussian: "факс",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "classe",
		wordInRussian: "класс",
		labels: ["niv-1:mot-qui-se-ressemble", "niv-1:mot-facile"],
	},
	{
		wordInFrench: "tigre",
		wordInRussian: "тигр",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "chef",
		wordInRussian: "шеф",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Film",
		wordInRussian: "фильм",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Kino",
		wordInRussian: "кино",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Kiosque",
		wordInRussian: "киоск",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Théatre",
		wordInRussian: "театр",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Athlète",
		wordInRussian: "Атлет",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Maman",
		wordInRussian: "мама",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Papa",
		wordInRussian: "папа",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Lampe",
		wordInRussian: "лампа",
		labels: ["niv-1:mot-qui-se-ressemble", "niv-1:mot-facile"],
	},
	{
		wordInFrench: "Carte",
		wordInRussian: "карта",
		labels: ["niv-1:mot-qui-se-ressemble", "niv-1:mot-facile"],
	},
	{
		wordInFrench: "Football",
		wordInRussian: "футбол",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Banane",
		wordInRussian: "банан",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Etudiant",
		wordInRussian: "Студент",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Touriste",
		wordInRussian: "турист",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Métro",
		wordInRussian: "метро",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Taxis",
		wordInRussian: "такси",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Restaurant",
		wordInRussian: "ресторан",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Téléphone",
		wordInRussian: "телефон",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Télévision",
		wordInRussian: "телевизор",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Bibliothèque",
		wordInRussian: "библиотека",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Transport",
		wordInRussian: "транспорт",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Université",
		wordInRussian: "университет",
		labels: ["niv-1:mot-qui-se-ressemble"],
	},
	// Niveau 1: Mot facile
	{
		wordInFrench: "Maison",
		wordInRussian: "дом",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Chat",
		wordInRussian: "кот",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Table",
		wordInRussian: "Стол",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Chaise",
		wordInRussian: "стул",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Fenêtre",
		wordInRussian: "окно",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Porte",
		wordInRussian: "дверь",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Magazine",
		wordInRussian: "журнал",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Journal",
		wordInRussian: "газета",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Livre",
		wordInRussian: "книга",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Stylo",
		wordInRussian: "ручка",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Crayon",
		wordInRussian: "карандаш",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Cartable",
		wordInRussian: "портфель",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Cahier",
		wordInRussian: "тетрадь",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Leçon",
		wordInRussian: "урок",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Voiture",
		wordInRussian: "машина",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Manteau",
		wordInRussian: "пальто",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Chapka",
		wordInRussian: "шапка",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Sac",
		wordInRussian: "сумка",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Café",
		wordInRussian: "кофе",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Mer",
		wordInRussian: "море",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "nom de famille",
		wordInRussian: "фамилия",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Russie",
		wordInRussian: "Россия",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "Moscou",
		wordInRussian: "Москва",
		labels: ["niv-1:mot-facile"],
	},
	{
		wordInFrench: "qui",
		wordInRussian: "кто",
		labels: ["niv-1:premieres-phrases"],
	},
	{
		wordInFrench: "quoi",
		wordInRussian: "что",
		labels: ["niv-1:premieres-phrases"],
	},
	{
		wordInFrench: "ça",
		wordInRussian: "это",
		labels: ["niv-1:premieres-phrases"],
	},
	{
		wordInFrench: "oui",
		wordInRussian: "да",
		labels: ["niv-1:premieres-phrases"],
	},
	{
		wordInFrench: "non",
		wordInRussian: "нет",
		labels: ["niv-1:premieres-phrases"],
	},
] satisfies Word[];
