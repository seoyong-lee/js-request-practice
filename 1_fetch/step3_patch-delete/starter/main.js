// [실습-3] 아바타 수정, 삭제하기 — 이 파일은 고치지 않습니다.
import { createAvatar, patchAvatar, deleteAvatar } from './api.js';

let avatar = await createAvatar({
  hairType: 'long1',
  hairColor: 'black',
  skin: 'tone300',
  clothes: 'collarBasic',
  accessories: 'headset',
});

avatar = await patchAvatar(avatar.id, {
  hairType: 'short3',
  hairColor: 'blonde',
});
console.log(avatar);

const deleted = await deleteAvatar(avatar.id);
console.log(`${deleted.id}번 아바타를 삭제했습니다.`);
