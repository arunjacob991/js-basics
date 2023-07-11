const allStates = [
  { isoCode: "IN", name: "India" },
  { isoCode: "CA", name: "Canada" },
  { isoCode: "US", name: "USA" },
];

const [{ isoCode: firstCode = "" } = {}] = allStates;

console.log(firstCode);
