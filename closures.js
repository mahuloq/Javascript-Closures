let count = 0;

function counter() {
  count = count + 1;
  return {
    increment: count,
  };
}
