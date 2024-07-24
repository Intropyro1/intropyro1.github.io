var artistLines = ['A','B','C','E','D'];
var myLines = [''];

const messageTank = (firstWord,secondWord,thirdWord,fourthWord,fifthWord) => {
        return{
            addingFirst(firstWord,secondWord,thirdWord,fourthWord,fifthWord){
                //This going to choose the words at randomIndexes
                let randomIndex = Math.floor(Math.random() * firstWord.length);
                //Get the current index and provide it to the first word which would be displayed at this index
                let currentIndex = firstWord[randomIndex];
                let randomIndex2 = Math.floor(Math.random() * secondWord.length);
                let currentIndex2 = secondWord[randomIndex2];
                let randomIndex3 = Math.floor(Math.random() * thirdWord.length);
                let currentIndex3 = secondWord[randomIndex3];
                let randomIndex4 = Math.floor(Math.random() * fourthWord.length);
                let currentIndex4 = secondWord[randomIndex4];
                let randomIndex5 = Math.floor(Math.random() * fifthWord.length);
                let currentIndex5 = secondWord[randomIndex5];
                console.log(randomIndex)
                
                return currentIndex + currentIndex2 + currentIndex3 + currentIndex4 + currentIndex5;
            }
            
        }

}

console.log(messageTank().addingFirst(artistLines,artistLines,artistLines,artistLines,artistLines))