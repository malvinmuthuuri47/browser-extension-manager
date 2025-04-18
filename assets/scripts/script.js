fetch('data.json')
.then(res => res.json())
.then(data => {
    const extensionList = document.querySelector('.main-content');

    if (!extensionList) {
        console.error('Element with class main-content not found');
        return;
    }

    // function to render extensions based on a filter
    const renderExtensions = (filter = 'all') => {
        // claer the existing content
        extensionList.innerHTML = '';

        // check if dark mode is active
        const isDarkMode = document.body.classList.contains('dark-mode');

        // Filter and render extensions based on the filter criteria
        const filteredExtensions = data.filter(extension => {
            if (filter === 'active') return extension.isActive;
            if (filter === 'inactive') return !extension.isActive;
            return true;
        });

        filteredExtensions.forEach(extension => {
            const extensionItem = document.createElement('div');
            extensionItem.classList.add('extension-item');

            // apply dark-mode class if body is in dark-mode
            if (isDarkMode) {
                extensionItem.classList.add('dark-mode');
            }

            // wrapper for image and text content
            const imageAndText = document.createElement('div');
            imageAndText.classList.add('image-and-text');

            const logo = document.createElement('img');
            logo.src = extension.logo;
            logo.alt = extension.name;

            const textContainer = document.createElement('div');
            textContainer.classList.add('text-container');

            const name = document.createElement('h3');
            name.textContent = extension.name;

            const description = document.createElement('p');
            description.textContent = extension.description;

            const toggleContainer = document.createElement('div');
            toggleContainer.classList.add('toggle-container');

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove-btn');
            removeBtn.textContent = 'Remove';

            if (isDarkMode) {
                removeBtn.classList.add('dark-mode');
            }

            const toggleSwitch = document.createElement('label');
            toggleSwitch.classList.add('switch');

            const toggleInput = document.createElement('input');
            toggleInput.type = 'checkbox';
            
            // set the initial state of the toggle based on isActive
            toggleInput.checked = extension.isActive;

            // Add an event listener to update isActive when the toggle is clicked
            toggleInput.addEventListener('change', () => {
                // update the isactive state dynamically
                extension.isActive = toggleInput.checked;
                // console.log(`${extension.name} is now ${extension.isActive ? 'active' : 'inactive'}`);
                // Immediately re-render the filtered view
                renderExtensions(activeFilter);
            });

            const sliderSpan = document.createElement('span');
            sliderSpan.classList.add('slider');

            // Append elements step by step
            textContainer.appendChild(name);
            textContainer.appendChild(description);

            imageAndText.appendChild(logo);
            imageAndText.appendChild(textContainer);

            toggleSwitch.appendChild(toggleInput);
            toggleSwitch.appendChild(sliderSpan);

            toggleContainer.appendChild(removeBtn);
            toggleContainer.appendChild(toggleSwitch);

            extensionItem.appendChild(imageAndText);
            extensionItem.appendChild(toggleContainer);

            extensionList.appendChild(extensionItem);
        });
    };

    // Track the currently active filter
    let activeFilter = 'all';

    // render all extensions by default on page load
    renderExtensions(activeFilter);

    // add event listeners to navbar buttons
    const navbarButtons = document.querySelectorAll('.navbar-category button');

    // Ensure that all button starts as always active
    const allButton = Array.from(navbarButtons).find(button => button.textContent.toLowerCase() === 'all');
    if (allButton) {
        allButton.classList.add('active-button');
    }

    navbarButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the 'active-button' class from all buttons
            navbarButtons.forEach(btn => btn.classList.remove('active-button'));

            // add the 'active-button' class to the clicked button
            button.classList.add('active-button');

            // Get the filter type ('all', 'active', 'inactive')
            activeFilter = button.textContent.toLowerCase();

            // render the extensions based on the filter
            renderExtensions(activeFilter);
        });
    });
})
.catch(err => console.log('Error fetching JSON', err));