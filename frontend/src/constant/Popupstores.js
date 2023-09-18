/*

팝업스토어의 리스트 구조

id, imgurl, 이름, 시작일, 종료일, 위치, 좋아요 수

*/

import { useState } from 'react';

function PopupStoreState() {
  const [popupStores, setPopupStores] = useState([
    {
      id: 1,
      imageUrl: 'URL_1',
      storeName: 'Popup Store 1',
      startDate: '2023-09-20',
      endDate: '2023-09-30',
      location: '서울시 강남구',
      likes: 0,
    },
    {
      id: 2,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '2023-10-05',
      endDate: '2023-10-15',
      location: '서울시 종로구',
      likes: 0,
    },
    // 추가 팝업스토어 정보 입력
  ]);

  return { popupStores, setPopupStores };
}

export default PopupStoreState;