import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownComponent } from './dropdown.component';
import { By } from '@angular/platform-browser';
import { Icons } from '../../consts';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    fixture.componentRef.setInput('dropdownText', 'TEST');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set dropdownText value', () => {
    const dropdownTextValue = 'VALUE';
    fixture.componentRef.setInput('dropdownText', dropdownTextValue);
    fixture.detectChanges();
    const elem = fixture.debugElement.query(By.css('.dropdown'));
    expect(elem.nativeElement.textContent.trim()).toBe(dropdownTextValue);
  });

  it('should set dropdownIcon', () => {
    const icon = Icons.ShoppingCart;
    fixture.componentRef.setInput('dropdownIcon', icon);
    fixture.detectChanges();
    const elem = fixture.debugElement.query(By.css('.dropdown img'));
    expect(elem).toBeTruthy();
  });
});
