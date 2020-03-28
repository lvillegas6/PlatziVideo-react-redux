import { useEffect, useState } from 'react';

export default (API) => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setVideo(data);
    };
    fetchData();
  }, [API]);
  return video;
};
