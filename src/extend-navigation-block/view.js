document.addEventListener('DOMContentLoaded', () => {

    // Function to initialize accordion
    const initAccordion = () => {
        const navigation = document.querySelector('.wp-block-navigation.accordion-enabled');
        
        if (navigation) {
            const modalContainer = navigation.querySelector('.wp-block-navigation__responsive-container');
            
            if (modalContainer) {
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        console.log('mutation', mutation.target.classList);
                        if (modalContainer.classList.contains('has-modal-open')) {
                            const toggleButtons = modalContainer.querySelectorAll('.wp-block-navigation-submenu__toggle');
                            
                            toggleButtons.forEach(button => {
                                button.addEventListener('click', (event) => {
                                    event.preventDefault();
                                    const submenu = button.nextElementSibling;
                                    if (submenu && submenu.classList.contains('wp-block-navigation__submenu-container')) {
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

                // Observe the modal container instead of navigation
                observer.observe(modalContainer, {
                    attributes: true,
                    attributeFilter: ['class']
                });
            }
        }
    };

    initAccordion();
}); 