// tasks lists
const projectToggles = document.querySelectorAll('.project__tasks-statuses');
const projectTable = document.querySelectorAll(".project__tasks-table");

// project settings button
const createProjectButton = document.querySelector('.project__edit-project')
// project settings modal box
const projectModal = document.querySelector('.project__modal')
const modalCloseIcon = document.querySelector('.project__modal-close-icon')
const modalCloseLink = document.querySelector('.project__modal-form-cancel-link')

// member modal box
const memberModal = document.querySelector('.project__member-modal')
const memberModalBtn = document.querySelector('.project__members-seeall')
const memberModalCloseIcon = document.querySelector('.project__member-modal-close-icon')



// expand/collapse tasks lists
projectToggles.forEach((toggles, index) => {
    toggles.addEventListener('click', (e) => {
        e.preventDefault()
        projectTable[index].classList.toggle('project__tasks-list-toggle');
    })
})

// show project setting modal box
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



// BUG
$(document).ready(function(){
  $(".project__tasks-status_box-inner").click(function(){
    $(".project-task-modal").slideToggle();
  });
})



// show/close member modal box
memberModalBtn.addEventListener('click', () => {
  memberModal.style.display = 'block'
})
memberModalCloseIcon.addEventListener('click', () => {
  memberModal.style.display = 'none'
})


// member slider
const membersSlider = document.querySelector(".project__members-slider");
const leftArrow = document.querySelector(".project__member-more-prev");
const rightArrow = document.querySelector(".project__member-more-next");

let scrollAmount = 0;
const scrollSize = 3;
const boxWidth = 220; // width of each box plus margin-right

leftArrow.addEventListener("click", () => {
  if (scrollAmount > 0) {
    scrollAmount -= 1;
    membersSlider.style.transform = `translateX(-${scrollAmount * boxWidth}px)`;
  }
});

rightArrow.addEventListener("click", () => {
  if (scrollAmount < membersSlider.children.length - scrollSize) {
    scrollAmount += 1;
    membersSlider.style.transform = `translateX(-${scrollAmount * boxWidth}px)`;
  }
});
