/**
 * Returns an array containing only the titles of the books
 * @param {Array} books The Array of books
 * @returns Array
 */
const getTheTitles = function(books) {
    return books.map(book=>book.title);
};
// Do not edit below this line
module.exports = getTheTitles;
