import { Component, OnInit } from '@angular/core';
import { Friend } from '../../Friend';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-friends',
  standalone: false,
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  showForm = false;
  isUpdate = false;
  friend: Friend = {} as Friend;
  friends: Friend[] = [];
  searchTerm = '';
  selectedCategory = '';

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.loadFriends();
  }

  loadFriends(): void {
    this.friendService.getFriends().subscribe(friends => {
      this.friends = friends ?? [];
    });
  }

saveFriend(save: boolean): void {
  if (save) {
    if (!this.isUpdate) {
      const newFriend = { ...this.friend };
      delete newFriend.id;

      if (newFriend.favorito === undefined) {
        newFriend.favorito = false;
      }

      this.friendService.saveFriend(newFriend).subscribe({
        next: () => this.loadFriends(),
      });
    } else {
      if (this.friend.id !== undefined) { 
        this.friendService.updateFriend(this.friend).subscribe({
          next: () => this.loadFriends(),
        });
        this.isUpdate = false;
      } 
    }
  }

  
  this.friend = {} as Friend;
  this.showForm = false;
}



  update(friend: Friend): void {
    this.friend = { ...friend };
    this.isUpdate = true;
    this.showForm = true;
  }

  remove(id: number): void {
    this.friendService.deleteFriend(id).subscribe(() => this.loadFriends());
  }

  create(): void {
    this.friend = {} as Friend;
    this.showForm = true;
  }

  filteredFriends(): Friend[] {
    if (!this.friends) return [];

    const search = this.searchTerm.toLowerCase();

    return this.friends.filter(friend => {
      const matchesSearch = !this.searchTerm || (
        friend.name?.toLowerCase().includes(search) ||
        friend.social?.toLowerCase().includes(search) ||
        friend.origin?.toLowerCase().includes(search) ||
        friend.city?.toLowerCase().includes(search) ||
        friend.state?.toLowerCase().includes(search) ||
        friend.job?.toLowerCase().includes(search) ||
        friend.phone?.toString().includes(search) ||
        friend.age?.toString().includes(search) ||
        friend.gender?.toLowerCase().includes(search)
      );

      const matchesCategory = !this.selectedCategory || (
        this.selectedCategory.toLowerCase() === 'favoritos'
          ? friend.favorito
          : friend.social?.toLowerCase() === this.selectedCategory.toLowerCase()
      );

      return matchesSearch && matchesCategory;
    });
  }
}
