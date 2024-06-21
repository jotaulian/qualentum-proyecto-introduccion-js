const addContactButton = document.getElementById('addContactButton');
const contactList = document.getElementById('contactList');
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');

let contactArray = [];
let idCounter = 0;

addContactButton.addEventListener('click', () =>{
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name !== '' && phone !== ''){
        // If both inputs are valid, add contact to array.
        contactArray.push(
            {
                id: idCounter++,
                name: name,
                phone: phone
            }
        )
        // Clear inputs
        nameInput.value = '';
        phoneInput.value = '';
        // Render all contacts in array
        renderContacts();
    }else{
        window.alert("Por favor, introduce tanto el nombre como el número de teléfono.")
    }
})

const renderContacts = () => {
    // Clear ul elements
    contactList.innerHTML = '';
    // Render contacts
    contactArray.forEach((contact) => {
        // Create li element with attibutes and content
        const li = document.createElement('li');
        li.setAttribute('data-id', contact.id )
        li.textContent = `${contact.name}: ${contact.phone}`
        // Create deleteBtn for contact and add it to li
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        li.appendChild(deleteBtn);
        // Add li to the ul
        contactList.appendChild(li);

        // Add listener to the btn
        deleteBtn.addEventListener('click',handleDeleteContact)

    })

}

const handleDeleteContact = (event) => {
        const contactId = getContactId(event.target);
        deleteContact(contactId);
    };

const getContactId = (element) => parseInt(element.closest('li').getAttribute('data-id'));

const deleteContact = (contactId) => {
        contactArray = contactArray.filter(contact => contact.id !== contactId);
        renderContacts();
    };