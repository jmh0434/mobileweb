import React from "react";

function Dialog(props) { // 다이얼로그 컴포넌트
    const {type,children} = props; // 타입과 칠드런을 받아온다

    let backgroundColor = 'white'; // 기본 배경화면은 하얀색

    if(type === 'warning') { // 타입이 경고일 경우 경고 다이얼로그
        backgroundColor = 'yellow';
    }
    else if(type === 'hello') { // 타입이 인사말일 경우 인사말 다이얼로그
        backgroundColor = 'green';
    }
    else if(type === 'error') { // 타입이 오류일 경우 오류 다이얼로그
        backgroundColor = 'red';
    }
    else { // 타입이 공지사항일 경우 공지사항 다이얼로그
        backgroundColor = 'blue';
    }
    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {children}
        </div>
    );
}
export default Dialog;