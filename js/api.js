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
        tab.innerHTML = `<a id="btn" onclick="handelLoadVideo('${catagory.category_id}')" class=" tab bg-red-500 text-white rounded justify-center text-center">${catagory.category}</a>`
        tabContainer.appendChild(tab);
    });
}
 loadVdo();

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
    

 }