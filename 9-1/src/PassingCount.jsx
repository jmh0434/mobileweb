import React from "react";
import { useState } from "react";
import './PassingCount.css';

const FirstChild = (props) => { // 좌측 자식1 컴포넌트
    console.log(`자식1 ${props.data}`);
    return(
        <div className="first">
            <p>자식1 컴포넌트</p>
            <p>(카운터 : {props.data})</p>
        </div>
    )
};

const SecondChild = (props) => { // 중앙 자식2 컴포넌트
    const onLeftClick = () => {
        props.setLeft((prevData) => parseInt(prevData) + 1);
    };
    const onRightClick = () => {
        props.setRight((prevData) => parseInt(prevData) + 1);
    };

    console.log('자식2 (버튼)');
    return(
        <div className="second">
            <p>자식2 컴포넌트</p>
            <button onClick={onLeftClick}>◀ 카운터++</button>
            <button onClick={props.resetData}>카운터 0</button> {/* 버튼을 누르면 카운터 초기화 */}
            <button onClick={onRightClick}>카운터++ ▶</button>
        </div>
    )
};

const ThirdChild = (props) => { // 우측 자식3 컴포넌트
    console.log(`자식3 ${props.data}`);
    return(
        <div className="third">
            <p>자식3 컴포넌트</p>
            <p>(카운터: {props.data}</p>
        </div>
    )
};

function PassingCount(){ // 카운터를 세팅하는 함수
    const [leftCount, setLeftCount] = useState(0); // 자식1 카운터 횟수 
    const [rightCount, setRightCount] = useState(0); // 자식2 카운터 횟수
    const resetData = () =>{ // 리셋을 명령하면 자식1과 자식2의 카운터를 0으로 초기화한다
        setLeftCount(0);
        setRightCount(0);
    };

    return (
        <div className="parent">
            부모컴포넌트
            <br/>
            (왼쪽카운트 : {leftCount}, 오른쪽카운트 : {rightCount})
            <div className="layout">
                <FirstChild data = {leftCount}/>
                <SecondChild setLeft = {setLeftCount}
                        setRight = {setRightCount}
                        resetData = {resetData} />
                <ThirdChild data = {rightCount}/>
            </div>   
        </div>
    )
}
export default PassingCount;