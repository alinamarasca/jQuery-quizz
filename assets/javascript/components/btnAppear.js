const btnAppear = elIdentifier => {
  $(elIdentifier).css({ opacity: "1" });
  $(elIdentifier).animate({
    width: 110,
    height: 60
  });
  $(elIdentifier).animate({
    width: 100,
    height: 50
  });
};

export default btnAppear;
