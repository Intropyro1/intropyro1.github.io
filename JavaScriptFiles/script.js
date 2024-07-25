let drakeLines = "Kiki  do you love me? Are you riding Say youll never ever leave from beside me  Cause I want ya  and I need ya And I m down for you always do you love me Are you riding Say youll never ever leave from beside me  Cause I want ya and I need ya And Im down for you always The money speakin  for itself  I call it fortune tell Fire top from a bitch that work at corporate sales Chinchilla ushanka  we skiin  out in Courchevel Breakin  news  they tried to kill him  but the boy prevails I leave for tour and my niggas fuckin  go to jail Preachin  to the dogs  bout wantin  more for themselves It s weighin  heavy on my moral scale Knowin  they gon  sell another citizen  caine  they think they Orson Welles Walk in Chanel  they like  How the fuck you need more Chanel I got these cats tuckin  tails on fourth-quarter sales The Pulitzer Prize winner is definitely spiralin I got your fucking lines tapped I swear that Im dialed in First I was a rat so wheres the proof of the trial then Wheres the paperwork or the cabinet its filed in 1090 Jake woulda took all the walls down The streets woulda had me hidin out in a small town My Montreal connects stand up now fall down The ones that youre getting your stories from they all clowns I am a war general sеasoned in preparation My jacket is covеred in medals honor and decoration You waited for this moment overcome with the esperation We plotted for a week and then we fed you the information";
let wayneLines = 'I be with bitches that be with bitches That be with niggas with riches I tell her Get him she say I got you I say No bitch I said get him (Ha) And they so pretty and they hair lengthy He hit it and sleep on her titties Then she give us the word we come through with AKs Its a stick-up she scream like a victim now you Feeling so silly I smoke color purple Im up in here feeling like Celie ooh Nappy-ass dreads whats that you say Watch your mouth Milli Vanilli ooh You can get snaked you can get faked Out by the bitch that you feeling cause you Thought that she was an angel that bitch aint no angel I treat her halo like a frisbee and you 6 foot 7 foot {Excuse my charisma vodka with a spritzer Swagger down pat; call my shit Patricia Young Money militia and I am the commissioner You no wan start Weezy cause the F is for finisher So misunderstood but whats a world without enigma Two bitches at the same time; synchronized swimmers Got the girl twisted cause she open when you twist her Never met the bitch but I fuck her like I missed her Life is the bitch and death is her sister Sleep is the cousin—what a fuckin family picture You know Father Time and we all know Mother Nature Its all in the family but I am of no relation No matter whos buyin Im a celebration'

const drakeValues = drakeLines.split(" ");
var myLines = [''];
function readRaps() {
   //creating a file txt reader so i dont overload the code with all the lyrics listed in arrays, not all of them would be in arrays but then
   //but then after reading the file it would return the lyrics as strings so then i can go ahead and convert it to a string lol
    let fileRaps = readAsText(/Users/geandryrodriguez/Downloads/rap.txt)
    
    const newRaps = fileRaps.split(" ");

    return newRaps
}

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