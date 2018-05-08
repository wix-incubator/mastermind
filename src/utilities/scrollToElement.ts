import scrollToElement from 'scroll-to-element';

interface IOpts {
  duration?: number;
}

export const scrollToTop = (opts: IOpts = {}): Promise<any> => {
  const duration = typeof opts.duration !== undefined ? opts.duration : 800;
  return new Promise(resolve => {
    scrollToElement('#top', { duration });
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

export const scrollToGameDetails = () => {
  scrollToElement('#gameDetails', {
    duration: 800,
    align: 'top',
    offset: -113
  });
};
