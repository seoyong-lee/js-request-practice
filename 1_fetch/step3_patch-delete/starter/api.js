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
  // TODO: …/avatars/:id에 PATCH 리퀘스트 (avatarData는 바디로)
  const res = null; // 이 줄을 고치세요
  const data = await res.json();
  return data;
}

export async function deleteAvatar(id) {
  // TODO: 같은 주소에 DELETE 리퀘스트 (바디 없음)
  const res = null; // 이 줄을 고치세요
  const data = await res.json();
  return data;
}
