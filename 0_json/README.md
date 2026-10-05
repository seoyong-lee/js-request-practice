# 1일차 오전 — JSON 다루기

서버에서 받은 JSON 문자열을 객체로 바꾸고 서버로 보낼 객체를 JSON 문자열로 바꿔 봅니다. 인터넷 연결 없이 실행됩니다.

- 수업 시간: 수업 실습 1일차 3교시 · 나머지는 과제
- 실행: 레포 최상위 폴더에서 `node <폴더>/starter/main.js`

| 구분 | 폴더 | 내용 | 권장 시간 |
|---|---|---|---|
| 수업 실습 | `step1_order` | [실습] JSON 다루기 — 카페 주문 데이터 | 18분 |
| 과제 | `step2_caution` | JSON 주의사항 확인하기 | 10분 |

## [실습] JSON 다루기 — 카페 주문 데이터

**실습 목표:** JSON.parse()와 JSON.stringify()로 데이터를 바꿔 씁니다.

- 폴더: `0_json/step1_order/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 0_json/step1_order/starter/main.js`

**예상 결과**

```
string
김코드님의 주문 (메뉴 2개)
총 12800원
{"orderId":1024,"score":5,"comment":"커피가 맛있어요"}
string
```

## JSON 주의사항 확인하기

**실습 목표:** Date · undefined · 함수가 JSON 변환에서 어떻게 바뀌는지 확인합니다.

- 폴더: `0_json/step2_caution/starter` · TODO 주석을 따라 코드를 완성합니다. **실행하기 전에** 각 출력을 먼저 예상해 보세요.
- 실행: `node 0_json/step2_caution/starter/main.js`

**확인 방법**

예상을 적은 뒤 위 명령으로 실행해 실제 출력과 비교하세요. 예상 결과는 일부러 적지 않았습니다.

> 풀이는 수업 뒤에 따로 공유합니다.
