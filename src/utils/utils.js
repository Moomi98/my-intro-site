export const copyToClipBoard = (text, successAction, failAction) => {
  try {
    window.navigator.clipboard.writeText(text);
    successAction && successAction();
  } catch (error) {
    failAction && failAction();
  }
};
