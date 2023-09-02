
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
  if (data.data.length > 0) {

    data.data?.forEach((videos) => {

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
      <small>${videos.authors[0].verified
          ? `<div>
          <img src="./fi_10629607.png" alt="">
            </div>`
          : ''
        }</small>
    
      
    </div>
      <div class="flex gap-10">
          
           <p>
             ${videos.others.views} views
           </p>
  
        <div class="  bg-white">
                 ${videos.others.posted_date} 
        </div>

       
    </div>
  </div> 
        
        `;

      cardContainer.appendChild(div);
    });
  } else {
    document.getElementById("not-foun-container").style.display = "block";


  }


};


const handleViews = () => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/${'1000'}`)
    .then((res) => res.json())
    .then((data) => {
      const videos = data.data;
      console.log(videos);


      videos.sort((a, b) => {

        const viewsA = parseInt(a.others.views);
        const viewsB = parseInt(b.others.views);
        return viewsB - viewsA;



      });

      console.log(videos);

      const cardContainer = document.getElementById("card-container");
      cardContainer.innerHTML = "";


      videos?.map((video) => {

        const div = document.createElement("div");
        div.innerHTML = `
       <div class="card bg-base-100 shadow-xl max-h-80 ">
      <figure>
        <img
          src=${video?.thumbnail}
          
        />
      </figure>
      <div class="card-body">
        
        <div class="card-footer flex justify-between ">
          <div class="flex gap-x-8">
            <div>
              <div class="avatar online">
                <div class="w-14 rounded-full">
                  <img
                    src=${video.authors[0].profile_picture}
                  />
                </div>
              </div>
            </div>
            <h2 class="card-title"> ${video?.title} </h2>
           
          </div>
                 
        </div>
  
        <div class = "flex text-center gap-2 " >
        <h6>${video.authors[0].profile_name}</h6>
        <small>${video.authors[0].verified
            ? `<div>
            <img src="./fi_10629607.png" alt="">
              </div>`
            : ''
          }</small>
      
        
      </div>
        
        <p>
        ${video.others.views} views
        </p>
        <p>
        ${video.others.posted_date} 
        </p>

         
      </div>
    </div> 
          
          `;

        cardContainer.appendChild(div);
      });



    });
};





loadAllCategory()
handleLoadNews("1000")








