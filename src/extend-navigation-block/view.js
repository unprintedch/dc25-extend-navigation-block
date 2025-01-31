document.addEventListener('DOMContentLoaded', () => {

    // Function to initialize accordion
    const initAccordion = () => {
        const navigation = document.querySelector('.wp-block-navigation.accordion-enabled');
        
        if (navigation) {
            const modalContainer = navigation.querySelector('.wp-block-navigation__responsive-container');
            
            if (modalContainer) {
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (modalContainer.classList.contains('has-modal-open')) {
                            const menuItems = modalContainer.querySelectorAll('.has-child > .wp-block-navigation-item__content');
                            
                            menuItems.forEach(item => {
                                item.addEventListener('click', (event) => {
                                    const href = item.getAttribute('href');
                                    // If no href or href is #, prevent default and toggle submenu
                                    if (!href || href === '#') {
                                        event.preventDefault();
                                        const toggleButton = item.nextElementSibling;
                                        if (toggleButton) {
                                            const submenu = toggleButton.nextElementSibling;
                                            if (submenu) {
                                                submenu.classList.toggle('is-open');
                                                toggleButton.setAttribute('aria-expanded', 
                                                    submenu.classList.contains('is-open').toString()
                                                );
                                            }
                                        }
                                    }
                                    // If href exists, let the default link behavior happen
                                });
                            });

                            // Keep the toggle button functionality
                            const toggleButtons = modalContainer.querySelectorAll('.wp-block-navigation-submenu__toggle');
                            toggleButtons.forEach(button => {
                                button.addEventListener('click', (event) => {
                                    event.preventDefault();
                                    const submenu = button.nextElementSibling;
                                    if (submenu) {
                                        submenu.classList.toggle('is-open');
                                        button.setAttribute('aria-expanded', 
                                            submenu.classList.contains('is-open').toString()
                                        );
                                    }
                                });
                            });
                        }
                    });
                });

                observer.observe(modalContainer, {
                    attributes: true,
                    attributeFilter: ['class']
                });
            }
        }
    };

    initAccordion();
}); 