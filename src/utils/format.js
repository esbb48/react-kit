export const toNumberText = number => {
  return new Intl.NumberFormat('nu').format(number);
};

export const toHashText = (originText, options = {}) => {
  //  ex:Key123456 -> Key******456
  const {
    prefixLength = 4,
    suffixLength = 4,
    replaceWord = '******',
  } = options;

  return originText.replace(
    new RegExp(`^(.{${prefixLength}}).*(.{${suffixLength}})$`),
    (_, prefix, suffix) => `${prefix}${replaceWord}${suffix}`
  );
};

export const toCamelStyle = actionType =>
  actionType.toLowerCase().replace(/[^a-z]{1}(\w)/g, function (all, matched) {
    return matched.toUpperCase();
  });

export const htmlToPlainText = htmlText =>
  htmlText.replace(/<(.*?)>|&nbsp;/g, '');
