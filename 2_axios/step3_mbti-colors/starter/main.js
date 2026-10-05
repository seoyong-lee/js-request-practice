// 도전 · axios로 MBTI별 좋아하는 색 모아 보기
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://learn.codeit.kr/api',
});

// TODO 1: getSurveysByMbti(mbti) 함수를 만드세요.
//   - GET /color-surveys에 params로 mbti와 limit 5를 보냅니다.
//   - 리스폰스 바디의 results 배열을 리턴합니다.
//     예) { count, results: [{ colorCode: '#CA6952', mbti: 'INFP', ... }, ...] }

// TODO 2: 'INFP'와 'ESTJ' 설문을 받아 아래처럼 출력하세요.
//         results 각 항목의 colorCode를 모아 join(', ')으로 이어 붙입니다.
//         (색 코드는 실제 데이터에 따라 다릅니다)
//   INFP: #226E37, #A6E9DA, ...
//   ESTJ: #888888, ...

// TODO 3: 쓸 수 없는 MBTI('XXXX')로도 요청하고
//         catch에서 상태 코드와 바디를 출력하세요. (step2와 같은 e.response)
