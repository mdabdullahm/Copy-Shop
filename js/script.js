document.addEventListener('DOMContentLoaded', function () {

            // --- Mobile Menu Toggle ---
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');

            // Toggle menu on button click
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Hide menu when a link is clicked (for better UX on single-page apps)
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // --- Smooth scrolling for all navigation links ---
            const allNavLinks = document.querySelectorAll('a[href^="#"]');

            for (const link of allNavLinks) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            }

            // --- Contact form submission handling ---
            const contactForm = document.getElementById('contact-form');
            const formSuccessMessage = document.getElementById('form-success');

            contactForm.addEventListener('submit', function (e) {
                e.preventDefault(); // Prevents the default form submission

                // Show success message
                formSuccessMessage.classList.remove('hidden');
                console.log('Form submitted with data:', new FormData(contactForm));

                // Reset the form after a few seconds
                setTimeout(() => {
                    contactForm.reset();
                    formSuccessMessage.classList.add('hidden');
                }, 5000); // Hide message and reset form after 5 seconds
            });

        });