var url="https://meme-api.com/gimme";

 

function putdata(titl,sourc,auth){

    let container=document.querySelector('.main');
    // creating div and add into contaainer
    let div_card=document.createElement('div');
    div_card.className="meme"
    container.appendChild(div_card); 
    
    let para=document.createElement('p');
    para.innerText=titl;
    para.className="title"
    div_card.appendChild(para);

    // creating image and add into div_card
    let img=document.createElement('img');
    img.src=sourc;
    img.className="meme-img"
    div_card.appendChild(img);

    let para1=document.createElement('p');
    para1.innerText=auth;
    para1.className="author"
    div_card.appendChild(para1);

}
async function get_meme(){
    try{
        let obj=await axios.get(url);
        console.log(obj);
        putdata(obj.data.title,obj.data.url,obj.data.author);
    }
    catch(e){
        console.log("error is ",e);
        putdata("Somthing Went Wrong plase try some time leter","Nointernet.jpg","Only-Friends")
    }
}
console.log("clicked");
let btn=document.querySelector("#get-meme");
btn.addEventListener("click",function(){
    console.log("clicked in btn");
    get_meme();
})

get_meme();