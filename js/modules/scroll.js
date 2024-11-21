
export const getScrollUp = (event) => {
    event.preventDefault();
    const page = document.querySelector(".titleFormMassage");
  return page.scrollIntoView({ behavior: "smooth" });

  
};

