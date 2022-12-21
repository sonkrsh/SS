let counter = 0;

const _custom_row = document.getElementsByClassName("img__container");

const handeNext = () => {
  if (counter >= 0 && counter < 3) {
    counter++;
    console.log("==>>next", counter);

    const idName = _custom_row[counter].id;
    console.log("==>>next", idName);
    let element = document.getElementById(idName);

    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
};

const handlePrev = () => {
  if (counter <= 3 && counter > 0) {
    counter--;
  }

  if (_custom_row.length > counter) {
    const idName = _custom_row[counter].id;
    let element = document.getElementById(idName);

    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
};
