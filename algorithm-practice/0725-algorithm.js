// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 풀이
function solution(n) {
  var answer = "";
  for (var i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer = answer + "수";
    } else {
      answer = answer + "박";
    }
  }
  console.log(answer);
  return answer;
}

solution(3);
solution(4);
