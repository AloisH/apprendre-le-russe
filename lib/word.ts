export function isSameWord(wordA: string, wordB: string): boolean {
	const wordANormalize = wordA
		.toLocaleLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
	const wordBNormalize = wordB
		.toLocaleLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
	return wordANormalize === wordBNormalize;
}
