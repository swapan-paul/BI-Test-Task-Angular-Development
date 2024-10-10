import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.component.html',
  styleUrls: ['./invite-friends.component.css']
})
export class InviteFriendsComponent implements OnInit {
  inviteEmail: any;

  constructor(
    private firestore: AngularFirestore,

  ) { }

  ngOnInit(): void {
  }

  sendInvite() {
    if (this.inviteEmail) {
      const inviteData = {
        email: this.inviteEmail,
        timestamp: new Date(),
      };

      this.firestore.collection('invites').add(inviteData).then(() => {
        console.log('Invite saved in Firebase');
      });
      this.inviteEmail = '';
    } else {
      console.log('Please enter a valid email');
    }
  }

}
