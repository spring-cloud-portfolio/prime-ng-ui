import {Component, OnInit} from '@angular/core';
import {InternalUserService} from '../../../../service/internal-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: InternalUserService) {
  }

  ngOnInit(): void {
  }

}
