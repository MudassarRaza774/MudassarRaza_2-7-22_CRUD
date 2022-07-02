window.addEventListener("load", () => {
    const form = document.querySelector("#form");
    const name = document.querySelector("#name");
    const salary = document.querySelector("#salary");
    const phone = document.querySelector("#phone");
    const mainDiv = document.querySelector("#newDiv");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name1 = name.value;
        const salary1 = salary.value;
        const phone1 = phone.value;

        // const task_el = document.createElement("div");
        // task_el.classList.add("task");

        const subDiv = document.createElement("div");
        subDiv.classList.add("content");



        const names = document.createElement("input");
        names.classList.add("text");
        names.type = "text";
        names.value = name1;
        names.setAttribute("readonly", "readonly");
        const salaries = document.createElement("input");
        salaries.classList.add("text");
        salaries.type = "text";
        salaries.value = salary1;
        salaries.setAttribute("readonly", "readonly");
        const phones = document.createElement("input");
        phones.classList.add("text");
        phones.type = "text";
        phones.value = phone1;
        phones.setAttribute("readonly", "readonly");

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerText = "Edit";

        subDiv.appendChild(names);
        subDiv.appendChild(salaries);
        subDiv.appendChild(phones);
        subDiv.appendChild(editButton)


        mainDiv.appendChild(subDiv);

        name.value = ""
        salary.value = ""
        phone.value = ""

        // const task_actions_el = document.createElement('div');
        // task_actions_el.classList.add('actions');

        // const task_edit_el = document.createElement('button');
        // task_edit_el.classList.add('edit');
        // task_edit_el.innerText = 'Edit';

        // const task_delete_el = document.createElement('button');
        // task_delete_el.classList.add('delete');
        // task_delete_el.innerText = 'Delete';

        // task_actions_el.appendChild(task_edit_el);
        // task_actions_el.appendChild(task_delete_el);

        // task_el.appendChild(task_actions_el);

        // list_el.appendChild(task_el);

        // input.value = '';

        // task_edit_el.addEventListener('click', (e) => {
        //     if (task_edit_el.innerText.toLowerCase() == "edit") {
        //         task_edit_el.innerText = "Save";
        //         task_input_el.removeAttribute("readonly");
        //         task_input_el.focus();
        //     } else {
        //         task_edit_el.innerText = "Edit";
        //         task_input_el.setAttribute("readonly", "readonly");
        //     }
        // });

        // task_delete_el.addEventListener('click', (e) => {
        //     list_el.removeChild(task_el);
        // });
    });
});
