import { useEffect, useState } from 'react';
import axios from 'axios';

const [posts, setPosts] = useState([]);

useEffect(() => {
  // JSONPlaceholder에서 포스트 데이터를 가져옵니다.
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      // 데이터를 가져와서 상태에 저장합니다.
      setPosts(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []); // useEffect의 두 번째 인자로 빈 배열을 전달하여 한 번만 실행되도록 합니다.