import { HasFormatter } from "../interfaces/HasFormatter";

enum Position {
  Start = 'start',
  End = 'end'
}

function logRender(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalRender = descriptor.value;

  descriptor.value = function(item: HasFormatter, heading: string, pos: Position) {
    console.log(`Rendering item with heading "${heading}" at position "${pos}"`);
    originalRender.call(this, item, heading, pos);
  }

  return descriptor;
}

export class ListTemplate {
  constructor(private container: HTMLUListElement){}

  @logRender
  render(item: HasFormatter, heading: string, pos: Position){
    const li = document.createElement('li');
  
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if(pos === Position.Start){
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}


