function generateUniqueId(prefix = "") {
  let id = 0;

  return function () {
    return `${prefix}${id++}`;
  };
}

const generator1 = generateUniqueId();

const generator2 = generateUniqueId();
