# Cranberry
## Description

This repository serves as a fullstack purely develop application in JavaScript, created with Nodejs, Express, MongoDB and Angular 5 (Stack MEAN). With which you can start to develop Angular 5 immediately. It is derived from the official CLI angular documentation that can be found here. He also added Bootstrap, Jquery and Font-Awesome to the design.

## Installation

Install packages:
```html
$ npm install
```

## Usage
```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/Cranberry.git [NAME APP]
```
Follow the following steps and you're good to go! Important:


Start server to our API (includes auto refreshing):

```html
$ cd [NAME APP]
$ npm run dev
```
Generate files to production of Client:

``` html
$ cd [NAME APP/src/client]
$ ng build --prod
```

Start the client development mode the Client's (includes auto refreshing):
```
    $ ng serve
```
Start the client production mode the Client's (includes auto refreshing):
```
    $ ng start
```

![alt text](https://user-images.githubusercontent.com/1560278/27637944-cfa5df36-5c11-11e7-8cb7-85be0017faf1.gif)

## Coding

### Model

```javascript
export class Task {
  _id?: string
  title: string
  isDone: boolean
  n?: number
}

```
### Service
```javascript
export class TaskService {

  domain: string = `http://localhost:${port}`;

  constructor(private _httpClient: HttpClient) { }

  getTask() { //receive an array the tasks
    return this._httpClient.get<Task[]>(`${this.domain}/api/tasks`)
        .map(res => res);
  }

  ...

}
```

### Component
```javascript
export class TasksComponent implements OnInit {

  tasks: Task[]; // Array objs type Task from Class Task
  title: string;

  constructor(private _taskService: TaskService) {

    this._taskService.getTask()
        .subscribe(tasks=>{
          this.tasks = tasks
          console.log(this.tasks)
        })
  }

  ...

}
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/Cranberry. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

