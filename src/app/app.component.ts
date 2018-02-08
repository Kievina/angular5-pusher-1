import { Component, OnInit } from '@angular/core';
import { PusherService } from './pusher.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Pusher Liker';
  likes: any =  10;

  constructor(private pusherService: PusherService) {
  }

  ngOnInit() {
    this.pusherService.channel.bind('new-like', data => {
      this.likes = data.likes ;
    });
  }

  // add to the number of likes to the server
  liked() {
    this.likes = parseInt(this.likes, 10) + 1;
    this.pusherService.like( this.likes );
  }

}
