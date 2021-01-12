const api =
  'https://api.edamam.com/search?q=crabs&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const seafoodpick = document.getElementById('seafoodpick');
      const seafoodbox = document.createElement('div');
      seafoodbox.classList.add('seafoodbox');
      const recipetitle = document.createElement('h1');
      recipetitle.classList.add('recipetitle');
      recipetitle.innerHTML = data.hits[i].recipe.label;
      const image = document.createElement('img');
      image.src = data.hits[i].recipe.image;
      const button = document.createElement('button');
      button.classList.add('btn-ingridients');
      button.innerHTML = 'ingredients';
      const modal = document.createElement('div');
      modal.classList.add('modalmain');
      const close = document.createElement('span');
      close.classList.add('close');
      close.innerHTML = '&times;';
      const popUp = document.createElement('div');
      popUp.classList.add('popUp');
      const ingredienthero1 = document.createElement('div');
      ingredienthero1.classList.add('ingredienthero1');
      const ingredientTitle = document.createElement('h1');
      ingredientTitle.classList.add('ingredientTitle');
      ingredientTitle.innerHTML = data.hits[i].recipe.label;
      const ingreImage = document.createElement('img');
      ingreImage.src = data.hits[i].recipe.image;

      const ingredienthero2 = document.createElement('div');
      ingredienthero2.classList.add('ingredienthero2');
      const ingreH1 = document.createElement('h1');
      ingreH1.classList.add('ingreH1');
      ingreH1.innerHTML = 'Ingredients';
      const unL = document.createElement('ul');

      for (let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++) {
        const list = document.createElement('LI');
        list.classList.add('list');
        console.log();
        list.innerText = data.hits[i].recipe.ingredientLines[j];
        unL.appendChild(list);
      }

      button.addEventListener('click', function () {
        modal.style.display = 'block';
      });
      close.addEventListener('click', function () {
        modal.style.display = 'none';
      });

      modal.appendChild(popUp);
      modal.appendChild(close);
      popUp.appendChild(ingredienthero1);
      popUp.appendChild(ingredienthero2);
      ingredienthero2.appendChild(ingreH1);
      ingredienthero2.appendChild(unL);
      ingredienthero1.appendChild(ingredientTitle);
      ingredienthero1.appendChild(ingreImage);

      seafoodbox.appendChild(recipetitle);
      seafoodbox.appendChild(image);
      seafoodbox.appendChild(button);
      seafoodpick.appendChild(seafoodbox);
      seafoodpick.appendChild(modal);
    }
  });

const api2 =
  'https://api.edamam.com/search?q=seafood&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api2)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const seafoodpick = document.getElementById('seafoodpick');
      const seafoodbox = document.createElement('div');
      seafoodbox.classList.add('seafoodbox');
      const recipetitle = document.createElement('h1');
      recipetitle.classList.add('recipetitle');
      recipetitle.innerHTML = data.hits[i].recipe.label;
      const image = document.createElement('img');
      image.src = data.hits[i].recipe.image;
      const button = document.createElement('button');
      button.classList.add('btn-ingridients');
      button.innerHTML = 'ingredients';
      const modal = document.createElement('div');
      modal.classList.add('modalmain');
      const close = document.createElement('span');
      close.classList.add('close');
      close.innerHTML = '&times;';
      const popUp = document.createElement('div');
      popUp.classList.add('popUp');
      const ingredienthero1 = document.createElement('div');
      ingredienthero1.classList.add('ingredienthero1');
      const ingredientTitle = document.createElement('h1');
      ingredientTitle.classList.add('ingredientTitle');
      ingredientTitle.innerHTML = data.hits[i].recipe.label;
      const ingreImage = document.createElement('img');
      ingreImage.src = data.hits[i].recipe.image;

      const ingredienthero2 = document.createElement('div');
      ingredienthero2.classList.add('ingredienthero2');
      const ingreH1 = document.createElement('h1');
      ingreH1.classList.add('ingreH1');
      ingreH1.innerHTML = 'Ingredients';
      const unL = document.createElement('ul');

      for (let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++) {
        const list = document.createElement('LI');
        list.classList.add('list');
        console.log();
        list.innerText = data.hits[i].recipe.ingredientLines[j];
        unL.appendChild(list);
      }

      button.addEventListener('click', function () {
        modal.style.display = 'block';
      });
      close.addEventListener('click', function () {
        modal.style.display = 'none';
      });

      modal.appendChild(popUp);
      modal.appendChild(close);
      popUp.appendChild(ingredienthero1);
      popUp.appendChild(ingredienthero2);
      ingredienthero2.appendChild(ingreH1);
      ingredienthero2.appendChild(unL);
      ingredienthero1.appendChild(ingredientTitle);
      ingredienthero1.appendChild(ingreImage);

      seafoodbox.appendChild(recipetitle);
      seafoodbox.appendChild(image);
      seafoodbox.appendChild(button);
      seafoodpick.appendChild(seafoodbox);
      seafoodpick.appendChild(modal);
    }
  });

const api3 =
  'https://api.edamam.com/search?q=fish&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api3)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const seafoodpick = document.getElementById('seafoodpick');
      const seafoodbox = document.createElement('div');
      seafoodbox.classList.add('seafoodbox');
      const recipetitle = document.createElement('h1');
      recipetitle.classList.add('recipetitle');
      recipetitle.innerHTML = data.hits[i].recipe.label;
      const image = document.createElement('img');
      image.src = data.hits[i].recipe.image;
      const button = document.createElement('button');
      button.classList.add('btn-ingridients');
      button.innerHTML = 'ingredients';
      const modal = document.createElement('div');
      modal.classList.add('modalmain');
      const close = document.createElement('span');
      close.classList.add('close');
      close.innerHTML = '&times;';
      const popUp = document.createElement('div');
      popUp.classList.add('popUp');
      const ingredienthero1 = document.createElement('div');
      ingredienthero1.classList.add('ingredienthero1');
      const ingredientTitle = document.createElement('h1');
      ingredientTitle.classList.add('ingredientTitle');
      ingredientTitle.innerHTML = data.hits[i].recipe.label;
      const ingreImage = document.createElement('img');
      ingreImage.src = data.hits[i].recipe.image;

      const ingredienthero2 = document.createElement('div');
      ingredienthero2.classList.add('ingredienthero2');
      const ingreH1 = document.createElement('h1');
      ingreH1.classList.add('ingreH1');
      ingreH1.innerHTML = 'Ingredients';
      const unL = document.createElement('ul');

      for (let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++) {
        const list = document.createElement('LI');
        list.classList.add('list');
        console.log();
        list.innerText = data.hits[i].recipe.ingredientLines[j];
        unL.appendChild(list);
      }

      button.addEventListener('click', function () {
        modal.style.display = 'block';
      });
      close.addEventListener('click', function () {
        modal.style.display = 'none';
      });

      modal.appendChild(popUp);
      modal.appendChild(close);
      popUp.appendChild(ingredienthero1);
      popUp.appendChild(ingredienthero2);
      ingredienthero2.appendChild(ingreH1);
      ingredienthero2.appendChild(unL);
      ingredienthero1.appendChild(ingredientTitle);
      ingredienthero1.appendChild(ingreImage);

      seafoodbox.appendChild(recipetitle);
      seafoodbox.appendChild(image);
      seafoodbox.appendChild(button);
      seafoodpick.appendChild(seafoodbox);
      seafoodpick.appendChild(modal);
    }
  });

const api4 =
  'https://api.edamam.com/search?q=tuna&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api4)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const seafoodpick = document.getElementById('seafoodpick');
      const seafoodbox = document.createElement('div');
      seafoodbox.classList.add('seafoodbox');
      const recipetitle = document.createElement('h1');
      recipetitle.classList.add('recipetitle');
      recipetitle.innerHTML = data.hits[i].recipe.label;
      const image = document.createElement('img');
      image.src = data.hits[i].recipe.image;
      const button = document.createElement('button');
      button.classList.add('btn-ingridients');
      button.innerHTML = 'ingredients';
      const modal = document.createElement('div');
      modal.classList.add('modalmain');
      const close = document.createElement('span');
      close.classList.add('close');
      close.innerHTML = '&times;';
      const popUp = document.createElement('div');
      popUp.classList.add('popUp');
      const ingredienthero1 = document.createElement('div');
      ingredienthero1.classList.add('ingredienthero1');
      const ingredientTitle = document.createElement('h1');
      ingredientTitle.classList.add('ingredientTitle');
      ingredientTitle.innerHTML = data.hits[i].recipe.label;
      const ingreImage = document.createElement('img');
      ingreImage.src = data.hits[i].recipe.image;

      const ingredienthero2 = document.createElement('div');
      ingredienthero2.classList.add('ingredienthero2');
      const ingreH1 = document.createElement('h1');
      ingreH1.classList.add('ingreH1');
      ingreH1.innerHTML = 'Ingredients';
      const unL = document.createElement('ul');

      for (let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++) {
        const list = document.createElement('LI');
        list.classList.add('list');
        console.log();
        list.innerText = data.hits[i].recipe.ingredientLines[j];
        unL.appendChild(list);
      }

      button.addEventListener('click', function () {
        modal.style.display = 'block';
      });
      close.addEventListener('click', function () {
        modal.style.display = 'none';
      });

      modal.appendChild(popUp);
      modal.appendChild(close);
      popUp.appendChild(ingredienthero1);
      popUp.appendChild(ingredienthero2);
      ingredienthero2.appendChild(ingreH1);
      ingredienthero2.appendChild(unL);
      ingredienthero1.appendChild(ingredientTitle);
      ingredienthero1.appendChild(ingreImage);

      seafoodbox.appendChild(recipetitle);
      seafoodbox.appendChild(image);
      seafoodbox.appendChild(button);
      seafoodpick.appendChild(seafoodbox);
      seafoodpick.appendChild(modal);
    }
  });

const api5 =
  'https://api.edamam.com/search?q=lobster&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api5)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const seafoodpick = document.getElementById('seafoodpick');
      const seafoodbox = document.createElement('div');
      seafoodbox.classList.add('seafoodbox');
      const recipetitle = document.createElement('h1');
      recipetitle.classList.add('recipetitle');
      recipetitle.innerHTML = data.hits[i].recipe.label;
      const image = document.createElement('img');
      image.src = data.hits[i].recipe.image;
      const button = document.createElement('button');
      button.classList.add('btn-ingridients');
      button.innerHTML = 'ingredients';
      const modal = document.createElement('div');
      modal.classList.add('modalmain');
      const close = document.createElement('span');
      close.classList.add('close');
      close.innerHTML = '&times;';
      const popUp = document.createElement('div');
      popUp.classList.add('popUp');
      const ingredienthero1 = document.createElement('div');
      ingredienthero1.classList.add('ingredienthero1');
      const ingredientTitle = document.createElement('h1');
      ingredientTitle.classList.add('ingredientTitle');
      ingredientTitle.innerHTML = data.hits[i].recipe.label;
      const ingreImage = document.createElement('img');
      ingreImage.src = data.hits[i].recipe.image;

      const ingredienthero2 = document.createElement('div');
      ingredienthero2.classList.add('ingredienthero2');
      const ingreH1 = document.createElement('h1');
      ingreH1.classList.add('ingreH1');
      ingreH1.innerHTML = 'Ingredients';
      const unL = document.createElement('ul');

      for (let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++) {
        const list = document.createElement('LI');
        list.classList.add('list');
        console.log();
        list.innerText = data.hits[i].recipe.ingredientLines[j];
        unL.appendChild(list);
      }

      button.addEventListener('click', function () {
        modal.style.display = 'block';
      });
      close.addEventListener('click', function () {
        modal.style.display = 'none';
      });

      modal.appendChild(popUp);
      modal.appendChild(close);
      popUp.appendChild(ingredienthero1);
      popUp.appendChild(ingredienthero2);
      ingredienthero2.appendChild(ingreH1);
      ingredienthero2.appendChild(unL);
      ingredienthero1.appendChild(ingredientTitle);
      ingredienthero1.appendChild(ingreImage);

      seafoodbox.appendChild(recipetitle);
      seafoodbox.appendChild(image);
      seafoodbox.appendChild(button);
      seafoodpick.appendChild(seafoodbox);
      seafoodpick.appendChild(modal);
    }
  });
