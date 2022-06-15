let nameChar1=["","","","","b","br","c","ch","d","fr","g","gr","j","k","m","n","p","q","r","t","x","z"];
let nameChar2=["u","u","u","u","u","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","ai","ay","ei","eo","ia","ie","oi"];
let nameChar3=["d","ddr","dr","g","gh","k","lb","ldr","lr","lzr","m","mb","mm","mr","n","nd","ndr","nn","r","rd","rg","rr","rs","rv","s","t","th","v","vr","z","zz"];
let nameChar4=["cr","d","n","nt","r","rr","sd"];
let nameChar5=["","","d","g","m","n","nth","r","rth","s","ss","t"];
let nameChar6=["","","","","","","b","c","ch","d","f","fr","g","h","l","m","n","p","q","r","s","sh","t","v","z"];
let nameChar7=["u","u","u","u","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","ae","ai","ay","ei","eo","ie","io","oa"];
let nameChar8=["d","dh","g","gh","k","ldr","ll","m","mm","mr","n","nd","ndr","nn","p","ph","r","rg","rl","rm","rr","rs","rv","s","ss","t","th","v","vn","z","zz"];
let nameChar9=["d","l","n","nt","ph","r","rr","ss"];
let nameChar10=["","","","","","l","lth","n","nth","r","rth","s","ss","t","th"];
let nameChar11=["","","","","b","c","ch","d","fr","g","m","n","p","q","r","s","t","v","x","z"];
let nameChar12=["u","u","u","u","a","e","i","o","y","ae","ai","ay","ei","eo","ia","ie","io","oa","oi"];
let nameChar13=["d","dh","dr","g","gh","k","l","ldr","ll","lr","m","mm","mr","n","nd","ndr","nn","p","ph","r","rl","rm","rr","rs","rv","s","ss","t","th","v","vn","vr","z","zz"];
let nameChar14=["d","l","n","nt","ph","r","rr","ss"];
let nameChar15=["","","","d","g","l","lth","n","nth","r","rth","s","ss","t","th"];
let nameDescriptor16=['the Nocturnal','the Protective','the Clever','the Bright','the Dark','the Dark One','the Dark','the Eternal','the Firestarter','the Eternal One','the Calm','the Gentle','the Redeemer','the Champion','the Evil One','the Chosen','the Great','the Kind','the Fierce','the Strong','the Tyrant','the Dragonlord','the Warrior','the Barbarian','the Tall','the Magnificent','the Clean','the Adorable','the Gifted','the Tender','the Powerful One','the Gifted One','the Powerful','the Black','the White','the White One','the Careful','the Clumsy One','the Grumpy','the Jealous One','the Mysterious','the Mysterious One','the Scary','the Scary One','the Brave','the Victorious','the Skinny One','the Mammoth','the Puny','the Quiet','the Voiceless','the Loud','the Voiceless One','the Fast One','the Swift','the Young One','the Youngling','the Slow','the Creep','the Warm','Warmheart','Braveheart','Gentleheart','the Strong Minded','the Stubborn','Firebreath','Icebreath','the Squeeler','Champion of Dragons','Eternal Fire','Gentle Mind','Longtail','Redeemer of Men','Protector of the Weak','Protector of the Forest','Protector of the Sky','Lord of the Skies','Champion of the Skies','Champion of Men','Lord of Fire','Lord of Ice','Lord of the Red','Lord of the Black','Lord of the White','Lord of the Blue','Lord of the Green','Lord of the Yellow','Lord of the Brown','Champion of the Red','Champion of the White','Champion of the Black','Champion of the Blue','Champion of the Yellow','Champion of the Brown','Champion of the Green','Protector of Creatures','Protector of Life','Giver of Life','Bringer of Death','the Deathlord','the Dead','Destroyer of Life','Destroyer of Men','Eater of Sheep','Eater of All','the Hungry','Eater of Bunnies','the Bunny Killer','the Rabbit Slayer','the Taker of Life','the Insane','the Life Giver'];
let nameDescriptor17=['the Nocturnal','the Protective','the Clever','the Bright','the Dark','the Dark One','the Dark','the Eternal','the Firestarter','the Eternal One','the Calm','the Gentle','the Redeemer','the Champion','the Evil One','the Chosen','the Great','the Kind','the Fierce','the Strong','the Dragonlady','the Warrior','the Barbarian','the Tall','the Magnificent','the Clean','the Adorable','the Gifted','the Tender','the Powerful One','the Gifted One','the Powerful','the Black','the White','the White One','the Careful','the Clumsy One','the Grumpy','the Jealous One','the Mysterious','the Mysterious One','the Scary','the Scary One','the Brave','the Victorious','the Skinny One','the Mammoth','the Puny','the Quiet','the Voiceless','the Loud','the Voiceless One','the Fast One','the Swift','the Young One','the Youngling','the Slow','the Creep','the Warm','Warmheart','Braveheart','Gentleheart','the Strong Minded','the Stubborn','Firebreath','Icebreath','the Squeeler','Champion of Dragons','Eternal Fire','Gentle Mind','Longtail','Redeemer of Men','Protector of the Weak','Protector of the Forest','Protector of the Sky','Lady of the Skies','Champion of the Skies','Champion of Men','Lady of Fire','Lady of Ice','Lady of the Red','Lady of the Black','Lady of the White','Lady of the Blue','Lady of the Green','Lady of the Yellow','Lady of the Brown','Champion of the Red','Champion of the White','Champion of the Black','Champion of the Blue','Champion of the Yellow','Champion of the Brown','Champion of the Green','Protector of Creatures','Protector of Life','Giver of Life','Bringer of Death','the Deathlady','the Dead','Destroyer of Life','Destroyer of Men','Eater of Sheep','Eater of All','the Hungry','Eater of Bunnies','the Bunny Killer','the Rabbit Slayer','the Taker of Life','the Insane','the Life Giver'];
let br="";

function nameGen(type){
    $('#placeholder').css('textTransform','capitalize');
    let tp=type;
    let element=document.createElement("div");
        element.setAttribute("id","result");
    for(i=0;i<10;i++){
        if(tp===1){
            rnd16=Math.random()*nameDescriptor17.length|0;rnd=Math.random()*nameChar6.length|0;
            rnd2=Math.random()*nameChar7.length|0;rnd3=Math.random()*nameChar8.length|0;
            rnd4=Math.random()*nameChar7.length|0;rnd5=Math.random()*nameChar10.length|0;
            while(nameChar6[rnd]===nameChar8[rnd3]){
                rnd3=Math.random()*nameChar8.length|0;
            }
            while(nameChar10[rnd5]===nameChar8[rnd3]){rnd5=Math.random()*nameChar10.length|0;
            }
            if(i<7){
                names=nameChar6[rnd]+nameChar7[rnd2]+nameChar8[rnd3]+nameChar7[rnd4]+nameChar10[rnd5]+", "+nameDescriptor17[rnd16];
            }else{
                rnd6=Math.random()*nameChar9.length|0;rnd7=Math.random()*nameChar7.length|0;while(nameChar9[rnd6]===nameChar8[rnd3]){
                    rnd6=Math.random()*nameChar9.length|0;
                }
                names=nameChar6[rnd]+nameChar7[rnd2]+nameChar8[rnd3]+nameChar7[rnd4]+nameChar9[rnd6]+nameChar7[rnd7]+nameChar10[rnd5]+", "+nameDescriptor17[rnd16];
            }
        }else if(tp===2){
            rnd16=Math.random()*nameDescriptor16.length|0;rnd=Math.random()*nameChar11.length|0;
            rnd2=Math.random()*nameChar12.length|0;rnd3=Math.random()*nameChar13.length|0;
            rnd4=Math.random()*nameChar12.length|0;rnd5=Math.random()*nameChar15.length|0;
            while(nameChar11[rnd]===nameChar13[rnd3]){
                rnd3=Math.random()*nameChar13.length|0;
            }
            while(nameChar15[rnd5]===nameChar13[rnd3]){
                rnd5=Math.random()*nameChar15.length|0;
            }
            if(i<7){
                names=nameChar11[rnd]+nameChar12[rnd2]+nameChar13[rnd3]+nameChar12[rnd4]+nameChar15[rnd5]+", "+nameDescriptor16[rnd16];
            }else{
                rnd6=Math.random()*nameChar14.length|0;rnd7=Math.random()*nameChar12.length|0;
                while(nameChar14[rnd6]===nameChar13[rnd3]){
                    rnd6=Math.random()*nameChar14.length|0;
                }
                names=nameChar11[rnd]+nameChar12[rnd2]+nameChar13[rnd3]+nameChar12[rnd4]+nameChar14[rnd6]+nameChar12[rnd7]+nameChar15[rnd5]+", "+nameDescriptor16[rnd16];
            }
        }else{
            rnd16=Math.random()*nameDescriptor16.length|0;rnd=Math.random()*nameChar1.length|0;
            rnd2=Math.random()*nameChar2.length|0;rnd3=Math.random()*nameChar3.length|0;
            rnd4=Math.random()*nameChar2.length|0;rnd5=Math.random()*nameChar5.length|0;
                while(nameChar1[rnd]===nameChar3[rnd3]){
                rnd3=Math.random()*nameChar3.length|0;
                }
                while(nameChar5[rnd5]===nameChar3[rnd3]){
                    rnd5=Math.random()*nameChar5.length|0;
                }
                if(i<7){
                    names=nameChar1[rnd]+nameChar2[rnd2]+nameChar3[rnd3]+nameChar2[rnd4]+nameChar5[rnd5]+", "+nameDescriptor16[rnd16];
                }else{
                    rnd6=Math.random()*nameChar4.length|0;rnd7=Math.random()*nameChar2.length|0;
                    while(nameChar4[rnd6]===nameChar3[rnd3]){
                        rnd6=Math.random()*nameChar4.length|0;
                    }
                    names=nameChar1[rnd]+nameChar2[rnd2]+nameChar3[rnd3]+nameChar2[rnd4]+nameChar4[rnd6]+nameChar2[rnd7]+nameChar5[rnd5]+", "+nameDescriptor16[rnd16];
                }
        }
        br=document.createElement('br');
        element.appendChild(document.createTextNode(names));
        element.appendChild(br);
        }
    if(document.getElementById("result")){
        document.getElementById("placeholder").removeChild(document.getElementById("result"));
    }
document.getElementById("placeholder").appendChild(element);
}