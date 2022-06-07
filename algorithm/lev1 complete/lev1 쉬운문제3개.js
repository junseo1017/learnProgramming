function solution(arr, divisor) {
  let answer = [];
  const filter = arr.filter(e => e % divisor === 0 ? true)

  if (filter.length == 0) {
    answer.push(-1);
    return answer;
  } else return filter.sort((a, b) => a - b);
}

function solution(a, b) {
  if (a === b) {
    return a;
  }
  answer = 0;
  arr = [a, b].sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    answer += i;
  }
  return answer;
}

function solution(arr) {
  const filter = arr.filter((e, i) => e !== arr[i + 1]);
  return filter;
}
