export const clickOnCancelButton = () => {
  const cancelButton: HTMLElement = document.querySelector(
    `img[data-hook='cancel-search-button']`
  ) as HTMLElement;
  cancelButton.click();
};
