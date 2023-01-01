class ContainerComponent {
  htmlElement;

  constructor(children) {
    this.htmlElement = document.createElement("div");
    this.htmlElement.className = "container card card-body";
    this.htmlElement.append(...children);
  }
}

export default ContainerComponent;
