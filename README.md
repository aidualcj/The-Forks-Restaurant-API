## Background & Objectives

In this challenge, we'll take a closer look at the Fork API that we saw during the lecture. The aim is to get more familiar with making API requests, how to read the response and using this response to insert it in the HTML.

## Specs

Build a search app to filter the restaurants of [The Fork API](https://the-fork.api.lewagon.com/).

Goal is to implement in `index.js` the search logic, so we can filter by category when you click on search.

Open the html page in your browser with:

```bash
serve
```

You should see a form with all the different restaurant categories.

- When we select one and click on _Search_, the page **should not reload** and the goal is to display the list of the filtered restaurants on the right.
- We should see a message indicating that there are no results in case there are no restaurants for that category.
- The list should reset every time you make a new search before displaying the new restaurants.


Two new functions to extract some of our logic out of the `addEventListener` callback:

- First, an `insertResults` method that will insert the results in our list.
- Secondly, a `buildSearchUrl` method that will find the chosen category and build the URL we need to make our query. It should return the **URL appended with the search query parameters**.

Add the location in, so we can search both by category and also by location 🎉
