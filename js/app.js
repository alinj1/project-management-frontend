// sidebar
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// projects lists
const projectToggles = document.querySelectorAll('.projects__project-statuses');
const projectLists = document.querySelectorAll(".projects__project-list");

// create project button
const createProjectButton = document.querySelector('.projects__create-project')
// create project Modal box
const projectModal = document.querySelector('.projects__modal')
const modalCloseIcon = document.querySelector('.projects__modal-close-icon')
const modalCloseLink = document.querySelector('.projects__modal-form-cancel-link')

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

// expand/collapse projects lists
projectToggles.forEach((toggles, index) => {
    toggles.addEventListener('click', (e) => {
        e.preventDefault()
        projectLists[index].classList.toggle('projects__project-list-toggle');
    })
})

// show create projects modal box
createProjectButton.addEventListener('click', () => {
    projectModal.style.display = 'block'
})


// close modal box with icon
modalCloseIcon.addEventListener('click', () => {
    projectModal.style.display = 'none'
})
// close modal box with cancel link
modalCloseLink.addEventListener('click', () => {
    projectModal.style.display = 'none'
})

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