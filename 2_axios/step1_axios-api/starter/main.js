// [실습-5] 테스트 코드 — 이 파일은 고치지 않습니다.
import { getAvatars, getAvatar, createAvatar, patchAvatar, deleteAvatar } from './api.js';

const list = await getAvatars({ limit: 3 });
console.log(list);

const avatar7 = await getAvatar(7);
console.log(avatar7);

let avatar = await createAvatar({
  hairType: 'long1',
  hairColor: 'black',
  skin: 'tone100',
  clothes: 'hoodie',
  accessories: 'none',
});
avatar = await patchAvatar(avatar.id, {
  clothes: 'tshirtBasic',
  accessories: 'headset',
});
console.log(avatar);

// 만든 아바타는 지워서 정리합니다
const deleted = await deleteAvatar(avatar.id);
console.log(`${deleted.id}번 아바타를 삭제했습니다.`);
