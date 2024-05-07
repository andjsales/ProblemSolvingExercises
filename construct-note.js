function constructNote(message, letters) {
    let letterCount = {};
    for (let char of letters) {
        letterCount[char] = (letterCount[char] || 0) + 1;
    }
    for (let char of message) {
        if (!letterCount[char]) return false;
        letterCount[char]--;
    }
    return true;
}
