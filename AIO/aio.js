console.log("aio.js");

// Define your preset data
const presetData = {
  name: "Enter Name Here",
  street: "Enter Primary Street Adress Here",
  zip: "Enter Zip Code Here",
  city: "Enter City Here",
  phone: "Enter Phone Here"
  state: "Enter State Abbreviation Here",
  // add other fields as needed
};

function main() {
  let nameInput = document.querySelector("#ToName");
  let street = document.querySelector("#ToStreet");
  let zip = document.querySelector("#ToZip");
  let city = document.querySelector("#ToCity");
  let phone = document.querySelector("#ToPhone");
  let state = document.querySelector("#ToState");
  
  // Select the label type
  let labelType = document.querySelector("#ClassDynamic");
  
  // Check if the labelType element exists
  if (labelType) {
    // Select the third option
    labelType.selectedIndex = 2;
  }

  chrome.storage.local.get(null, (data) => {
    nameInput.value = data.data.name.trim();
    nameInput.dispatchEvent(new Event("input", { bubbles: true }));
    street.value = data.data.streetAddress.trim();
    street.dispatchEvent(new Event("input", { bubbles: true }));
    zip.value = data.data.zip.trim();
    zip.dispatchEvent(new Event("input", { bubbles: true }));
    state.value = data.data.state.trim();
    state.dispatchEvent(new Event("input", { bubbles: true }));
    city.value = data.data.city.trim();
    city.dispatchEvent(new Event("input", { bubbles: true }));
    phone.value = +data.data.phone;
    phone.dispatchEvent(new Event("input", { bubbles: true }));
  });

  // Select the "From" fields
  let fromNameInput = document.querySelector("#FromName");
  let fromStreet = document.querySelector("#FromStreet");
  let fromZip = document.querySelector("#FromZip");
  let fromCity = document.querySelector("#FromCity");
  let fromPhone = document.querySelector("#FromPhone");
  let fromState = document.querySelector("#FromState");
  // add other fields as needed

  // Set the "From" fields with preset data
  fromNameInput.value = presetData.name;
  fromStreet.value = presetData.street;
  fromZip.value = presetData.zip;
  fromCity.value = presetData.city;
  fromPhone.value = presetData.phone;
  fromState.value = presetData.state;
  // add other fields as needed

  // Dispatch input events so any event listeners on the fields get notified
  fromNameInput.dispatchEvent(new Event("input", { bubbles: true }));
  fromStreet.dispatchEvent(new Event("input", { bubbles: true }));
  fromZip.dispatchEvent(new Event("input", { bubbles: true }));
  fromCity.dispatchEvent(new Event("input", { bubbles: true }));
  fromPhone.dispatchEvent(new Event("input", { bubbles: true }));
  fromState.dispatchEvent(new Event("input", { bubbles: true }));
  // add other fields as needed

  chrome.storage.local.clear();
}

const timer = setInterval(() => {
  if (document.querySelector(`#ToName`)) {
    main();
    clearInterval(timer);
  }
}, 1000);
