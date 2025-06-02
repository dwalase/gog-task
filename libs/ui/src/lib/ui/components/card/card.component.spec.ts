import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    fixture.componentRef.setInput('header', 'TEST');
    fixture.componentRef.setInput('imgUrl', '/')
    fixture.componentRef.setInput('buttonText', 'TEST')
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set header value', () => {
    const headerValue = 'VALUE';
    fixture.componentRef.setInput('header', headerValue);
    fixture.detectChanges();
    const elem = fixture.debugElement.query(By.css('.card__title'));
    expect(elem.nativeElement.textContent).toBe(headerValue);
  });

  it('should emmit onButtonClick once', () => {
    const spy = vi.spyOn(component.buttonClick, 'emit');
    const button = fixture.debugElement.query(By.css('.lib-button'));
    button.nativeElement.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should disable button', () => {
    fixture.componentRef.setInput('buttonDisabled', true);
    fixture.detectChanges();
    const spy = vi.spyOn(component.buttonClick, 'emit');
    const button = fixture.debugElement.query(By.css('.lib-button'));
    button.nativeElement.click();
    expect(spy).toHaveBeenCalledTimes(0);
    expect(button.nativeElement.disabled).toBeTruthy();
  });
});
