// TODO: Donate Card One Start
document
  .getElementById("donate-btn-one")
  .addEventListener("click", function () {
    const donateInputOne = getInputValueById("donate-input-one");
    const totalDonateOne = getTotalAmmountById("total-donate-one");

    const balance = getTotalAmmountById("balance");

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

    document.getElementById("total-donate-one").innerText = newTotalDonateOne;

    document.getElementById("donate-input-one").value = "";

    my_modal_5.showModal();

    const newBalance = balance - donateInputOne;
    document.getElementById("balance").innerText = newBalance;

    //todo History add for 1st card

    getId("history-container").innerHTML += showHistory(
      donateInputOne,
      "Taka is Donated for famine-2024 at Noakhali, Bangladesh",
      currentDate
    );
  });

// TODO: Donate Card Two Start
document
  .getElementById("donate-btn-two")
  .addEventListener("click", function () {
    const donateInputTwo = getInputValueById("donate-input-two");
    const totalDonateTwo = getTotalAmmountById("total-donate-two");

    const balance = getTotalAmmountById("balance");

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

    document.getElementById("total-donate-two").innerText = newTotalDonateTwo;

    document.getElementById("donate-input-two").value = "";

    const newBalance = balance - donateInputTwo;
    document.getElementById("balance").innerText = newBalance;

    //todo History add for 2nd card

    getId("history-container").innerHTML += showHistory(
      donateInputTwo,
      "Taka is Donated for Flood Relief in Feni, Bangladesh"
    );
  });

// TODO: Donate Card Three Start
document
  .getElementById("donate-btn-three")
  .addEventListener("click", function () {
    const donateInputThree = getInputValueById("donate-input-three");
    const totalDonateThree = getTotalAmmountById("total-donate-three");

    const balance = getTotalAmmountById("balance");

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

    document.getElementById("total-donate-three").innerText =
      newTotalDonateThree;

    document.getElementById("donate-input-three").value = "";

    my_modal_5.showModal();

    const newBalance = balance - donateInputThree;
    document.getElementById("balance").innerText = newBalance;

    //todo History add for 3rd card

    getId("history-container").innerHTML += showHistory(
      donateInputThree,
      "Taka is Donated for Injured in the Quota Movement, Bangladesh"
    );
  });

//TODO: history and donation button functionality Start
const donationButton = document.getElementById("donation-button");
const historyButton = document.getElementById("history-button");

donationButton.addEventListener("click", function () {
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("donation-section").classList.remove("hidden");

  donationButton.classList.add("bg-green_primary");
  historyButton.classList.remove("bg-green_primary");
  historyButton.classList.add("bg-btn_secondary");
});

historyButton.addEventListener("click", function () {
  document.getElementById("history-section").classList.remove("hidden");
  document.getElementById("donation-section").classList.add("hidden");

  historyButton.classList.add("bg-green_primary");
  donationButton.classList.remove("bg-green_primary");
  donationButton.classList.add("bg-btn_secondary");
});
