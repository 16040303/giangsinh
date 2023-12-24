function listen() {
    document.getElementById("ha").innerHTML=`
    <audio controls autoplay style="display: none">
        
        <source src="music.mp3.mp3" type="audio/mpeg">
      
      </audio>

     `
    document.getElementById("ha1").innerHTML=`
    <p id="text1"> クリスマス おめでとう!</p>
    <p id="text2"> Gửi bạn K.Hạnh của tớ,hôm nay là giáng sinh, <br>tớ thật sự rất vui khi được làm bạn với cậu
 ,đối với tớ cậu là một người khiến tớ cảm thấy muốn được trò chuyện hơn.</br> Cảm ơn cậu vì đã luôn cho tớ những lời khuyên cũng như giúp tớ nhìn thấy cuộc sống bằng một góc nhìn khác. Tớ thật sự cảm ơn cậu rất nhiều! </p>
    `
    document.getElementById("tree").innerHTML=`<img class="img" src="cay.png" alt="">`
    document.getElementById("ha2").innerHTML=`
    
    <p id="text3">Cậu hãy luôn vui vẻ và hạnh phúc nhé?</p>



   
    <a href="#" class="btn1" onclick="listen1()">Tớ đồng ý</a>
    <a href="#" class="btn2">Không</a>
    `
}
function listen1() {
    document.getElementById("vui").innerHTML=`
    <p>\r\n tớ biết cậu muốn như thế mà =))</p>
    `
}