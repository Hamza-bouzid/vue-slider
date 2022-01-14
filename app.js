let app = new Vue({
  el: "#app",
  data: {
    list: [
      {
        image: "img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
      },
      {
        image: "img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum",
      },
      {
        image: "img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        image: "img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
      },
      {
        image: "img/05.jpg",
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
      },
    ],

    active: 0,
  },

  methods: {
    isActive: function (indice, classe) {
      if (this.active == indice) {
        return classe;
      }
    },

    overlayNone: function (indice) {
      if (this.active == indice) {
        return "overlay-none";
      }
    },

    upImage: function () {
      this.active--;
      if (this.active < 0) {
        this.active = this.list.length - 1;
      }
    },

    downImage: function (indice) {
      this.active++;
      if (this.active == this.list.length) {
        this.active = 0;
      }
    },

    clickAcitive: function (indice) {
      this.active = indice;
    },

    autoplay: function () {
      setInterval(this.downImage, 3000);
    },

    stopAutoplay: function () {
      clearInterval(this.autoplay);
      console.log("ciao");
    },
  },
  created: function () {
    this.autoplay();
  },
});
