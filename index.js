let name = document.getElementById('username');  //Get the input field where the user enters their name

let list = document.getElementById('guestList');  // Get the list element that will display the guests

let buttonReaction = document.getElementById('add-guest');  //Get the button that will trigger adding a guest


// Add event listener to handle button click
buttonReaction.addEventListener ('click', (e) => {
  e.preventDefault();  //prevent page reloading

  if(name.value.trim() ==='' || !isNaN(name.value.trim())){  //input shoud not be empty or a number --add alert for that
    alert('Input a name')
    return;
  }

   if (list.children.length>=10){
    alert('The limit is 10 guests')  //limiting the guest number to 10
    name.value = '';
    return ;
   }
  //Create a new list item and set its content to the entered name
 let li = document.createElement('li');
 li.textContent = name.value;
 // create remove button
 let removeBtn = document.createElement('button')
 removeBtn.className = 'remove-button';
 removeBtn.textContent = 'Remove';
 

  // creating RSVP dropdown menu
let rsvpSelect = document.createElement('select');
rsvpSelect.className= 'rsvp-select'
let optionList = [
  '--RSVP--',
  'Attending',  //rsvp options
  'Not Attending'];
 // adding rsvp options to the dropdown
  optionList.forEach (optionText =>{
  let option = document.createElement('option');
  option.value = optionText;
  option.textContent = optionText;

  rsvpSelect.appendChild(option);
  })
  

  // adding rsvp dropdown and remove button to the list item
  li.appendChild(rsvpSelect);
  li.appendChild(removeBtn);
 
  // adding the list item to the guest list
 list.appendChild(li)

 name.value = '';  //clear or empty the input feild


})


 // add event listener to remove button if clicked  remove its parent list item
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-button')) {
    const li = e.target.closest('li');
    li.remove();
  }


})  