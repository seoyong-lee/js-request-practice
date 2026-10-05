// 도전 · 모든 아바타 모아서 머리 색깔 세기
// 아바타 목록은 한 번에 10개씩만 옵니다(페이지네이션).
// 리스폰스의 next에는 다음 페이지 주소가 있고 마지막 페이지에서는 null입니다.

let url = 'https://learn.codeit.kr/api/avatars';
const avatars = [];

// TODO 1: url이 null이 아닌 동안 반복하세요.
//   - fetch(url)로 한 페이지를 받아 results를 avatars에 이어 붙입니다.
//   - url을 리스폰스의 next로 바꿉니다.

// TODO 2: `아바타 ${avatars.length}개를 모두 받았습니다.`처럼 받은 개수를 출력하세요.

// TODO 3: hairColor별 개수를 세어 { black: …, brown: …, … } 같은 객체로
//         출력하세요. (숫자는 실제 데이터에 따라 다릅니다. 합이 length와 같으면 성공)
