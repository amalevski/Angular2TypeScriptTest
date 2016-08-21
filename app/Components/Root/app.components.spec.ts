import { AppComponent } from './app.component';
import { RecipeListComponent } from '../RecipeList/recipe.list';

import { async, TestBed } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppComponent with TCB', function () {
  beforeEach( async(() => {
    TestBed.configureTestingModule({declarations: [AppComponent]});
    TestBed.compileComponents();
  }));

  it('should instantiate component', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  }));

  it('should have expected <h3> text', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    let h3 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

    h3 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

    expect(h3.innerText).toMatch(/Recipes/i, '<h3> should say something about "Angular 2 App"');
  }));
});
