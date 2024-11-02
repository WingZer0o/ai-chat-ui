import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  ngOnInit(): void {}

  public addNewChat(): void {}
}
