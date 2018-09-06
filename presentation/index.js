// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  reduxsaga: require("../assets/images/redux-saga.jpg"),
  montreal: require("../assets/images/montreal.jpg")
};

preloader(images);

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
import "./index.css";

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#eb643b",
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
            Redux Saga
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold italic>
            "générateur de bonheur"
          </Text>
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage={images.montreal.replace("/", "")}
          bgDarken={0.75}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Lego addict
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              TechLead frontend @Lectra
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Moving to Montréal soon ❤️
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
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
          <Heading size={5}>
            The state of your whole application is stored in an object tree
            within a single store
          </Heading>
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
          <Heading size={5}>
            The only way to change the state is to emit an action, an object
            describing what happened
          </Heading>
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
          <Heading size={5}>
            To specify how the state tree is transformed by actions, you write
            pure reducers
          </Heading>
        </Slide>

        <CodeSlide
          bgColor="#2d2d2d"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/core-store3.example")}
          ranges={[
            { loc: [0, 0], title: "Reducers" },
            { loc: [0, 1] },
            { loc: [9, 10], note: "take the previous state and an action..." },
            { loc: [10, 11] },
            { loc: [11, 12] },
            { loc: [19, 20], note: "handle differents action type..." },
            { loc: [11, 19], note: "and return a new state for each one" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>
            Side Effects
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Managing Side Effects
          </Heading>
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
          <Heading size={4} textColor="primary" caps>
            Redux-Thunk
          </Heading>
          <br />
          <Text textSize={35}>
            <S type="bold">
              Action creators can return a function instead of an action
            </S>
          </Text>
          <br />
          <Text textSize={35}>
            <S type="bold">Can be used to delay the dispatch of an action</S>
          </Text>
          <br />
          <Text textSize={35}>
            <S type="bold">
              The inner function receives the store methods{" "}
              <S type="italic">dispatch</S> and <S type="italic">getState</S> as
              parameters
            </S>
          </Text>
        </Slide>

        <CodeSlide
          bgColor="#2d2d2d"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-thunk.1.example")}
          ranges={[
            { loc: [0, 0], title: "Thunks" },
            { loc: [0, 14] },
            {
              loc: [15, 16],
              note: "To execute the login sequence we dispatch our thunk:"
            }
          ]}
        />

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Benefits
          </Heading>
          <br />
          <Heading size={6} lineHeight={2} fit>
            Simple in both concept and implementation
          </Heading>
          <Heading size={6} lineHeight={2}>
            Uses familiar flow control constructs
          </Heading>
          <Heading size={6} lineHeight={2}>
            Logic is all in one place
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Limitations
          </Heading>
          <br />
          <Text textSize={35}>
            <S type="bold">No longer dispatching plain action objects</S>
          </Text>
          <br />
          <Text textSize={35}>
            <S type="bold">Thunks are harder to test</S>
          </Text>
          <br />
          <Text textSize={35}>
            <S type="bold">
              Mixing actions and side effects in asynchronous action creators
              drastically increases complexity
            </S>
          </Text>
          <br />
          <Text textSize={35}>
            <S type="bold">
              There is no clean/easy way to cancel an in-progress thunk
            </S>
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Redux-Saga
          </Heading>
          <Text margin="70px 0 0" textSize={35} fit>
            <S type="bold">
              Use of ES6 generator functions to control async flow
            </S>
          </Text>
          <br />
          <Text textSize={35}>
            <S type="bold">
              Enables complex async workflows via background-thread-like "saga"
              functions
            </S>
          </Text>
        </Slide>

        <CodeSlide
          bgColor="#2d2d2d"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga1.example")}
          ranges={[
            { loc: [0, 0], title: "Saga" },
            { loc: [0, 19] },
            {
              loc: [20, 21],
              note:
                "To run our code, we just need to register the saga with the middleware"
            }
          ]}
        />

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

        <Slide bgColor="#1f2022">
          <Image
            src={images.reduxsaga.replace("/", "")}
            margin="0px auto 40px"
          />
          <Heading size={4} caps fit textColor="primary" textFont="primary">
            WorkFlow
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
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

        <CodeSlide
          bgColor="#2d2d2d"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/generators1.example")}
          ranges={[
            { loc: [0, 6], title: "Syntax" },
            { loc: [7, 9] },
            { loc: [10, 15] }
          ]}
        />

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
          <Heading size={4} textColor="primary" caps>
            Effects
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

        <CodeSlide
          bgColor="#2d2d2d"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga2.example")}
          ranges={[
            {
              loc: [0, 5],
              note:
                "Creates an Effect description that instructs the middleware to call the function fn with args as arguments"
            },
            {
              loc: [6, 12],
              note:
                "Creates an Effect description that instructs the middleware to dispatch an action to the Store"
            }
          ]}
        />
        <CodeSlide
          bgColor="#2d2d2d"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga3.example")}
          ranges={[
            {
              loc: [0, 4],
              note: `Each time an action which matches pattern is dispatched to the store, takeLatest starts a 
              new saga task in the background. If a saga task was started previously, and if this task is still running, 
              the task will be cancelled`
            },
            {
              loc: [5, 14],
              note: `Creates an Effect description that instructs the middleware to wait for a specified 
              action on the Store. The Generator is suspended until an action that matches pattern is dispatched.`
            }
          ]}
        />
        <CodeSlide
          bgColor="#2d2d2d"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga4.example")}
          ranges={[
            {
              loc: [0, 12],
              note:
                "Creates an Effect description that instructs the middleware to perform a non-blocking call on fn"
            },
            {
              loc: [13, 21],
              note: `Creates an effect that instructs the middleware to invoke the provided selector on the current 
              Store's state (i.e. returns the result of selector(getState(), ...args))`
            }
          ]}
        />

        <CodeSlide
          bgColor="#2d2d2d"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga5.example")}
          ranges={[
            { loc: [0, 0], title: "All in one" },
            {
              loc: [0, 13],
              note: "Create the saga middleware and then run the saga"
            },
            {
              loc: [14, 24],
              note: "Start all our watchers"
            },
            {
              loc: [25, 29],
              note: "Listen to a specific redux action and delagate to a saga"
            },
            {
              loc: [25, 39]
            }
          ]}
        />

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Benefits
          </Heading>
          <br />
          <Heading size={6} lineHeight={2}>
            Easy to understand, easy to test
          </Heading>
          <Heading size={6} lineHeight={2}>
            Excellent documentation
          </Heading>
          <Heading size={6} lineHeight={2}>
            Logic is all in one place
          </Heading>
          <Heading size={6} lineHeight={2}>
            Supports very complex operations
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Limitations
          </Heading>
          <br />
          <Heading size={6} lineHeight={1}>
            Unit testing requires full knowledge of the implementation of the
            saga
          </Heading>
          <Heading size={6} lineHeight={2}>
            Debugging is difficult
          </Heading>
        </Slide>

        <CodeSlide
          bgColor="#2d2d2d"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga6.example")}
          ranges={[
            { loc: [0, 0], title: "Testing" },
            {
              loc: [0, 9]
            },
            {
              loc: [10, 26]
            }
          ]}
        />

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Redux Saga Test Plan
          </Heading>
          <br />

          <Heading size={6} lineHeight={2}>
            Allow to test only a specific effect
          </Heading>
          <Heading size={6} lineHeight={2}>
            Saga effects order doesn't matter
          </Heading>
        </Slide>

        <CodeSlide
          bgColor="#2d2d2d"
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga7.example")}
          ranges={[
            { loc: [0, 0], title: "Testing with redux-saga-test-plan" },
            {
              loc: [0, 9]
            },
            {
              loc: [10, 27]
            }
          ]}
        />

        <Slide
          transition={["slide"]}
          bgImage={images.montreal.replace("/", "")}
          bgDarken={0.75}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Merci !
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              @romaindso
            </Heading>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
