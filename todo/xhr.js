const url = "https://jsonplaceholder.typicode.com/todos";
const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const todosList = document.getElementById("todos-list");
    let checkedCount = 0;

    data.forEach((todo) => {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      const label = document.createElement("label");

      checkbox.type = "checkbox";
      checkbox.classList.add("todo"); // Use camelCase for class names
      checkbox.checked = todo.completed;
      checkbox.disabled = todo.completed;
      checkbox.style.marginLeft = "50px";
      label.for = "todo";
      label.textContent = `${todo.title}`;
      label.appendChild(checkbox);

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          checkedCount++;

          if (checkedCount === 5) {
            setTimeout(()=>{
              
              alert(`Congrats. 5 Tasks have been Successfully Completed!`);
            },1000)

            // Prompt for adding more items or disabling all
            setTimeout(()=>{
              let response = prompt(
                "Do you want to add more items? Press 'y' to add, 'n' to disable all."
              );
  
              if (response.toLowerCase() === "y") {
                // Re-enable all checkboxes that were not initially disabled
                todosList.querySelectorAll("input[type='checkbox']:not([disabled])").forEach((otherCheckbox) => {
                  otherCheckbox.disabled = false;
                });
                checkedCount = 0; // Reset checked count for new tasks
              } else if (response.toLowerCase() === "n") {
                // Disable all checkboxes, preserving already disabled states
                todosList.querySelectorAll("input[type='checkbox']").forEach((otherCheckbox) => {
                  otherCheckbox.disabled = true;
                });
              } else {
                alert("Invalid input. Please enter 'y' or 'n'.");
              }
            },3000)
          
          }
        }
      });

      listItem.appendChild(label);
      todosList.appendChild(listItem);
    });
  } else {
    console.error("Error fetching data:", xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Error sending request:", xhr.statusText);
};

xhr.send();
