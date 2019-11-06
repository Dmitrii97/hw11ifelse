var weekDayIf = prompt('Please enter Day');
var weekDayIfUpper = weekDayIf.toUpperCase();


if (weekDayIfUpper == 'MONDAY') {
    weekDayResult = 'Working day';
} else
if (weekDayIfUpper == 'TUEDSAY') {
    weekDayResult = 'Working day';
} else
if (weekDayIfUpper == 'WEDNESDAY') {
    weekDayResult = 'Working day';
} else
if (weekDayIfUpper == 'THURSDAY') {
    weekDayResult = 'Working day';
} else
if (weekDayIfUpper == 'FRIDAY') {
    weekDayResult = 'Working day';
} else
if (weekDayIfUpper == 'SATURDAY') {
    weekDayResult = 'Weekend';
} else
if (weekDayIfUpper == 'SUNDAY') {
    weekDayResult = 'Weekend';
} else {
    weekDayResult = 'Can not define, please try another value';
}
alert(weekDayResult);