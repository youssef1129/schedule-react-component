# Schedule-react-compoent



<p align="center">
  <img src="https://i.imgur.com/6M4gRIt.gif">
</p>



```js
<Schedule onAdd={onAdd} onCancel={onCancel} />
```

- [Demo](https://youssef1129.github.io/schedule-react-component-demo/)

------

### Installing

```bash
$ npm i schedule-react-component
```

### Exports


```js
import { Schedule, Ireservation } from 'schedule-react-component';

```
### Props

Common props you may want to specify include:

- `workingHours` - the working hours example : [{ hour: '9-10', isReserved: false, val: 9 }, { hour: '10-11', isReserved: false, val: 10 }, { hour: '11-12', isReserved: false, val: 11 }, { hour: '13-14', isReserved: false, val: 13 }, { hour: '14-15', isReserved: false, val: 14 }, { hour: '15-16', isReserved: false, val: 15 }, { hour: '16-17', isReserved: false, val: 16 }]
- `daysOff` - the days you don't want to reserve example : ['Sun','Sat']
- `reservations` - reservations data
- `OnAdd` - on add reservation
- `calendarClass` - calendar css class
- `dayClass` - day css class
- `hourClass` - hour css class
- `dialogClass` - dialog css class
- `dialogTitle` - dialog title
- `input` - choose the dialog input , select or other component ...
- `cancelDialogTitle` - cancel dialog title
- `onCancel` - on cancecl reservation function
- `cancelDialogClass` - cancel dialog css class

### Schedule Usage

```js
import { Ireservation, Schedule } from 'schedule-react-component'

//your data
const reservs: Array<Ireservation> = [
  { date: "2023-01-06T00:00:00.000Z", day: 6, hour: 14, id: 1, month: 1, year: 2023 },
  { date: "2023-01-06T00:00:00.000Z", day: 6, hour: 15, id: 1, month: 1, year: 2023 },
  { date: "2023-01-07T00:00:00.000Z", day: 7, hour: 16, id: 1, month: 1, year: 2023 },
  { date: "2023-02-06T00:00:00.000Z", day: 6, hour: 15, id: 1, month: 2, year: 2023 },
  { date: "2023-03-06T00:00:00.000Z", day: 6, hour: 15, id: 1, month: 3, year: 2023 },
  { date: "2023-04-06T00:00:00.000Z", day: 6, hour: 15, id: 1, month: 4, year: 2023 },
  { date: "2023-05-06T00:00:00.000Z", day: 31, hour: 15, id: 1, month: 1, year: 2023 },
]

const Component = () => {
  const onAdd = (hour: number, day: number, month: number, year: number) => {
    Post('api/addReservation',{hour,day,month,year})
  }
  const onCancel = (hour: number, day: number, month: number, year: number) => {
    Delete('api/deleteReservation',{hour,day,month,year})
  }
  return (
    <div>
      <Schedule OnAdd={onAdd} onCancel={onCancel} reservations={reservs} />
    </div>
  )
}

export default Component

```
----

### License

MIT