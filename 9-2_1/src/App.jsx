import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './App.css';

const serverURL = "http://localhost:65020/users"; // 웹 서버 접속주소

function App(){
    const [userData, setUserData] = useState(null); // 서버에서 받아올 사용자정보(객체배열)를 저장하는 곳
    const [checkId, setCheckId] = useState(null);
    const [checkPw, setCheckPw] = useState(null);
    const [checkValue, setCheckValue] = useState(false);

    const getUserData = () => {
        fetch(serverURL) // fetch 함수를 이용해 REST API로 회원 목록을 요청
            .then((res) => res.json()) // 회원 목록을 json 포맷으로 수신
            .then((data) => setUserData(data)) // 받은 데이터를 setState 함수로 업데이트 함.
            .then(console.log(userData)) // 콘솔창에 출력해서 확인함
    }
    
    useEffect(getUserData, []); // mount 시에만 서버 데이터를 가져오도록 이벤트 처리

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const id = event.target.id.value;
        const passwd = event.target.passwd.value;
        console.log("Submit 버튼 클릭 후 서버로 POST 전송");

        fetch(serverURL, { // fetch 함수로 데이터를 서버로 전송
            method: 'POST', // POST method
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({name, id, passwd}),
        })
        .then(getUserData()) // 등록한 데이터를 다시 가져옴
    }
    const checkHandler = (event) => { // 아이디와 비밀번호를 체크하는 함수
      userData.map((user, i) => { // 등록된 아이디와 비밀번호가 같으면 true로 세팅
        if((user.id === checkId) && (user.passwd === checkPw)) {
          setCheckValue(true);
        }else{
          setCheckValue(false);
        }
      })
      event.preventDefault();
    }
    const handleId = (event) => {
      setCheckId(event.target.value); // 아이디 입력 받아오기
    }
    const handlePw = (event) => {
      setCheckPw(event.target.value); // 비밀번호 입력 받아오기
    }

    return (
        <>
            <div>
                <h2>회원등록</h2>
                <form onSubmit={onSubmitHandler}>
                    <input type = "text" name = "name" placeholder="이름" />
                    <input type = "text" name = "id" placeholder="아이디" />
                    <input type = "text" name = "passwd" placeholder = "암호" />
                    <button type = "submit">등록</button>
                </form>
            </div>
            <div>
              <h2>회원확인</h2>
              <form onSubmit={checkHandler}>
                <input type = "text" value = {checkId} onChange = {handleId} placeholder = "아이디"/>
                <input type = "text" value = {checkPw} onChange = {handlePw} placeholder = "암호" />
                <button type = "submit">체크</button>
              </form>
              {/* 회원이면 확인 출력*/}
              {(checkValue === true) ? (<p>회원으로 확인되었습니다.</p>) : (<p>그런 회원은 없습니다.</p>)}
            </div>
            <div>
                <h2>회원목록</h2>
                <ol>
                    {(userData === null) ? ( // 데이터가 수신되었는지를 확인
                        <p>서버에서 데이터를 가져오는 중...</p>
                    ) : (
                        userData.map((user, i) => ( // 수신되었다면 목록으로 처리
                            <li key={user.keyid}>{user.name} {user.id} {user.passwd}</li>
                        ))
                    )}
                </ol>
            </div>
        </>
    )
}
export default App;