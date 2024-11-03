import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { ChatChannel } from './types/chat-channel';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  
  public chatChannels: ChatChannel[] = [
    {
      id: "0",
      name: "First Channel"
    },
    {
      id: "1",
      name: "Second Channel"
    }
  ];

  ngOnInit(): void {}

  public addNewChat(): void {
    let newChannel = new ChatChannel("2", "Third Channel");
    this.chatChannels.push(newChannel);
  }

  public deleteChannel(channel: ChatChannel): void {
    // TODO make api call to delete channel.
    // success after api call
    this.chatChannels = this.chatChannels.filter(x => x.id !== channel.id);
  }
}
