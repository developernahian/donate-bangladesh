// TODO: Donate section one
document.getElementById("donate-btn-one").addEventListener('click', function(){
    const donateInputOne = getInputValueById('donate-input-one');
    const totalDonateOne = getTotalAmmountById('total-donate-one');

    console.log(donateInputOne, totalDonateOne);

    if(donateInputOne < 0){
        alert('Please Enter Valid Amount');
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


});




// TODO: Donate section two
document.getElementById("donate-btn-two").addEventListener('click', function(){
    const donateInputTwo = getInputValueById('donate-input-two');
    const totalDonateTwo = getTotalAmmountById('total-donate-two');

    console.log(donateInputTwo, totalDonateTwo);

    if(donateInputTwo < 0){
        alert('Please Enter Valid Amount');
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


});



// TODO: Donate section three
document.getElementById("donate-btn-three").addEventListener('click', function(){
    const donateInputThree = getInputValueById('donate-input-three');
    const totalDonateThree = getTotalAmmountById('total-donate-three');

    console.log(donateInputThree, totalDonateThree);

    if(donateInputThree < 0){
        alert('Please Enter Valid Amount');
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


});


