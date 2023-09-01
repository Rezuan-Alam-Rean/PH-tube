
const loadAllCategory = async () => {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();
    const tabContainer = document.getElementById("tab-container");

    const alldatas = data.data ;

    console.log(alldatas);
        alldatas.forEach((buttons) => {
            const div = document.createElement("div");
            div.innerHTML = `  <a class="tab"> ${buttons.category} </a> `;
              tabContainer.appendChild(div);
            });
          };

    




loadAllCategory()









// const loadAllCategory = async () => {
//     const response = await fetch(
//       "https://openapi.programming-hero.com/api/news/categories"
//     );
//     const data = await response.json();
//     const tabContainer = document.getElementById("tab-container");
  
//     // const tab = data
//     console.log(data.data.news_category.slice(0, 3));
//     const sliceData = data.data.news_category.slice(0, 3);
  
//     sliceData.forEach((category) => {
//       const div = document.createElement("div");
//       div.innerHTML = `<h5 onclick="loadNewsByCategoryId(${
//         category.category_id
//       })" class="tab text-blue-600">${category.category_name.split(" ")[0]}</h5>`;
//       tabContainer.appendChild(div);
//     });
//   };