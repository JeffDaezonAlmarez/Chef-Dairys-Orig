

const api = "http://localhost:8080/api/recipes";

fetch(api)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
        for (let i = 0; i <data.data.length; i++) {
            const sharepick = document.getElementById('sharepick');
            const sharebox = document.createElement('div');
            sharebox.classList.add('sharebox');
            const recipetitle = document.createElement('h1');
            recipetitle.classList.add('recipetitle');
            recipetitle.innerHTML = data.data[i].recipeName;
            const image = document.createElement('img');
            image.src = data.data[i].image;
            const shareTitle = document.createElement('h2');
            shareTitle.classList.add('shareTitle');
            shareTitle.innerHTML = 'ingredients'
            const recipeList = document.createElement('h4')
            recipeList.classList.add('recipeList')
            recipeList.innerHTML = data.data[i].ingredients;
            const btnBox = document.createElement('div')
            btnBox.classList.add('btnBox')
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.innerHTML = 'Delete';

            const api2 = "http://localhost:8080/api/recipe"
            fetch (api2)
            .then((resp) => resp.json())
            .then((data) =>{
                console.log(data);
                for (let i = 0; i <data.data.length; i++) {
                    deleteBtn.addEventListener( 'click', function deleteBtn(){
                        alert("Are you sure?")
                        delete(deleteBtn);
                        // _id.value="";
                        //  recipeName.value="";
                        //  image.value="";
                        //  ingredients.value="";
                    
                    });
                }
            })
            
           
           
            const updateBtn = document.createElement('button')
            updateBtn.classList.add('updateBtn');
            updateBtn.innerHTML = 'Update';
            console.log();
        
            sharebox.appendChild(recipetitle);
            sharebox.appendChild(image);
            sharebox.appendChild(shareTitle)
            sharebox.appendChild(recipeList);
            sharebox.appendChild(btnBox);
            btnBox.appendChild(deleteBtn);
            btnBox.appendChild(updateBtn);
            sharepick.appendChild(sharebox);
        }
    });
    
   
   