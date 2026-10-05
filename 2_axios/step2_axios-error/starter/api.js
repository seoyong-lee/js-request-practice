import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://learn.codeit.kr/api',
});

export async function createAvatar(avatarData) {
  const res = await instance.post('/avatars', avatarData);
  return res.data;
}
