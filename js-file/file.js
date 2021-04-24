let addNew = document.querySelector('#add-new')
let mom = document.querySelector('#mom')


let addNewNote =(text = '')=>{
    let note = document.createElement('section')
    note.classList.add('msg-container')

    let htmldata = `
    <div class="box">
        <textarea class="txtarea"></textarea>
        <div class="btn-container">
            <button class="txt-btn txt-btn1"><i class="far fa-save"></i></button>
            <button class="txt-btn txt-btn2"><i class="far fa-trash-alt"></i></button>
        </div>
    </div> `

    note.insertAdjacentHTML('afterbegin',htmldata)
    mom.appendChild(note)
    
    
    

}




addNew.addEventListener('click',addNewNote)