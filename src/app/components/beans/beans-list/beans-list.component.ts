import {Component, inject} from '@angular/core';
import {JellyBellyApiService} from "../../../services/jelly-belly-api.service";
import {JellyBean, JellyBellyApiResponse} from "../../../common/interfaceJellybelly";
import {RouterLink} from "@angular/router";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-beans-list',
  standalone: true,
  imports: [
    RouterLink,
    NgbPagination
  ],
  templateUrl: './beans-list.component.html',
  styleUrl: './beans-list.component.css'
})
export class BeansListComponent {
private readonly beanService : JellyBellyApiService = inject(JellyBellyApiService);
beans : JellyBean[] = [];
currentPage : number = 1;
apiData!: JellyBellyApiResponse;

ngOnInit() {
  this.loadBeans();

}

  protected loadBeans() {
    this.beanService.getBeans(this.currentPage).subscribe({
      next: value => {
        this.beans = value.items;
        this.apiData = value;
      },
      error : err => {console.log(err)},
      complete : () => {console.log('beans loaded')}
    })
  }


}
