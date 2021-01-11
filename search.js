const api =
  'https://api.edamam.com/search?q=vege&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api2 =
  'https://api.edamam.com/search?q=veggie&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api2)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api3 =
  'https://api.edamam.com/search?q=vegetable&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api3)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api4 =
  'https://api.edamam.com/search?q=pork&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api4)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api5 =
  'https://api.edamam.com/search?q=bacon&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api5)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api7 =
  'https://api.edamam.com/search?q=desert&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api7)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api8 =
  'https://api.edamam.com/search?q=dessert&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api8)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api9 =
  'https://api.edamam.com/search?q=tuna&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api9)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api10 =
  'https://api.edamam.com/search?q=lobster&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api10)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api11 =
  'https://api.edamam.com/search?q=seafood&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api11)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api12 =
  'https://api.edamam.com/search?q=steak&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api12)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api13 =
  'https://api.edamam.com/search?q=jerky&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api13)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api14 =
  'https://api.edamam.com/search?q=pinoy&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api14)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api15 =
  'https://api.edamam.com/search?q=filipino&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api15)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api16 =
  'https://api.edamam.com/search?q=green&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api16)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api17 =
  'https://api.edamam.com/search?q=red&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api17)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api18 =
  'https://api.edamam.com/search?q=all&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api19)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api19 =
  'https://api.edamam.com/search?q=mix&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api19)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });

const api20 =
  'https://api.edamam.com/search?q=fish&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8';

fetch(api20)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const searchpick = document.getElementById('searchpick');
      const searchbox = document.createElement('div');
      searchbox.classList.add('searchbox');
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
      const rateme = document.createElement('h4');
      rateme.classList.add('rateme');
      rateme.innerHTML = 'Rate Me :)';
      const starwidget = document.createElement('div');
      starwidget.classList.add('starwidget');

      const star5 = document.createElement('input');
      star5.setAttribute('type', 'radio');
      star5.classList.add('star5');
      const label5 = document.createElement('LABEL');
      label5.classList.add('fas');
      label5.classList.add('fa-star');

      const star4 = document.createElement('input');
      star4.setAttribute('type', 'radio');
      star4.classList.add('star4');
      const label4 = document.createElement('LABEL');
      label4.classList.add('fas');
      label4.classList.add('fa-star');

      const star3 = document.createElement('input');
      star3.setAttribute('type', 'radio');
      star3.classList.add('star3');
      const label3 = document.createElement('LABEL');
      label3.classList.add('fas');
      label3.classList.add('fa-star');

      const star2 = document.createElement('input');
      star2.setAttribute('type', 'radio');
      star2.classList.add('star2');
      const label2 = document.createElement('LABEL');
      label2.classList.add('fas');
      label2.classList.add('fa-star');

      const star1 = document.createElement('input');
      star1.setAttribute('type', 'radio');
      star1.classList.add('star1');
      const label1 = document.createElement('LABEL');
      label1.classList.add('fas');
      label1.classList.add('fa-star');

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
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      searchbox.appendChild(recipetitle);
      searchbox.appendChild(image);
      searchbox.appendChild(button);
      searchpick.appendChild(searchbox);
      searchpick.appendChild(modal);
    }
  });
