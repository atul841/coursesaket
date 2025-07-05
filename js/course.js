function carousel() {
    return {
      currentIndex: 0,
      visibleCards: 3,
      courses: [
        {
          image: './image/image_4.png',
          title: 'The Ultimate Job Ready Data Science Course',
          description: 'Ready to break into the world of Data Science? This all-in-one Job-Rea...',
          discount: '36% OFF',
          duration: '25h 15m',
          lessons: 153,
          price: 2899,
          originalPrice: 4499,
          featured: true
        },
        {
          image: './image/image_4.png',
          title: '[English] Complete 2025 Python Bootcamp',
          description: 'Unlock your potential and become a confident Python developer in 2025!...',
          discount: '51% OFF',
          duration: '12h 24m',
          lessons: 82,
          price: 988,
          originalPrice: 2000,
          featured: false
        },
        {
          image: './image/image_4.png',
          title: 'Advanced Python Projects',
          description: 'Hands-on Python with real projects and deployment techniques...',
          discount: '40% OFF',
          duration: '20h 30m',
          lessons: 100,
          price: 1999,
          originalPrice: 3299,
          featured: true
        },
        {
          image: './image/image_4.png',
          title: 'Machine Learning A-Z',
          description: 'Learn ML from scratch and build 6 real-world projects...',
          discount: '30% OFF',
          duration: '28h 10m',
          lessons: 140,
          price: 2799,
          originalPrice: 3999,
          featured: false
        }
      ],
      updateVisibleCards() {
        const width = window.innerWidth;
        if (width < 640) {
          this.visibleCards = 1;
        } else if (width < 1024) {
          this.visibleCards = 2;
        } else {
          this.visibleCards = 3;
        }
      },
      next() {
        if (this.currentIndex < this.courses.length - this.visibleCards) {
          this.currentIndex++;
        }
      },
      prev() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
      init() {
        this.updateVisibleCards();
        window.addEventListener('resize', this.updateVisibleCards.bind(this));
      }
    };
  }