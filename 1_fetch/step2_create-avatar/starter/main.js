// [실습-2] 아바타 생성하기
const avatarData = {
  hairType: 'short2',
  hairColor: 'brown',
  skin: 'tone200',
  clothes: 'hoodie',
  accessories: 'earbuds',
};

// TODO: https://learn.codeit.kr/api/avatars에 POST 리퀘스트를 보내세요.
//   - method는 'POST'
//   - body에는 avatarData를 JSON 문자열로 바꿔서 넣습니다
//   - headers의 'Content-Type'은 'application/json'
// 그리고 리스폰스로 돌아온 아바타 객체를 출력하세요.

// 아래는 공용 API 정리를 위해 미리 적어 두었습니다. (삭제 문법은 step3에서 자세히 배웁니다)
// POST로 받은 아바타의 id를 넣어 실행하세요.
// await fetch(`https://learn.codeit.kr/api/avatars/${newAvatar.id}`, { method: 'DELETE' });
// console.log(`${newAvatar.id}번 아바타를 삭제했습니다.`);
