const optionMenu = document.querySelector('.select-menu')
const selectBtn = document.querySelector('.select-btn')
const options = document.querySelectorAll('.option')
const sBtn_text = document.querySelector('.sBtn-text')

const currencyList =  document.querySelector('.options')

async function getCurrency(){
    let response = await fetch ('https://www.cbr-xml-daily.ru/daily_json.js')
    let content = await response.json()
    console.log(content)

    let key

    for (key in content){
        
        currencyList.innerHTML += `<li class="option">
        <span class="option-text">${content[key].ID} - ${content[key].name} </span>
      </li> `

        //  console.log(content[key])
    }

}

getCurrency()






selectBtn.addEventListener('click', ()=> optionMenu.classList.toggle("active"));

options.forEach(option =>{
    option.addEventListener('click',()=>{
        let selectedOption = option.querySelector('.option-text').innerText;
        sBtn_text.innerText = selectedOption
    })
})
