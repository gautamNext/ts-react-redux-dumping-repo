const modalParent = document.getElementById("modal-parent");

function handleClick() {
  console.log("Vanila JS event on modal parnet");
}

modalParent?.addEventListener("click", handleClick, { capture: true });;

export default "Vanila Loaded";
