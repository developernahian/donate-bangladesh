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

    getId("history-container").innerHTML += showHistory(
      donateInputOne,
      "Taka is Donated for famine-2024 at Noakhali, Bangladesh",
      currentDate
    );

    //todo END
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

    getId("history-container").innerHTML += showHistory(
      donateInputTwo,
      "Taka is Donated for Flood Relief in Feni, Bangladesh"
    );

    //todo END
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

    getId("history-container").innerHTML += showHistory(
      donateInputThree,
      "Taka is Donated for Injured in the Quota Movement, Bangladesh"
    );

    //todo END
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
