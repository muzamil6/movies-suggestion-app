import { useState, useEffect } from 'react';

const useLoading = (delay: number = 2000) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, delay));
      setLoading(false);
    };

    fetchData();
  }, [delay]);

  return loading;
};

export default useLoading;
