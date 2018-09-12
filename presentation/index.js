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
  tweetredux: require("../assets/images/tweet-redux.jpg"),
  montreal: require("../assets/images/montreal.jpg"),
  orchestre: require("../assets/images/orchestre.jpg"),
  facepalm: require("../assets/images/facepalm.jpg"),
  reduxsagafull1: require("../assets/images/redux-saga-full-1.jpg"),
  reduxsagafull2: require("../assets/images/redux-saga-full-2.jpg")
};

preloader(images);

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
import "./theme-darken.css";
// import "./theme-lighten.css";

/* THEME DARKEN */
const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#eb643b",
    quaternary: "#2d2d2d",
    white: "white",
    orange: "#eb643b"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

/* THEME LIGHTHEN */
// const theme = createTheme(
//   {
//     primary: "#eb643b",
//     secondary: "#1F2022",
//     tertiary: "white",
//     quaternary: "white",
//     white: "white",
//     orange: "#eb643b"
//   },
//   {
//     primary: "Montserrat",
//     secondary: "Helvetica"
//   }
// );

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="none"
      >
        <Slide transition={["zoom"]} bgColor={theme.screen.colors.white}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Redux Saga
          </Heading>
          <Text
            margin="10px 0 0"
            textColor={theme.screen.colors.orange}
            size={1}
            fit
            bold
            italic
          >
            "générateur de bonheur"
          </Text>
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage={images.montreal.replace("/", "")}
          bgDarken={0.75}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor={theme.screen.colors.white}>
              Lego addict
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor={theme.screen.colors.orange}>
              TechLead frontend @Lectra
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor={theme.screen.colors.white}>
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
            <ListItem margin="15px 0 0 0">
              lost control over the when, why, and how state is updated
            </ListItem>
            <ListItem margin="15px 0 0 0">mutation and asynchronicity</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>
            Redux
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor={theme.screen.colors.white}
        >
          <BlockQuote>
            <Quote>
              <Text textColor={theme.screen.colors.white}>
                Redux attempts to make state mutations predictable by imposing
                certain restrictions on how and when updates can happen
              </Text>
            </Quote>
            <Cite textColor={theme.screen.colors.orange}>
              Dan Abramov - co-creator of Redux
            </Cite>
          </BlockQuote>
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
          bgColor={theme.screen.colors.quaternary}
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
            <ListItem margin="15px 0 0 0">promises (redux-promise)</ListItem>
            <ListItem margin="15px 0 0 0">generators (redux-saga)</ListItem>
            <ListItem margin="15px 0 0 0">
              observables (redux-observable)
            </ListItem>
            <ListItem margin="15px 0 0 0">...</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>
            Redux-Thunk
          </Heading>
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
          bgColor={theme.screen.colors.quaternary}
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

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>
            Redux-Saga
          </Heading>
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
          bgColor={theme.screen.colors.quaternary}
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

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor={theme.screen.colors.white}
        >
          <BlockQuote>
            <Quote>
              <Text textColor={theme.screen.colors.white} textSize={30}>
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
            <Cite textColor={theme.screen.colors.orange}>
              Redux-Saga - official documentation
            </Cite>
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

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>
            1<sup>st</sup> Pillar
          </Heading>
          <Heading size={4} textColor="primary" caps>
            Generators
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Built on top of Generators
          </Heading>
          <Appear fid="1">
            <Text margin="40px 0 0" textSize={30}>
              <S type="bold">
                Generators may be paused in the middle, one or many times, and
                resumed later, allowing other code to run during these paused
                periods
              </S>
            </Text>
          </Appear>

          <br />
          <Appear fid="2">
            <Text textSize={30}>
              <S type="bold">
                Nothing can pause a generator from the outside; it pauses itself
                when it comes across a <S type="italic">yield</S>
              </S>
            </Text>
          </Appear>

          <br />
          <Appear fid="3">
            <Text textSize={30}>
              <S type="bold">
                Once a generator has <S type="italic">yield</S>
                -paused itself, it cannot resume on its own. An external control
                must be used to restart the generator
              </S>
            </Text>
          </Appear>

          <br />
          <Appear fid="4">
            <Text textSize={30}>
              <S type="bold">
                Enables 2-way message passing into and out of the generator, as
                it progresses. You send messages out with each{" "}
                <S type="italic">yield</S>, and you send messages back in with
                each restart
              </S>
            </Text>
          </Appear>
        </Slide>

        <CodeSlide
          bgColor={theme.screen.colors.quaternary}
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

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>
            2<sup>nd</sup> Pillar
          </Heading>
          <Heading size={4} textColor="primary" caps>
            Effects
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor={theme.screen.colors.white}
        >
          <BlockQuote>
            <Quote>
              <Text textColor={theme.screen.colors.white} textSize={45}>
                Event Sourcing ensures that all changes to application state are
                stored as a sequence of events.
              </Text>
            </Quote>
            <Cite textColor={theme.screen.colors.orange}>Martin Fowler</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Effects
          </Heading>
          <Appear fid="1">
            <Text margin="40px 0 0" textSize={30}>
              <S type="bold">
                To express the Saga logic we yield plain JavaScript Objects from
                the Generator
              </S>
            </Text>
          </Appear>
          <br />
          <Appear fid="2">
            <Text textSize={30}>
              <S type="bold">
                An <S type="italic">Effect</S> is simply an object which
                contains some information to be interpreted by the middleware
              </S>
            </Text>
          </Appear>
          <br />
          <Appear fid="3">
            <Text textSize={30}>
              <S type="bold">
                <S type="italic">Effects</S> are like instructions to the
                middleware to perform some operation
              </S>
            </Text>
          </Appear>
          <br />
          <Appear fid="4">
            <Text textSize={30}>
              <S type="bold">
                Testing the Generator is a simple check that it yields the
                expected instruction (deepEqual on the yielded Object)
              </S>
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="#1f2022">
          <Image
            src={images.reduxsagafull1.replace("/", "")}
            margin="0px auto 40px"
          />
          <Heading size={4} caps fit textColor="primary" textFont="primary">
            Full Workflow
          </Heading>
        </Slide>

        <Slide bgColor="#1f2022">
          <Image
            src={images.reduxsagafull2.replace("/", "")}
            margin="0px auto 40px"
          />
          <Heading size={4} caps fit textColor="primary" textFont="primary">
            Full Workflow
          </Heading>
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage={images.orchestre.replace("/", "")}
          bgDarken={0.55}
        >
          <Appear fid="1">
            <div>
              <Heading size={1} caps fit textColor={theme.screen.colors.white}>
                Effects
              </Heading>
              <Heading size={1} caps fit textColor={theme.screen.colors.orange}>
                Driven
              </Heading>
              <Heading size={1} caps fit textColor={theme.screen.colors.white}>
                Orchestrator
              </Heading>
            </div>
          </Appear>
        </Slide>

        <CodeSlide
          bgColor={theme.screen.colors.quaternary}
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
          bgColor={theme.screen.colors.quaternary}
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga3.example")}
          ranges={[
            {
              loc: [0, 9],
              note: `Creates an Effect description that instructs the middleware to wait for a specified 
              action on the Store. The Generator is suspended until an action that matches pattern is dispatched.`
            },
            {
              loc: [10, 15],
              note: `Each time an action which matches pattern is dispatched to the store, takeLatest starts a 
              new saga task in the background. If a saga task was started previously, and if this task is still running, 
              the task will be cancelled`
            }
          ]}
        />

        <CodeSlide
          bgColor={theme.screen.colors.quaternary}
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
              Store's state`
            }
          ]}
        />

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            API
          </Heading>
          <Heading size={3} textColor="secondary">
            A dozen effects only
          </Heading>
          <List Fill>
            <ListItem>call</ListItem>
            <ListItem margin="10px 0 0 0">put</ListItem>
            <ListItem margin="10px 0 0 0">take</ListItem>
            <ListItem margin="10px 0 0 0">fork</ListItem>
            <ListItem margin="10px 0 0 0">select</ListItem>
            <ListItem margin="10px 0 0 0">take</ListItem>
            <ListItem margin="10px 0 0 0">takeLatest / takeEvery</ListItem>
            <ListItem margin="10px 0 0 0">...</ListItem>
          </List>
        </Slide>

        <CodeSlide
          bgColor={theme.screen.colors.quaternary}
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

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary" caps>
            Testing
          </Heading>
        </Slide>

        <CodeSlide
          className="codeslide-full-height"
          bgColor={theme.screen.colors.quaternary}
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga6.example")}
          ranges={[
            {
              loc: [0, 26]
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
          className="codeslide-full-height"
          bgColor={theme.screen.colors.quaternary}
          textSize={20}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/redux-saga7.example")}
          ranges={[
            {
              loc: [0, 27]
            }
          ]}
        />

        <Slide
          transition={["slide"]}
          bgImage={images.facepalm.replace("/", "")}
          bgDarken={0.7}
        >
          <Heading size={1} caps fit textColor={theme.screen.colors.white}>
            Just use redux saga !
          </Heading>
          <Appear fid="2">
            <Heading size={1} caps fit textColor={theme.screen.colors.orange}>
              nobody, never.
            </Heading>
          </Appear>
        </Slide>

        <Slide bgColor="secondary">
          <Image
            src={images.tweetredux.replace("/", "")}
            margin="0px auto 40px"
          />
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage={images.montreal.replace("/", "")}
          bgDarken={0.75}
        >
          <Heading size={1} caps fit textColor={theme.screen.colors.white}>
            Merci !
          </Heading>
          <Appear fid="2">
            <Heading size={1} caps fit textColor={theme.screen.colors.orange}>
              @romaindso
            </Heading>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
