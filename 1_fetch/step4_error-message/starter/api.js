export async function createAvatar(avatarData) {
  const res = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    // TODO: 오류 메시지는 일반 문자열입니다. res.text()로 읽어 넣으세요.
    const message = '오류가 발생했습니다'; // 이 줄을 고치세요
    throw new Error(message);
  }

  const data = await res.json();
  return data;
}
