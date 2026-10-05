# js-requests-practice

코드잇 풀스택 17기 · 자바스크립트로 리퀘스트 보내기 실습 레포입니다.

## 준비

1. Node.js **v18 이상**이 필요합니다. 터미널에서 `node -v`로 확인하세요. v18부터 `fetch()`를 따로 설치하지 않고 쓸 수 있습니다.
2. 레포를 내려받고 VS Code로 엽니다.

```bash
git clone https://github.com/seoyong-lee/js-requests-practice.git
cd js-requests-practice
npm install   # 2_axios 실습에 쓰는 axios를 설치합니다
code .
```

3. 최상위 `package.json`에 `"type": "module"`이 들어 있어서 `import` · `export`와 최상위 `await`을 쓸 수 있습니다.
4. 실행은 레포 최상위 폴더에서 `node 1_fetch/step1_get-avatars/starter/main.js`처럼 합니다.
5. `1_fetch` · `2_axios`는 https://learn.codeit.kr/api 의 실제 데이터를 쓰므로 인터넷 연결이 필요합니다.
6. `1_fetch`는 수업에서 HTTP 메서드(GET · POST · PATCH · DELETE)와 `fetch()`를 본 뒤에 풀어 주세요.

## 구성

| 시간 | 폴더 | 내용 |
|---|---|---|
| 1일차 오전 | [`0_json`](0_json/README.md) | [실습] JSON 다루기 — 카페 주문 데이터 · JSON 주의사항 확인하기 |
| 1일차 오후 | [`1_fetch`](1_fetch/README.md) | [실습-1] 아바타 정보 가져오기 · [실습-2] 아바타 생성하기 · [실습-3] 아바타 수정, 삭제하기 · [실습-4] API 오류 메시지 보여주기 · 도전 · 모든 아바타 모아서 머리 색깔 세기 |
| 2일차 오전 | [`2_axios`](2_axios/README.md) | [실습-5] axios 문법 익히기 · [실습-6] axios 오류 처리하기 · 도전 · MBTI별 좋아하는 색 모아 보기 |

- 각 단계 폴더의 `starter/`에서 시작합니다.
- `solution/`은 첫 단계(`0_json/step1_order`)에만 있습니다. 수업 실습 풀이는 수업 시간에 슬라이드로 함께 보고 도전 · 과제 풀이는 수업 뒤에 공유합니다.
