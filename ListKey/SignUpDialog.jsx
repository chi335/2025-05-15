// SignUpDialog.jsx
import React, { useState } from "react";
import Dialog from './ Dialog';  // 'Dialog'로 대소문자 맞춰서 import

function SignUpDialog() {
    const [nickname, setNickname] = useState("");  // 상태값으로 닉네임을 관리

    const handleChange = (event) => {
        setNickname(event.target.value);  // 입력값을 상태로 저장
    };

    const handleSignUp = () => {
        alert(`어서오세요, ${nickname}님!`);  // 가입하기 버튼 클릭 시 alert 출력
    };

    return (
        <Dialog
            title="화성 탐사 프로그램"
            message="닉네임을 입력해주세요"
        >
            <input
                type="text"
                value={nickname}  // 상태값을 입력값에 바인딩
                onChange={handleChange}  // 입력값이 바뀔 때마다 상태를 업데이트
                placeholder="닉네임 입력"
            />
            <button onClick={handleSignUp}>가입하기</button>
        </Dialog>
    );
}

export default SignUpDialog;
