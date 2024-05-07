function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] < 0 && arr[right] > 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
        if (arr[left] > 0) left++;
        if (arr[right] < 0) right--;
    }
    return arr;
}
