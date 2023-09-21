export default function Login() {
  return (
    <>
      <label htmlFor="user-id">아이디</label>
      <input
        type="text"
        id="user-id"
        aria-labelledby="user-id-msg"
        placeholder="아이디"
      />
      <strong id="user-id-msg">
        5~20자의 영문 소문자, 숫자와 특수기호(_), (-)만 사용하여 입력해 주세요.
      </strong>

      <label htmlFor="user-pw">패스워드</label>
      <input
        type="password"
        id="user-pw"
        aria-labelledby="user-pw-msg"
        placeholder="패스워드"
      />
      <strong id="user-pw-msg">
        6~16자 영문 대 소문자, 숫자, 특수문자를 사용하여 입력해 주세요.
      </strong>
    </>
  );
}

/*
<input> 요소에 aria-label 속성이나 aria-labelledby 속성을 사용하면 
<label> 요소의 텍스트는 읽지 않고, 
<button> 요소에 사용하면 <button> 요소의 텍스트를 읽지 않으므로 주의해야 한다. 
(단, <input> 요소의 title 속성은 읽는다.)

<label> 요소의 텍스트를 읽어야 하는 경우는 aria-labelledby 
속성 대신 aria-describedby 속성을 사 용하면 된다. 
그러면 스크린리더는 <label> 요소의 텍스트와 aria-describedby 속성과 연결된 추가 
설명까지 함께 읽는다.
*/
