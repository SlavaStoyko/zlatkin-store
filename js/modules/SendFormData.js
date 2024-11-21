
    export const SendFormData = (linkForm) =>{
      async function sendForm(url,Date) {
        await fetch(url,{
          method:"POST",
          body: Date
        })

       }

      const inputName = document.querySelector("#name");
      const inputPhone = document.querySelector("#phone");
      const inputMail = document.querySelector("#count");
      
      const form = document.querySelectorAll("#formOrder input");
      
      document.querySelector("#formSubmit").onclick = formLaunch;
      
      
      let Data = new FormData();
      let statusForm = 0;
      
      function validField(elem) {
        elem.classList.remove("invalid");
        elem.classList.add("valid");
      }
      function inValidField(elem) {
        elem.classList.remove("valid");
        elem.classList.add("invalid");
      }
      
      function formLaunch(e) {
        e.preventDefault();
        
       if(inputName.getAttribute('class') === 'valid' && inputPhone.getAttribute('class') === 'valid' && inputMail.getAttribute('class') === 'valid' && statusForm === 0){
        Data.append("name",inputName.value.trim())
        Data.append('phone',inputPhone.value.trim())
        Data.append('countItems',inputMail.value.trim().toLowerCase())
        
        sendForm(linkForm,Data);
        resetItem(form);
        document.querySelector("#formOrder").reset();
        Data.delete('name')
        Data.delete('phone')
        Data.delete('mail')
        massage(`Дякуємо за вибір <span>Beauty Zone</span>`);
       }else{
        massage(`Заповніть <span>поля форми</span>!`);
        
       }
      
      }
      function massage(mess) {
        document.querySelector(".titleFormMassage").innerHTML = mess;
        setTimeout(() => {
          document.querySelector(
            ".titleFormMassage"
          ).textContent = ``;
        }, 3000);
      }
      
      function resetItem(form) {
        for (const item of form) {
          item.classList.remove("valid");
          item.classList.remove("invalid");
        }
      }
      for (const item of form) {
        item.addEventListener("blur", (event) => {
         validateForm(event);
      
        
        });
      }
      
      const validateForm = (event) => {
      
        switch (event.target.id) {
          case "name":
          validateName(event.target);
            break;
          case "phone":
          validatePhone(event.target);
            break;
          case "count":
          validateEmail(event.target);
            break;
          default:
            alert("Validation error!");
        }
     
      
      };
      
      function validateName(name) {
        if (name.id === "name") {
          let RegExpName = /^[а-я,a-z\s\-.']+$/i; ///[+_/)(*&^%$#@!~}{":><?,.|`~]/g;
          if (name.value === "") {
            inValidField(name);
            statusForm++;
            massage(`Поле <span>ім'я </span> не 
              можуть бути порожніми!`);
            
          } else if (!RegExpName.test(name.value)) {
            inValidField(name);
            statusForm++;
            massage(`Поле ім'я некоректні символи</span>!`);
          
          } else {
            validField(name);
            statusForm = 0;
          }
        }
      }
      function validatePhone(phoneNumber) {
        if (phoneNumber.id === "phone") {
          let RegExpName =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
          if (phoneNumber.value === "") {
            inValidField(phoneNumber);
            statusForm++;
            massage(`Поле <span>телефон </span> не 
              може бути порожнім!`);
          
          } else if (!RegExpName.test(phoneNumber.value)) {
            inValidField(phoneNumber);
            statusForm++;
            massage(`Поле телефон некоректні символи!`);
        
          } else {
            validField(phoneNumber);
            statusForm = 0;
          }
        }
      }
      function validateEmail(mail) {
        if (mail.id === "count") {
          let RegExpName = /[0-9]/i;
          if (mail.value === "") {
            inValidField(mail);
            statusForm++;
            massage(`Поле <span>кількість товару </span> не 
              може бути порожнім!`);
      
          } else if (!RegExpName.test(mail.value)) {
            inValidField(mail);
            statusForm++;
            massage(`Поле <span>кількість товару <span>некоректні символи</span>!`);
          } else {
            validField(mail);
            statusForm = 0;
          }
        }
      }
  }
    
    
    export default SendFormData;
    /* const form = document.querySelector(".form");
    const inputFields = form.getElementsByClassName("form-control");
    
    for (const item of inputFields) {
      item.addEventListener("blur", (event) => {
        validateForm(event);
      });
    }
    
    const setError = (element, message) => {
      const errorSection = element.parentElement.querySelector(".error");
      errorSection.innerText = message;
      element.classList.add("invalid");
      element.classList.remove("valid");
    };
    
    const setValid = (element) => {
      const errorSection = element.parentElement.querySelector(".error");
      errorSection.innerText = "";
      element.classList.remove("invalid");
      element.classList.add("valid");
    };
    
    const validateEmail = (email) => {
      const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    
      if (email.value === "") {
        setError(email, "Email is required");
      } else if (!regex.test(email.value)) {
        setError(email, "Email is incorrect");
      } else {
        setValid(email);
      }
    };
    
    const validatePassword = (password) => {
      const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
      if (password.value === "") {
        setError(password, "Password is required");
      } else if (!regex.test(password.value)) {
        setError(
          password,
          "Password must contain at least 8 symbols, one digit and one special character"
        );
      } else {
        setValid(password);
      }
    };
    
    const validatePasswordConfirm = (passwordConfirm) => {
      if (passwordConfirm.value === "") {
        setError(passwordConfirm, "Confirmation password is required");
      } else if (passwordConfirm.value !== password.value) {
        setError(passwordConfirm, "Password doesn't match!");
      } else {
        setValid(passwordConfirm);
      }
    };
    
    const validateForm = (event) => {
      switch (event.target.id) {
        case "email":
          validateEmail(event.target);
          break;
        case "password":
          validatePassword(event.target);
          break;
        case "passwordConfirm":
          validatePasswordConfirm(event.target);
          break;
        default:
          alert("Validation error!");
      }
    }; */
    