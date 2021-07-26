// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 풀이
function solution(num) {
  var answer = "";
  if (num % 2) {
    answer = "Odd";
  } else answer = "Even";
  console.log(answer);
  return answer;
  // (num % 2) ? "Odd" : "Even"도 가능
}

solution(3);
solution(4);
