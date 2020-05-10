const subscribe = () => {
  const inputForm = document.querySelector("#subs-form");
  const msg = document.querySelector("#subs-msg");

  if (inputForm.value !== "") {
    msg.innerText = "Thanks! Appreciate that.";

    setTimeout(() => {
      msg.innerText = "";
    }, 3000);
  }
};

export default subscribe;
