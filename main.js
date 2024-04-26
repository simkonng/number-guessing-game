//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호<유저번호 Down
//랜덤번호>유저번호 Up
//Reset 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다(버튼 disable)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려주고, 기회를 깍지 않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려주고, 기회를 깍지 않는다
//유저가 입력창에 커서를 두면 기존 입력 값이 지워진다


let computerNum = 0
let goButton = document.getElementById("go-button")
let userInput = document.getElementById("user-input")
let msgArea = document.getElementById("msg-area")
let resetButton = document.getElementById("reset-button")
let chances = 3
let chancesMsg = document.getElementById("chances-area")
let userHistory = []

goButton.addEventListener("click", go)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){
    userInput.value = ""
})

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1
    console.log(computerNum)
}

function go(){

    let userValue = userInput.value
    
    if(userValue < 1 || userValue > 100){
        msgArea.textContent = "1~100 사이의 숫자를 입력해주세요"
        return;
    }

    if(userHistory.includes(userValue)){
        msgArea.textContent = "이미 입력한 숫자입니다"
        return;
    }


    chances --
    chancesMsg.textContent = `남은 기회: ${chances}회`

    if(userValue < computerNum){
        msgArea.textContent = "더 커요"
    } else if(userValue > computerNum){
        msgArea.textContent = "더 작아요"
    } else {
        msgArea.textContent = "맞췄습니다!!!"
        gameOver()
    }

    userHistory.push(userValue)
    console.log(userHistory)

    if(chances < 1){
        gameOver = true
    }

    if (gameOver == true){
        goButton.disabled = true
        userHistory = []
    }
    
}

function reset(){
    //uservalue 값 지우고
    userValue = ""
    //msgArea 복귀
    msgArea.textContent = "숫자를 맞춰보세요"
    //랜덤넘버 다시 뽑기
    pickRandomNum()
    gameOver = false
    goButton.disabled = false
    chances = 3
    chancesMsg.textContent = "남은 기회: 3번"
}


