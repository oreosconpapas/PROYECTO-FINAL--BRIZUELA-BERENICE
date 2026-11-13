import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Conservacion } from "./conservacion";

describe("Conservacion", () => {
  let component: Conservacion;
  let fixture: ComponentFixture<Conservacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conservacion],
    }).compileComponents();

    fixture = TestBed.createComponent(Conservacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
