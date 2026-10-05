// [실습-5] axios 문법 익히기
// TODO: 아래 함수들이 fetch() 대신 axios를 쓰도록 바꾸세요.
//   - 맨 위에 import axios from 'axios';
//   - axios.create()로 baseURL 인스턴스를 만들면 훨씬 짧아집니다.
//     baseURL: 'https://learn.codeit.kr/api'
//     (선택) timeout: 3000 을 함께 넣어도 됩니다.
//   - 쿼리는 params 옵션 · 바디는 두 번째 아규먼트 · 결과는 res.data

export async function getAvatars(params = {}) {
  const url = new URL('https://learn.codeit.kr/api/avatars');
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
  const data = await res.json();
  return data;
}

export async function createAvatar(avatarData) {
  const res = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

export async function patchAvatar(id, avatarData) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

export async function deleteAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
}
