// 카페 서버에서 받은 주문 데이터입니다. 아직은 JSON 문자열입니다.
const responseText = `{
  "orderId": 1024,
  "customer": "김코드",
  "isTakeout": true,
  "items": [
    { "name": "아메리카노", "price": 4500, "count": 2 },
    { "name": "크루아상", "price": 3800, "count": 1 }
  ]
}`;

console.log(typeof responseText);

// TODO 1: JSON.parse()로 객체로 바꿔 order에 저장하세요.

// TODO 2: '김코드님의 주문 (메뉴 2개)'처럼 출력하세요. (메뉴 개수 = items의 길이)

// TODO 3: price × count를 모두 더해 '총 12800원'처럼 출력하세요.

// TODO 4: review를 JSON 문자열로 바꿔 출력하고 그 값의 typeof도 출력하세요.
const review = { orderId: 1024, score: 5, comment: '커피가 맛있어요' };
