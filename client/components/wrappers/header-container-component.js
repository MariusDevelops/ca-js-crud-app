class HeaderContainerComponent {
  htmlElement;

  constructor(children) {
    this.htmlElement = document.createElement("header");
    // this.htmlElement.className = "container";
    this.htmlElement.append(...children);
  }
}

export default HeaderContainerComponent;
