# Star Wars App

The purpose of this task is to build simple application allowing to browse list of characters from Star Wars universe (with pagination & search features) and additional page for single person. Application should require user to sign in (hardcoded, any signup process is out of this task scope).

## Required features

 - Login page with hardcoded credentials (`login: luke, pass: iamyourfather`) - not logged in user, shouldn't has access to any other page
 - People page (i.e. `/characters`) - page with list of all characters, it should be paginated and give search option (by name)
 - Person page (i.e. `/charaters/:id` - with more granular information about a specific person (should include movies' titles (pulled from API as well) - this section should be visible only on the desktop version)
 - Favourites functionality (stored in localStorage) - somehow represented on both list and single person pages

## Other requirements
 - Application should be responsive
 - Completed project must be delivered as merge request to given repository
 - deployment & accessible via pubilc URL is nice to have, but optional, otherwise please provide documentation how to run application
 - using TypeScript is optional as well (but still nice to have)

## Resources
 - https://swapi.dev/ - please use this API to create app
 - please use one of the most popular frameworks (Angular, Vue, React (preferred))
