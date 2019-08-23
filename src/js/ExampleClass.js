class ExampleClass {
  constructor() {
    this.specialMessage = "This is a special message.";
    this.constructorMessage = "This is the ExampleClass constructor";
    
    console.log(this.constructorMessage);
  }

  getMessage() {
    return this.specialMessage;
  }
}

export default ExampleClass;
