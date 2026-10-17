# 2일차 오전 — axios로 바꾸기

fetch로 만든 API 함수를 axios로 바꾸고 axios 오류 객체를 다룹니다. 먼저 레포 최상위에서 npm install을 실행하세요.

- 수업 시간: 수업 실습 2일차 2~3교시
- 실행: 레포 최상위 폴더에서 `node <폴더>/starter/main.js`

| 구분 | 폴더 | 내용 | 권장 시간 |
|---|---|---|---|
| 수업 실습 | `step1_axios-api` | [실습-5] axios 문법 익히기 | 24분 |
| 수업 실습 | `step2_axios-error` | [실습-6] axios 오류 처리하기 | 14분 |
| 도전 | `step3_mbti-colors` | 도전 · MBTI별 좋아하는 색 모아 보기 | 15분 |

## [실습-5] axios 문법 익히기

**실습 목표:** fetch API 함수를 axios 인스턴스로 바꿉니다.

- 폴더: `2_axios/step1_axios-api/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 2_axios/step1_axios-api/starter/main.js`

**예상 결과** (서버 데이터라 id · 날짜 · 개수는 실행할 때마다 다를 수 있습니다)

```
{
  count: 40,
  next: 'https://learn.codeit.kr/api/avatars/?limit=3&offset=3',
  previous: null,
  results: [
    {
      createdAt: 1791169202000,
      updatedAt: 1791169202000,
      id: 40,
      hairType: 'long1',
      hairColor: 'black',
      skin: 'tone300',
      clothes: 'knitLayered',
      accessories: 'none'
    },
    {
      createdAt: 1791169202000,
      updatedAt: 1791169202000,
      id: 39,
      hairType: 'none',
      hairColor: 'brown',
      skin: 'tone200',
      clothes: 'tshirtBasic',
      accessories: 'nametag'
    },
    {
      createdAt: 1791169202000,
      updatedAt: 1791169202000,
      id: 38,
      hairType: 'short2',
      hairColor: 'blonde',
      skin: 'tone300',
      clothes: 'hoodie',
      accessories: 'headset'
    }
  ]
}
{
  createdAt: 1791169202000,
  updatedAt: 1791169202000,
…
```

> 풀이는 수업 시간에 슬라이드로 함께 봅니다.

## [실습-6] axios 오류 처리하기

**실습 목표:** e.response에서 상태 코드와 바디를 꺼냅니다.

- 폴더: `2_axios/step2_axios-error/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 2_axios/step2_axios-error/starter/main.js`

**예상 결과** (서버 데이터라 id · 날짜 · 개수는 실행할 때마다 다를 수 있습니다)

```
400
Value for 'hairType' must be one of none,short1,short2,short3,long1,long2,long3
```

> 풀이는 수업 시간에 슬라이드로 함께 봅니다.

## 도전 · MBTI별 좋아하는 색 모아 보기

**실습 목표:** params 옵션과 오류 처리를 한 번에 씁니다.

- 폴더: `2_axios/step3_mbti-colors/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 2_axios/step3_mbti-colors/starter/main.js`

**예상 결과** (서버 데이터라 id · 날짜 · 개수는 실행할 때마다 다를 수 있습니다)

```
INFP: #CA6952, #2518C7, #C4601E, #4D74B8, #6C84AC
ESTJ: #45F628, #000000, #2631B8, #000000, #D00000
400 Invalid MBTI
```

> 풀이는 수업 뒤에 따로 공유합니다.
