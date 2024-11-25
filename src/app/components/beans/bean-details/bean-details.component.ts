import {Component, inject, Input, OnInit} from '@angular/core';
import {JellyBellyApiService} from "../../../services/jelly-belly-api.service";
import {JellyBean} from "../../../common/interfaceJellybelly";

@Component({
  selector: 'app-bean-details',
  standalone: true,
  imports: [],
  templateUrl: './bean-details.component.html',
  styleUrl: './bean-details.component.css'
})
export class BeanDetailsComponent implements OnInit{
@Input('id') id!: number;
bean!: JellyBean;
private readonly beanService : JellyBellyApiService = inject(JellyBellyApiService);


ngOnInit() {
 this.loadBean();
}

  private loadBean() {
    this.beanService.getBeanById(this.id).subscribe({
      next: value => {
        this.bean = value;
      },
      error : err => {console.log(err)},
      complete : () => {console.log('bean loaded')}
    });
  }
}
