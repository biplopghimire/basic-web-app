export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return "bghimire";
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return "bghimire";
  }

  // Handle "largest number" questions using regex
  const largestMatch = query.match(/largest.*?(\d+)(?:.*?(\d+))*(?:.*?(\d+))*/i);
  if (largestMatch) {
    // Extract all numbers from the query
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const numericValues = numbers.map(num => parseInt(num, 10));
      const largest = Math.max(...numericValues);
      return largest.toString();
    }
  }

  // Handle addition questions using regex
  const additionMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1], 10);
    const num2 = parseInt(additionMatch[2], 10);
    const sum = num1 + num2;
    return sum.toString();
  }

  return "";
}
