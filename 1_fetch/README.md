# 1일차 오후 — fetch로 아바타 API 다루기

Avatar API(https://learn.codeit.kr/api/avatars)에 GET · POST · PATCH · DELETE 리퀘스트를 보내고 오류 메시지를 다룹니다.

- 수업 시간: 수업 실습 1일차 7~9교시
- 실행: 레포 최상위 폴더에서 `node <폴더>/starter/main.js`

| 구분 | 폴더 | 내용 | 권장 시간 |
|---|---|---|---|
| 수업 실습 | `step1_get-avatars` | [실습-1] 아바타 정보 가져오기 | 15분 |
| 수업 실습 | `step2_create-avatar` | [실습-2] 아바타 생성하기 | 15분 |
| 수업 실습 | `step3_patch-delete` | [실습-3] 아바타 수정, 삭제하기 | 16분 |
| 수업 실습 | `step4_error-message` | [실습-4] API 오류 메시지 보여주기 | 14분 |
| 도전 | `step5_avatar-stats` | 도전 · 모든 아바타 모아서 머리 색깔 세기 | 30분 |

## [실습-1] 아바타 정보 가져오기

**실습 목표:** fetch()로 여러 가지 GET 리퀘스트를 보냅니다.

- 폴더: `1_fetch/step1_get-avatars/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 1_fetch/step1_get-avatars/starter/main.js`

**예상 결과** (서버 데이터라 id · 날짜 · 개수는 실행할 때마다 다를 수 있습니다)

```
{
  count: 40,
  next: 'https://learn.codeit.kr/api/avatars/?offset=10&limit=10',
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
    },
    {
      createdAt: 1791169202000,
      updatedAt: 1791169202000,
      id: 37,
      hairType: 'long3',
…
```

> 풀이는 수업 시간에 슬라이드로 함께 봅니다.

## [실습-2] 아바타 생성하기

**실습 목표:** POST 리퀘스트로 새 아바타를 만듭니다.

- 폴더: `1_fetch/step2_create-avatar/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 1_fetch/step2_create-avatar/starter/main.js`

**예상 결과** (서버 데이터라 id · 날짜는 실행할 때마다 다를 수 있습니다)

```
{
  createdAt: 1791170086342,
  updatedAt: 1791170086342,
  id: 41,
  hairType: 'short2',
  hairColor: 'brown',
  skin: 'tone200',
  clothes: 'hoodie',
  accessories: 'earbuds'
}
41번 아바타를 삭제했습니다.
```

> 공용 API이므로 만든 아바타는 starter에 적어 둔 DELETE로 바로 정리하세요.  
> 풀이는 수업 시간에 슬라이드로 함께 봅니다.

## [실습-3] 아바타 수정, 삭제하기

**실습 목표:** PATCH · DELETE 리퀘스트를 보내는 API 함수를 완성합니다.

- 폴더: `1_fetch/step3_patch-delete/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 1_fetch/step3_patch-delete/starter/main.js`

**예상 결과** (서버 데이터라 id · 날짜 · 개수는 실행할 때마다 다를 수 있습니다)

```
{
  createdAt: 1791170088000,
  updatedAt: 1791170089759,
  id: 42,
  hairType: 'short3',
  hairColor: 'blonde',
  skin: 'tone300',
  clothes: 'collarBasic',
  accessories: 'headset'
}
42번 아바타를 삭제했습니다.
```

> 풀이는 수업 시간에 슬라이드로 함께 봅니다.

## [실습-4] API 오류 메시지 보여주기

**실습 목표:** 실패 리스폰스의 바디를 읽어 오류 메시지로 씁니다.

- 폴더: `1_fetch/step4_error-message/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 1_fetch/step4_error-message/starter/main.js`

**예상 결과** (서버 데이터라 id · 날짜 · 개수는 실행할 때마다 다를 수 있습니다)

```
Field 'hairType' is required
Value for 'hairColor' must be one of black,brown,blonde
```

> 풀이는 수업 시간에 슬라이드로 함께 봅니다.

## 도전 · 모든 아바타 모아서 머리 색깔 세기

**실습 목표:** next를 따라가며 모든 페이지를 받아 집계합니다.

- 폴더: `1_fetch/step5_avatar-stats/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 1_fetch/step5_avatar-stats/starter/main.js`

**확인 방법** (서버에 아바타가 몇 개인지·머리색 비율은 실행할 때마다 다를 수 있습니다)

```
아바타 N개를 모두 받았습니다.
{ black: …, brown: …, blonde: … }
```

- `N`은 받은 `avatars.length`입니다.
- 머리색 숫자의 **합이 N과 같으면** 성공입니다.

> 풀이는 수업 뒤에 따로 공유합니다.
