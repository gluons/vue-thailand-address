/**
 * Highlight the word that match the query.
 *
 * @exports
 * @param {string} query A search query.
 * @param {string} text A text string.
 * @returns {string} Highlighted text.
 */
export default function highlightQuery(query: string, text: string): string {
	if (text.length > 0) {
		return text.replace(new RegExp(query, 'ig'), match => `<b>${match}</b>`);
	} else {
		return text;
	}
}
