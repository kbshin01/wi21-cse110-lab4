1. Line 11 will work as intended and ouput `i` to the web console (the number of elements in the input array, 3) -- it works successfully because it was declared with `var` and such variables cannot be loop-local, they are function level variables and `i` is being printed within the same function as it was declared.

2. Line 12 will work as intended and output `discountedPrice` to the web console (the discounted price of the last element in the input array, 150), it works successfully because it was declared with `var` and therefore is visible through blocks (no block scope). It is declared within a function and is therefore a function level variable, and it prints successfully because the call is made in the same function as the variable's declaration.

3. Line 13 will work as intended and output `finalPrice` (the last element added to the output array, 150) because it was declared with `var` and is therefore a function level variable. Because the call to print `finalPrice` is in the same function as its declaration, it will be successful.

4. The function takes in an array of prices and a discount value, and will return an array of newly discounted prices from the given inputs. If we called `discountPrices([100, 200, 300], .5)`, we would iteratively go through each of the values in the input array and apply the discount of 0.5 to them, and then push the final price to the end of the `discounted` array. We return the `discounted` array, which in this case would be `[50, 100, 150]`.

5. Line 11 will not work as intended and there will be a ReferenceError when trying to print `i`. This is because it was declared with `let`, which is a block-scoped local variable. Because `i` was declared in a for loop and the call to print is outside of that loop, `i` will not be defined.

6. Line 12 will not work as intended and there will be a ReferenceError when trying to print `discountedPrice`. This is because it was declared with `let`, which is a block-scoped local variable. Because `discountedPrice` was declared inside of a for loop and the call to print is outside of that loop, `discountedPrice` is in its own block and therefore will not be defined.

7. Line 13 will work as intended and output `finalPrice` (the final element added to the output array, 150) because it was declared with `let` and is therefore a block-scoped local variable. Because the call to print `finalPrice` is in the same block as its declaration, it will be successful.

8. The function takes in an array of prices and a discount value, and will return an array of newly discounted prices from the given inputs. If we called `discountPrices([100, 200, 300], .5)`, we would iteratively go through each of the values in the input array and apply the discount of 0.5 to them, and then push the final price to the end of the `discounted` array. We return the `discounted` array, which in this case would be `[50, 100, 150]`.

9. Line 11 will not work as intended and there will be a ReferenceError when trying to print `i`. This is because it was declared with `let`, which is a block-scoped local variable. Because `i` was declared in a for loop and the call to print is outside of that loop, `i` will not be defined.

10. Line 12 will not work as intended and there will be a ReferenceError when trying to print `discountedPrice`. This is because it was declared with `const`, which is a block-scoped variable. Because `discountedPrice` was declared inside of a for loop and the call to print is outside of that loop, `discountedPrice` is in its own block and therefore will not be defined.

11. Line 13 will not work as intended because `finalPrice` was declared with `const`, and this would therefore lead to errors when trying to assign a different value to `finalPrice` in the for loop once it has already been declared. Although there are attempts to change the value of `finalPrice` in the for loop, it will remain 0 because it is a `const`.

12. The function call for `discountPrices([100,200,300],.5)` will result in a compile time error due to attempted assignment to a `const` variable. Therefore, it will not return anything but that error and the function will not work as intended.

13. A. console.log(student.name); <br>
    B. console.log(student['Grad Year']); <br>
    C. student.greeting(); <br>
    D. console.log(student['Favorite Teacher'].name); <br>
    E. console.log(student.courseLoad[0]);
    
14. A. '32' <br>
    B. 1 <br>
    C. 3 <br>
    D. '3null' <br>
    E. 4 <br>
    F. 0 <br>
    G. '3undefined' <br>
    H. NaN
    
15. A. true <br>
    B. false <br>
    C. true <br>
    D. false <br>
    E. false <br>
    F. true
    
16. `==` compares two variables while ignoring the data type, while `===` compares two variables while keeping the data types in mind.

17. `'How are you?'` gets printed because `(2 == true)` returns false, so the initial `if` statement will not work and it will go to the `else if` statement. Because the value in the `else if` statement is not 0, it will run whatever is inside of that respective code block.

18. (refer to `part1-question18.js`)

19. Upon calling `modifyArray([1,2,3], doSomething)`, the result should be the modified array `[6,8,10]`. We are running `doSomething` on each element in the input array, which adds 2 to that very element. We then use the output of `doSomething` for each of the values as inputs for `function(x)`, which will multiply our new values by 2. Essentially, for a value `x`, we are doing `(x + 2) * 2`. We push each of these newly modified values to `newArr` and return that array.

20. (refer to `part1-question20.js`)

21. <pre>
    > 1
    > 4
    > 3
    > 2
    </pre>
