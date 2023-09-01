
const loadAllCategory = async () => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();
    const tabContainer = document.getElementById("tab-container");

    const allbutton = data.data;


    allbutton.forEach((buttons) => {
        const div = document.createElement("div");
        div.innerHTML = ` <button class="btn btn-active btn-neutral" onclick="handleLoadNews('${buttons.category_id}')" class="tab" > ${buttons.category}  </button>  `;
        tabContainer.appendChild(div);
    });
};






const handleLoadNews = async (categoryId) => {

    const response = await fetch(
        `https://openapi.programming-hero.com/api/videos/category/${categoryId} `
    );
    const data = await response.json();



    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    data.data?.forEach((videos) => {
        console.log(videos);
        const div = document.createElement("div");
        div.innerHTML = `
     <div class="card bg-base-100 shadow-xl max-h-80 ">
    <figure>
      <img
        src=${videos?.thumbnail}
        
      />
    </figure>
    <div class="card-body">
      
      <div class="card-footer flex justify-between ">
        <div class="flex gap-x-8">
          <div>
            <div class="avatar online">
              <div class="w-14 rounded-full">
                <img
                  src=${videos.authors[0].profile_picture}
                />
              </div>
            </div>
          </div>
          <h2 class="card-title"> ${videos?.title} </h2>
         
        </div>
               
      </div>

      <div class = "flex text-center gap-2 " >
      <h6>${videos.authors[0].profile_name}</h6>
      <small>${videos.authors[0].verified}</small>
    </div>
      
      <p>
      ${videos.others.views} views
      </p>
    </div>
  </div> 
        
        `;

        cardContainer.appendChild(div);
    });
};



loadAllCategory()
handleLoadNews("1000")








