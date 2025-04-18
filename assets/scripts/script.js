// fetch('data.json')
// .then(res => res.json())
// .then(data => {
//     const extensionList = document.querySelector('.main-content');
//     if (extensionList) {
//         data.forEach(extension => {
//             // create a div for each extension
//             const extensionItem = document.createElement('div');
//             extensionItem.classList.add('extension-item');

//             // insert formatted content
//             extensionItem.textContent = `${JSON.stringify(extension, null, 2)}`;
//             extensionList.appendChild(extensionItem);
//         })
//     }
//     else {
//         console.error('Element with id main-content not found');
//     }

// })
// .catch(err => console.log('Error fetching JSON', err));


// fetch('data.json')
// 	.then(res => res.json())
// 	.then(data => {
// 		const extensionList = document.querySelector('.main-content');

// 		if (extensionList) {
// 			data.forEach(extension => {
// 				// create a container div for each extension
// 				const extensionItem = document.createElement('div');
// 				extensionItem.classList.add('extension-item');

// 				// create an img element for the logo
// 				const logo = document.createElement('img');
// 				logo.src = extension.logo;
// 				logo.alr = extension.name;

// 				// create a title element for the name
// 				const name = document.createElement('h3');
// 				name.textContent = extension.name;

// 				// create a paragraph element for the description
// 				const description = document.createElement('p');
// 				description.textContent = extension.description;

//                 // create a status indicator
//                 // const status = document.createElement('span');
//                 // status.textContent = extension.isActive ? 'Active' : 'Inactive';
//                 // status.style.color = extension.isActive ? 'green' : 'red';

// 				// Append all elements to the container div
// 				extensionItem.appendChild(logo);
// 				extensionItem.appendChild(name);
// 				extensionItem.appendChild(description);
//                 // extensionItem.appendChild(status);

// 				// append the container div to the main-content
// 				extensionList.appendChild(extensionItem);
// 			})
// 		}
// 		else {
// 			console.error('Ekement with class main-content not found');
// 		}
// 	})
// 	.catch(err => console.log('Error fetching JSON', err));


// fetch('data.json')
// 	.then(res => res.json())
// 	.then(data => {
// 		const extensionList = document.querySelector('.main-content');

// 		if (extensionList) {
// 			data.forEach(extension => {
// 				// create a container div for each extension
// 				const extensionItem = document.createElement('div');
// 				extensionItem.classList.add('extension-item');

// 				// create an img element for the logo
// 				const logo = document.createElement('img');
// 				logo.src = extension.logo;
// 				logo.alt = extension.name;

// 				// create a div for the text content (name + description)
// 				const textContainer = document.createElement('div');
// 				textContainer.classList.add('text-container');

// 				// create a title element for the name
// 				const name = document.createElement('h3');
// 				name.textContent = extension.name;

// 				// Create a paragraph element for the description
// 				const description = document.createElement('p');
// 				description.textContent = extension.description;

//                 // create a div for the remove button and checker
//                 const toggleContainer = document.createElement('div');
//                 toggleContainer.classList.add('toggle-container');

//                 // Create a remove button and a toggle switch
//                 const removeBtn = document.createElement('button');
//                 removeBtn.textContent = 'Remove';


// 				// append name and description to the text container
// 				textContainer.appendChild(name);
// 				textContainer.appendChild(description);

//                 // append removeBtn and slider to the toggleContainer
                

// 				// append image and text container to the extention item
// 				extensionItem.appendChild(logo);
// 				extensionItem.appendChild(textContainer);

// 				// append the extension item to the main-content
// 				extensionList.appendChild(extensionItem);
// 			});
// 		}
// 		else {
// 			console.error('Element with class main-content not found');
// 		}
// 	})
// 	.catch(err => console.log('Error fetching JSON', err));

// fetch('data.json')
// .then(res => res.json())
// .then(data => {
// 	const extensionList = document.querySelector('.main-content');

// 	if (extensionList) {
// 		data.forEach(extension => {
// 			// create a container div for each extension
// 			const extensionItem = document.createElement('div');
// 			extensionItem.classList.add('extension-item');

// 			// create an img element for the logo
// 			const logo = document.createElement('img');
// 			logo.src = extension.logo;
// 			logo.alt = extension.name;

// 			// create a div for the text content (name + description)
// 			const textContainer = document.createElement('div');
// 			textContainer.classList.add('text-container');

// 			// create a title element for the name
// 			const name = document.createElement('h3');
// 			name.textcontent = extension.name;

// 			// create a paragraph element for the description
// 			const description = document.createElement('p');
// 			description.textContent = extension.description;

// 			// create a div for the remove button and slider
// 			const toggleContainer = document.createElement('div');
// 			toggleContainer.classList.add('toggle-container');

// 			// Highlighted addition: create a remove button
// 			const removeBtn = document.createElement('button');
// 			removeBtn.textContent = 'Remove';
// 			removeBtn.classList.add('remove-btn');

// 			// Highlighted addition: Create a toggle slider
// 			const toggleSwitch = document.createElement('label');
// 			toggleSwitch.classList.add('switch');

// 			const toggleInput = document.createElement('input');
// 			toggleInput.type = 'checkbox';

// 			const sliderSpan = document.createElement('span');
// 			sliderSpan.classList.add('slider');

// 			// Append input and slider span to the toggleSwitch
// 			toggleSwitch.appendChild(toggleInput);
// 			toggleSwitch.appendChild(sliderSpan);

// 			// append remove button and toggle slider to togglecontainer
// 			toggleContainer.appendChild(removeBtn);
// 			toggleContainer.appendChild(toggleSwitch);

// 			// append name and description to the text container
// 			textContainer.appendChild(name);
// 			textContainer.appendChild(description);

// 			// append toggleContainer to the extensionItem
// 			extensionItem.appendChild(logo);
// 			extensionItem.appendChild(textContainer);
// 			extensionItem.appendChild(toggleContainer);

// 			// append the extension item to the main-content
// 			extensionList.appendChild(extensionItem);
// 		});
// 	} else {
// 		console.error('Element with class main-content not found');
// 	}
// })
// .catch(err => console.log('Error fetching JSON', err));

// fetch('data.json')
//     .then(res => res.json())
//     .then(data => {
//         const extensionList = document.querySelector('.main-content');

//         if (extensionList) {
//             data.forEach(extension => {
//                 // Create all elements at the top
//                 const extensionItem = document.createElement('div');
//                 extensionItem.classList.add('extension-item');

//                 const imageAndText = document.createElement('div');
//                 imageAndText.classList.add('image-and-text'); // Wrapper for image and text content

//                 const logo = document.createElement('img');
//                 logo.src = extension.logo;
//                 logo.alt = extension.name;

//                 const textContainer = document.createElement('div');
//                 textContainer.classList.add('text-container');

//                 const name = document.createElement('h3');
//                 name.textContent = extension.name;

//                 const description = document.createElement('p');
//                 description.textContent = extension.description;

//                 const toggleContainer = document.createElement('div');
//                 toggleContainer.classList.add('toggle-container');

//                 const removeBtn = document.createElement('button');
//                 removeBtn.textContent = 'Remove';
//                 removeBtn.classList.add('remove-btn'); // Optional class for styling

//                 const toggleSwitch = document.createElement('label');
//                 toggleSwitch.classList.add('switch');

//                 const toggleInput = document.createElement('input');
//                 toggleInput.type = 'checkbox';

//                 const sliderSpan = document.createElement('span');
//                 sliderSpan.classList.add('slider');

//                 // Append elements step by step
//                 textContainer.appendChild(name);
//                 textContainer.appendChild(description);

//                 imageAndText.appendChild(logo);
//                 imageAndText.appendChild(textContainer);

//                 toggleSwitch.appendChild(toggleInput);
//                 toggleSwitch.appendChild(sliderSpan);

//                 toggleContainer.appendChild(removeBtn);
//                 toggleContainer.appendChild(toggleSwitch);

//                 extensionItem.appendChild(imageAndText); // Add image and text wrapper to item
//                 extensionItem.appendChild(toggleContainer); // Add toggle container to item

//                 extensionList.appendChild(extensionItem); // Add the complete item to main-content
//             });
//         } else {
//             console.error('Element with class main-content not found');
//         }
//     })
//     .catch(err => console.log('Error fetching JSON', err));

// fetch('data.json')
// .then(res => res.json())
// .then(data => {
//     const extensionList = document.querySelector('.main-content');

//     if (extensionList) {
//         data.forEach(extension => {
//             const extensionItem = document.createElement('div');
//             extensionItem.classList.add('extension-item');

//             const imageAndText = document.createElement('div');
//             imageAndText.classList.add('image-and-text');

//             const logo = document.createElement('img');
//             logo.src = extension.logo;
//             logo.alt = extension.name;

//             const textContainer = document.createElement('div');
//             textContainer.classList.add('text-container');

//             const name = document.createElement('h3');
//             name.textContent = extension.name;

//             const description = document.createElement('p');
//             description.textContent = extension.description;

//             const toggleContainer = document.createElement('div');
//             toggleContainer.classList.add('toggle-container');

//             const removeBtn = document.createElement('button');
//             removeBtn.classList.add('remove-btn');
//             removeBtn.textContent = 'Remove';

//             const toggleSwitch = document.createElement('label');
//             toggleSwitch.classList.add('switch');

//             const toggleInput = document.createElement('input');
//             toggleInput.type = 'checkbox';

//             // set the initial state of the toggle based on isActive
//             toggleInput.checked = extension.isActive;

//             // Add an ecvent listener to update isActive when the toggle is clicked
//             toggleInput.addEventListener('change', () => {
//                 extension.isActive = toggleInput.checked;
//                 console.log(`${extension.name} is now ${extension.isActive ? 'active' : 'inactive'}`);
//             })

//             const sliderSpan = document.createElement('span');
//             sliderSpan.classList.add('slider');

//             // append elements step by step
//             textContainer.appendChild(name);
//             textContainer.appendChild(description);

//             imageAndText.appendChild(logo);
//             imageAndText.appendChild(textContainer);

//             toggleSwitch.appendChild(toggleInput);
//             toggleSwitch.appendChild(sliderSpan);

//             toggleContainer.appendChild(removeBtn);
//             toggleContainer.appendChild(toggleSwitch);

//             extensionItem.appendChild(imageAndText);
//             extensionItem.appendChild(toggleContainer);

//             extensionList.appendChild(extensionItem);
//         });
//     } else {
//         console.error('Element with class main-content not found');
//     }
// })
// .catch(err => console.log('Error fetching JSON', err));

// fetch('data.json')
// .then(res => res.json())
// .then(data => {
//     const extensionList = document.querySelector('.main-content');

//     if (extensionList) {
// 		// function to render extensions based on a filter
// 		const renderExtensions = (filter = "all") => {
// 			// clear the existing content
// 			extensionList.innerHTML = '';
	
// 			// Filter and render extensions based on the filter criteria
// 			const filteredExtensions = data.filter(extension => {
// 				if (filter === 'active') return extension.isActive;
// 				if (filter === 'inactive') return !extension.isActive;
// 				return true;
// 			})
	
// 			filteredExtensions.forEach(extension => {
// 				const extensionItem = document.createElement('div');
// 				extensionItem.classList.add('extension-item');
	
// 				const imageAndText = document.createElement('div');
// 				imageAndText.classList.add('image-and-text');
	
// 				const logo = document.createElement('img');
// 				logo.src = extension.logo;
// 				logo.alt = extension.name;
	
// 				const textContainer = document.createElement('div');
// 				textContainer.classList.add('text-container');
	
// 				const name = document.createElement('h3');
// 				name.textContent = extension.name;
	
// 				const description = document.createElement('p');
// 				description.textContent = extension.description;
	
// 				const toggleContainer = document.createElement('div');
// 				toggleContainer.classList.add('toggle-container');
	
// 				const removeBtn = document.createElement('button');
// 				removeBtn.classList.add('remove-btn');
// 				removeBtn.textContent = 'Remove';
	
// 				const toggleSwitch = document.createElement('label');
// 				toggleSwitch.classList.add('switch');
	
// 				const toggleInput = document.createElement('input');
// 				toggleInput.type = 'checkbox';
	
// 				// set the initial state of the toggle based on isActive
// 				toggleInput.checked = extension.isActive;
	
// 				// Add an event listener to update isActive when the toggle is clicked
// 				toggleInput.addEventListener('change', () => {
// 					extension.isActive = toggleInput.checked;
// 					console.log(`${extension.name} is now ${extension.isActive ? 'active' : 'inactive'}`);
// 				})
	
// 				const sliderSpan = document.createElement('span');
// 				sliderSpan.classList.add('slider');
	
// 				// append alements step by step
// 				textContainer.appendChild(name);
// 				textContainer.appendChild(description);
	
// 				imageAndText.appendChild(logo);
// 				imageAndText.appendChild(textContainer);
	
// 				toggleSwitch.appendChild(toggleInput);
// 				toggleSwitch.appendChild(sliderSpan);
	
// 				toggleContainer.appendChild(removeBtn);
// 				toggleContainer.appendChild(toggleSwitch);
	
// 				extensionItem.appendChild(imageAndText);
// 				extensionItem.appendChild(toggleContainer);
	
// 				extensionList.appendChild(extensionItem);
// 			});
// 		};
	
// 		// Render all extensions by default on page load
// 		renderExtensions('all');
	
// 		// Add event listeners to navbar buttons
// 		const navbarButtons = document.querySelectorAll('.navbar-category button');
// 		navbarButtons.forEach(button => {
// 				button.addEventListener('click', () => {
// 					navbarButtons.forEach(btn => btn.classList.remove('active-button'));
// 				button.classList.add('active-button');
// 				const filter = button.textContent.toLowerCase();
// 				renderExtensions(filter);
// 			});
// 		});
// 	}
// 	else {
// 		console.error('Element with class main-content not found');
//         return;
// 	}
// })
// .catch(err => console.log('Error fetching JSON', err));

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