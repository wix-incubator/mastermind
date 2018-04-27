import scrollToElement from 'scroll-to-element';

export const scrollToTop = () => {
  scrollToElement('#top', { duration: 800 });
};

export const scrollToGameDetails = () => {
  scrollToElement('#gameDetails', {
    duration: 800,
    align: 'top',
    offset: -113
  });
};
