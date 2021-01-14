const api = "http://localhost:8080/api/recipe";

fetch(api)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
        for (let i = 0; i <data.recipes.length; i++) {
            const sharepick = document.getElementById('sharepick');
            const sharebox = document.createElement('div');
            sharebox.classList.add('sharebox');
            const recipetitle = document.createElement('h1');
            recipetitle.classList.add('recipetitle');
            recipetitle.innerHTML = data.recipes[i].recipeName;
            const image = document.createElement('img');
            image.src = data.recipes[i].image;
            const recipeList = document.createElement('h4')
            recipeList.classList.add('recipeList')
            recipeList.innerHTML = data.recipes[i].ingredients;
            console.log();
        
            sharebox.appendChild(recipetitle);
            sharebox.appendChild(image);
            sharebox.appendChild(recipeList)
            sharepick.appendChild(sharebox);
        }
