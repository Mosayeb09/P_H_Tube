const loadVdo = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const video = data.data;
    // console.log(video)
    // const tabContainer =document.getElementById('video-Cat');
    // video.forEach((cat) => {
    //     const tab = document.createElement("div");
    //     tab.innerHTML=`<a id="btn" class=" tab bg-red-500 text-white justify-center  text-center">${cat.category}</a> `
    //     tabContainer.appendChild(tab);
        
    // });
    const tabContainer = document.getElementById('video-Cat');
    data.data.forEach((catagory) => {
        const tab = document.createElement('div');
        tab.innerHTML = `<a id="btn" onclick="videoHandle('${catagory.category_id}')" class=" tab bg-red-500 text-white rounded justify-center text-center">${catagory.category}</a>`
        tabContainer.appendChild(tab);
    });
}
const secoundToTime = (secound) => {
    const hr = Math.floor(secound / 3600);
    const min = Math.floor((secound - (hr * 3600)) / 60);
    return `${hr} hrs ${min} min ago`;
}


const videoHandle = async (id) => {

    const res = await fetch( `https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    const video = data.data;

    if (video.length == 0){
        const videoContainer = document.getElementById("data-Container");
        videoContainer.innerHTML=" ";

        const videoDiv = document.createElement("div");
        videoDiv.innerHTML=` <div class ="w-full h-screenl" >
        <img src="./Images/Icon.png" alt="" srcset="">
        <div class="text-4xl font-bold">Oops!!Sorry,There is no content here</div>
        </div>`
        videoContainer.appendChild(videoDiv);
        return;
       

    }
    const dataLoad = document.getElementById("data-Container");
    dataLoad.innerHTML= "";
    video.forEach((video) => {
        const publishedDate = video.others?.posted_date;
        const videoDiv = document.createElement('div');
        videoDiv.innerHTML = `
        <div class="card lg:w-96 lg:h-96 bg-base-100 shadow-xl">
        <figure class="relative">
        <img class="w-full" src="${video?.thumbnail}"/>
            ${publishedDate ? `<div class="badge badge-neutral bg-black absolute text-sm text-white bottom-3 right-3"> ${secoundToTime(publishedDate)}</div>` : ``}
        </figure>
        <div class="card-body">
            <div class="flex gap-4">
                <div class="avatar">
                    <div class="w-10 rounded-full">
                        <img src="${video?.authors[0]?.profile_picture}" />
                    </div>
                </div>
                <h2 class="card-title">
                    ${video?.title}
                </h2>
            </div>
            <div class="card-actions ml-14">
                <p class="text-black text-sm">${video.authors[0]?.profile_name}</p> 

                <!-- check verifed accout  -->
                ${video.authors[0].verified ? `<img width="24" height="24"
                src="https://img.icons8.com/color/48/verified-account--v1.png" alt="verified-account--v1" />` : ``}           
                </div>
                <P id="Vdoviews" class="text-black text-sm ml-14">${video?.others?.views} views</P>
    
        </div>
    </div>
        `
        dataLoad.appendChild(videoDiv);
    });
    
    
    

 }
 loadVdo();
 handelLoadVideo("1000");