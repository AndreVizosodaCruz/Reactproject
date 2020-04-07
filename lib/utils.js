// url = https://www.google.pt return google.pt
export const formatUrl = (url) => {
  const result = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
  return result;
}

// generate key return textIndex
export const generateKey = (index, text) => {
  const result = String(text.replace(/ /g,'').toLowerCase() + index)
  return result;
}

// verify if touch return bool
export const verifyIsTouch = () => {
  if ("ontouchstart" in document.documentElement) {
    return true;
  }
  else {
    return false;
  }
}

export {
  formatUrl,
  generateKey,
  verifyIsTouch
}

