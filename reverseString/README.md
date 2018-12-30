# Exercise 02 - Reverse a String.

Pretty simple, write a function called `reverseString` that returns it's input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

You will notice in this exercise that there are multiple tests, after making the first one pass, enable the others one by one by deleting the `x` in front of the `it()` function.




## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.


## UITVOERING WESLEY:
Elke string heeft een length. Met die length zou je een loop kunnen starten om de string vervolgens tijdelijk op te slaan als array. Die array kun je vervolgens ook weer gebruiken om, in reverse order, de array in een string the pushen. Hierbij geldt dat JavaScript begint met tellen bij 0 en dat de loop waarschijnlijk een +1 in gebeouwd moet hebben.

text.length =
