const getDataFunc = async () => { //eslint-disable-line
  // const url = 'http://localhost:4000/api/product-data';
  const url = '/api/product-data';
    const res = await axios.get(url); //eslint-disable-line
  return res.data;
};

function ProductElementMakerFunc(arr) { //eslint-disable-line
  const result = arr.reduce((acc, {
    name, type, classes, styles, textContent,
  }) => {
    const el = document.createElement(type);
    if (classes) {
      classes.forEach(className => el.classList.add(className));
    }

    if (styles) {
      styles.forEach((style) => {
        const [styleName, styleValue] = style;
        el.style[styleName] = styleValue;
      });
    }

    if (textContent) {
      el.textContent = textContent;
    }
    return {
      ...acc,
      [name]: el,
    };
  }, {});

  return result;
}

function queryStringToJSONFunc(queryString) { //eslint-disable-line
  if (queryString.indexOf('?') > -1) {
      queryString = queryString.split('?')[1]; //eslint-disable-line
  }
  const pairs = queryString.split('&');
  const result = {};
  pairs.forEach((pair) => {
      pair = pair.split('='); //eslint-disable-line
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });
  return result;
}

function formatSearchTermFunc(input) { //eslint-disable-line
  const char0 = input.charAt().toUpperCase();
  const restOfString = input.toLowerCase().slice(1);
  const s = restOfString.charAt(restOfString.length - 1) === 's' ? '' : 's';
  const result = `${char0}${restOfString}${s}`;
  return result;
}

const filterDataFunc = (data, searchTerm) => data.filter((each) => { //eslint-disable-line
  const type = each.type.split(' ').map(item => item.toLowerCase());
  const match = searchTerm.includes(type) || type.includes(searchTerm);
  if (match) {
    return true;
  }
  return false;
});
