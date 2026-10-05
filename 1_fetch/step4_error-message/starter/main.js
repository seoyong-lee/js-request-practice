// [실습-4] API 오류 메시지 보여주기 — 이 파일은 고치지 않습니다.
import { createAvatar } from './api.js';

// 1. 필수 필드인 hairType이 없습니다
try {
  const newAvatar = await createAvatar({
    hairColor: 'brown',
    skin: 'tone200',
    clothes: 'hoodie',
    accessories: 'earbuds',
  });
  console.log(newAvatar);
} catch (e) {
  console.log(e.message);
}

// 2. hairColor에 쓸 수 없는 값(green)을 넣었습니다
try {
  const newAvatar = await createAvatar({
    hairType: 'short2',
    hairColor: 'green',
    skin: 'tone200',
    clothes: 'hoodie',
    accessories: 'earbuds',
  });
  console.log(newAvatar);
} catch (e) {
  console.log(e.message);
}
