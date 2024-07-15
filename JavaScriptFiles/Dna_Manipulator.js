//Creating random DNA Bases with the Provided Bases
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };

 // Returns a random single strand of DNA containing 15 bases
 const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  //Creating factory of multiple objects
  const pAequorFactory = (numberParam, arrayParam) => {
    return {
      _specimenNum: numberParam,
      get specimenNum() {
        return this._specimenNum;
      },
      set specimenNum(newParamNumber) {
        this._specimenNum = newParamNumber;
      },
      _dna: arrayParam,
      mutate() {
        // Choose a random index in the dna array
        let randomIndex = Math.floor(Math.random() * this.dna.length);
        // Get the current base at the random index
        let currentBase = this.dna[randomIndex];
        // Define possible bases excluding the current base
        const bases = ["A", "T", "C", "G"].filter((base) => base !== currentBase);
        // Randomly select a new base from the possible bases
        let newBase = bases[Math.floor(Math.random() * bases.length)];
        // Mutate the dna at the random index
        this.dna[randomIndex] = newBase;
  
        // Return the mutated dna
        return this.dna;
      },
      compareDNA(newStrand) {
        var count = 0;
        for (i = 0; i < newStrand.length; i++) {
          if (newStrand[i] == arrayParam[i]) {
            count++;
          }
        }
        var percentage = Math.floor((count / newStrand.length) * 100);
        console.log(
          `specimen #1 and specimen #2 have ${percentage}% DNA in common`
        );
      },
      willLikelySurvive() {
        //  console.log(this._dna);
        var newCount = 0;
        for (x = 0; x < this._dna.length; x++) {
          if (this._dna[x] == "C" || this._dna[x] == "G") {
            newCount++;
          } else {
          }
        }
        this.percent = ((newCount / this._dna.length) * 100).toFixed();
        if (this.percent >= 60) {
          /* console.log(
            `current percent at ` + this.percent + "% subject will be likely to survive"
          );*/
          return true;
        } else {
          /*console.log(
            `current percent at ` +
              this.percent +
              "% subject will not be likey not survive"
          );*/
          return false;
        }
      },
      complementStrand(arrayParam){
        const newCompStrand = [];
        for(let c = 0; c < arrayParam.length; c++){
          if(arrayParam[c] == 'A'){
            newCompStrand.push('T')
          } else if(arrayParam[c] == 'T'){
            newCompStrand.push('A')
          } else if(arrayParam[c] == 'C'){
            newCompStrand.push('G')
          } else if (arrayParam[c] == 'G'){
            newCompStrand.push('C')
          } else {
            console.log('Array provided does not contain valid DNA base')
          }
        }
    return newCompStrand;
      }
    };
  };
  //console.log(pAequorFactory(1, mockUpStrand()).compareDNA(mockUpStrand()))
  const testingSpecimensThatCanSurvive = () => {
    let testSubjects = 0;
    const numberOfNeededSubjects = 30;
    const viableSubjects = [];
  
    do {
      const currentSubject = pAequorFactory(testSubjects, mockUpStrand());
      const isSurvivable = currentSubject.willLikelySurvive();
      if (isSurvivable) {
        viableSubjects.push(currentSubject); //Subjects which are viable can be listed by subject name
        console.log(`Subject ${testSubjects} is viable, will be added.`);
      } else {
        //For subjects non viable listed with the testSubjects
        console.log(`Subject ${testSubjects} Not viable, will not be added.`);
      }
      testSubjects++;
    } while (testSubjects <= numberOfNeededSubjects);
  
    return viableSubjects; // Return array of viable subjects
  };
  const holdStrand = mockUpStrand();
  
  console.log(holdStrand);
  console.log(pAequorFactory(5,holdStrand).complementStrand(holdStrand))
  