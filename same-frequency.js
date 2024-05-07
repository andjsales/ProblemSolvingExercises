function sameFrequency(num1, num2) {
    const countDigits = num => {
        const count = {};
        for (const digit of num.toString()) {
            count[digit] = (count[digit] || 0) + 1;
        }
        return count;
    };
    const count1 = countDigits(num1);
    const count2 = countDigits(num2);
    for (const key in count1) {
        if (count1[key] !== count2[key]) return false;
    }
    return Object.keys(count1).length === Object.keys(count2).length;
}
