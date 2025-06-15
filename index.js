document.addEventListener('DOMContentLoaded', () => {
    const guestForm = document.getElementById('guest-form');
    const guestNameInput = document.getElementById('guest-name');
    const guestList = document.getElementById('guest-list');
    let guests = [];

    guestForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const guestName = guestNameInput.value.trim();
        if (guestName === '') return;

        if (guests.length >= 10) {
            alert('You can add up to 10 guests only.');
            return;
        }

        const guest = {
            name: guestName,
            attending: false,
            timeAdded: new Date().toLocaleString()
        };

        guests.push(guest);
        updateGuestList();
        guestNameInput.value = ''; 
        guestNameInput.focus();
    });

    function updateGuestList() {
        guestList.innerHTML = '';

        guests.forEach((guest, index) => {
            const li = document.createElement('li');
            li.classList.toggle('attending', guest.attending);

            const guestInfo = document.createElement('div');
            guestInfo.className = 'guest-info';

            const nameSpan = document.createElement('span');
            nameSpan.textContent = guest.name;

            const timeSpan = document.createElement('span');
            timeSpan.className = 'timestamp';
            timeSpan.textContent = `Added: ${guest.timeAdded}`;

            guestInfo.appendChild(nameSpan);
            guestInfo.appendChild(timeSpan);

            li.appendChild(guestInfo);

            // Toggle rsvp button
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'toggle-rsvp';
            toggleBtn.textContent = guest.attending ? 'Mark as Not Attending' : 'Mark as Attending';
            toggleBtn.addEventListener('click', () => {
                guest.attending = !guest.attending;
                updateGuestList();
            });

            // Remove guest button
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-guest';
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => {
                guests.splice(index, 1);
                updateGuestList();
            });

            li.appendChild(toggleBtn);
            li.appendChild(removeBtn);

            guestList.appendChild(li);
        });
    }
});