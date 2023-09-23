/*

팝업스토어의 리스트 구조

id, imgurl, 이름, 시작일, 종료일, 위치, 좋아요 수

시작일, 종료일은 년도는 빼고 월/일 형식으로만

*/

import { useState, useEffect } from 'react';
import axios from 'axios';

function PopupStoreState() {
  const [popupStores, setPopupStores] = useState([]);
  useEffect(() => {
      fetchPopupStores();
    }, []);

  const fetchPopupStores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/boards');

        const data = response.data;
        setPopupStores(data);
      } catch (error) {
        console.log('팝업 스토어 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };


  return { popupStores, setPopupStores };
}

export default PopupStoreState;