player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1score=0
player2score=0

document.getElementById("player1").innerHTML=player1name+" : "
document.getElementById("player2").innerHTML=player2name+" : "
document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score

document.getElementById("playerquestion").innerHTML="question turn-"+player1name;
document.getElementById("playeranswer").innerHTML="answer turn-"+player2name;

function send()
{
    get_word=document.getElementById("word").value
    word=get_word.toLowerCase()

    l1=word.charAt(1)
    len=Math.floor(word.length/2)
    l2=word.charAt(len)
    minus=word.length-1
    l3=word.charAt(minus)

    remove1=word.replace(l1,"_")
    remove2=remove1.replace(l2,"_")
    remove3=remove2.replace(l3,"_")

    question="<h4 id='display'>Q."+remove3+"</h4>";
    input="<br>  Answer:<input type='text'id='input'>";
    checkbutton="<br> <br> <button class='btn btn-info',onclick='check()'>check</button>";
    row=question+input+checkbutton
    document.getElementById("output").innerHTML=row

}
question_turn="player1"
answer_turn="player2"
function check()
{
    get_answer=document.getElementById("input").value
    answer=get_answer.toLowerCase()

    if(answer==word)
    {
        if(answer_turn=="player1")
        {
            player1score=player1score+1
            document.getElementById("player1score").innerHTML=player1score
        }
        else
        {
            player2score=player2score+1
            document.getElementById("player2score").innerHTML=player2score
        }


    }
    if(answer_turn=="player1")
    {
        answer_turn="player2"
        document.getElementById("playeranswer").innerHTML="answer turn="+player2name
    }
    else
    {
        answer_turn="player1"
        document.getElementById("playeranswer").innerHTML="answer turn="+player1name
    }
    if(question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("playerquestion").innerHTML="question turn="+player2name
    }
    else
    {
        question_turn="player1"
        document.getElementById("playerquestion").innerHTML="question turn="+player1name
    }
}