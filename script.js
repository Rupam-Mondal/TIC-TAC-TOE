const boxes = document.querySelectorAll('.box')

let turnx = true

const patterns = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
]

boxes.forEach((box) => {
    box.addEventListener('click' , () => {
        if(turnx){
            box.textContent = "X"
            turnx = false
        }
        else{
            box.textContent = "O"
            turnx = true
        }
        box.disabled = true
        checkwinner()
    })
})

function checkwinner(){
    for(pat of patterns){
        if (boxes[pat[0]].textContent != "" && boxes[pat[1]].textContent != "" && boxes[pat[2]].textContent != ""){
            if(boxes[pat[0]].textContent == boxes[pat[1]].textContent && boxes[pat[1]].textContent == boxes[pat[2]].textContent) {
                winnerdisplay(pat)
                return
            }
        }
    }
}

function winnerdisplay(pat){
    const heading = document.querySelector('.heading')
    if(boxes[pat[0]].textContent == "X"){
        heading.textContent = "Player 1 is the winner"
        return
    }
    else if (boxes[pat[0]].textContent == "O"){
        heading.textContent = "Player 2 is the winner"
        return
    }
    else{
        heading.textContent = "Math Draw"
        return
    }
}