// Basic Blog Filtering Logic
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogItems = document.querySelectorAll('.blog-post-item');

    if (filterButtons.length > 0 && blogItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Manage active button state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                blogItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (filterValue === 'all' || filterValue === itemCategory) {
                        item.style.display = 'flex'; // Or 'block' or 'grid' depending on your item's display type
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Basic Newsletter Form Handling (prevents page reload and logs email)
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                console.log('Newsletter signup for:', emailInput.value);
                alert(`Thank you for subscribing with ${emailInput.value}! (This is a demo)`);
                emailInput.value = ''; // Clear the input
            }
        });
    }

    // Basic Comment Form Handling (prevents page reload and logs comment)
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = commentForm.querySelector('#comment-name');
            const emailInput = commentForm.querySelector('#comment-email');
            const commentTextInput = commentForm.querySelector('#comment-text');

            if (nameInput && commentTextInput && nameInput.value && commentTextInput.value) {
                console.log('Comment submitted:');
                console.log('Name:', nameInput.value);
                console.log('Email:', emailInput.value || 'Not provided');
                console.log('Comment:', commentTextInput.value);

                alert('Thank you for your comment! (This is a demo)');
                
                // Optionally, you could dynamically add the comment to the list here
                // For now, just clear the form
                nameInput.value = '';
                if(emailInput) emailInput.value = '';
                commentTextInput.value = '';
            } else {
                alert('Please fill in your name and comment.');
            }
        });
    }
});
