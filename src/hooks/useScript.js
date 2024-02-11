import { useEffect } from 'react';

const useScript = (url, id) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    const el = document.getElementById(id)
    el.appendChild(script);

    return () => {
      if (el == null) {
        el.removeChild(script);
      }
    }
  }, [url, id]);
};

export default useScript;