const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalArray = letters[0].map((col, index) => letters.map(row => row[index]));
    const verticalJoin = verticalArray.map(ls => ls.join(''));

    for (const x of horizontalJoin) {
        if (x.includes(word)) return true;
        else {
            for (const y of verticalJoin) {
                if (y.includes(word)) return true;
            }
        }
    }
    return false;
};

module.exports = wordSearch;