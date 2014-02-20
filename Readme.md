*This repository is a mirror of the [component](http://component.io) module [segmentio/list](http://github.com/segmentio/list). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/segmentio-list`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# list

  An abstraction for managing a list of views. Basically, List is to Collection as View is to Model.

## Installation

    $ component install segmentio/list

## Example

```js
var list = require('list')
  , ItemView = require('./item-view');

// Later on...
var List = list(ItemView);

var view = new List()
collection.each(view.add.bind(view));
```

## License

  MIT
