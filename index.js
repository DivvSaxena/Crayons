let getColorSchemeEl = document.getElementById('getcolorscheme')
let sectionOneEl = document.getElementById('sectionone')



getColorSchemeEl.addEventListener('click', () => {
    let colorEl = document.getElementById('color')
    let modeEl = document.getElementById('mode')
    let url = `https://www.thecolorapi.com/scheme?hex=${colorEl.value.substring(1)}&mode=${modeEl.value}&count=5`
   
    console.log(url)

    displaycolors()

    fetch(url)
        .then(res => res.json())
        .then(data =>  {
            let colors = ''
            for(let i = 0; i < data.colors.length ; i++){

                colors  += `
                                <div id="color-${i}" class="color-${i} color-one">
                                    <h1 id='color-length-${i}' class='label-color-one' onclick='clipboard(${i})'></h1>
                                </div>
                            `
            }

            

            sectionOneEl.innerHTML = colors
            
            for(let i = 0; i < data.colors.length ; i++){
                document.getElementById(`color-${i}`).style.backgroundColor = data.colors[i].hex.value
            
                document.getElementById(`color-length-${i}`).textContent = data.colors[i].hex.value
            }
           
        })

})

function clipboard(index){

    //Getting the h1 tag
    var copyText = document.getElementById(`color-length-${index}`).textContent

    // Creating temporary text area element 

    var textarea = document.createElement('textarea')
    textarea.value = copyText
    

    //Selecting the tag
    textarea.select()
    textarea.setSelectionRange(0, 99999); // For mobile devices

    //Copying the text inside it
    navigator.clipboard.writeText(textarea.value)

    // Alert the copied text
    alert("Copied the text: " + textarea.value)
    
}

function displaycolors(){
    document.getElementById('gif').style.display = 'none'
}