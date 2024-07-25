//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score) {
        return this.scores.push(score);
    }
    average() {
        let totalScore = 0;
        for (let i = 0; i < this.scores.length; i++){
            totalScore += this.scores[i];
        }
        return (Math.round((totalScore/(this.scores.length))*10)/10);

    }
    status() {
        let workingAverage = this.average();
        let acceptance = '';
        if (workingAverage >= 90) {
            acceptance = 'Accepted';
        } else if (workingAverage >= 80 && workingAverage < 90) {
            acceptance = 'Reserve';
        } else if (workingAverage >= 70 && workingAverage < 80) {
            acceptance = 'Probationary';
        } else {
            acceptance = 'Rejected';
        }
        return `${this.name} earned an average test score of ${workingAverage}% and has a status of ${acceptance}.`
    }
}


let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log('--------------------Part 1--------------------');
console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);
console.log('--------------------Part 2--------------------');
bubbaBear.addScore(83);
console.log(bubbaBear.scores);
console.log(merryMaltese.average())
console.log('--------------------Part 3--------------------');
console.log(bubbaBear.status());
console.log(merryMaltese.status());
console.log(gladGator.status());
console.log('--------------------Part 4--------------------');
console.log(bumpToReserve(gladGator))
console.log(bumpToAccepted(gladGator))
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
function bumpToReserve(crewMember) {
    let testsNeeded = 0;
    while (crewMember.average() < 80) {
        crewMember.addScore(100);
        testsNeeded += 1;
    }
    console.log(`It will take a minimum of ${testsNeeded} tests to reach Reserve status.`);
    return crewMember.status()
  }

function bumpToAccepted(crewMember) {
    let testsNeeded = 0;
    while (crewMember.average() < 90) {
        crewMember.addScore(100);
        testsNeeded += 1;
    }
    console.log(`It will take a minimum of ${testsNeeded} tests to reach Accepted status.`);
    return crewMember.status()
  }