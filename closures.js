function makePerson(name) {
  let _name = name;

  return {
    setName: (newName) => (_name = newName),
    getName: () => _name,
  };
}

function assignNumber(value) {
  let num = value;

  return {
    answer: Math.floor(Math.random() * num + 1),
  };
}
