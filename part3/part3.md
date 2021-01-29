![breakpoint](https://github.com/kbshin01/wi21-cse110-lab4/blob/main/part3/media/cse110lab4.break.PNG)

![watch](https://github.com/kbshin01/wi21-cse110-lab4/blob/main/part3/media/cse110lab4.watch.PNG)

The bug was that the `result` variable was of type "string" instead of some numeric type. This was because the input variables when running `calculateSum()` were not numeric types, so we can just use a function such as `parseInt()` to turn the input variables into numeric types that will add correctly.

![bug fix](https://github.com/kbshin01/wi21-cse110-lab4/blob/main/part3/media/cse110lab4.fix.PNG)

<hr>

<h3> DevTools - Network Tab </h3>

1. citylots.json

2. part2.js

3. 11687628 bytes

4. 167.82 ms

5. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36

6. Apache

7. Tue, 26 Jan 2021 22:14:13 GMT

8. application/json

9. fetchData()
