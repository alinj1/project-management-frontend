
let to_do_data = [{
    title: " UI Design with Figma",
    id: 1
},
{
    title: " UI Design with Figma",
    id: 2
}]

let in_progress_data = [{
    title: " UI Design with Figma",
    id: 3
},
{
    title: " UI Design with Figma",
    id: 4
}]


let completed_data = [{
    title: " UI Design with Figma",
    id: 5
},
{
    title: " UI Design with Figma",
    id: 6
}]

console.log(in_progress_data)

let to_do_content = ''

to_do_data.forEach(data => {

    to_do_content += ` 
    <div class="project__tasks-row">
    <div class="project__tasks-status">
        <div class="project__tasks-status_box-outer" onclick="box(${data.id})">
            <div class="project__tasks-status_box-inner">
            </div>
        </div>

        <div class="project-task-modal" id="${data.id}">
            <div class="project-task-modal__content">

                <div class="project-task-modal__item-wrapper" id="task-modal-todo" onclick="to_do()">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">To Do</span>
                </div>
                <div class="project-task-modal__item-wrapper"
                    id="task-modal-progress">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">In Progress</span>
                </div>
                <div class="project-task-modal__item-wrapper" id="task-modal-check">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">Add For Checking</span>
                </div>
                <div class="project-task-modal__item-wrapper"
                    id="task-modal-completed">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">Completed</span>
                </div>
            </div>
        </div>

    </div>
    <div class="project__tasks-name">
        <a href="project.html" class="project__tasks-name-link">
          `+ data.title + `
        </a>
    </div>
    <div class="project__tasks-assignee">
        <div class="project__tasks-asignee-container">
            <img src="/images/avatar-3.png" alt="user profile picture"
                class="project__tasks-asignee-container-img">
        </div>
    </div>
    <div class="project__tasks-priority">
        <i class='bx bxs-flag project__tasks-priority-icon'></i>
    </div>
    <div class="project__tasks-deadline">
        <p class="project__tasks-deadline__text">4-17-2023</p>
        <p class="project__tasks-deadline__days">14 day left</p>
    </div>
    <div class="project__tasks-comments">
        <i class='bx bx-message-rounded-dots project__tasks-comments-icon'></i>
    </div>
    <div class="project__tasks-upload">
        <i class='bx bx-upload project__tasks-upload-icon'></i>
    </div>
    <div class="project__tasks-settings">
        <i class='bx bx-dots-horizontal-rounded project__tasks-settings-icon'></i>
    </div>
</div>
`

})


let in_progress = ''

in_progress_data.forEach(data => {

    in_progress += ` 
    <div class="project__tasks-row">
    <div class="project__tasks-status">
        <div class="project__tasks-status_box-outer" onclick="box(${data.id})">
            <div class="project__tasks-status_box-inner">
            </div>
        </div>

        <div class="project-task-modal" id="${data.id}">
            <div class="project-task-modal__content">

                <div class="project-task-modal__item-wrapper" id="task-modal-todo">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">To Do</span>
                </div>
                <div class="project-task-modal__item-wrapper"
                    id="task-modal-progress">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">In Progress</span>
                </div>
                <div class="project-task-modal__item-wrapper" id="task-modal-check">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">Add For Checking</span>
                </div>
                <div class="project-task-modal__item-wrapper"
                    id="task-modal-completed">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">Completed</span>
                </div>
            </div>
        </div>

    </div>
    <div class="project__tasks-name">
        <a href="project.html" class="project__tasks-name-link">
          `+ data.title + `
        </a>
    </div>
    <div class="project__tasks-assignee">
        <div class="project__tasks-asignee-container">
            <img src="/images/avatar-3.png" alt="user profile picture"
                class="project__tasks-asignee-container-img">
        </div>
    </div>
    <div class="project__tasks-priority">
        <i class='bx bxs-flag project__tasks-priority-icon'></i>
    </div>
    <div class="project__tasks-deadline">
        <p class="project__tasks-deadline__text">4-17-2023</p>
        <p class="project__tasks-deadline__days">14 day left</p>
    </div>
    <div class="project__tasks-comments">
        <i class='bx bx-message-rounded-dots project__tasks-comments-icon'></i>
    </div>
    <div class="project__tasks-upload">
        <i class='bx bx-upload project__tasks-upload-icon'></i>
    </div>
    <div class="project__tasks-settings">
        <i class='bx bx-dots-horizontal-rounded project__tasks-settings-icon'></i>
    </div>
</div>
`

})



let completed = ''

completed_data.forEach(data => {

    completed += ` 
    <div class="project__tasks-row">
    <div class="project__tasks-status">
        <div class="project__tasks-status_box-outer" onclick="box(${data.id})">
            <div class="project__tasks-status_box-inner">
            </div>
        </div>

        <div class="project-task-modal" id="${data.id}">
            <div class="project-task-modal__content">

                <div class="project-task-modal__item-wrapper" id="task-modal-todo">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">To Do</span>
                </div>
                <div class="project-task-modal__item-wrapper"
                    id="task-modal-progress">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">In Progress</span>
                </div>
                <div class="project-task-modal__item-wrapper" id="task-modal-check">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">Add For Checking</span>
                </div>
                <div class="project-task-modal__item-wrapper"
                    id="task-modal-completed">
                    <div class="project-task-modal__box"></div>
                    <span class="project-task-modal__text">Completed</span>
                </div>
            </div>
        </div>

    </div>
    <div class="project__tasks-name">
        <a href="project.html" class="project__tasks-name-link">
          `+ data.title + `
        </a>
    </div>
    <div class="project__tasks-assignee">
        <div class="project__tasks-asignee-container">
            <img src="/images/avatar-3.png" alt="user profile picture"
                class="project__tasks-asignee-container-img">
        </div>
    </div>
    <div class="project__tasks-priority">
        <i class='bx bxs-flag project__tasks-priority-icon'></i>
    </div>
    <div class="project__tasks-deadline">
        <p class="project__tasks-deadline__text">4-17-2023</p>
        <p class="project__tasks-deadline__days">14 day left</p>
    </div>
    <div class="project__tasks-comments">
        <i class='bx bx-message-rounded-dots project__tasks-comments-icon'></i>
    </div>
    <div class="project__tasks-upload">
        <i class='bx bx-upload project__tasks-upload-icon'></i>
    </div>
    <div class="project__tasks-settings">
        <i class='bx bx-dots-horizontal-rounded project__tasks-settings-icon'></i>
    </div>
</div>
`

})

document.getElementById("to_do_content").innerHTML += to_do_content
document.getElementById("in_progress").innerHTML += in_progress
document.getElementById("completed").innerHTML += completed




function box(n) {
    let box_modal = document.getElementById(n)
    $(box_modal).slideToggle(0);


}