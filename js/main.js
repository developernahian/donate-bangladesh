// TODO: Donate section Card One
document
  .getElementById("donate-btn-one")
  .addEventListener("click", function () {
    const donateInputOne = getInputValueById("donate-input-one");
    const totalDonateOne = getTotalAmmountById("total-donate-one");

    const balance = getTotalAmmountById("balance");

    console.table({ donateInputOne, totalDonateOne });

    if (
      donateInputOne < 1 ||
      isNaN(Number(donateInputOne)) ||
      Number(balance) < Number(donateInputOne)
    ) {
      alert("Invalid Donation Amount");
      document.getElementById("donate-input-one").value = "";
      return;
    }

    const newTotalDonateOne = totalDonateOne + donateInputOne;
    console.log(newTotalDonateOne);

    document.getElementById("total-donate-one").innerText = newTotalDonateOne;

    document.getElementById("donate-input-one").value = "";

    my_modal_5.showModal();

    const newBalance = balance - donateInputOne;
    document.getElementById("balance").innerText = newBalance;

    //TODO: History add for 1st card start

    console.log("asche to output: " + donateInputOne);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // add to  history
    const div = document.createElement("div");

    div.classList = "border-2 rounded-2xl px-8 py-8 space-y-4 mt-8";

    div.innerHTML = `
               <p class="font-medium text-primary text-xl">${donateInputOne} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>

                <p class="font-medium text-secondary bg-slate-100 pl-3 rounded-xl py-2">Date: ${formattedDate} | Time: ${formattedTime}</p>
           `;

    document.getElementById("history-container").appendChild(div);

    //todo History add for 1st card end
  });

// TODO: Donate Section Card Two
document
  .getElementById("donate-btn-two")
  .addEventListener("click", function () {
    const donateInputTwo = getInputValueById("donate-input-two");
    const totalDonateTwo = getTotalAmmountById("total-donate-two");

    const balance = getTotalAmmountById("balance");

    console.log(donateInputTwo, totalDonateTwo);

    if (
      donateInputTwo < 1 ||
      isNaN(Number(donateInputTwo)) ||
      Number(balance) < Number(donateInputTwo)
    ) {
      alert("Invalid Donation Amount");
      document.getElementById("donate-input-two").value = "";
      return;
    }

    my_modal_5.showModal();

    const newTotalDonateTwo = totalDonateTwo + donateInputTwo;
    console.log(newTotalDonateTwo);

    document.getElementById("total-donate-two").innerText = newTotalDonateTwo;

    document.getElementById("donate-input-two").value = "";

    const newBalance = balance - donateInputTwo;
    document.getElementById("balance").innerText = newBalance;

    //TODO: History add for 2nd card start

    console.log("asche to output: " + donateInputTwo);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // add to  history
    const div = document.createElement("div");

    div.classList = "border-2 rounded-2xl px-8 py-8 space-y-4 mt-8";

    div.innerHTML = `
               <p class="font-medium text-primary text-xl">${donateInputTwo} Taka is Donated for Flood Relief in Feni, Bangladesh</p>

                <p class="font-medium text-secondary bg-slate-100 pl-3 rounded-xl py-2">Date: ${formattedDate} | Time: ${formattedTime}</p>
           `;

    document.getElementById("history-container").appendChild(div);

    //todo end
  });

// TODO: Donate Section Card Three
document
  .getElementById("donate-btn-three")
  .addEventListener("click", function () {
    const donateInputThree = getInputValueById("donate-input-three");
    const totalDonateThree = getTotalAmmountById("total-donate-three");

    const balance = getTotalAmmountById("balance");

    console.log(donateInputThree, totalDonateThree);

    if (
      donateInputThree < 1 ||
      isNaN(Number(donateInputThree)) ||
      Number(balance) < Number(donateInputThree)
    ) {
      alert("Invalid Donation Amount");
      document.getElementById("donate-input-three").value = "";
      return;
    }

    const newTotalDonateThree = totalDonateThree + donateInputThree;
    console.log(newTotalDonateThree);

    document.getElementById("total-donate-three").innerText =
      newTotalDonateThree;

    document.getElementById("donate-input-three").value = "";

    my_modal_5.showModal();

    const newBalance = balance - donateInputThree;
    document.getElementById("balance").innerText = newBalance;

    //TODO: History add for 3nd card start

    console.log("asche to output: " + donateInputThree);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // add to  history
    const div = document.createElement("div");

    div.classList = "border-2 rounded-2xl px-8 py-8 space-y-4 mt-8";

    div.innerHTML = `
               <p class="font-medium text-primary text-xl">${donateInputThree} Taka is Donated for Injured in the Quota Movement, Bangladesh</p>

                <p class="font-medium text-secondary bg-slate-100 pl-3 rounded-xl py-2">Date: ${formattedDate} | Time: ${formattedTime}</p>
           `;

    document.getElementById("history-container").appendChild(div);

    //todo history add for 3rd card end
  });

//TODO: history and donation tab and button functionality
const donationButton = document.getElementById("donation-button");
const historyButton = document.getElementById("history-button");

donationButton.addEventListener("click", function () {
  console.log("Donation button clicked");

  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("donation-section").classList.remove("hidden");

  donationButton.classList.add("bg-green_primary");
  historyButton.classList.remove("bg-green_primary");
  historyButton.classList.add("bg-btn_secondary");
});

historyButton.addEventListener("click", function () {
  console.log("History Button clicked");

  document.getElementById("history-section").classList.remove("hidden");
  document.getElementById("donation-section").classList.add("hidden");

  historyButton.classList.add("bg-green_primary");
  donationButton.classList.remove("bg-green_primary");
  donationButton.classList.add("bg-btn_secondary");
});
