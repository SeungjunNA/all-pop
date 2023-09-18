/*global kakao*/
import React, { useEffect } from 'react';
import '../css/MapPage.css';
import PopupStoreState from '../constant/Popupstores';
import Header from '../components/Header';

const MapPage = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  const { popupStores, setPopupStores } = PopupStoreState();
  // 좋아요 기능
  const handleLike = (storeId) => {
    setPopupStores((prevStores) =>
      prevStores.map((store) =>
        store.id === storeId ? { ...store, likes: store.likes + 1 } : store
      )
    );
  };

  return (
    <div>
      <div className="map-page-container">
        <Header></Header>
        <div className="map-container">
          <div id="map" style={{ width: '700px', height: '700px' }}></div>
        </div>
        <div className="list-container">
          {popupStores
            .sort((a, b) => b.likes - a.likes) // 좋아요 개수로 정렬
            .map((store) => (
              <div className="popup-store">
                <div className="popup-store-img">
                  <img src={store.imageUrl} alt="" />
                </div>
                <div key={store.id} className="popup-store-item">
                  <h3>{store.title}</h3>
                  <p>장소: {store.location}</p>
                  <p>
                    기간: {store.startDate}~{store.endDate}
                  </p>
                  <p>
                    좋아요: {store.likes}{' '}
                    <button onClick={() => handleLike(store.id)}>좋아요</button>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MapPage;