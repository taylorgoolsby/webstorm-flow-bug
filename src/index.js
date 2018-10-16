// @flow

// Email is imported through ./types/Email.js
import type {Email} from "./types/Email";

// User is imported through ./types/index.js
import type {User} from './types'

type Car = {
  vin: string
}

/************************/
// The following does not work:

// webstorm hover on 18 22 === Array<any>
// yarn flow type-at-pos src/index.js 18 22 === Array<Email>
function checkEmails(emails: Array<Email>): void {
  // webstorm hover on 21 22 === any
  // yarn flow type-at-pos src/index.js 21 14 === Email
  for (const email of emails) {
    // webstorm hover on 24 15 === any
    // yarn flow type-at-pos src/index.js 24 15 === string
    if (email.status !== 'UNOPENED') {
      throw new Error(
        'The email must be unopened.'
      )
    }
  }
}

// webstorm hover on 34 21 === Array<any>
// yarn flow type-at-pos src/index.js 34 21 === Array<User>
function checkUsers(users: Array<User>): void {
  // webstorm hover on 37 16 === any
  // yarn flow type-at-pos src/index.js 37 16 === string
  if (users[0].name === 'Pikachu') {
    throw new Error("Pikachu is a banned.")
  }
}


// webstorm hover on 45 20 === any
// yarn flow type-at-pos src/index.js 45 20 === User
function checkUser(user: User) {

}

/************************/
// The following works:

function checkCar(car: Car) {
  car.vin = '1'
}