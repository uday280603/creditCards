
import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit{

    constructor(
    private _eleRef: ElementRef,
    private _renderer: Renderer2,
  ) {}

  
  ngOnInit(): void {
    // strong.className = ` text-danger d-none`;
    // strong.innerText=`Please enter valid  value `
    // this._eleRef.nativeElement.parentelement.append(strong);
    let strong = this._renderer.createElement('strong');
    this._renderer.addClass(strong,'text-danger');
    this._renderer.addClass(strong,'d-none');
    const msg =  this._renderer.createText(`Please Enter Valid Value..!`);
    this._renderer.appendChild(strong,msg)
    this._renderer.appendChild(
      this._eleRef.nativeElement.parentElement,
      strong,
    );
  }

  @HostListener('input', ['$event'])
  validateCreaditCard(eve: Event) {
    let inputControl = eve.target as HTMLInputElement;
    let val = inputControl.value.replace(/\s+/g, '');

    if (val.length > 16) {
      val = val.substring(0, 16);
    }
    // console.log(val);
    //console.log(inputControl.nextElementSibling);
    //console.log(/[^\d]/.test(val));
    if (/[^\d]/.test(val)) {
      inputControl.nextElementSibling?.classList.remove('d-none');
    } else {
      inputControl.nextElementSibling?.classList.add('d-none');
    }

    val = this.formatCreditCardVal(val);
    inputControl.value = val;
  }
  formatCreditCardVal(str: string) {
    let chunkArr: string[] = [];
    for (let i = 0; i < str.length; i = i + 4) {
      let v = str.slice(i, i + 4);
      chunkArr.push(v);
    }
    return chunkArr.join(' ');
  }
}

