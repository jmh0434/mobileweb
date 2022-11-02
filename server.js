const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// express 환경설정
app.use(express.json());
app.use(express.static(path.join(__dirname,'9-2_1/build')));
app.use(bodyParser.urlencoded({extended: false}));

var keyid = 3; // 다음에 추가될 회원에게 부여할 key값
var userList = [ // 객채배열(회원명단) 초기값 설정
    {keyid: 1, name: "홍길동", id: "kdhong", passwd: "1111"},
    {keyid: 2, name: "박길동", id: "kdpark", passwd: "1111"}
];

const mainPage = (req, res) => {
    //브라우저가 서버에게 접속하면 보내는 첫 페이지 (빌드 페이지)
    res.sendFile(path.join(__dirname, '9-2_1/build/index.html'));
}

const listUsers = (req, res) => {
    console.log("회원명단 조회요청을 받았으며, 리액트에게 명단을 보냅니다");
    res.json(userList); // .json은 객체/배열을 클라이언트에게 그대로 보낼 때 사용
}

const addUser = (req, res) => {
    const {name, id, passwd} = req.body; // 요청받은 데이터
    userList.push({keyid: keyid++, name, id, passwd}); // userList에 받아온 값 push
    console.log("회원등록요청을 완료하였으며, 이를 반영한 전체목록입니다.");
    userList.map((user, i) => { // 수신되었다면 목록으로 처리
        console.log(user.keyid + "." + user.name + "." + user.id + "." + user.passwd);
    })
    return res.send("success"); // success라고 보냄
}

const checkUser = (req, res) => {
    const {id, passwd} = req.body;
    checkList.push({})
}

app.get("/", mainPage); // REST API 바인딩 (첫 페이지)
app.get("/users", listUsers); // REST API 바인딩 (회원목록)
app.post("/users", addUser); // REST API 바인딩 (회원가입)
app.get("/users/check", checkUser)

// 웹 서버 가동
app.listen(65020, () => { // 65010 포트로
    console.log("---------------------");
    console.log("(리액트 연동용) 웹 서버 실행 중 ...");
    console.log("접속 주소 : http://localhost:65020/");
    console.log("---------------------");
});