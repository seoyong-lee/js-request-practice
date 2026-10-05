// [실습-6] axios 오류 처리하기
import { createAvatar } from './api.js';

try {
  const data = await createAvatar({
    hairType: 'long5',
    hairColor: 'black',
    skin: 'tone100',
    clothes: 'hoodie',
    accessories: 'none',
  });
  console.log(data);
} catch (e) {
  if (e.response) {
    // TODO: 리스폰스의 상태 코드와 바디 내용을 출력하세요.
    //       예) console.log(e.response.status);
    //           console.log(e.response.data);
  }
}
