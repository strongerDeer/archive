'use client';
import { useEffect, useRef, useState } from 'react';

export default function CheckList() {
  const data = [
    { id: 0, title: '선택 1' },
    { id: 1, title: '선택 2' },
    { id: 2, title: '선택 3' },
    { id: 3, title: '선택 4' },
  ];

  const [allChk, setAllChk] = useState(false);
  const [checkItems, setCheckItems] = useState([]);

  useEffect(() => {
    if (checkItems.length === data.length) {
      console.log('모두체크', allChk);
      setAllChk(true);
    } else {
      setAllChk(false);
    }
  }, [checkItems]);
  const handleSingleCheck = (checked: any, id: any) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: any) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };
  return (
    <>
      <h2>CheckList</h2>
      <ul>
        <li>
          <input
            type="checkbox"
            id="all-chk"
            onClick={(e) => handleAllCheck(e.target.checked)}
            checked={allChk}
          />
          <label htmlFor="all-chk">모두 체크</label>
        </li>

        {data?.map((data: any, key: any) => (
          <li key={key}>
            <input
              type="checkbox"
              id={data.id}
              name={`select-${data.id}`}
              onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
              checked={checkItems.includes(data.id) ? true : false}
            />
            <label htmlFor={data.id}>{data.title}</label>
          </li>
        ))}
      </ul>
    </>
  );
}
