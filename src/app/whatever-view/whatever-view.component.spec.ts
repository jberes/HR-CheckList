import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxListModule, IgxAvatarModule, IgxGridModule } from 'igniteui-angular';
import { WhateverViewComponent } from './whatever-view.component';

describe('WhateverViewComponent', () => {
  let component: WhateverViewComponent;
  let fixture: ComponentFixture<WhateverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhateverViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxListModule, IgxAvatarModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhateverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
