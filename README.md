# Feed Reader Testing

In this project we implemented Javascript testing using Jasmine.js.

## How to Run the app
1. Download or clone this repo.
2. Open index.html in a browser.

## Testing with Jasmine

> Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

> Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

I added new tests to the "RSS Feeds" suite. One test checks the URLs and the other checks the names. Each test uses a `forEach` loop to iterate through the allFeeds array.

The Jasmine matcher `toBeDefined()` checks whether the URL or Name property is defined. Next, combining `not` with `toBe` creates a negative assertion. In this case `not.toBe(0)` checks that the length of the properties to make sure they are not empty.

> Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

In this case, I simply check whether the body element contains the class `.menu-hidden`. I thought about checking the CSS properties on the menu itself to make sure it is actually invisible on screen. But it did not seem practical. And this way, if the `.menu-hidden` class is re-written so that it uses a different technique of hiding the menu, the test will still work.

> Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

This one was interesting! For a while, I was stuck on how to simulate an event in Jasmine. The solution was to use the jQuery `click()` method.

> Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

> Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

These tests required the use of Jasmine's `beforeEach` and asynchronous `done()` functions.





















.
