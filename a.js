var alok = 0;

function ChangeColors(){
    var colors =["red","blue","orange","yelow","green","purple"];
    document.getElementsByTagName("body")[0].
    style.background =colors[alok++];

    if(alok > colors.length -1)
    alok =0;
}

