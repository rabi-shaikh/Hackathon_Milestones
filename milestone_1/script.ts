 const toggleButon = document.getElementById ('toogle-skills') as HTMLButtonElement 
 const skills = document.getElementById('Skills') as HTMLElement

  toggleButon.addEventListener ("click" ,()=> {
    if(
        skills.style.display === 'none'
    )
    {
        skills.style.display = 'block'
    
    }else {
        skills.style.display = 'none'
    }
  })  