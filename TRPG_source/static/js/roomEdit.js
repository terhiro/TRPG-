//与えられたclassを持つ最初の要素を返す
function getFirstElementByClass(node,className){
        var element = node.getElementsByClassName(className);
        element = element[0];
        return element;
}
//要素を複製して返す
function cloneElements(orgElement){
        cloneCount = cloneCount + 1;
        var cloneElement = orgElement.cloneNode(true);
        cloneElement.id = "clone" + cloneCount;
        return cloneElement;
}

window.onload = function onloads(){
        cloneCount = 0;
}

function textAreaHeightSet(argObj){

         argObj.style.height = "10px";
         var wSclollHeight = parseInt(argObj.scrollHeight);

         var wLineH = parseInt(argObj.style.lineHeight.replace(/px/, ''));

         if(wSclollHeight < (wLineH * 2)){wSclollHeight=(wLineH * 2);}

         argObj.style.height = wSclollHeight + "px";
}


