//DOM from Buttons ,Boxes and Search
const buttons=document.querySelectorAll(".btn");
const boxes=document.querySelectorAll(".box");
const searchBox=document.querySelector("#search");
const aboutBtn=document.querySelector(".about");
//Search Filter
searchBox.addEventListener('keyup',(e)=>
{
    //trim function will remove Empty spaces from input
searching=e.target.value.toLowerCase().trim();

boxes.forEach((box)=>{
const data=box.dataset.item;
//includes function check whether the input is equal to the item it will check all charecters in a string
if(data.includes(searching))
{
    box.style.display="block";
}
else
{
    box.style.display="none";
}
});
buttons.forEach((button)=>
{
    button.classList.remove('btn-clicked');
});
buttons[0].classList.add('btn-clicked');
});



buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        //To set active page
        setActivebtn(e);
        const btnFilter=e.target.dataset.filter;
        
        boxes.forEach((box=>{
            if(btnFilter=='all')
            {
                box.style.display="block";
            }else{
                const boxFilter=box.dataset.item;
                if(btnFilter==boxFilter)
                {
                    box.style.display="block";
                }
                else{
                    box.style.display="none";
                }
            }
        }));
    });
});

function setActivebtn(e)
{
    buttons.forEach((button)=>
{
    button.classList.remove('btn-clicked');
});
e.target.classList.add('btn-clicked');
}
//About
aboutBtn.addEventListener('click',(e)=>{
    parent.location="about.html"
    window.location.href='./about.html';
});