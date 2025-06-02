import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameCardComponent } from './game-card.component';
import { Game } from '@gog-task/core';

const mockGame: Game = {
  id: 2,
  name: 'oddworld: stranger’s wrath',
  price: 5.99,
  thumbnail: 'assets/oddworld.png',
  discount: 50
}

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCardComponent);
    fixture.componentRef.setInput('game', mockGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
