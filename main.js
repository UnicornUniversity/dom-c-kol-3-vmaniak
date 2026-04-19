//TODO add imports if needed
//TODO doc

/**
 * The main function which calls the application.
 * This function creates a random list of employees.
 * @param {object} dtoIn contains count of employees and age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function main(dtoIn) {
  /**
   * Arrays with values used for random generation.
   */
  const maleNames = [
    "Pepa",
    "Lojza",
    "Tonda",
    "Karel",
    "Franta",
    "Mirek",
    "Radek",
    "Jarda",
    "Libor",
    "Roman",
  ];

  const femaleNames = [
    "Bozena",
    "Miluska",
    "Jitka",
    "Blanka",
    "Alenka",
    "Dasa",
    "Iveta",
    "Marcela",
    "Zdena",
    "Pavlina",
  ];

  const maleSurnames = [
    "Novak",
    "Vykuk",
    "Bouchal",
    "Cumil",
    "Smatlal",
    "Trouba",
    "Koumak",
    "Praskl",
    "Plzák",
    "Remcal",
    "Skrabal",
  ];

  const femaleSurnames = [
    "Novakova",
    "Vykukova",
    "Bouchalova",
    "Cumilova",
    "Smatlalova",
    "Troubova",
    "Koumakova",
    "Prasklova",
    "Plzakova",
    "Remcalova",
    "Skrabalova",
  ];

  const workloads = [10, 20, 30, 40];

  const dtoOut = [];

  for (let i = 0; i < dtoIn.count; i++) {
    /**
     * Create one employee and fill in all required values.
     */
    const employee = {};

    employee.gender = getRandomGender();
    employee.birthdate = getRandomBirthdate(dtoIn.age.min, dtoIn.age.max);
    employee.name = getRandomName(employee.gender, maleNames, femaleNames);
    employee.surname = getRandomSurname(employee.gender, maleSurnames, femaleSurnames);
    employee.workload = getRandomWorkload(workloads);

    dtoOut.push(employee);
  }

  return dtoOut;
}

/**
 * Returns male or female.
 */
function getRandomGender() {
  const randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 0) {
    return "male";
  }

  return "female";
}

/**
 * Returns a random name based on gender.
 */
function getRandomName(gender, maleNames, femaleNames) {
  if (gender === "male") {
    return maleNames[Math.floor(Math.random() * maleNames.length)];
  }

  return femaleNames[Math.floor(Math.random() * femaleNames.length)];
}

/**
 * Returns a random surname based on gender.
 */
function getRandomSurname(gender, maleSurnames, femaleSurnames) {
  if (gender === "male") {
    return maleSurnames[Math.floor(Math.random() * maleSurnames.length)];
  }

  return femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];
}

/**
 * Returns a random workload.
 */
function getRandomWorkload(workloads) {
  return workloads[Math.floor(Math.random() * workloads.length)];
}

/**
 * Returns a random birthdate from the selected age range.
 */
function getRandomBirthdate(minAge, maxAge) {
  const today = new Date();

  /**
   * Oldest possible employee date.
   */
  const oldestDate = new Date(
    today.getFullYear() - maxAge,
    today.getMonth(),
    today.getDate(),
  );

  /**
   * Youngest possible employee date.
   */
  const youngestDate = new Date(
    today.getFullYear() - minAge,
    today.getMonth(),
    today.getDate(),
  );

  const randomTime =
    oldestDate.getTime() + Math.random() * (youngestDate.getTime() - oldestDate.getTime());

  const randomDate = new Date(randomTime);

  return randomDate.toISOString();
}
