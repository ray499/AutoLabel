console.log("Amazon Order Shipping");

function main() {
  console.log("main function");
  // prettier-ignore
  const btnBar = document.querySelector(`[data-test-id="shipping-section-label"]`);
  btnBar.style.display = "flex";
  btnBar.style.justifyContent = "space-between";

  const shipLink = document.createElement("a");
  shipLink.href = "Shipping Label Provider Link";
  shipLink.target = "_blank";
  shipLink.id = "shippingIdExtension";
  shipLink.textContent = "Ship";
  btnBar?.appendChild(shipLink);
  shipLink.onclick = getData;
}

function getData() {
  // prettier-ignore
  let data = [...document.querySelectorAll(`[data-test-id="shipping-section-buyer-address"] span`)];
  // prettier-ignore
  let phone = document.querySelector(`[data-test-id="shipping-section-phone"]`)?.textContent.split(" ").splice(1, 1).join('').split('-').join("");

  let name = data[0]?.textContent;
  let streetAddress = data[1]?.textContent;
  let city = data[2]?.textContent.replace(",", "");
  let state = data[4]?.textContent;
  let zip = data[6]?.textContent.split("-")[0];

  chrome.storage.local.set({
    data: { name, phone, zip, streetAddress, streetAddress, city, state },
  });
}

setInterval(() => {
  if (document.getElementById("shippingIdExtension")) return;
  else if (document.querySelector(`[data-test-id="shipping-section-label"]`)) {
    main();
  }
}, 1000);
