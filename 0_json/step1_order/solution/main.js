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

// 1. JSON 문자열 → 자바스크립트 객체
const order = JSON.parse(responseText);

// 2. 객체가 되었으니 점(.)으로 꺼내 씁니다
console.log(`${order.customer}님의 주문 (메뉴 ${order.items.length}개)`);

// 3. 메뉴마다 가격 × 수량을 더합니다
let total = 0;
for (const item of order.items) {
  total += item.price * item.count;
}
console.log(`총 ${total}원`);

// 4. 자바스크립트 객체 → JSON 문자열 (서버로 보낼 때)
const review = { orderId: 1024, score: 5, comment: '커피가 맛있어요' };
const body = JSON.stringify(review);
console.log(body);
console.log(typeof body);
