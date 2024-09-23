// TODO: Donate section Card One
document.getElementById("donate-btn-one").addEventListener('click', function(){
    const donateInputOne = getInputValueById('donate-input-one');
    const totalDonateOne = getTotalAmmountById('total-donate-one');

    console.log(donateInputOne, totalDonateOne);

    if(donateInputOne < 0 || isNaN(donateInputOne)){
        alert('Invalid Donation Amount');
        document.getElementById('donate-input-one').value = '';
        return;
    }

    

    const newTotalDonateOne = totalDonateOne + donateInputOne;
    console.log(newTotalDonateOne);

    document.getElementById('total-donate-one').innerText = newTotalDonateOne;

    document.getElementById('donate-input-one').value = '';

    const balance = getTotalAmmountById('balance');
    const newBalance = balance - donateInputOne;
    document.getElementById('balance').innerText = newBalance;




   //TODO: History add for 1st card start

    console.log('asche to output: ' + donateInputOne);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

     // add to  history
     const div = document.createElement("div");
    //  div.classList.add("bg-red-200, border, rounded-2xl");
    div.classList.add("border-2");
    div.classList.add("rounded-2xl");
    div.classList.add("pl-8");
    div.classList.add("py-8");
    div.classList.add("space-y-4");
    div.classList.add("mt-8");

     div.innerHTML = `
               <p class="font-medium text-primary text-xl">${donateInputOne} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>

                <p class="font-medium text-secondary">Date: ${formattedDate} | Time: ${formattedTime}</p>

           `;



     document.getElementById("history-container").appendChild(div);


//todo History add for 1st card end



});




// TODO: Donate Section Card Two
document.getElementById("donate-btn-two").addEventListener('click', function(){
    const donateInputTwo = getInputValueById('donate-input-two');
    const totalDonateTwo = getTotalAmmountById('total-donate-two');

    console.log(donateInputTwo, totalDonateTwo);

    if(donateInputTwo < 0 || isNaN(donateInputTwo)){
        alert('Invalid Donation Amount');
        document.getElementById('donate-input-two').value = '';
        return;
    }

    

    const newTotalDonateTwo = totalDonateTwo + donateInputTwo;
    console.log(newTotalDonateTwo);

    document.getElementById('total-donate-two').innerText = newTotalDonateTwo;

    document.getElementById('donate-input-two').value = '';

    const balance = getTotalAmmountById('balance');
    const newBalance = balance - donateInputTwo;
    document.getElementById('balance').innerText = newBalance;







    //TODO: History add for 2nd card start

    console.log('asche to output: ' + donateInputTwo);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

     // add to  history
     const div = document.createElement("div");
    //  div.classList.add("bg-red-200, border, rounded-2xl");
    div.classList.add("border-2");
    div.classList.add("rounded-2xl");
    div.classList.add("pl-8");
    div.classList.add("py-8");
    div.classList.add("space-y-4");
    div.classList.add("mt-8");

     div.innerHTML = `
               <p class="font-medium text-primary text-xl">${donateInputTwo} Taka is Donated for Flood Relief in Feni, Bangladesh</p>

                <p class="font-medium text-secondary">Date: ${formattedDate} | Time: ${formattedTime}</p>

           `;



     document.getElementById("history-container").appendChild(div);


//todo history add for 2nd card end









});



// TODO: Donate Section Card Three
document.getElementById("donate-btn-three").addEventListener('click', function(){
    const donateInputThree = getInputValueById('donate-input-three');
    const totalDonateThree = getTotalAmmountById('total-donate-three');

    console.log(donateInputThree, totalDonateThree);

    if(donateInputThree < 0 || isNaN(donateInputThree)){
        alert('Invalid Donation Amount');
        document.getElementById('donate-input-three').value = '';
        return;
    }

    

    const newTotalDonateThree = totalDonateThree + donateInputThree;
    console.log(newTotalDonateThree);

    document.getElementById('total-donate-three').innerText = newTotalDonateThree;

    document.getElementById('donate-input-three').value = '';

    const balance = getTotalAmmountById('balance');
    const newBalance = balance - donateInputThree;
    document.getElementById('balance').innerText = newBalance;








   //TODO: History add for 3nd card start

    console.log('asche to output: ' + donateInputThree);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

     // add to  history
     const div = document.createElement("div");
    //  div.classList.add("bg-red-200, border, rounded-2xl");
    div.classList.add("border-2");
    div.classList.add("rounded-2xl");
    div.classList.add("pl-8");
    div.classList.add("py-8");
    div.classList.add("space-y-4");
    div.classList.add("mt-8");

     div.innerHTML = `
               <p class="font-medium text-primary text-xl">${donateInputThree} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>

                <p class="font-medium text-secondary">Date: ${formattedDate} | Time: ${formattedTime}</p>

           `;



     document.getElementById("history-container").appendChild(div);


//todo history add for 3rd card end










});


