function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + min);
}

function restoArrayMake(dataArray) {
  // console.log('fired dataHandler');
  // console.table(dataArray); // this is called "dot notation"
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const restNum = getRandomIntInclusive(0, dataArray.length - 1);
    return dataArray[restNum];
  });

  // console.log(listItems);
  return listItems;
}

function createHtmlList(collection) {
  // console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.resto-list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const { name } = item;
    const displayName = name.toLowerCase();
    const injectThisItem = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

async function mainEvent() {
  // the async keyword means we can make API requests
  console.log(document.querySelector('.main_form'));
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('.submit_button');
  const resto = document.querySelector('#restaurant_name');
  const type = document.querySelector('#food_type');
  submit.style.display = 'none';

  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  // console.log(arrayFromJson);

  if (arrayFromJson.data.length > 0) {
    submit.style.display = 'block';

    let currentArray = [];
    resto.addEventListener('input', async (event) => {
      console.log(event.target.value);
      if (currentArray.length < 1) {
        return;
      }
    })

    let currentArray1 = [];
    type.addEventListener('input', async (event1) => {
        console.log(event1.target.value);
        if (currentArray1.length < 1) {
          return;
        }
      })

      const selectResto = currentArray.filter((item) => {
        const lowerName = item.name.toLowerCase();
        const lowerValue = event.target.value.toLowerCase();
        return lowerName.includes(lowerValue);
      });

      const selectType = currentArray1.filter((item) => {
        const lowerName1 = item.name.toLowerCase();
        const lowerValue1 = event1.target.value.toLowerCase();
        return lowerName1.includes(lowerValue1);
      });

      console.log(selectResto);
      createHtmlList(selectResto);
      console.log(selectType);
      createHtmlList(selectType);
    };

    form.addEventListener('submit', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      // console.log('form submission'); // this is substituting for a "breakpoint"
      // arrayFromJson.data - we're accessing a key called 'data' on the returned object
      // it contains all 1,000 records we need
      currentArray = restoArrayMake(arrayFromJson.data);
      console.log(currentArray);
      createHtmlList(currentArray);

      currentArray1 = restoArrayMake(arrayFromJson.data);
      console.log(currentArray1);
      createHtmlList(currentArray1);
    });
  }
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
