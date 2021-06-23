const getSleepHours = day => {
   
  switch(day) {
      case 'monday':
         return 8
         break;
      case 'tuesday':
        return 8
        break;
      case 'wednesday':
        return 6
        break;
      case 'thursday':
        return 7
        break;
      case 'friday':
        return 8
        break;
      case 'saturday':
        return 4
        break;
      case 'sunday':
        return 8
        break;
     
     default:
     return 'Error'
    }
 };
 
  const getActualSleepHours = () => 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') +    
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
 
 //console.log(getActualSleepHours());
 
 const getIdealSleepHours = () => {
   const idealHours = 8;
   return idealHours * 7;
 };
 
 //console.log(getIdealSleepHours());
 
 const calculateSleepDebt = () => {
   const actualSleepHours = getActualSleepHours();
   const idealSleepHours = getIdealSleepHours();
 
 if (actualSleepHours === idealSleepHours) {
  console.log('Cantitatea perfecta de ore dormite.');
 } else if (actualSleepHours > idealSleepHours) {
  console.log('Ai dormit prea mult, ar trebui sa dormi cu ' + (idealSleepHours - actualSleepHours) + ' mai putin.');
 } else {  
   console.log('Somn indeajuns, ar trebui sa dormi cu ' + (idealSleepHours - actualSleepHours) + ' mai mult.');
 }
 };
 
 calculateSleepDebt()