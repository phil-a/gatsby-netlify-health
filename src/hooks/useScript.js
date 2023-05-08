import { useEffect } from 'react';

const useScript = (url, id) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.getElementById(id).appendChild(script);

    return () => {
      document.getElementById(id).removeChild(script);
    }
  }, [url, id]);
};

export default useScript;