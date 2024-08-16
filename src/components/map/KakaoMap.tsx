import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  useEffect(() => {
    const kakaoScript = document.createElement("script");
    kakaoScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
    kakaoScript.async = true;
    kakaoScript.onload = () => {
      if (window.kakao) {
        window.kakao.maps.load(() => {
          const mapContainer = document.getElementById("map");
          const mapOption = {
            center: new window.kakao.maps.LatLng(35.944409, 126.694475),
            level: 3,
          };
          const map = new window.kakao.maps.Map(mapContainer, mapOption);

          var markerPosition = new window.kakao.maps.LatLng(
            35.944409,
            126.694475
          );

          var marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          marker.setMap(map);
        });
      }
    };
    document.head.appendChild(kakaoScript);
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default KakaoMap;
