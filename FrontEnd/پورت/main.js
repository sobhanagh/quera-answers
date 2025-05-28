const ports = document.querySelectorAll(".box")


ports.forEach((port) => {
   const editIcon = port.querySelector(".edit-icon");
   const portNumber = port.querySelector(".port-number");

   const input = document.createElement("input");
   input.type = "number"
   input.value = portNumber.innerText;
   input.classList.add("edit-input");

   const saveBtn = document.createElement("button");
   saveBtn.classList.add("save-button");
   saveBtn.innerText = "ثبت"

   editIcon.addEventListener("click", (e) => {
      portNumber.style.display = "none";
      port.append(input)
      port.append(saveBtn)

      saveBtn.addEventListener("click", () => {
         if (input.value) {
            portNumber.innerText = input.value;
         }
         portNumber.style.display = "inline";
         input.remove();
         saveBtn.remove();
      })

   })
})
