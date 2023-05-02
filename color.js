class Color{
    constructor(){
        this.color1=document.getElementById("couleur1");
        this.color1.addEventListener("click",()=>{
        this.select_color("couleur1");


        });

        this.color2=document.getElementById("couleur2");
        this.color2.addEventListener("click",()=>{
        this.select_color("couleur2");

        });

        this.color3=document.getElementById("couleur3");
        this.color3.addEventListener("click",()=>{
        this.select_color("couleur3");

        });

        this.color4=document.getElementById("couleur4");
        this.color4.addEventListener("click",()=>{
        this.select_color("couleur4");

        });

        if(localStorage.getItem("COLOR")==null){
            document.body.style.background="lightgreen";
        }
        this.select_color(localStorage.getItem("COLOR"));
    
    }

    select_color(color){

        if(color=="couleur1"){
            document.body.style.background="rgb(0, 132, 255)";
        }else if(color=="couleur2"){
            document.body.style.background="lightgreen";
        }else if(color=="couleur3"){
            document.body.style.background="lightskyblue";
        }else if(color=="couleur4"){
            document.body.style.background="lightpink";
        }

        localStorage.setItem("COLOR",color);

    }
}


onload=new Color();