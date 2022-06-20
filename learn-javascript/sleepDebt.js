// unit: functions
// a project to calculate how much sleep you lost during the week

const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 6;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 4;
        break;
      case 'thursday':
        return 3;
        break;
      case 'friday':
        return 2;
        break;
      case 'saturday':
        return 1;
        break;
      case 'sunday':
        return 0;
        break;
      default:
        return "Some error occurred";
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {    // the ideal hours of sleep you should be getting a week
    const idealHours = 2;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours < idealSleepHours) {
      console.log("Get some rest. You need " + (idealSleepHours - actualSleepHours) + " more hours");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("That\'s enough slices. You went " + (actualSleepHours - idealSleepHours) + " overboard");
    } else if (actualSleepHours === idealSleepHours) {
      console.log("Just the right amount");
    }
  }
  
  calculateSleepDebt();