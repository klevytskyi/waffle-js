export const getElementFromPoint = (x, y, highlightElement) => {
  // eslint-disable-next-line
  highlightElement.style.visibility = 'hidden';
  const target = document.elementFromPoint(x, y);
  // eslint-disable-next-line
  highlightElement.style.visibility = 'initial';
  return target;
};

export const getCoordsAndBounding = elem => {
  const box = elem.getBoundingClientRect();
  const { body } = document;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;

  return {
    ...box.toJSON(),
    top,
    left,
  };
};

export const detectQuater = (x, y, element) => {
  const { left, top, width, height } = element.getBoundingClientRect();

  const xHalf = width / 2 + left;
  const yHalf = height / 2 + top;

  const res = [];

  res.push(y > yHalf ? 'bottom' : 'top');
  res.push(x > xHalf ? 'right' : 'left');

  return res;
};
