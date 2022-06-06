
document.addEventListener("click", e=>{
  const isDropdown = e.target.matches('[data-dropdown-active]');
  if(!isDropdown && e.target.closest("[data-dropdown]") != null )return
  let currentDropdown;
  let allDropdowns = document.querySelectorAll("[data-dropdown-active]");
  let element;
  
  if(isDropdown){
    currentDropdown = e.target.dataset.dropdownActive;
    element = document.querySelector(`.${currentDropdown}`);
    element.classList.toggle('active');
    
  }
  
  allDropdowns.forEach(dropdown=>{
    if(dropdown.dataset.dropdownActive == currentDropdown){
      console.log(currentDropdown);
      return
    }else{
      document.querySelector(`.${dropdown.dataset.dropdownActive}`).classList.remove('active')
    }
  
  })
    
  });
