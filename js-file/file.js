let addNew = document.querySelector('#add-new')
let mom = document.querySelector('#mom')

let localSD =()=>{
    let txtdata = document.querySelectorAll('textarea');
    let notes = []
    txtdata.forEach((note)=>{
        return  notes.push(note.value);
    })

    localStorage.setItem('notes', JSON.stringify(notes))
    
}





let addNewNote =(text = '')=>{
    let note = document.createElement('section')
    note.classList.add('msg-container')

    let htmldata = `
    <div class="box">
        <div class="main ${text ? "" : "" }"></div>
        <textarea class="txtarea ${text ? "hide" : ""}"></textarea>
        <div class="btn-container">
            <button class="txt-btn txt-btn1"><i class="far fa-save"></i></button>
            <button class="txt-btn txt-btn2"><i class="far fa-trash-alt"></i></button>
        </div>
    </div> `

    note.insertAdjacentHTML('afterbegin',htmldata)


    let del = note.querySelector('.txt-btn2')
    let sav = note.querySelector('.txt-btn1')
    let main = note.querySelector('.main')
    let texarea = note.querySelector('textarea')

    del.addEventListener('click',()=>{
        note.remove()
        localSD()
    })

    texarea.value = text
    main.innerHTML = text

    sav.addEventListener('click',()=>{
        // main.classList.toggle('hide')
        texarea.classList.toggle('hide')
    })

    texarea.addEventListener('change',(ele)=>{
        let mytxtVar = ele.target.value
        main.innerHTML = mytxtVar

        localSD()
    })

    

    mom.appendChild(note)
    // document.body.appendChild(note)
    
    
    

}


let notes = JSON.parse(localStorage.getItem('notes'))
if(notes){
    notes.forEach((notevalue)=>{
        addNewNote(notevalue)
    })
}



addNew.addEventListener('click',function(){
    addNewNote()
})