import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('searchInput should update value when input changes', () => {
    const fixture = TestBed.createComponent(DashboardComponent);

    expect(fixture.debugElement.nativeElement.value).toBeFalsy()

    const el: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const testValue = 'some_value';

    el.value = testValue;
    el.dispatchEvent(new Event('input'));

    expect(fixture.componentInstance.value).toEqual(true);
});
});
