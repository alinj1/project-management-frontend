// projects lists
const projectToggles = document.querySelectorAll('.projects__project-statuses');
const projectLists = document.querySelectorAll(".projects__project-list");

// create project button
const createProjectButton = document.querySelector('.projects__create-project')
// create project Modal box
const projectModal = document.querySelector('.projects__modal')
const modalCloseIcon = document.querySelector('.projects__modal-close-icon')
const modalCloseLink = document.querySelector('.projects__modal-form-cancel-link')

// icon for task settings
const projectSettingsIcons = document.querySelectorAll('.projects__project-settings-icon')
const projectRows = document.querySelectorAll('.projects__project-row')

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


projectRows.forEach((row, index) => {
    const projectSettings = projectSettingsIcons[index];
    row.addEventListener('mouseover', () => {
      projectSettings.style.display = "flex";
    });
    row.addEventListener('mouseout', () => {
      projectSettings.style.display = "none";
    });
  });