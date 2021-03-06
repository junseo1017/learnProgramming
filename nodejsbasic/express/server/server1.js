const http = require('http');

// 클라이언트에서 요청이 오면 만들어놓은 서버를 호출하게 되고 아래 함수에서 어떻게 응답을 보내줄 지 작성
const server = http
  .createServer((req, res) => {
    res.write(`<h1>Hello node</h1>`); // 각각의 스트림
    res.write(`<p>Hello server</p>`);
    res.end(`<p>Hello world</p>`); // 두번 보내고 마지막에 쓰고
  })
  .listen(8080);
// 서버도 비동기이기 때문에 에러처리 해줘야함
server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중');
});
server.on('error', (err) => {
  console.error(err);
});

// 실제로 프로세스로 올려야 함 서버도 프로그램이기 때문에 노드가 실행되면 서버도 프로세스로 올려줘야 함. 프로세스로 올릴 때는 포트라는 것을 하나 잡아먹음 여기서는 8080이라는 포트를 사용한다는 것임

// 브라우저에서 localhost:8080입력하면 서버 접속 가능

// 서버를 실행하는 경우 listen을 하는 경우 terminal을 하나 잡아먹음 다른 동작할 수 없음
// 모든 서버에는 포트가 존재한다. (포트하나가 하나의 프로그램)
// https인 경우 443번 포트가 생략되어 있고 http는 80번 포트가 생략되어 있다.
// 하나의 도메인에 포트를 수정해서 여러개의 프로그램을 보여줄 수 있다.

// localhost
// localhost는 컴퓨터 내부 주소
// 외부에서는 접근 불가능

// 포트는 서버 내에서 프로세스를 구분하는 번호
// 기본적으로 http 서버는 80번 포트 사용(생략가능, https는 443)
// 다른 포트로 데이터베이스나 다른 서버 동시에 연결 가능

// 남들에게 서버를 공개하는 행위를 배포라고 함.
