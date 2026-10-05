// JSON으로 바꿀 때 조심해야 하는 값들을 확인해 봅니다.
// 코드를 완성한 뒤, 실행하기 전에 각 출력을 먼저 예상해 보세요. (정답은 README에 없습니다)
const profile = {
  name: '김코드',
  joinedAt: new Date('2026-10-28T09:00:00Z'),
  nickname: undefined,
  greet: () => '안녕하세요',
};

// TODO 1: profile을 JSON 문자열로 바꾼 뒤 다시 객체로 바꿔 copied 변수에 저장하세요.

// TODO 2: 아래 네 가지를 출력하고 예상과 비교하세요.
//   - copied 전체
//   - typeof copied.joinedAt
//   - 'nickname' in copied
//   - typeof copied.greet

// TODO 3: JSON.stringify(profile, null, 2)로 보기 좋게 바꾼 문자열을 출력하세요.
