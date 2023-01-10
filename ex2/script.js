
      function checkForm() {
        let isValid = true;
        // Récupération de la valeur sélectionnée dans le champ de type radio
        const personType = document.querySelector(
          'input[name="personType"]:checked'
        ).value;

        // Vérification de la validité de chaque champ
        if(personType=="personne physique"){
            fields = document.querySelectorAll(".personne-physique");
            for (let i = 0; i < fields.length; i++) {
    
                if (!fields[i].checkValidity()) {
      
                  isValid = false;
                }
              }

            // Vérification de la validité du format du téléphone et de l'email
            const phone = document.querySelector('input[name="telephone"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const phoneRegex = /^\d{10}$/;
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!phoneRegex.test(phone) || !emailRegex.test(email)) {
            isValid = false;
        }
        }
        else{
            fields = document.querySelectorAll(".personne-morale");
            for (let i = 0; i < fields.length; i++) {
    
                if (!fields[i].checkValidity()) {
      
                  isValid = false;
                  console.log(fields[i]);
                }
              }
        }
       
        // Affichage d'un message d'erreur ou d'information selon la validité du formulaire
        const errorMessage = document.querySelector("#error-message");
        const successMessage = document.querySelector("#success-message");
        if (isValid) {
          errorMessage.style.display = "none";
          successMessage.style.display = "block";
        } else {
          errorMessage.style.display = "block";
          successMessage.style.display = "none";
        }

        return isValid;
      }

      
      function resetForm() {
        // Récupération de la valeur sélectionnée dans le champ de type radio
        const personType = document.querySelector(
            'input[name="personType"]:checked'
          ).value;
          
          var fields = null;
  
          if(personType=="personne physique"){
            fields = document.querySelectorAll(".personne-physique");
          }
          else{
             fields = document.querySelectorAll(".personne-morale");
          }
          for (let i = 0; i < fields.length; i++) {
            fields[i].value = "";
          }


        // Réinitialisation des messages d'erreur et d'information
        document.querySelector("#error-message").style.display = "none";
        document.querySelector("#success-message").style.display = "none";
      }

      function toggleForm() {
        // Récupération de la valeur sélectionnée dans le champ de type radio
        const personType = document.querySelector(
          'input[name="personType"]:checked'
        ).value;

        // Affichage/masquage des champs selon la valeur sélectionnée
        if (personType === "personne physique") {
          document.querySelector("#form-personne-physique").style.display =
            "block";
          document.querySelector("#form-personne-morale").style.display =
            "none";
        } else {
          document.querySelector("#form-personne-physique").style.display =
            "none";
          document.querySelector("#form-personne-morale").style.display =
            "block";
        }
      }