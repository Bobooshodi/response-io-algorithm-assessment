const { sortBy } = require("lodash");

const data = require("./data/inputData.json");

const result = [];

for (let i = 0; i < data.length; i++) {
  const currentObj = data[i];
  existingGroupIndex = -1;

  for (let j = 0; j < result.length; j++) {
    const group = result[j];

    const groupExists = group.some(
        (obj) =>
          obj.sourceAccount === currentObj.sourceAccount &&
          obj.targetAccount === currentObj.targetAccount &&
          obj.category === currentObj.category &&
          obj.amount === currentObj.amount
      );

      if (groupExists) {
        existingGroupIndex = j;
        break;
      }
  }

  if (existingGroupIndex < 0) {
    result.push([currentObj]);
  } else {
    result[existingGroupIndex].push(currentObj);

    result[existingGroupIndex] = sortBy(result[existingGroupIndex], ['time'])
  }
}

console.log(result);
