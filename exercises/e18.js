import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;
  let answerLength = 0;
  let answer;
  for (let year of asteroids) {
    let group = asteroids.filter(
      (asteroid) => asteroid.discoveryYear === year.discoveryYear
    );
    if (group.length > answerLength) {
      answerLength = group.length;
      answer = group[0].discoveryYear;
    }
  }
  return answer;
}

// asteroids.find((asteroid) => asteroid.discoveryYear === most )

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
