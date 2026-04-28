// Type Assertion ; Force annotation
let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString: string = '{"name":"Who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;
