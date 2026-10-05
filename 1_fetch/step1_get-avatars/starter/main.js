// [실습-1] 아바타 정보 가져오기
// 각 리퀘스트의 리스폰스 바디를 res.json()으로 꺼내 출력하세요.
//
// 참고 — GET 한 번 보내는 형태:
//   const res = await fetch('https://learn.codeit.kr/api/avatars');
//   console.log(await res.json());
// 쿼리는 주소 뒤에 ?offset=5&limit=10 처럼 붙이거나,
//   const url = new URL('https://learn.codeit.kr/api/avatars');
//   url.searchParams.append('offset', 5);
//   url.searchParams.append('limit', 10);
//   const res = await fetch(url);
// 처럼 써도 됩니다.

/* 1. https://learn.codeit.kr/api/avatars에 GET 리퀘스트 */
// const res1 = await fetch('...');

/* 2. 같은 주소에 쿼리 파라미터 offset=5, limit=10을 붙여 GET */
// const res2 = await fetch('...');

/* 3. https://learn.codeit.kr/api/avatars/:id에 GET (id는 7) */
// const res3 = await fetch('...');

// TODO: 세 리스폰스의 바디를 차례대로 출력하세요.
//       json()도 Promise를 돌려주므로 await이 필요합니다.
