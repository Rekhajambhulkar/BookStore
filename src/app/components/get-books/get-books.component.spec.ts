import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetBooksComponent } from './get-books.component';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('GetBooksComponent', () => {
  let component: GetBooksComponent;
  let fixture: ComponentFixture<GetBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [HttpClientTestingModule, RouterTestingModule], 
       providers: [],
      declarations: [ GetBooksComponent
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'pipes-unit-testing'`, () => {
    const fixture = TestBed.createComponent(GetBooksComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pipes-unit-testing');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(GetBooksComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').textContent).toContain('Book');
  });
});
