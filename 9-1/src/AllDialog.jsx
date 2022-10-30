import React from "react";
import Dialog from "./Dialog";

function AllDialog(props) { // 범용 다이얼로그 컴포넌트. props로 다이얼로그의 타입을 넘겨준다
    return(
        <div>
            <Dialog type = "warning"> 
                <p>경고</p>
            </Dialog>
            <Dialog type = "hello">
                <p>인사</p>
            </Dialog>
            <Dialog type = "error">
                <p>오류</p>
            </Dialog>
            <Dialog type = "info">
                <p>공지</p>
            </Dialog>
        </div>
    )
}
export default AllDialog;