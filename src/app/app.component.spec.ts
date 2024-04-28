import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WorldService } from './world.service';

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
});

  it(`should have a starting location`, () => {
    expect(app.currentRoom.id).toEqual(WorldService.STARTING_LOCATION);
  });

  it(`should include a room decorator`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('room-decorator')).toBeTruthy();
  });
});
