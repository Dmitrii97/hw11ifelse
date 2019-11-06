var weekDayIf = prompt('Please enter Day');
var weekDayIfUpper = weekDayIf.toUpperCase();


if (weekDayIfUpper == 'MONDAY' && 'TUESDAY' || 'WEDNESDAY' && 'THURSDAY' || 'FRIDAY') {
    weekDayResult = 'Working day';
} else
if (weekDayIfUpper == 'SATURDAY' && 'SUNDAY') {
    weekDayResult = 'Weekend';
} else {
    weekDayResult = 'Can not define, please try another value';
}
alert(weekDayResult);