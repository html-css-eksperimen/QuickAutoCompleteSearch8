import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentangAplikasiComponent } from './tentang-aplikasi.component';

describe('TentangAplikasiComponent', () => {
  let component: TentangAplikasiComponent;
  let fixture: ComponentFixture<TentangAplikasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentangAplikasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentangAplikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
