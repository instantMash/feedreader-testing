/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('have URLs', function() {
            allFeeds.forEach(function(feed){
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);
            });
         });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('have names', function() {
            allFeeds.forEach(function(feed){
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
            });
         });

    }); // end of RSS Feeds test suite.


    /* This test suite is for the menu */
    describe('The menu', function() {

        var bodyElem = document.getElementsByTagName('body')[0];
        var menuIcon = document.getElementsByClassName('menu-icon-link')[0];

        /* This test that ensures the menu element is
         * hidden by default. We're checking to see whether the body has
         * the class "menu-hidden"
         */

         it('is hidden by default', function() {
           expect(bodyElem.classList.contains("menu-hidden")).toBe(true);
         });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked.
          */

          it('toggles visibility when clicked', function() {

            $(menuIcon).click();
            expect(bodyElem.classList.contains("menu-hidden")).toBe(false);
            $(menuIcon).click();
            expect(bodyElem.classList.contains("menu-hidden")).toBe(true);

          });

    }); // end of The Menu test suite.

        describe('Initial Entries', function() {

          /* This test ensures that the loadFeed
           * function is called and completes its work, there is at least
           * a single .entry element within the .feed container.
           *  loadFeed() is asynchronous so this test requires
           * the use of Jasmine's beforeEach and asynchronous done() function.
           */
           beforeEach(function(done) {
             loadFeed(0, done); // The first parameter, '0', is used by loadFeed to refer to an index in the allFeeds array. 'done' is the callback.
          });

           it('are loading', function(){
             expect($('.feed .entry')[0]).toBeDefined();
           });

        }); // end of Initial Entries test suite.



    /* TODO: Write a new test suite named "New Feed Selection" */

      describe("New Feed Selection", function(){

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

         var initialFeed,
            newFeed;

         beforeEach(function(done) {

           loadFeed(0, function(){
              initialFeed = $('.feed').html();
           });

           loadFeed(1, function(){
              newFeed = $('.feed').html();
              done();
           });

        });

         it('is working and content actually changes', function(){
           expect(initialFeed).not.toBe(newFeed);
         });




      }); // end of New Feed Selection test suite.

}());
