// single inheritance

class A {
  constructor() {}

  aMain(a) {
    console.log("A can run ", a);
  }
}

class B extends A {
  constructor() {
    super();
  }

  bMain(a) {
    console.log("B ************can run ", a);
  }
}

class C extends B {
  constructor() {
    super();
  }

  cMain(a) {
    console.log("C ************can run ", a);
  }
}

class D extends C {
  constructor() {
    super();
  }

  dMain(a) {
    console.log("d ************can run ", a);
  }
}

// new D().aMain("hey");
// new D().bMain("hello");
// new D().cMain("hi");
// new D().dMain("hota hai life hai ");
