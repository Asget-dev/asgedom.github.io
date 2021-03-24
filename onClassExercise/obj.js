const person = {
    name: 'Edward',
     city:'New York',
     age: 37,
     isStudent:true,
     skills:['Javascript', 'HTML','CSS'],
   }
   person.nickname = 'mark';
   person.age+1;
   const message = `Hi, I'm ${person.name}. I live in ${person.city}.Most knowme as ${person.name='duck'} also my nick name is ${person.nickname}. My age is ${person.age + 1}. 
   I have ${person.skills.length} skills: ${person.skills.join(', ')}`;
   console.log(message);