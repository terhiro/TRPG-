


window.onload = function(){
    displayData = 0
    setInterval("getDisplayData()", 1000);
}

//getDisplayDataにGETメソッドを送り、JSON形式の戻り値をdisplayDataに保持する。   
function getDisplayData(){
    var url = "/getDisplayData"
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4 && xhr.status ===200){
            displayData = JSON.parse(xhr.responseText)
        }
    }
}