let drakeLines = "Kiki  do you love me? Are you riding Say youll never ever leave from beside me  Cause I want ya  and I need ya And I m down for you always do you love me Are you riding Say youll never ever leave from beside me  Cause I want ya and I need ya And Im down for you always The money speakin  for itself  I call it fortune tell Fire top from a bitch that work at corporate sales Chinchilla ushanka  we skiin  out in Courchevel Breakin  news  they tried to kill him  but the boy prevails I leave for tour and my niggas fuckin  go to jail Preachin  to the dogs  bout wantin  more for themselves It s weighin  heavy on my moral scale Knowin  they gon  sell another citizen  caine  they think they Orson Welles Walk in Chanel  they like  How the fuck you need more Chanel I got these cats tuckin  tails on fourth-quarter sales The Pulitzer Prize winner is definitely spiralin I got your fucking lines tapped I swear that Im dialed in First I was a rat so wheres the proof of the trial then Wheres the paperwork or the cabinet its filed in 1090 Jake woulda took all the walls down The streets woulda had me hidin out in a small town My Montreal connects stand up now fall down The ones that youre getting your stories from they all clowns I am a war general sеasoned in preparation My jacket is covеred in medals honor and decoration You waited for this moment overcome with the esperation We plotted for a week and then we fed you the information";
let wayneLines = 'I be with bitches that be with bitches That be with niggas with riches I tell her Get him she say I got you I say No bitch I said get him (Ha) And they so pretty and they hair lengthy He hit it and sleep on her titties Then she give us the word we come through with AKs Its a stick-up she scream like a victim now you Feeling so silly I smoke color purple Im up in here feeling like Celie ooh Nappy-ass dreads whats that you say Watch your mouth Milli Vanilli ooh You can get snaked you can get faked Out by the bitch that you feeling cause you Thought that she was an angel that bitch aint no angel I treat her halo like a frisbee and you 6 foot 7 foot {Excuse my charisma vodka with a spritzer Swagger down pat; call my shit Patricia Young Money militia and I am the commissioner You no wan start Weezy cause the F is for finisher So misunderstood but whats a world without enigma Two bitches at the same time; synchronized swimmers Got the girl twisted cause she open when you twist her Never met the bitch but I fuck her like I missed her Life is the bitch and death is her sister Sleep is the cousin—what a fuckin family picture You know Father Time and we all know Mother Nature Its all in the family but I am of no relation No matter whos buyin Im a celebration'
var drakeRaps = drakeLines.split(" ");
var wayneRaps = wayneLines.split(" "); 

var myLines = [''];
function readRaps(evaluationArray) {
    var messageBank = [];
    var displayedWord = new Set();
    while(messageBank.length < 15){
    //obtain random index
    let randomIndex = Math.floor(Math.random() * evaluationArray.length);
    //Get the current index and provide it to the first word which would be displayed at this index
    //Adding the random index to be evaluated as a random word because i want to exclude the empty values
    let randomWord = evaluationArray[randomIndex]
    //evaluation of the randomWord, this will allow unique words to only be added 
    if(randomWord && !displayedWord.has(randomWord)){
        messageBank.push(randomWord);
        displayedWord.add(randomWord);
    }
    }    
    return messageBank;
   /*
   //creating a file txt reader so i dont overload the code with all the lyrics listed in arrays, not all of them would be in arrays but then
   //but then after reading the file it would return the lyrics as strings so then i can go ahead and convert it to a string lol
   //Usign the constant variable fs to read the text rap.txt file 
   //This is using Node Js from a video i watched on it 
   const fs = require('fs');
   fs.readFile('/Users/geandryrodriguez/Downloads/rap.txt', 'utf8',(err, data) => {
    if(err){
        console.error(err)
        return;
    }
    console.log(data);
    var fileData = data;
    return fileData;
   })
   //this should allow me to directly read and access the contents within the file rap.txt
    /*let fileRaps = readAsText(Users/geandryrodriguez/Downloads/rap.txt) 
    const newRaps = fileRaps.split(" ");
    return newRaps
    */
    }

const messageTank = () => {
        return{
            //going to consoladate the rest of the indexes to one, i was trying to see if i can refactor this into a while loop since it is multiple words and with each index so rather than just calling the string container multiple times, i  want to call it over the length of the array and work with it that way but currently i cant set the return value to the single array; i should be able to not pop/ as that will remove it rather i want to push it to a new array container so i think that is push the new indexes into an array container and work with it that was as the return variable, so i will be trying that, will push the value at the new index into a new array
                addingFirst(){
                    //this section within the while loop im working on on top
                //This going to choose the words at randomIndexes
                return currentIndex;
            }
             
        }

}

console.log()