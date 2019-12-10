# Birdie Developer Test

## Backend

### Features

I stored all the credentials for the database on a file named `apiConfig.ts` (which is not on the repository). In order
to successfully connect the API to the database, you need to create at the root of the backend folder this file. The
 inside of it should look like this:
 ```
 export enum dbConfig {
     host = <HOST>,
     port = <PORT>,
     user = <USERNAME>,
     password = <PASSWORD>,
     database = <YOUR_DATABASE>
 }
 ``` 
 
 Once the API is running, you can access the api with `localhost:8000/api/events`. From this root, you can see the 25 
 most recent events.
 This is a list of all the root available:
 - `localhost:8000/api/events` : Give the 25 latest events
 - `localhost:8000/api/events/time/:id` : Return a filtered list depending on the timestamp specified with :id
 - `localhost:8000/api/events/type/:id` : Return a filtered list depending on the event_type specified with :id
 - `localhost:8000/api/events/caregiver/:id` : Return a filtered list depending on the caregiver specified with :id
 - `localhost:8000/api/events/mood/:id` : Return a filtered list depending on the mood specified with :id
 
 example:
 - "localhost:8000/api/events/type/general_observation"
 
 The root '/api/events' can take a query parameter `page` which serve as pagination. 
 
 For example: localhost:8000/api/events?page=2 will load the next 25 events. Page parameter only take a number, any
  other value will result in an error.
      
### Usage
1. Start the API.

   a. Install the dependencies
   ```
   npm install
   ```
   
   b. Run the HTTP server (will start on port `8000`)
   ```
   npm run dev
   ```
2. Test the API.

   a. Run the test suite
   ```
   npm run test
   ```

## Frontend

### Features

The data can be visualised from 2 views: the list view or the timeline view. The different columns displayed are :
- date,
- time,
- event type,
- fluid type,
- volume of fluid,
- note given by care recipient
    
When the app starts, a call to the API will be done in order to retrieve the list of events. Since it takes time to 
retrieve the data, I've added a loader. As for the timeline, since not all the events have recipient's note or other
 information, I have created 2 kinds of TimelineEvent: one with a body and the other without.  

### Usage
Start the React app
     
1. Install the dependencies
        ```
        npm install
        ```
2. Run the application (will start on port `3000`)
        ```
        npm start
        ```


## Acknowledgments

* The loader is from: `https://gist.github.com/knowbody/578b35164b69e867ed4913423f6bed30`
* The timeline is generated from the package `react-event-timeline`

## Authors
grand_m
