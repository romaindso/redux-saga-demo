// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="none"
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Redux
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold italic>
            "predictable state container for JavaScript apps"
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Summary
          </Heading>
          <Text margin="40px 0 0" textSize={45} textAlign="center">
            Core Concepts
          </Text>
          <br />
          <Text textSize={45} textAlign="center">
            Side Effects
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Why ?
          </Heading>
          <Heading size={3} textColor="secondary">
            From scripting to SPA
          </Heading>
          <List Fill>
            <ListItem>manage more state than ever</ListItem>
            <ListItem>
              lost control over the when, why, and how state is updated
            </ListItem>
            <ListItem>mutation and asynchronicity</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              <Text textColor="primary">
                Redux attempts to make state mutations predictable by imposing
                certain restrictions on how and when updates can happen
              </Text>
            </Quote>
            <Cite>Dan Abramov - co-creator of Redux</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>
            Core Concepts
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Single source of truth
          </Heading>
          <br />
          <Text textSize={35}>
            The state of your whole application is stored in an object tree
            within a single store.
          </Text>
          <br />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/core-store1.example")}
            textSize={16}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            State is read-only
          </Heading>
          <br />
          <Text textSize={35}>
            The only way to change the state is to emit an action, an object
            describing what happened.
          </Text>
          <br />
          <br />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/core-store2.example")}
            textSize={20}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Changes are made with pure functions
          </Heading>
          <br />
          <Text textSize={35}>
            To specify how the state tree is transformed by actions, you write
            pure reducers.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Reducers
          </Heading>
          <Text textSize={30}>take the previous state and an action...</Text>
          <Text textSize={30}>handle differents action type...</Text>
          <Text textSize={30}>and return a new state for each one</Text>
          <br />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/core-store3.example")}
            textSize={15}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>
            Side Effects
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Managing Side Effects
          </Heading>
          <Text margin="70px 0 0" textSize={25} textAlign="left">
            There's a lot of ways to write and manage asynchronous logic in
            Javascript.
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            There's no needs middlewares to use async logic in a Redux app, but
            it's the recommended approach.
          </Text>
          <br />
          <List Fill>
            <ListItem>functions (redux-thunk)</ListItem>
            <ListItem>promises (redux-promise)</ListItem>
            <ListItem>generators (redux-saga)</ListItem>
            <ListItem>observables (redux-observable)</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Redux-Thunk
          </Heading>
          <Text margin="70px 0 0 110px" textSize={25} textAlign="left">
            • Action creators can return a function instead of an action
          </Text>
          <br />
          <Text margin="0 0 0 110px" textSize={25} textAlign="left">
            • Can be used to delay the dispatch of an action
          </Text>
          <br />
          <Text margin="0 0 0 110px" textSize={25} textAlign="left">
            • The inner function receives the store methods{" "}
            <S type="italic">dispatch</S> and <S type="italic">getState</S> as
            parameters
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Thunk
          </Heading>
          <br />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-thunk1_1.example")}
            textSize={15}
          />
          <Text margin="40px 30px 20px" textSize={24} textAlign="left">
            To execute the login sequence we dispatch our thunk:
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-thunk1_2.example")}
            textSize={15}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Benefits
          </Heading>
          <List>
            <ListItem margin="70px 0 0 180px" textSize={25} textAlign="left">
              Simple in both concept and implementation
            </ListItem>
            <ListItem margin="40px 0 0 180px" textSize={25} textAlign="left">
              Uses familiar flow control constructs
            </ListItem>
            <ListItem margin="40px 0 0 180px" textSize={25} textAlign="left">
              Logic is all in one place
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            The problem with this approach
          </Heading>
          <Text margin="40px 0 0" textSize={25} textAlign="left">
            • No longer dispatching plain action objects
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            • Thunks are harder to test
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            • Mixing actions and side effects in asynchronous action creators
            drastically increases complexity
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            • There is no clean/easy/etc way to cancel an in-progress thunk
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Redux-Saga
          </Heading>
          <Text margin="70px 0 0" textSize={25} textAlign="left">
            • Use of ES6 generator functions to control async flow
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            • Enables complex async workflows via background-thread-like "saga"
            functions.
          </Text>
          <br />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              <Text textColor="primary" textSize={30}>
                The mental model is that a saga is like a separate thread in
                your application that's solely responsible for side effects.
                <br />
                <br />
                Redux-saga is a redux middleware, which means this thread can be
                started, paused and cancelled from the main application with
                normal redux actions, it has access to the full redux
                application state and it can dispatch redux actions as well.
              </Text>
            </Quote>
            <Cite>Redux-Saga - official documentation</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Built on top of Generators
          </Heading>
          <Text margin="40px 0 0" textSize={25} textAlign="left">
            • Generators may be paused in the middle, one or many times, and
            resumed later, allowing other code to run during these paused
            periods
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            • Nothing can pause a generator from the outside; it pauses itself
            when it comes across a <S type="italic">yield</S>
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            • Once a generator has <S type="italic">yield</S>
            -paused itself, it cannot resume on its own. An external control
            must be used to restart the generator
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            • Enables 2-way message passing into and out of the generator, as it
            progresses. You send messages out with each{" "}
            <S type="italic">yield</S>, and you send messages back in with each
            restart.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            Syntax
          </Heading>
          <br />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/generators1.example")}
            textSize={15}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            Exercice
          </Heading>
          <br />
          <Text textSize={22} textColor="secondary">
            Guess the return value ?
          </Text>
          <br />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/generators2.example")}
            textSize={15}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            Exercice
          </Heading>
          <br />
          <Text textSize={22} textColor="secondary">
            Guess the return value ?
          </Text>
          <br />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/generators3.example")}
            textSize={15}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            Exercice
          </Heading>
          <br />
          <Text textSize={22} textColor="secondary">
            Guess the return value ?
          </Text>
          <br />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/generators4.example")}
            textSize={15}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            Exercice
          </Heading>
          <br />
          <Text textSize={22} textColor="secondary">
            Guess the return value ?
          </Text>
          <br />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/generators5.example")}
            textSize={15}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            redux-saga/effects
          </Heading>
          <Text margin="40px 0 0" textSize={25} textAlign="left">
            To express the Saga logic we yield plain JavaScript Objects from the
            Generator. We call those objects <S type="italic">Effects</S>.
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            An <S type="italic">Effects</S> is simply an object which contains
            some information to be interpreted by the middleware.
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            You can view <S type="italic">Effects</S> like instructions to the
            middleware to perform some operation (invoke some asynchronous
            function, dispatch an action to the store).
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            This way, when testing the Generator, all we need to do is to check
            that it yields the expected instruction by doing a simple deepEqual
            on the yielded Object.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            Call
          </Heading>
          <Text textSize={22} textColor="secondary" margin="20px 30px 10px">
            Creates an Effect description that instructs the middleware to call
            the function fn with args as arguments
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-saga2_1.example")}
            textSize={15}
          />
          <br />
          <br />
          <Heading size={6} textColor="secondary">
            Put
          </Heading>
          <Text textSize={22} textColor="secondary" margin="20px 30px 10px">
            Creates an Effect description that instructs the middleware to
            dispatch an action to the Store
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-saga2_2.example")}
            textSize={15}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            TakeLatest
          </Heading>
          <Text
            textSize={22}
            textColor="secondary"
            margin="20px 30px 0"
            textAlign="left"
          >
            Each time an action which matches pattern is dispatched to the
            store, takeLatest starts a new saga task in the background.
          </Text>
          <Text
            textSize={22}
            textColor="secondary"
            margin="10px 30px 10px"
            textAlign="left"
          >
            If a saga task was started previously, and if this task is still
            running, the task will be cancelled
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-saga3_1.example")}
            textSize={15}
          />
          <br />
          <Heading size={6} textColor="secondary">
            Take
          </Heading>
          <Text
            textSize={22}
            textColor="secondary"
            margin="20px 30px 0"
            textAlign="left"
          >
            Creates an Effect description that instructs the middleware to wait
            for a specified action on the Store.
          </Text>
          <Text
            textSize={22}
            textColor="secondary"
            margin="10px 30px 10px"
            textAlign="left"
          >
            The Generator is suspended until an action that matches pattern is
            dispatched.
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-saga3_2.example")}
            textSize={15}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            Fork
          </Heading>
          <Text textSize={22} textColor="secondary" margin="20px 30px 10px">
            Creates an Effect description that instructs the middleware to
            perform a non-blocking call on fn
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-saga4_1.example")}
            textSize={15}
          />
          <br />
          <Heading size={6} textColor="secondary">
            Select
          </Heading>
          <Text textSize={22} textColor="secondary" margin="20px 30px 10px">
            Creates an effect that instructs the middleware to invoke the
            provided selector on the current Store's state (i.e. returns the
            result of selector(getState(), ...args))
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-saga4_2.example")}
            textSize={15}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Saga
          </Heading>
          <br />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-saga1_1.example")}
            textSize={15}
          />
          <Text margin="40px 30px 20px" textSize={24} textAlign="left">
            To run our code, we just need to register the saga with the
            middleware :
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-saga1_2.example")}
            textSize={15}
          />
        </Slide>

        <CodeSlide
          bgColor="red"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga4.example")}
          ranges={[
            {
              loc: [0, 12],
              note: `Creates an Effect description that instructs the middleware to perform a non-blocking call on fn`
            },
            {
              loc: [13, 21],
              note: `Creates an effect that instructs the middleware to invoke the provided selector on the current 
              Store's state (i.e. returns the result of selector(getState(), ...args))`
            }
          ]}
        />

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Benefits
          </Heading>
          <List margin="10px 0 0 230px">
            <ListItem margin="40px 0 0 0" textSize={25} textAlign="left">
              Easy to understand, easy to test
            </ListItem>
            <ListItem margin="40px 0 0 0" textSize={25} textAlign="left">
              Excellent documentation
            </ListItem>
            <ListItem margin="40px 0 0 0" textSize={25} textAlign="left">
              Logic is all in one place
            </ListItem>
            <ListItem margin="40px 0 0 0" textSize={25} textAlign="left">
              Supports very complex operations
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            The problem with this approach
          </Heading>
          <Text margin="40px 0 0" textSize={25} textAlign="left">
            • Unit testing requires intimate knowledge of the implementation of
            the saga
          </Text>
          <br />
          <Text textSize={25} textAlign="left">
            • Debugging is difficult
          </Text>
          <br />
        </Slide>
      </Deck>
    );
  }
}
