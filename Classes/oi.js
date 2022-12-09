const sumTwoSmallestNumbers = (numbers) => {
    const result = numbers.sort((a, b) => a - b)
    return result[0] + result[1]
} 