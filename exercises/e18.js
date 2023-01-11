import { data } from "../data/data.js";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;
  const hashMap = new Map();
  let sightings = 1;
  let astroWithMost;
  for (const asteroid of asteroids) {
    if (hashMap.has(asteroid.discoveryYear)) {
      hashMap.set(
        asteroid.discoveryYear,
        hashMap.get(asteroid.discoveryYear) + 1
      );
    } else {
      hashMap.set(asteroid.discoveryYear, 1);
    }
    if (hashMap.get(asteroid.discoveryYear) > sightings) {
      sightings = hashMap.get(asteroid.discoveryYear);
      astroWithMost = asteroid.discoveryYear;
    }
  }
  return astroWithMost;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
