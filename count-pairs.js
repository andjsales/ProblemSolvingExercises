function countPairs(arr, targetSum) {
    const seen = new Set();
    let count = 0;
    for (const num of arr) {
        const complement = targetSum - num;
        if (seen.has(complement)) count++;
        seen.add(num);
    }
    return count;
}
