// Questions list
let questions = [
  "Have you contracted Covid at all during the pandemic?",
  "Have you recently felt a shortness of breath?",
  "Have you recently had difficulty breathing?",
  "Do you have any respiratory issues?",
  "Have you experienced any chills?",
  "Have you experienced a significant amount of fatigue or weakness?",
  "Have you experienced any severe headaches/fever?",
  "Have you experienced any aching within the body/muscles?",
  "Do you go out often but don't interact/ go near other people?",
  "Do you go out often and interact/ go near other people?",
  "Sex?",
  "Do you smoke cigarettes?",
  "Devils Lettuce?",
  "Columbian angel fairy dust?",
  "Blue sky?",
  "Ketamine?",
  "Have you acquired a new addiction because of covid?",
  "Mango Flavoured Addiction?",
  "Have you drank above 5 gallons of alcohol just cuz #whynot?",
  "Have you drank below 5 metric tons of alcohol because you aren't cool enough?",
  "Have you experienced any coughing recently?",
  "Has any form of coughing come from smoking habits?",
  "Do you experience any chest pain?",
  "Do you experience any memory problems?",
  "Do you experience any memory problems?",
  "Do you experience any memory problems?",
  "Do you experience any memory problems?",
  "Have you had any memory problems before the pandemic started?",
  "Do you remember your lifestyle before the pandemic started?",
  "Do you often ponder about the origins of this disease?",
  "I believe this virus was man-made and anybody who doesn't agree is an idiot",
  "I believe this virus was not man-made and anybody who doesn't agree is an idiot",
  "I believe this virus is real",
  "Fake?",
  "Conspiracy?",
  "Has Covid made you more philosophical?",
  "Has Covid made you more intelligent?",
  "Has Covid made you more attractive?",
  "Ugly?",
  "Down Bad?",
  "Based and Red-pilled?",
  "Has Covid made you more racist?",
  "Do you hate China?",
  "Does China hate you?",
  "Do you blame China for Covid?",
  "Do you blame anti maskers for the spread of Covid?",
  "Are you an anti masker?",
  "Do you always wear a mask in a public place?",
  "Do you blame teenagers for the spread of Covid?",
  "Do you blame yourself for the spread of Covid?",
  "Have you gotten the vaccine?",
  "Will you take the vaccine in the future?",
  "Do you question the legitimacy of the vaccine?",
  "I am educated about the science behind the covid vaccine",
  "My perception of the vaccine is built upon facebook posts that my grandparents send me",
  "If the vaccine would make you grow a third arm, would you accept it?",
  "Will you use your third arm for good?",
  "Will you use your third arm for bad?",
  "Will you use the new arm to become a god at sports",
  "Will you use the new arm to take over Albania?",
  "Will you use your third arm to defend Albania?",
];

const questionList = document.querySelector('#list');
questions.forEach(function (question, index){

    const ls = document.createElement('ls');
    const checker = document.createElement('input');
    //const br = document.createElement('br');
    const div = document.createElement('div');
    
    
    checker.type = 'checkbox';
    checker.setAttribute('id', index.toString());
    
    
    div.textContent = question;
    ls.appendChild(checker);
    ls.appendChild(div);
    console.log(ls);
    console.log(questionList);
    console.log(checker);
    questionList.appendChild(ls);
    //questionList.appendChild(br);
       
        
        
});

// IDs
// toHide: Everything that needs to be hidden when score is shown
// toShow: Everything that needs to be shown when score is shown
// score: h1 that shows the score

// Initially hides results
const results = document.querySelector('#toShow');
results.style.display="none";
const main = document.querySelector('#toHide');
const score = document.querySelector('#score');

// On click of the submit button: 
submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", () => {
    // Calculates purity
    var sinList = document.querySelectorAll('input[type="checkbox"]:checked');
    var sins = sinList.length;
    var purity = 60-sins;
    

    // Shows the score in the h1
    score.textContent = purity;
    
    // Shows the score and hides the checks
    results.style.display="block";
    
    main.style.display="none";
    
});

// On click of the reset button: 
resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", () => {
    document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);
});
