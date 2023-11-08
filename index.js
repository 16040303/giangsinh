function listen() {
    document.getElementById("ha").innerHTML=`
    <audio controls autoplay style="display: none">
        
        <source src="music.mp3.mp3" type="audio/mpeg">
      
      </audio>
     `
    document.getElementById("ha1").innerHTML=`
    <p id="text1"> クリスマス おめでとう!</p>
    <p id="text2"> Gửi Tramy của anh, giáng sinh năm nay anh gặp được em, <br>anh thật sự rất yêu em,đối với anh em là một người khiến anh cảm thấy muốn được cạnh bên.</br> Cảm ơn em vì đã đem đến niềm vui cho anh trong khoảng thời gian ta bên nhau. Anh chỉ muốn nói là anh rất rất yêu em,liệu em có đồng ý làm người yêu anh không?</p>
    `
    document.getElementById("tree").innerHTML=`<img class="img" src="cay.png" alt="">`
    document.getElementById("ha2").innerHTML=`
    
    <p id="text3">Em bé có đồng ý cùng anh đi tiếp quãng đường sau này không?</p>



   
    <a href="#" class="btn1" onclick="listen1()">Em đồng ý</a>
    <a href="#" class="btn2">Không</a>
    `
}
function listen1() {
    document.getElementById("vui").innerHTML=`
    <p>\r\n Anh yêu em nhiều lắm, anh biết em sẽ đồng ý mà =))</p>
    `
}