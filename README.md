# UI Boilerplate

I used the variation of this structure in my last 4 projects.

The packages I used can be replaced to other packages in their types. Possibly the implentation would change.
[React](https://github.com/facebook/react) and [Director](https://github.com/flatiron/director) are the main packages for the ui part. I used webpack for the module bundling and wrote css in [CSS Modules](https://github.com/css-modules/css-modules) way.


##### Commands

```
$ npm install
$ npm start
$ npm run build
```



## Router [Director](https://github.com/flatiron/director)

* You should add url name and pattern to urls file like that.

```
export default {
  urlName: '/my-pattern',
  someOtherComponent: '/some-other-component',
  someOtherComponentDetail: '/some-other-component/:pk/:anotherPk',
  ...
};
```


* Create function for every route in router file.

```
const container = {
  someComponent() {
    route = { component: someComponent, props: { /* if you need to */ } };
  },

  someOtherComponent() { {
    route = { component: SomeOtherComponent };
  },

  someOtherComponentDetail(pk, someOtherPk) { {
    route = { component: SomeOtherComponent, props: { playerId: playerId } };
  },

  ...
}
```


* Match url names to the functions

```
Router({ // eslint-disable-line
  [urls.urlName]: 'someComponent',
  [urls.someOtherComponent]: 'someOtherComponent',
  [urls.someOtherComponentDetail]: 'someOtherComponentDetail',
  ...
}).configure({
  on: allroutes,
  resource: container
}).init(['/']);
```

You can use your urls in your view library like this `href={ urls.urlName.url() }` or `href={ urls.someOtherComponentDetail.url(2, 42) }`


 

## Structure

    .
    ├── ...
    │
    ├── App.js                          # Main component
    │
    ├── index.js                        # Main file of the project
    │
    ├── router.js                       # Routing
    │
    ├── urls.js                         # Routing
    │
    ├── src                             #
    │   │
    │   ├── ui                          # all the visible parts
    │   │   │
    │   │   ├── common                  # common components
    │   │   │   │
    │   │   │   └── SomeComponent       # Component Name  (capitalize first letter)
    │   │   │       │
    │   │   │       ├── index.js        #
    │   │   │       └── style.less      #
    │   │   │
    │   │   │
    │   │   ├── apps                    # It's about different part of the project
    │   │   │   │
    │   │   │   └── App (ya da page)    # Page or a part of the project. It can contain ->
    │   │   │       │                   # a component or not.
    │   │   │       │
    │   │   │       ├── index.js        #
    │   │   │       ├── style.less      #
    │   │   │       └── Component       # Some component that belong to the app/part
    │   │   │           │
    │   │   │           ├── index.js    #
    │   │   │           ├── style.less  #
    │   │   │           └── Component   # If it's necessary
    │   │   │               │
    │   │   │               ...         #
    │   │   │
    │   │   │
    │   │   ├── img                     #
    │   │   │
    │   │   ├── svg                     #
    │   │   │
    │   │   └── fonts                   #
    │   │
    │   └── ...
    └── ...
