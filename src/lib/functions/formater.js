export const Formater = (() => {
  let text = '';
  let formatedText = '';

  const format = (str = '') => {
    text = str;

    const regEx = /\[(.*?)\]/g;
    const matches = str.match(regEx);

    if (!matches) return;

    const strOptions = matches.map((match) =>
      match.substring(1, match.length - 1).split('||')
    );

    returnHTML(strOptions);

    // logData();
    // formatData(str);
  };
  const logData = () => console.log({ text, formatedText });
  const returnHTML = (options) => {
    let optionsHTML = '';

    for (const option of options) {
      console.log(option);
    }
  };

  const formatData = (str = '') => {};

  return {
    format,
    logData,
  };
})();
