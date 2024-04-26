1. **What is the difference between Component and PureComponent? Give an example where it might break my app.**

   - The difference is that Component does not implement the shouldComponentUpdate lifecycle method by default which means that all updates to a component will cause it to re-render by default whereas the PureComponent does.

2. **Context + ShouldComponentUpdate might be dangerous. Why is that?**

   - This is because data from Context provider are not propagated when ShouldComponentUpdate returns false.

3. **Describe 3 ways to pass information from a component to its PARENT.**

   - using callback functions: A callback function is passed from the parent component to the child component as props. When this function is called in the child's component, the data is in turn passed back to the parent.
   - I would have said Context API but it is also similar to using callbacks although it isn't passed as a prop.

4. **Give 2 ways to prevent components from re-rendering.**

   - By extending React.PureComponent or implementing ShouldComponentUpdate (for class components) which does a shallow comparison of the state and props in order to know if the component should re-render or not.
   - By using React.memo to wrap the component (for functional components) which prevents re-rendering of a component if the props haven't changed.

5. **What is a fragment and why do we need it? Give an example where it might break my app.**

   - Fragments let you add multiple child elements without adding an extra node to the DOM. They help to prevent adding unnecessary wrapper elements to the DOM which in turn helps to improve performance. It is also useful when adding additional wrapper elements can change or alter the CSS layout of the component.

6. **Give 3 examples of the HOC pattern.**

   I think I need more clarity on this question. Does this refer to how HOC pattern is used or scenarios well suited for the HOC pattern?

7. **What's the difference in handling exceptions in promises, callbacks, and async...await?**

   - Promises use the .catch().
   - Async...await uses try...catch.
   - For callbacks, there isn't a definite or standard approach for error handling, but we can pass the error as an argument to the callback function.

8. **How many arguments does setState take and why is it async?**

   - setState takes two arguments although the second one is optional. It is async because state updates are batched in React in order to prevent unnecessary re-renders when setState is called multiple times.

9. **List the steps needed to migrate a Class to Function Component.**

   - Change the class to a function and remove the constructor.
   - Remove every instance of the this keyword.
   - Replace state with the useState hook.
   - Replace lifecycle methods with the useEffect hook.
   - Remove the render method and return only the JSX.

10. **List a few ways styles can be used with components.**

    - Using inline styles.
    - Applying styles from stylesheets using the className attribute.
    - Styled components (this requires installing an external module).

11. **How to render an HTML string coming from the server.**
    - This can be achieved by passing the string as a value to the dangerouslySetInnerHTML attribute. However, this can pose a performance issue as the node added by dangerouslySetInnerHTML will not be handled by React virtual DOM.
