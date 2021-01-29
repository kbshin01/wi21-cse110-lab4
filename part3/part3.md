![breakpoint](https://github.com/kbshin01/wi21-cse110-lab4/blob/main/part3/media/cse110lab4.break.PNG)

![watch](https://github.com/kbshin01/wi21-cse110-lab4/blob/main/part3/media/cse110lab4.watch.PNG)

The bug was that the `result` variable was of type "string" instead of some numeric type. This was because the input variables when running `calculateSum()` were not numeric types, so we can just use a function such as `parseInt()` to turn the input variables into numeric types that will add correctly.

![bug fix](https://github.com/kbshin01/wi21-cse110-lab4/blob/main/part3/media/cse110lab4.fix.PNG)
