import badwords from '../helpers/json/badwords.json';

/**
 * Checks if the passed word is a slur. It goes through badwords.json and checks if the word is in there.
 * @param {string} the passed word to check if it's a slur.
 * @returns {boolean} true if the word is a slur, false if not.
*/
const isSlur = (text: string): boolean => {
    const bannedWords = badwords.words;
    console.log(text);
    return bannedWords.includes(text.toLowerCase());
}

export default isSlur;