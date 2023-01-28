export const getHasScrolled = () => window.scrollY;

export const subscribeEventListener = (name: string) => 
  (callback: () => void) => {
    window.addEventListener(name, callback);
    return () => window.removeEventListener(name, callback);
  };
