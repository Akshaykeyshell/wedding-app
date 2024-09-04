import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {


  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;
  cards:any[] = []


  private intervalId!: number;
  selectedImage: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    console.log('InvitationComponent constructor called');
  }

  ngOnInit(): void {

    // display pics
    this.cards = ["/pic1.jpeg","/pic2.jpeg","/pic3.jpeg",
                  "/pic4.jpeg","/pic5.jpeg","/pic6.jpeg","/pic7.jpeg"]

  
    if (isPlatformBrowser(this.platformId)) {
        console.log('Running in browser environment');
        this.countdown();
      }
    }

    // manage selected image
    openFullscreen(image: string): void {
      this.selectedImage = image;
      const overlay = document.querySelector('.fullscreen-overlay') as HTMLElement;
      if (overlay) {
          overlay.style.display = 'flex';
      }
  }
  
  closeFullscreen(): void {
      this.selectedImage = null;
      const overlay = document.querySelector('.fullscreen-overlay') as HTMLElement;
      if (overlay) {
          overlay.style.display = 'none';
      }
  }

  // counter counting remaining time
    countdown() {
      if (isPlatformBrowser(this.platformId)) {  
        const weddingDate = new Date("Sep 16, 2024 9:00:00").getTime();

        this.intervalId = window.setInterval(() => {
          const now = new Date().getTime();
          const distance = weddingDate - now;

          this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

          if (distance < 0) {
            clearInterval(this.intervalId);
          }
        }, 1000);
      }
    }

    // manage cards view scrolling
    scrollCards(direction: string) {
      const cardContainer = document.querySelector('.scrollable-cards') as HTMLElement;
      if (direction === 'right') {
        cardContainer.scrollBy({ left: 250, behavior: 'smooth' });
      }
      if (direction === 'left') {
        cardContainer.scrollBy({left: -250, behavior: 'smooth'})
      }
    }

}
