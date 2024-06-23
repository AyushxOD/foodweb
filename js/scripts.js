document.addEventListener('DOMContentLoaded', function() {
    // Menu items and their respective images
    const menuItems = [
        { name: 'Pizza', img: 'images/pizza.jpg' },
        { name: 'Burger', img: 'images/burger.jpg' },
        { name: 'Pasta', img: 'images/pasta.jpg' },
        { name: 'Salad', img: 'images/salad.jpg' }
    ];
    
    const menuDiv = document.getElementById('menu-items');
    const displayDiv = document.getElementById('menu-display');

    if (menuDiv) {
        menuItems.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.textContent = item.name;
            menuItemDiv.classList.add('menu-item');
            menuItemDiv.addEventListener('click', () => displayImage(item));
            menuDiv.appendChild(menuItemDiv);
        });
    }

    // Add menu items to the order form select
    const orderSelect = document.querySelector('#order-form select');
    if (orderSelect) {
        menuItems.forEach(item => {
            const option = document.createElement('option');
            option.value = item.name;
            option.textContent = item.name;
            orderSelect.appendChild(option);
        });
    }
    
    // Display image function
    function displayImage(item) {
        displayDiv.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.img}" alt="${item.name}" class="menu-img">
        `;
    }

    // Form submission events (example)
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Registered Successfully!');
        });
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Signed Up Successfully!');
        });
    }

    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Order Placed Successfully!');
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message Sent Successfully!');
        });
    }

    // Interactive hover effects for menu items
    const menuItemsDiv = document.querySelectorAll('#menu-items div');
    menuItemsDiv.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.1)';
            item.style.backgroundColor = 'rgba(255, 68, 54, 0.5)';
            item.style.color = 'white';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.backgroundColor = 'rgba(255, 204, 203, 0.5)';
            item.style.color = 'white';
        });
    });

    // Interactive hover effects for form buttons
    const formButtons = document.querySelectorAll('form button');
    formButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.backgroundColor = '#ff4436';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
            button.style.backgroundColor = '#ff6f61';
        });
    });

    // Interactive header effects
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.color = '#ffcccb';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
            link.style.color = 'white';
        });
    });
});
