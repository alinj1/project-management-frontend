// sidebar
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// notif drop down menu
const notifDropdownLink = document.querySelector('.header__notif-link')
const notifDropdown = document.querySelector('.header__notif-dropdown')

// user drop down menu
const userDropdownLink = document.querySelector('.header__user-link')
const userDropdown = document.querySelector('.header__user-dropdown')


// expand/collapse the sidebar
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-close');
});

// boolean helper for close/show drop down menu
let isUserDropdownVisible = false
// show/hide user drop down menu
userDropdownLink.addEventListener('click', () => {
    if (isUserDropdownVisible) {
        userDropdown.style.display = 'none'
        isUserDropdownVisible = false
    } else {
        userDropdown.style.display = 'block'
        isUserDropdownVisible = true
    }
})

// close user drop down menu by clicking outside the drop down 
window.addEventListener('mouseup', function(event) {
    if (event.target != userDropdown && !userDropdown.contains(event.target)) {
        userDropdown.style.display = 'none';
    }
  });

// boolean helper for close/show drop down menu
let isNotifDropdownVisible = false
// show/hide user drop down menu
notifDropdownLink.addEventListener('click', () => {
    if (isNotifDropdownVisible) {
        notifDropdown.style.display = 'none'
        isNotifDropdownVisible = false
    } else {
        notifDropdown.style.display = 'block'
        isNotifDropdownVisible = true
    }
})

// close user drop down menu by clicking outside the drop down 
window.addEventListener('mouseup', function(event) {
    if (event.target != notifDropdown && !notifDropdown.contains(event.target)) {
        notifDropdown.style.display = 'none';
    }
  });