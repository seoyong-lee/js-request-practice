// [실습-1] 아바타 정보 가져오기
// 각 리퀘스트의 리스폰스 바디를 res.json()으로 꺼내 출력하세요.

/* 1. https://learn.codeit.kr/api/avatars에 GET 리퀘스트 */
// const res1 = 여기에 코드를 작성하세요

/* 2. 같은 주소에 쿼리 파라미터 offset=5, limit=10을 붙여 GET */
// const res2 = 여기에 코드를 작성하세요

/* 3. https://learn.codeit.kr/api/avatars/:id에 GET (id는 7) */
// const res3 = 여기에 코드를 작성하세요

// TODO: 세 리스폰스의 바디를 차례대로 출력하세요.
//       json()도 Promise를 돌려주므로 await이 필요합니다.

// 힌트
// · 쿼리는 '…/avatars?offset=5&limit=10'처럼 주소에 붙이거나 URL 객체(url.searchParams.append)를 씁니다.
// · 바디는 await res.json()
