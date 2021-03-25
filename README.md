## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps

## Coin Flip App

## HTML Setup
1) Button
    - Why? `addEventListener` to submit the user throw
2) Div to display flip results
    - How? `textContent`
3) Div to display wins
    - How? `textContent`
4) Div to display losses
    - How? `textContent`
5) Some way to choose heads or tails: radio buttons -- mutually exclusive! you can only select one
    - How? We'll do a weird 'querySelector' hack to get this working

## Initialize state
1) wins: 0
2) total: 0
3) computer throw: 'heads' or 'tails', randomly

## What happens when (events)
1) User clicks submit
    - randomly pick a computer throw ('heads' or 'tails')
    - get the user's guess
        - it lives in the radio buttons sooommmmehow???
    - compare user guess to computer throw
    - display if the user won (show computer throw)
    - increment the total
    - increment the wins, if the user got it right
    - display new values for total, wins, and losses