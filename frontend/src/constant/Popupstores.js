/*

팝업스토어의 리스트 구조

id, imgurl, 이름, 시작일, 종료일, 위치, 좋아요 수

시작일, 종료일은 년도는 빼고 월/일 형식으로만

*/

import { useState } from 'react';

function PopupStoreState() {
  const [popupStores, setPopupStores] = useState([
    {
      id: 1,
      imageUrl:
        'http://localhost:8080?id=1',
      storeName: 'Popup Store 1',
      startDate: '09/20',
      endDate: '09/30',
      location: '서울시 강남구',
      likes: 0,
    },
    {
      id: 2,
      imageUrl: 'http://localhost:8080?id=2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    {
      id: 2,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    {
      id: 2,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    {
      id: 2,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    {
      id: 2,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    {
      id: 2,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    {
      id: 3,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    {
      id: 4,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    {
      id: 5,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    {
      id: 6,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    {
      id: 7,
      imageUrl: 'URL_2',
      storeName: 'Popup Store 2',
      startDate: '10/05',
      endDate: '10/15',
      location: '서울시 종로구',
      likes: 0,
    },
    // 추가 팝업스토어 정보 입력
  ]);

  return { popupStores, setPopupStores };
}

export default PopupStoreState;