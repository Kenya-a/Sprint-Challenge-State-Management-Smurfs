1. What problem does the context API help solve?
    The Context API is used when we have global data that is shared between mulitple components., or when we have to pass data through intermediate components. The Context API help keep our state relatively clean. We use a context object and a createContext  to work with ContextObject.Provider that consumes data (value) that is passed down.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Reducers are pure functions that take the previous stat and action and return the next state. 

    Actions are objects that describe what happens to the state. They express the intent to transform state. 

    The state of the entire app is store in an object tree within a single store. 


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global, and Component state is local. Component state live withing a specific component which can be passed down via props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is like another word for a function but it returns another function. It makes reducer flow asynchronous, and action creator async API calls.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system has to be Redux! Redux makes passing data between components super easy once you understand how to do so. with mapState to props and connnect passing and storing data is alot cleaner and easier to use. 
