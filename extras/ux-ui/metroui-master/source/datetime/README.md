# Datetime

The `Datetime` class provides a set of methods and properties for working with dates and time.
To access to a datetime functionality in Metro UI, use global class `Datetime` or global fabric function `datetime()`.

## Usage
To create a new instance of `Datetime`, you can use the `Datetime` class or the factory function `datetime`.

```javascript
const dt = new Datetime();
const dt2 = datetime();

console.log(dt.calendar());
```

## Datetime Class
The `Datetime` class provides a set of methods and properties for working with dates and time.

```javascript
const dt = new Datetime();
```

When you create a class `DateTime` you can specify the original date value in the same format as when using JavaScript object `Date`.

Beginning options:

| Option | Type | Default | Description |
|---|---|---|---|
| `locale` | String | `en` | The datetime locale. |
| `utcMode` | Boolean | `false` | UTC mode. |
| `weekStart` | Number | `0` | From locale. |
| `mutable` | Boolean | `true` | Is mutable state. |

You can change options after creating an instance of `Datetime`:

```javascript
const dt = new Datetime();
dt.useLocale('ua');
dt.immutable(true)
```

## Static Methods

### `locales`

This property contains the list of available locales.

### `isDatetime()`
This method checks if the value is a `Datetime` instance.

```javascript
const dt = new Datetime();
Datetime.isDatetime(dt); // true
```

### `now()`
This method returns the current date and time as a `Datetime` instance as `date` or as `timestamp`.

```javascript
const asDate = true
Datetime.now(); // timestamp
Datetime.now(asDate); // date
```

### `parse()`
This method parses a date string and returns a `Datetime` instance.

```javascript
const dt = Datetime.parse('2023-10-01 12:00:00');
console.log(dt.format('YYYY-MM-DD HH:mm:ss')); // 2023-10-01 12:00:00
```

### `from()`
This method creates a `Datetime` instance from a date string `from(str, locale, format)`.

You can use the format parts:
```js
const parts = {
    "month": ["M", "mm", "%m"],
    "day": ["D", "dd", "%d"],
    "year": ["YY", "YYYY", "yy", "yyyy", "%y"],
    "hour": ["h", "hh", "%h"],
    "minute": ["m", "mi", "i", "ii", "%i"],
    "second": ["s", "ss", "%s"],
    "ms": ["sss"]
}
```

```javascript
const dt = Datetime.from('Dec, 2025, 01', 'en', 'm, yyyy, dd');
```

### `setLocale()`
Add locale to the list of available locales.

```javascript
Datetime.setLocale('en', {
    months: "January February March April May June July August September October November December".split(" "),
    monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
    weekStart: 0
});
```

### `getLocale()`
This method returns the required locale.

```javascript
Datetime.getLocale('en');
```

### `align()`
This method aligns the date to the start of the required datetime part.

```javascript
Datetime.align('2023-01-10 12:00:00', 'month'); // 2023-01-01 00:00:00
Datetime.align('2023-10-01 12:00:00', 'day'); // 2023-10-01 00:00:00
```

You can align to the following parts:
| Part | Description |
|---|---|
| `year` | Align to the start of the year. |
| `month` | Align to the start of the month. |
| `week` | Align to the start of the week. |
| `day` | Align to the start of the day. |
| `hour` | Align to the start of the hour. |
| `minute` | Align to the start of the minute. |
| `second` | Align to the start of the second. |
| `quarter` | Align to the start of the second. |

### `alignEnd()`

This method aligns the date to the end of the required datetime part.

```javascript
Datetime.alignEnd('2023-01-10 12:00:00', 'month'); // 2023-01-31 23:59:59
Datetime.alignEnd('2023-10-01 12:00:00', 'day'); // 2023-10-01 23:59:59
```

### `parseTime()`
This method parses a time string and returns a `Datetime` instance.

```javascript
const dt = Datetime.parseTime('255d, 12h, 00m, 00s');
```

### `sort()`
This method sorts an array of `Datetime` instances.

```javascript
const dt1 = new Datetime(...);
const dt1 = new Datetime(...);
const dt1 = new Datetime(...);
const sorted = Datetime.sort([dt1, dt2, dt3]);
```    

### `isTomorrow()`
This method checks if the `Datetime` instance is tomorrow.

```javascript
Datetime.isTomorrow('2023-10-02 12:00:00');
```

### `isYesterday()`
This method checks if the `Datetime` instance is yesterday.

```javascript
Datetime.isYesterday('2023-09-30 12:00:00');
```

## Methods

### `immutable()`
This method sets the `mutable` option to the instance of `Datetime`.

```javascript
const dt = new Datetime();
dt.immutable(true); // immutable
dt.immutable(false); // mutable
```

### `utc()`

This method sets the `utcMode` for instance to `true`.

```javascript
const dt = new Datetime();
dt.utc(); // now utc
```

### `local()`

This method sets the `utcMode` for instance to `false`.

```javascript
const dt = new Datetime();
dt.local(); // now local
```

### `useLocale()`
This method sets the `locale` for instance.

```javascript
const dt = new Datetime();
dt.useLocale('en'); // now en
```

### `clone()`
This method returns a clone of the `Datetime` instance.

```javascript
const dt = new Datetime();
const dt2 = dt.clone(); // clone
```

### `align()`

This method aligns the date to the start of the required datetime part.

```javascript
const dt = new Datetime();
dt.align('month'); // align to month
```

### `alignEnd()`
This method aligns the date to the end of the required datetime part.

```javascript
const dt = new Datetime();
dt.alignEnd('month'); // align to month
```

### `val()`

This method returns the value of the `Datetime` instance if argument is undefined, and sets new value if you specify the argument method.

```javascript
const dt = new Datetime();
dt.val('2023-10-01 12:00:00'); // set value
console.log(dt.val()); // get value
```

### `year2()`

This method returns the last two numbers of year of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.year2(); // 23
```

### `ms()`

Sets or gets the milliseconds of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.ms(); // 0
dt.ms(1000); // set milliseconds
console.log(dt.ms()); // 1000
```

### `second()`
Sets or gets the seconds of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.second(); // 0
dt.second(30); // set seconds
console.log(dt.second()); // 30
```

### `minute()`

Sets or gets the minutes of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.minute(); // 0
dt.minute(30); // set minutes
console.log(dt.minute()); // 30
```

### `hour()`
Sets or gets the hours of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.hour(); // 12
dt.hour(18); // set hours
console.log(dt.hour()); // 18
```

### `day()`
Sets or gets the day of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.day(); // 1
dt.day(15); // set day
console.log(dt.day()); // 15
```

### `month()`

Sets or gets the month of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.month(); // 10
dt.month(5); // set month
console.log(dt.month()); // 5
```

### `year()`
Sets or gets the year of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.year(); // 2023
dt.year(2025); // set year
console.log(dt.year()); // 2025
```

### `time()`
Sets or gets the time of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.time(); // 12:00:00
dt.time('18:30:00'); // set time
console.log(dt.time()); // 18:30:00
```

### `weekDay()`
Sets or gets the week day of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.weekDay(); // 0
dt.weekDay(5); // set week day
console.log(dt.weekDay()); // 5
```

### `get()`

This method returns the value of the specified part of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.get('year'); // 2023
dt.get('month'); // 10
```

### `set()`
This method sets the value of the specified part of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.set('year', 2025); // set year
```

### `add()`
This method adds the specified value to the specified part of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.add(2, 'day'); // add 2 days
dt.add(-2, 'day'); // sub 2 days
```

### `addHour()`
This method adds the specified value to the hour of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.addHour(2); // add 2 hours
dt.addHour(-2); // sub 2 hours
```

### `addMinute()`
This method adds the specified value to the minute of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.addMinute(2); // add 2 minutes
```

### `addSecond()`
This method adds the specified value to the second of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.addSecond(2); // add 2 seconds
```

### `addMs()`
This method adds the specified value to the milliseconds of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.addMs(2); // add 2 milliseconds
```

### `addWeek()`
This method adds the specified value to the week of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.addWeek(2); // add 2 weeks
```

### `addMonth()`
This method adds the specified value to the month of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.addMonth(2); // add 2 months
```

### `addYear()`
This method adds the specified value to the year of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.addYear(2); // add 2 years
```

### `format()`
This method formats the `Datetime` instance to the specified format.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.format('YYYY-MM-DD'); // 2023-10-01
dt.format('YYYY-MM-DD HH:mm:ss'); // 2023-10-01 12:00:00
dt.format('YYYY-MM-DD HH:mm:ss.SSS'); // 2023-10-01 12:00:00.000
```

| Format | Description |
|---|---|
| `YY` | Year with century (25) |
| `YYYY` | Year with century (2025) |
| `M` | Month (1-12) |
| `MM` | Month (01-12) |
| `MMM` | Mon short name (3 symbols) |
| `MMMM` | Month full name |
| `D` | Day (1-31) |
| `DD` | Day (01-31) |
| `d` | Week day |
| `dd` | Week day (2 symb) |
| `dddd` | Week day full |
| `h` | Hours (0-11) |
| `hh` | Hours (00-11) |
| `H` | Hours (0-23) |
| `HH` | Hours (00-23) |
| `m` | Minutes (0-59) |
| `mm` | Minutes (00-59) |
| `s` | Seconds (0-59) |
| `ss` | Seconds (00-59) |
| `sss` | Milliseconds |
| `BB` | buddhist |
| `BBBB` | buddhist |
| `C` | Century |
| `a` | am/pm |
| `A` | AM/PM |
| `I` | ISO week day |
| `z` | Timezone name |
| `Z` | Timezone |
| `ZZ` | Timezone |
| `ZZZ` | Timezone |
| `W` | Week number |
| `WW` | Week number |
| `WWW` | Week number |
| `WWWW` | Week number |

### `valueOf()`
This method returns the value of the `Datetime` instance as a timestamp.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.valueOf(); // 1696156800000
```

### `toString()`
This method returns the value of the `Datetime` instance as a string.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.toString(); // 2023-10-01 12:00:00
```

## Plugins

### `buddhist()`

Return the Buddhist date.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.buddhist(); // 2566-10-01 12:00:00
```

### `calendar()`
Generate calendar for the month of the `Datetime` instance for the given date.
You can specify the `weekStart` option to set the first day of the week.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
const calendar = dt.calendar();
console.log(calendar);
```

The calendar includes the following properties:

```js
const result = {
    month: String,
    days: Number[],
    weekstart: 1 | 0,
    weekdays: [],
    today: now.format("YYYY-MM-DD"),
    weekends: [],
    week: []
}
```

### `century()`
This method returns the century of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.century(); // 21
```

### Comparing dates
You can compare two `Datetime` instances using the following methods:

#### `same()`
This method checks if two `Datetime` instances are the same.

```javascript
const dt1 = new Datetime("2023-10-01 12:00:00");
const dt2 = new Datetime("2023-10-01 12:00:00");
const dt3 = new Datetime("2023-10-01 12:00:01");
console.log(dt1.same(dt2)); // true
console.log(dt1.same(dt3)); // false
```

#### `compare()`
This method compares two `Datetime` instances with aligned dates specified and operator (`=`, `!=`, `<`, `>`, `<=`, `>=`).

```javascript
const dt1 = new Datetime("2023-10-01 12:00:00");
const dt2 = new Datetime("2023-10-01 12:00:00");
const dt3 = new Datetime("2023-10-01 12:00:01");
console.log(dt1.compare(dt2, '=')); // true
console.log(dt1.compare(dt3, '<')); // true
console.log(dt1.compare(dt3, '>')); // false
console.log(dt1.compare(dt3, '<=')); // true
console.log(dt1.compare(dt3, '>=')); // false
console.log(dt1.compare(dt3, '!=')); // true
```

#### `between()`
This method checks if the `Datetime` instance is between two other `Datetime` instances.

```javascript
const dt1 = new Datetime(...);
const dt2 = new Datetime(...);
const dt3 = new Datetime(...);

d3.between(dt1, dt2);
```

#### `older()`

This method checks if the `Datetime` instance is older than the specified `Datetime` instance.

```javascript
const dt1 = new Datetime(...);
const dt2 = new Datetime(...);
dt1.older(dt2);
```

#### `olderOrEqual()`

This method checks if the `Datetime` instance is older or equal to the specified `Datetime` instance.

```javascript
const dt1 = new Datetime(...);
const dt2 = new Datetime(...);
dt1.olderOrEqual(dt2);
```

#### `younger()`
This method checks if the `Datetime` instance is younger than the specified `Datetime` instance.

```javascript
const dt1 = new Datetime(...);
const dt2 = new Datetime(...);
dt1.younger(dt2);
```


#### `youngerOrEqual()`
This method checks if the `Datetime` instance is younger or equal to the specified `Datetime` instance.

```javascript
const dt1 = new Datetime(...);
const dt2 = new Datetime(...);
dt1.youngerOrEqual(dt2);
```

#### `equal()`
This method checks if the `Datetime` instance is equal to the specified `Datetime` instance.

```javascript
const dt1 = new Datetime(...);
const dt2 = new Datetime(...);
dt1.equal(dt2);
```

#### `notEqual()`
This method checks if the `Datetime` instance is not equal to the specified `Datetime` instance.

```javascript
const dt1 = new Datetime(...);
const dt2 = new Datetime(...);
dt1.notEqual(dt2);
```

#### `diff()`
This method returns the difference between two `Datetime` instances in the specified unit.

```javascript
const dt1 = new Datetime(...);
const dt2 = new Datetime(...);
dt1.diff(dt2, 'day');
```

You can specify the following units: `ms`, `second`, `minute`, `hour`, `day`, `month`, `year`.

#### `distance()`
This method returns the distance between two `Datetime` instances in the specified unit and aligned dates.

```javascript
const dt1 = new Datetime(...);
const dt2 = new Datetime(...);
dt1.distance(dt2, 'day');
```

### `dayOfYear()`
This method returns the day of the year of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.dayOfYear(); // 274
```

### `daysInMonth()`
This method returns the number of days in the month of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.daysInMonth(); // 31
```

### `daysInYear()`
This method returns the number of days in the year of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.daysInYear(); // 365
```

### `daysInYearMap()`
This method returns the number of days in the year of the `Datetime` instance as array, where values - days count in month.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.daysInYearMap(); // [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
```

### `daysInYearObj()`
This method returns the number of days in the year of the `Datetime` instance as object, where keys - month names, values - days count in month.

```javascript
const locale = 'en';
const useShortName = true;

const dt = new Datetime("2023-10-01 12:00:00");

dt.daysInYearObj(locale, useShortName); // {Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31, Jun: 30, Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31}
```

### `decade()`
This method returns the decade of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.decade(); // 2020
```

### `decadeStart()`
This method returns the start of the decade of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.decadeStart(); // 2020-01-01 00:00:00
```

### `decadeEnd()`
This method returns the end of the decade of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.decadeEnd(); // 2029-12-31 23:59:59
```

### `decadeOfMonth()`
This method returns the decade of the month of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.decadeOfMonth(); // 0
```

### `ampm()`
This method returns the AM/PM of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.ampm(); // PM
```

### `hour12()`
This method returns the hour of the `Datetime` instance in 12 hours format.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.hour12(); // 12
```

### `isLeapYear()`
This method checks if the `Datetime` instance is a leap year.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.isLeapYear(); // false
```

### `isoWeekDay()`
This method returns the iso week day of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.isoWeekDay();
```

### `max()`
This method returns the maximum date of the `Datetime` instance.

```javascript
const dt1 = new Datetime(...);
const dt4 = new Datetime(...);
const dt3 = new Datetime(...);
const dt2 = new Datetime(...);
const dt5 = new Datetime(...);

dt1.max(dt2, dt3, dt4, dt5);

Datetime.max(dt1, dt2, dt3, dt4, dt5);
```


### `min()`
This method returns the minimum date of the `Datetime` instance.

```javascript
const dt1 = new Datetime(...);
const dt4 = new Datetime(...);
const dt3 = new Datetime(...);
const dt2 = new Datetime(...);
const dt5 = new Datetime(...);

dt1.min(dt2, dt3, dt4, dt5);

Datetime.min(dt1, dt2, dt3, dt4, dt5);
```

### `moon()`
This method returns the moon phase of the `Datetime` instance.

```js
const phases = [
    'new-moon', 
    'waxing-crescent', 
    'first-quarter', 
    'waxing-gibbous', 
    'full-moon', 
    'waning-gibbous', 
    'last-quarter', 
    'waning-crescent'
]
```

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.moon();
```

### `quarter()`
This method returns the quarter of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.quarter(); // 4
```

### `addQuarter()`
This method adds the specified value to the quarter of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.addQuarter(2); // add 2 quarters
dt.add(2, "quarter"); // add 2 quarters
```

### `strftime()`
This method formats the `Datetime` instance to the specified format using the `strftime` format.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.strftime('%Y-%m-%d %H:%M:%S'); // 2023-10-01 12:00:00
```

You can use the following format parts:
```js
const matches = {
    '%a': names.weekdaysShort[weekDay],
    '%A': names.weekdays[weekDay],
    '%b': names.monthsShort[month],
    '%h': names.monthsShort[month],
    '%B': names.months[month],
    '%c': this.toString().substring(0, this.toString().indexOf(" (")),
    '%C': this.century(),
    '%d': aDay,
    '%D': [aDay, aMonth, year].join("/"),
    '%e': day,
    '%F': [year, aMonth, aDay].join("-"),
    '%G': thursday().year(),
    '%g': (""+thursday().year()).slice(2),
    '%H': aHour,
    '%I': aHour12,
    '%j': lpad(this.dayOfYear(), 0, 3),
    '%k': aHour,
    '%l': aHour12,
    '%m': aMonth,
    '%n': month + 1,
    '%M': aMinute,
    '%p': this.ampm(),
    '%P': this.ampm(true),
    '%s': Math.round(time / 1000),
    '%S': aSecond,
    '%u': this.isoWeekDay(),
    '%V': this.isoWeekNumber(),
    '%w': weekDay,
    '%x': this.toLocaleDateString(),
    '%X': this.toLocaleTimeString(),
    '%y': year2,
    '%Y': year,
    '%z': this.timezone().replace(":", ""),
    '%Z': this.timezoneName(),
    '%r': [aHour12, aMinute, aSecond].join(":") + " " + this.ampm(),
    '%R': [aHour, aMinute].join(":"),
    "%T": [aHour, aMinute, aSecond].join(":"),
    "%Q": aMs,
    "%q": ms,
    "%t": this.timezone()
};
```

### `timelapse()`
This method returns the time lapse from beginning time.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
// sleep for 2 seconds
dt.timelapse(); // few sec
```

### `utcOffset()`
This method returns the UTC offset of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.utcOffset();
```

### `timezone()`
This method returns the timezone of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.timezone(); // +0300
```

### `timezoneName()`
This method returns the timezone name of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.timezoneName(); // Europe/Kiev
```

### `isToday()`
This method checks if the `Datetime` instance is today.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.isToday(); // true
```

### `today()`
This method returns the current date as a `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.today(); // 2023-10-01 12:00:00
```

### `tomorrow()`
This method returns the tomorrow date as a `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.tomorrow(); // 2023-10-02 12:00:00
```

### `isTomorrow()`
This method checks if the `Datetime` instance is tomorrow.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.isTomorrow(); // false
```

### Transform date

+ `toDateString()`
+ `toISOString()`
+ `toJSON()`
+ `toGMTString()`
+ `toLocaleDateString`
+ `toLocaleString()`
+ `toLocaleTimeString()`
+ `toTimeString()`
+ `toUTCString()`
+ `toDate()`

### `unix()`
Sets or gets unix timestamp of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.unix(); 
dt.unix(1696156800);
```

### `timstamp()`
This method returns the unix timestamp of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.timestamp(); 
```

### `weekNumber()`
This method returns the week number of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.weekNumber(); // 40
```

### `isoWeekNumber()`
This method returns the ISO week number of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.isoWeekNumber(); // 40
```

### `weeksInYear()`
This method returns the number of weeks in the year of the `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.weeksInYear(); // 52
```

### `yesterday()`
This method returns the yesterday date as a `Datetime` instance.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.yesterday(); // 2023-09-30 12:00:00
```

### `isYesterday()`
This method checks if the `Datetime` instance is yesterday.

```javascript
const dt = new Datetime("2023-10-01 12:00:00");
dt.isYesterday(); // false
```

