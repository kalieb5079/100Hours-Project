var nm1=["","b","c","d","dr","f","h","j","k","l","m","n","r","s","t","th","tr"];
var nm2=["ai","ia","a","a","e","e","i","u","a","a","e","e","i","u","a","a","e","e","i","u","a","a","e","e","i","u"];
var nm3=["br","d","dh","dr","dw","g","l","ld","ll","lm","m","n","nt","r","rd","rr","rs","st","v"];
var nm4=["a","e","i"];
var nm5=["d","l","ll","n","ns"];
var nm6=["iu","ie","ia","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o"];
var nm7=["","l","n","nd","ns","rd","rn","s","v"];
var nm8=["","c","f","fl","kl","n","p","s","sh","st","t","th","tr","v"];
var nm9=["a","e","i"];
var nm10=["d","dr","l","lr","ll","llr","ln","n","nn","nd","r","rl","rr","rv","s","tr","v","vr"];
var nm11=["ia","ai","ie","e","i","e","i","e","i","e","i","e","i","e","i","e","i","a","a","a","a","e","i","e","i","e","i"];
var nm12=["n","nn","s","t","tt"];
var nm13=["ee","a","e","e","e","i","a","e","e","e","i","a","e","e","e","i"];
var nm14=["","","","","","","","","n","s","ss"];
var nm15=["","","","","b","c","d","g","h","l","p","r","s","sh","str","t","tr","v","y"];
var nm16=["ai","au","ie","ee","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm17=["dr","ff","k","l","m","n","nch","nn","nr","nt","ntr","r","rb","rdr","s","st","v","z","zl"];
var nm18=["a","e","i","o"];
var nm19=["d","k","l","ll","n","nr","r"];
var nm20=["ie","ia","ai","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i"];
var nm21=["","","","","d","l","ll","n","ng","r","rt","s","tt"];
var br="";

function nameGen(type){
    var tp=type;$('#placeholder').css('textTransform','capitalize');
    var element=document.createElement("div");element.setAttribute("id","result");
    
    for(i=0;i<10;i++){
        nameSur();
        
        while(nMs===""){
            nameSur();
        }
        names=nMs;
        
        if(tp===1){
            nameFem();
            while(nMs===""){
                nameFem();
            }
        }else{
            nameMas();
            while(nMs===""){nameMas();
            }
        }
        names=nMs+" "+names;br=document.createElement('br');element.appendChild(document.createTextNode(names));
        element.appendChild(br);
    }
    if(document.getElementById("result")){
        document.getElementById("placeholder").removeChild(document.getElementById("result"));
    }
    document.getElementById("placeholder").appendChild(element);
}

function nameMas(){
    nTp=Math.random()*7|0;
    rnd=Math.random()*nm1.length|0;
    rnd2=Math.random()*nm2.length|0;
    rnd3=Math.random()*nm7.length|0;
    
    if(nTp===0){
        while(nm1[rnd]===""){
            rnd=Math.random()*nm1.length|0;
        }
    while(nm1[rnd]===nm7[rnd3]||nm7[rnd3]===""){
        rnd3=Math.random()*nm7.length|0;
    }
    nMs=nm1[rnd]+nm2[rnd2]+nm7[rnd3];
    }else{
        rnd4=Math.random()*nm3.length|0;
        rnd5=Math.random()*nm4.length|0;
        
        while(nm3[rnd4]===nm1[rnd]||nm3[rnd4]===nm7[rnd3]){
            rnd4=Math.random()*nm3.length|0;
        }
        if(nTp<5){
            nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd4]+nm4[rnd5]+nm7[rnd3];
        }else{
            rnd6=Math.random()*nm5.length|0;
            rnd7=Math.random()*nm6.length|0;
            
            while(rnd7<3&&rnd2<2){
                rnd7=Math.random()*nm6.length|0;
            }
            while(nm3[rnd4]===nm5[rnd6]||nm5[rnd6]===nm7[rnd3]){
                rnd6=Math.random()*nm5.length|0;
            }
            nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd4]+nm4[rnd5]+nm5[rnd6]+nm6[rnd7]+nm7[rnd3];
        }
    }
//testSwear(nMs);
}

function nameFem(){
    nTp=Math.random()*7|0;
    rnd=Math.random()*nm8.length|0;
    rnd2=Math.random()*nm9.length|0;
    rnd5=Math.random()*nm14.length|0;
    
    if(nTp<2){
        while(nm8[rnd]===""){
            rnd=Math.random()*nm8.length|0;
        }
        while(nm8[rnd]===nm14[rnd5]||nm14[rnd5]===""){
            rnd5=Math.random()*nm14.length|0;
        }
        nMs=nm8[rnd]+nm9[rnd2]+nm14[rnd5];
    }else{
        rnd3=Math.random()*nm10.length|0;
        rnd4=Math.random()*nm11.length|0;
        
        while(nm10[rnd3]===nm8[rnd]||nm10[rnd3]===nm14[rnd5]){
            rnd3=Math.random()*nm10.length|0;
        }
        while(rnd2<3&&rnd4===0){
            rnd4=Math.random()*nm11.length|0;
        }
        if(nTp<6){
            nMs=nm8[rnd]+nm9[rnd2]+nm10[rnd3]+nm11[rnd4]+nm14[rnd5];
        }else{
            rnd6=Math.random()*nm13.length|0;
            rnd7=Math.random()*nm12.length|0;
            
            while(nm10[rnd3]===nm12[rnd7]||nm12[rnd7]===nm14[rnd5]){
                rnd7=Math.random()*nm12.length|0;
            }
            nMs=nm8[rnd]+nm9[rnd2]+nm10[rnd3]+nm11[rnd4]+nm12[rnd7]+nm13[rnd6]+nm14[rnd5];
        }
    }
//testSwear(nMs);
}

function nameSur(){
    nTp=Math.random()*7|0;
    rnd=Math.random()*nm15.length|0;
    rnd2=Math.random()*nm16.length|0;
    rnd3=Math.random()*nm21.length|0;
    
    if(nTp===0){
        while(nm15[rnd]===""){
            rnd=Math.random()*nm15.length|0;
        }
        while(nm15[rnd]===nm21[rnd3]||nm21[rnd3]===""){
            rnd3=Math.random()*nm21.length|0;
        }
        nMs=nm15[rnd]+nm16[rnd2]+nm21[rnd3];
    }else{
        rnd4=Math.random()*nm17.length|0;
        rnd5=Math.random()*nm18.length|0;
        
        while(nm17[rnd4]===nm15[rnd]||nm17[rnd4]===nm21[rnd3]){
            rnd4=Math.random()*nm17.length|0;
        }
        if(nTp<5){
            nMs=nm15[rnd]+nm16[rnd2]+nm17[rnd4]+nm18[rnd5]+nm21[rnd3];
        }else{
            rnd6=Math.random()*nm19.length|0;
            rnd7=Math.random()*nm20.length|0;
            
            while(rnd2<4&&rnd7<3){
                rnd7=Math.random()*nm20.length|0;
            }
            while(nm17[rnd4]===nm19[rnd6]||nm19[rnd6]===nm21[rnd3]){
                rnd6=Math.random()*nm19.length|0;
            }

            nMs=nm15[rnd]+nm16[rnd2]+nm17[rnd4]+nm18[rnd5]+nm19[rnd6]+nm20[rnd5]+nm21[rnd3];
        }
    }
//testSwear(nMs);
}