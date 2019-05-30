/*var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


var _3years = 3;
var johnMark = 'My name is John Mark';



var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');

console.log(firstName + ' ' + lastName);
var now, yearJohn, yearMark
var ageJohn, ageMark;
ageJohn = 28;
ageMark = 33;

now = 2018;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

var x;
console.log(typeof x);



var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = fullAge <= now - yearJohn;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark)/2;
console.log(average);


var x,y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);
x *= 2;
console.log(x);

var heightMark, weightMark, heightJohn, weightJohn, bmiMark, bmiJohn, higherBMI;

heightMark = prompt('Marks height');
weightMark = prompt('Marks weight');
heightJohn = prompt('John height');
weightJohn = prompt('John weight');

bmiMark = weightMark / (heightMark * heightMark);
bmiJohn = weightJohn / (heightJohn * heightJohn);

higherBMI = bmiMark > bmiJohn;

console.log('Is mark\'s BMI higher than john\'s? ' + higherBMI);



var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married')
{
    console.log(firstName + ' is married');
}
else
{
    console.log('not married');
}

var isMarried = true;
if(isMarried)
{
    console.log(firstName + ' is married2');
}
else
{
    console.log('not married2');
}




var firstName = 'John';
var age = 20;

if(age<13)
{
    console.log(firstName + ' is a boy');
}


else if(age >= 13 && age <20)
{
    console.log(firstName + ' is a teenager')
}


else if(age >=20 && age<30)
{
    console.log(firstName + ' is a young man');
}


else
{
    console.log(firstName + ' is a man');
}




var firstName = 'john';
var age = 17;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);


var job = 'instructor';

switch (job)
{
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'designer':
        console.log(firstName + ' tdesigns beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');
}

 
switch (true)
{
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age <20:
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age<30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}



var height = 0;

if(height || height === 0)
{
    console.log('Variable is defined');
}
else
{
    console.log('Variable not defined');
}





var JohnTeam, MikeTeam, MaryTeam;
JohnTeam = (189+120+103)/3;
MikeTeam = (116+104+126)/3;
MaryTeam = (97+134+105)/3;

switch(true)
{
    case MaryTeam > JohnTeam && MaryTeam > MikeTeam:
        console.log('Winner is Marry');
        break;
    case JohnTeam > MaryTeam && JohnTeam > MikeTeam:
        console.log('Winner is John');
        break;
    case MikeTeam > JohnTeam && MikeTeam > MaryTeam:
        console.log('Winner is Mike');
        break;
    default:
        console.log('draw');
}



function calculateAge(birthYear)
{
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageJane = calculateAge(1980);
var ageMike = calculateAge(1995);
console.log(ageJohn,ageJane,ageMike);


function yearsToRetire(birthYear, firstName)
{
    var age = calculateAge(birthYear);
    var retirement = 65-age;
    if(retirement > 0)
    {
        console.log(firstName + ' has ' + retirement + ' years till retirement');
    }
    else
    {
        console.log(firstName + ' already retired');
    }
    
}

yearsToRetire(1998, 'Max');
yearsToRetire(1928, 'John');
yearsToRetire(1992, 'Jane');






var whatDoYouDo = function(job, firstName)
{
    switch(job)
    {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives an uber';
        case 'designer':
            return firstName + ' designs a UI';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('designer', 'John'));




var names = ['John', 'Mark','Jane'];
var years = new Array(1990, 1969, 1948);



names[1]= 'Ben';
names[names.length] = 'Marry';
console.log(names.length);
console.log(names);



var john = ['John', 'Smith', 1990, 'designer', false];


john.push('blue');
john.unshift('Mr.')
john.pop();
john.shift();
console.log(john.indexOf(1991));

var isDesigner = john.indexOf('designer') === -1 ? 'John aint designer' : 'John is a designer';

console.log(isDesigner);



var bill1, bill2, bill3, tip1, tip2, tip3;

var tips = new Array();
var amnt = new Array();
bill1 = 124;
bill2 = 48;
bill3 = 268;

function tipCalc(amount)
{
    switch(true)
    {
        case amount < 50:
            return amount* .2;
        
        case amount > 200:
            return amount * .1;

        default:
            return amount * .15;
    }
}

tips.push(tipCalc(bill1));
tips.push(tipCalc(bill2));
tips.push(tipCalc(bill3));

amnt.push(bill1+tips[0]);
amnt.push(bill2+tips[1]);
amnt.push(bill3+tips[2]);

console.log(tips);
console.log(amnt);


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1993,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function()
    {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);






var john = 
{
    firstName: 'John',
    lastName: 'Smith',
    mass: 78,
    height: 1.91,
    calcBMI: function()
    {
        this.BMI = this.mass /(this.height * this.height);
        return this.BMI;
    }
};

var mark = 
{
    firstName: 'Mark',
    lastName: 'Wick',
    mass: 69,
    height: 1.80,
    calcBMI: function()
    {
        this.BMI = this.mass /(this.height * this.height);
        return this.BMI;
    }
};
mark.calcBMI();
john.calcBMI();

console.log(mark, john);

switch(true)
{
    case mark.BMI>john.BMI:
        console.log(mark.firstName + ' ' + mark.lastName + ' has higher BMI');
        break;
    case mark.BMI<john.BMI:
        console.log(john.firstName + ' ' + john.lastName + ' has higher BMI');
        break;
    default:
        console.log(john.firstName + ' ' + john.lastName + ' and ' + mark.firstName + ' ' + mark.lastName + ' have same BMI');
}



var John =
{
    bills: [124,48,268,180,42],
    tips: [],
    finalA: [],
    tipCalc: function()
    {
        for(var i = 0; i < this.bills.length; i++)
        {
            switch(true)
        {
            case this.bills[i] < 50:
                this.tips.push(this.bills[i]*.2);
                this.finalA.push(this.tips[i]+this.bills[i]);
                break;
        
            case this.bills[i] > 200:
                this.tips.push(this.bills[i]*.1);
                this.finalA.push(this.tips[i]+this.bills[i]);
                break;

            default:
                this.tips.push(this.bills[i]*.15);
                this.finalA.push(this.tips[i]+this.bills[i]);
        }
        }
    }
}
John.tipCalc();

var Mark =
{
    bills: [77,475,110,45],
    tips: [],
    finalA: [],
    tipCalc: function()
    {
        for(var i = 0; i < this.bills.length; i++)
        {
            switch(true)
        {
            case this.bills[i] < 100:
                this.tips.push(this.bills[i]*.2);
                this.finalA.push(this.tips[i]+this.bills[i]);
                break;
        
            case this.bills[i] > 300:
                this.tips.push(this.bills[i]*.25);
                this.finalA.push(this.tips[i]+this.bills[i]);
                break;

            default:
                this.tips.push(this.bills[i]*.1);
                this.finalA.push(this.tips[i]+this.bills[i]);
        }
        }
    }
}
Mark.tipCalc();


function avgTip(list)
{
    var sum = 0;
    for(var i = 0; i< list.length; i++)
    {
        sum += list[i];
    }
    return sum/(list.length);
}

John.avgTips = avgTip(John.tips);
Mark.avgTips = avgTip(Mark.tips);


switch(true)
{
    case John.avgTips > Mark.avgTips:
        console.log('John left more tips on average.');
        break;
    case John.avgTips < Mark.avgTips:
        console.log('Mark left more tips on average.');
        break;
    default:
        console.log('They both left the same amount of tips');
}

console.log(John.avgTips, Mark.avgTips);
//console.log(John.tips,Mark.tips);
*/

























