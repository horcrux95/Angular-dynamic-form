import { RestHandlerService } from "./../services/rest-handler.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  ProductList: any = [];

  constructor(private _rh: RestHandlerService, private router: Router) {}

  ngOnInit() {
    this._rh.getProductList().subscribe(
      data => {
        this.ProductList = data;
      },
      err => {
        //handle error
        console.log(err);
      }
    );
  }

  fetchDefinition(url) {
    this._rh.getDefinationUrl(url).subscribe(
      data => {
        this._rh.setDefination(data);

        this.router.navigate(["/product"]);
      },
      err => {
        //handle error
        console.log(err);
      }
    );
  }
}
