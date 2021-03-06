// REST API
// 서버에 요청을 보낼 때는 주소를 통해 요청의 내용을 표현
// /index.html이면 index.html을 보내달라는 뜻
// 항상 html을 요구할 필요는 없음
// 서버가 이해하기 쉬운 주소가 좋음

// REST API(Representational State Transfer)
// 서버의 자원을 정의하고 자원에 대한 주소를 지정 (일종의 주소 정하는 규칙)
// /user이면 사용자 정보에 관한 정보를 요청
// /post면 게시글에 관련된 자원을 요청

// HTTP 요청 메서드
// GET : 서버 자원을 가져오려고 할 때 사용
// POST : 서버에 자원을 새로 등록하고자 할 때 사용
// PUT : 서버의 자원을 요청에 들어있는 자원으로 치환하고자 할 때 사용(데이터의 내용을 통쨰로 바꿀 때)
// PATCH : 서버 자원의 일부만 수정하고자 할 때 사용
// DELETE : 서버의 자원을 삭제하고자 할 때 사용

// HTTP 프로토콜
// 클라이언트가 누구든 서버와 HTTP 프로토콜로 소통 가능
// iOS, 안드로이드, 웹이 모두 같은 주소로 요청 보낼 수 있음
// 서버와 클라이언트의 분리

// RESTful
// REST API를 사용한 주소 체계를 이용하는 서버
// GET /user는 사용자를 조회하는 요청 POST /users는 사용자를 등록하는 요청
