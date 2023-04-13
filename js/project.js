// projects lists
const projectToggles = document.querySelectorAll('.project__tasks-statuses');
const projectTable = document.querySelectorAll(".project__tasks-table");

// create project button
const createProjectButton = document.querySelector('.project__edit-project')
// create project Modal box
const projectModal = document.querySelector('.project__modal')
const modalCloseIcon = document.querySelector('.project__modal-close-icon')
const modalCloseLink = document.querySelector('.project__modal-form-cancel-link')

// icon for task settings
const taskSettingsIcons = document.querySelectorAll('.project__tasks-settings-icon')
const taskRows = document.querySelectorAll('.project__tasks-row')

// expand/collapse projects lists
projectToggles.forEach((toggles, index) => {
    toggles.addEventListener('click', (e) => {
        e.preventDefault()
        projectTable[index].classList.toggle('project__tasks-list-toggle');
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

const membersSlider = document.querySelector(".project__members-slider");
const leftArrow = document.querySelector(".project__member-more-prev");
const rightArrow = document.querySelector(".project__member-more-next");

let scrollAmount = 0;
const scrollSize = 3;
const boxWidth = 220; // width of each box plus margin-right

// leftArrow.style.display = "none";

leftArrow.addEventListener("click", () => {
  if (scrollAmount > 0) {
    scrollAmount -= 1;
    membersSlider.style.transform = `translateX(-${scrollAmount * boxWidth}px)`;
    // if (scrollAmount === 0) {
    //   leftArrow.style.display = "none";
    // }
    // if (scrollAmount < membersSlider.children.length - scrollSize) {
    //   rightArrow.style.display = "block";
    // }
  }
});

rightArrow.addEventListener("click", () => {
  if (scrollAmount < membersSlider.children.length - scrollSize) {
    scrollAmount += 1;
    membersSlider.style.transform = `translateX(-${scrollAmount * boxWidth}px)`;
    // if (scrollAmount === membersSlider.children.length - scrollSize) {
    //   rightArrow.style.display = "none";
    // }
    // if (scrollAmount > 0) {
    //   leftArrow.style.display = "block";
    // }
  }
});




taskRows.forEach((row, index) => {
  const taskSettings = taskSettingsIcons[index];
  row.addEventListener('mouseover', () => {
    taskSettings.style.display = "flex";
  });
  row.addEventListener('mouseout', () => {
    taskSettings.style.display = "none";
  });
});

// const tasksContainer = document.querySelector('.project__tasks-table');
// document.addEventListener('mouseover', (event) => {
//   const target = event.target;
//   if (target.classList.contains('project__tasks-row')) {
//     const settingsIcon = target.querySelector('.project__tasks-settings-icon');
//     settingsIcon.style.display = 'flex';
//   }
// });














// // checkbox of reminders

// const reminderCheckbox = querySelector('.project__reminders-reminder_checkbox')
// // add click event to checkbox
// $('.reminders').on('click', reminderCheckbox, function() {
//   $(this).toggleClass('checked');
//   const isCompleted = $(this).closest('.reminder').toggleClass('completed').hasClass('completed');
//   if (isCompleted) {
//     $(this).find('i').addClass('fa-check');
//   } else {
//     $(this).find('i').removeClass('fa-check');
//   }
//   sortReminders();
// });

// // function to sort reminders based on completion status
// function sortReminders() {
//   // get all reminder elements
//   const reminders = $('.reminder');

//   // sort reminders based on completion status
//   reminders.sort(function(a, b) {
//     const aCompleted = $(a).hasClass('completed');
//     const bCompleted = $(b).hasClass('completed');

//     // move completed reminders to the bottom of the list
//     if (aCompleted && !bCompleted) {
//       return 1;
//     } else if (!aCompleted && bCompleted) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });

//   // update order of reminders in the HTML
//   const remindersContainer = $('.reminders');
//   remindersContainer.empty();
//   reminders.each(function(index, element) {
//     remindersContainer.append(element);
//   });
// }

// $(document).ready(function() {
//   sortReminders();
// });