export type Label = "mot-qui-se-ressemble";

export type Word = {
	wordInFrench: string;
	wordInRussian: string;
	labels: Label[];
};

export const words = [
	{
		wordInFrench: "Park",
		wordInRussian: "Парк",
		labels: ["mot-qui-se-ressemble"],
	},
	{
		wordInFrench: "Sport",
		wordInRussian: "Спорт",
		labels: ["mot-qui-se-ressemble"],
	},
] satisfies Word[];
