// @ts-ignore
// import orm from 'orm'
// import { createModel } from '../db'

// export const PersonModel = createModel(
//     "person", 
//     {
//         name      : String,
//         surname   : String,
//         age       : Number, // FLOAT
//         male      : Boolean,
//         continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antarctica" ], // ENUM type
//         photo     : Buffer, // BLOB/BINARY
//         data      : Object // JSON encoded
//     }, 
//     {
//         methods: {
//             fullName() {
//               return this.name + ' ' + this.surname;
//             }
//         },
//         validations: {
//             age: orm.enforce.ranges.number(18, undefined, "under-age")
//         }
//     }
// )
