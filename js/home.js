let profilrName= document.getElementById('welcome-name')

let index= Number(localStorage.getItem('indexArrSignUp'));
let dataIndex = JSON.parse(localStorage.getItem('users'))

profilrName.innerHTML=`Welcome ${dataIndex[index].name}`;

function logOut(){
    location.href='index.html'
}


$('#closeBtn').click(function(){
  $('.main').animate({width:'0px',overflow:'hidden'},1000)
  // $('.container').animate({marginLeft:'0px'},1000)
})
$('#openBtn').click(function(){
  $('.main').animate({width:'250px',overflow:'auto'},1000)
  // $('.container').animate({marginLeft:'250px'},1000)

})

let datas=[];
let imgPath ="https://image.tmdb.org/t/p/w500/";


async function getMovies(media_type) {
  const response = await fetch(`https://api.themoviedb.org/3/trending/${media_type}/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
  const data = await response.json()
  datas=data.results;
  console.log(data)
  display()
  
}
getMovies('all')

$('.nav-link').click(function(e){
  e.preventDefault();
  let id=$(this).attr('href').trim();
  console.log(id)
  getMovies(id)
})
function display(){
  let cartonna =``;
  for(let i=0; i<datas.length;i++) {
    if(!datas[i].title){
      datas[i].title = datas[i].name;
      // console.log(title)
    }
    if(!datas[i].poster_path){
      datas[i].poster_path = datas[i].profile_path;
    }
    if(!datas[i].vote_average && !datas[i].vote_count){
      datas[i].vote_average = '';
      datas[i].vote_count = '';
      

    }

    cartonna += `<div class="col-md-4 ">
    <div class="card">
        <img src="https://image.tmdb.org/t/p/w500/${datas[i].poster_path}"
            class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title text-center text-uppercase">${datas[i].title}</h5>
          <p class="card-text overflow-hidden fs-4 pt-3">${datas[i].overview}</p>
          <div class="d-flex justify-content-between">
            <p id="vote" class="fs-4 text-success">${datas[i].vote_average} <span class=" text-warning vote fs-6">voteAvrg</span></p>
            <p class="fs-4  text-primary">${datas[i].vote_count} <span class=" text-warning fs-6">voteCount</span> </p>

          </div>
        </div>
    </div>
    </div>`;
    }
    document.getElementById('rowData').innerHTML = cartonna;

}

