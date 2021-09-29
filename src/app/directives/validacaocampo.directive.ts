import { Renderer2, AfterViewInit  } from '@angular/core';
import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[validacaoCampo]'
})

export class validacaoCampoDirective implements AfterViewInit {
    
  @Input() tipo: string | undefined = undefined;
  private cor: string = 'border-color: rgb(15, 117, 124);';
  private verde: string = '#0F0';
  private vermelho: string = 'red';

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  public ngAfterViewInit(): void {
    this.aplicarAtributos();
  }

  private aplicarAtributos(): void {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.cor);
  }

  @HostListener('blur') onBlur() {
    this.validacoes();
  }

  @HostListener('change') onChange() {
    this.validacoes();
  }

  @HostListener('mouseout') onMouseOut() {
    this.validacoes();
  }

  private validacoes() : void {
    if (this.tipo == undefined || this.tipo == '') {
        
        if (this.el.nativeElement.value != '')
            this.renderer.setStyle(this.el.nativeElement, 'border-color', this.verde);
        else
            this.renderer.setStyle(this.el.nativeElement, 'border-color', this.vermelho);
        return;
    }

    if (this.tipo != undefined && this.tipo != '') {
        if (this.tipo == 'email'){
            var valid = EmailValidator(this.el.nativeElement.value);
            if (valid)
                this.renderer.setStyle(this.el.nativeElement, 'border-color', this.verde);
            else    
                this.renderer.setStyle(this.el.nativeElement, 'border-color', this.vermelho);
            return;
        }
        if (this.tipo == 'senha'){
         
            return;
        }
    }
}
}

  export const EmailValidator = (email: string) => {
    if (!email) return false;
  
    const regex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
  
    return regex.test(email);
  }

  export const SenhaMaiorQueOitoCaracteres = (string = '') => {
    return /(?=.{8,})/.test(string)
  }
  
  export const SenhaPossuiCaracterMinusculo = (string = '') => {
    return /(?=.*[a-z])/.test(string)
  }
  
  export const SenhaPossuiCaracterMaiusculo = (string = '') => {
    return /(?=.*[A-Z])/.test(string)
  }
  
  export const SenhaPossuiCaracterEspecial = (string = '') => {
    return /(?=.*[!@#$%^&*])/.test(string)
  }
