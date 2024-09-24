function getInputValueById(id) {
  return Number(document.getElementById(id).value);
}

function getTotalAmmountById(id) {
  return Number(document.getElementById(id).innerText);
}



function getId(id) {
  return document.getElementById(id);
}
const currentDate = new Date().toLocaleString();
function showHistory(donateInput, title) {
  return `
              <div class="border-2 rounded-2xl px-8 py-8 space-y-4 mt-8">
               <p class="font-medium text-primary text-xl">
                    ${donateInput} ${title}
               </p>
                <p class="font-medium text-secondary bg-slate-100 pl-3 rounded-xl py-2">
                  Date: ${currentDate}
                </p>
                </div>
                `;
}