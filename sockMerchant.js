// Determine how many pairs of socks with matching colors there are
// n: the number of socks in the pile
// ar: the colors of each sock (by number)

// Return the total number of matching pairs

function sockMerchant(n, ar) {
  const map = {};
  let result = 0;
  ar.forEach((num) => {
    if (!map[num]) map[num] = true;
    else {
      delete map[num];
      result++;
    }
  });
  return result;
}
