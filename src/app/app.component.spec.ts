import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatChipsModule
      ],
      declarations: [
        AppComponent

      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
});

  it(`should have a starting location`, () => {
    expect(app.currentRoom.id).toEqual(app.startingLocation);
  });

  it(`should include a room decorator`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('room-decorator')).toBeTruthy();
  });
});
