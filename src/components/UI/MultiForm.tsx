export default function MultiForm() {
  return (
    <>
      <h2 id="order-info">주문자 정보</h2>
      <ul role="group" aria-labelledby="order-info">
        <li>
          <label htmlFor="user-name">이름</label>
          <input type="text" id="user-name" name="user-name" />
        </li>
        <li role="group" aria-labelledby="user-tel">
          <h3 id="user-tel">전화번호</h3>
          <input type="tel" id="user-tel1" name="user-tel1" aria-label="국번" />
          -
          <input
            type="tel"
            id="user-tel2"
            name="user-tel2"
            aria-label="가운데 자리"
          />
          -
          <input
            type="tel"
            id="user-tel3"
            name="user-tel3"
            aria-label="마지막 자리"
          />
        </li>
        <li>
          <label htmlFor="user-email">이메일</label>
          <input type="email" id="user-email" name="user-email" />
        </li>
      </ul>
      <h2 id="delivery-info">배송지 정보</h2>
      <ul role="group" aria-labelledby="delivery-info">
        <li>
          <label htmlFor="deliver-name">이름</label>
          <input type="text" id="deliver-name" name="deliver-name" />
        </li>
        <li role="group" aria-labelledby="deliver-tel">
          <h3 id="deliver-tel">전화번호</h3>
          <input
            type="tel"
            id="deliver-tel1"
            name="deliver-tel1"
            aria-label="국번"
          />
          -
          <input
            type="tel"
            id="deliver-tel2"
            name="deliver-tel2"
            aria-label="가운데 자리"
          />
          -
          <input
            type="tel"
            id="deliver-tel3"
            name="deliver-tel3"
            aria-label="마지막 자리"
          />
        </li>
        <li role="group" aria-labelledby="deliver-addr">
          <h3 id="deliver-addr">배송지 주소</h3>
          <input
            type="tel"
            id="deliver-post"
            name="deliver-post"
            aria-label="우편번호"
          />
          -
          <input
            type="text"
            id="deliver-addr"
            name="deliver-addr"
            aria-label="상세주소"
          />
          -
          <input
            type="tel"
            id="deliver-tel3"
            name="deliver-tel3"
            aria-label="마지막 자리"
          />
        </li>
      </ul>
    </>
  );
}
