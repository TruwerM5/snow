
$(document).ready(function(){
	$('button.header-toggler').on('click', function(){
		$('.mobile-header').slideToggle(0);
	})
})

let scrollHeader = document.querySelector('.header');

  Vue.component('grid', {
  	props: ['text','type','link','background'],
  	data: function(){
  		return {hover: false}
  	},

  	template: `
  	
  	<div class="grid col-md-4 col-sm-12" 
  	@mouseover="hover=true" @mouseout="hover=false"
  	:style="{backgroundImage: 'url('+background+')', backgroundSize: 'cover'}"
  	>
	<a :href="link">
		<transition name="hover">
			<div v-show="hover" class="black-wrapper" @mousemove="hover=true">
				<div class="grid-text">
					<h4>{{text}}</h4>
					<span>{{type}}</span>
				</div>
			</div>
		</transition>
  	</a>
  	</div>
  	`
  })
  let headers = [
      {id:1, text:'Vinyl Record', type:'MOCKUP', link:'portfolio-single.html',bg_img:'img/vinyl-records.jpg'},
      {id:2, text:'Modern T-Shirt', type:'PRINT', link:'portfolio-single.html',bg_img:'img/t-shirt.jpg'},
      {id:3, text:'Minimal Bag', type:'BRANDING', link:'portfolio-single.html',bg_img:'img/minimal-bag.jpg'},
      {id:4, text:'Clean & Groovy', type:'DESIGN', link:'portfolio-single.html',bg_img:'img/t-shirt.jpg'},
      {id:5, text:'Minimal Mobile App', type:'DESIGN', link:'portfolio-single.html',bg_img:'img/mobile-app.png'},
      {id:6, text:'White T-Shirt', type:'PRINT', link:'portfolio-single.html',bg_img:'img/whiteT-shirt.jpg'},
      {id:7, text:'Business Card', type:'BRANDING', link:'portfolio-single.html',bg_img:'img/business-card.jpg'},
      {id:8, text:'Heja Stockholm', type:'PHOTOGRAPHY', link:'portfolio-single.html',bg_img:'img/heja.jpg'},
      {id:9, text:'Paper Bag', type:'PHOTOGRAPHY', link:'portfolio-single.html',bg_img:'img/paper-bag.png'},
      ]
  let grid = new Vue({
  	el: '#grid',
  	data: {
  		headers: headers
  	}
  })

  Vue.component('slider',{
  	props: ['quote','author'],
  	template: `
  	<div class="slide-item">
		<div class="slide-text">
			<blockquote>
				<p>{{quote}}</p>
			</blockquote>
			<cite>{{author}}</cite>
		</div>
  	</div>
  	`
  })


  let text = `Outstanding job and exceeded all expectations. 
  			It was a pleasure to work with them on a sizable first 
  			project and am looking forward to start the next one asap.`;
  let author = 'Michael Hopkins';
  let timer;
  let slider = new Vue({
  	el: '#slider',
  	data: {
  		quotes: [
  		{id:1, quote:text, author:'Michael Hopkins'},
  		{id:2, quote:text, author: 'Naruto Uzumaki'},
  		{id:3, quote:text, author: 'Sasuke Utiha'}
  		],
  		currentIndex: 0
  	},
  	methods: {
  		doSlide: function(){
  			clearTimeout(timer);
				timer = setTimeout(function tick(){
					if(slider.currentIndex < (slider.quotes.length - 1)){
						slider.currentIndex++;
					}else{
						slider.currentIndex = 0;
					}
					setTimeout(tick, 10000);
				}, 10000);
  		}
  	}
  })

  slider.doSlide();

  Vue.component('blog-slider',{
  	props: ['tag','link', 'header', 'date', 'description', 'background'],
  	template: 
  	`
  		<div class="slide">
  			<div class="slide-img">
				<a :href="link"><img :src="background" alt="background" /></a>
				<div class="tag"><a href="#">{{tag}}</a></div>
			</div>
			<div class="slide-description">
				<h6>{{header}}</h6>
				<span class="date">{{date}}</span>
				<p>{{description}}</p>
			</div>
  		</div>`
  })

  let slides = [
  		{
  			header:'The History of Nature', 
  			href: 'blog-single.html',
  			img:'img/history-of-nature.jpg', //background-image
  			tag: 'NATURE',
  			date: 'August 27, 2016',
  			description:`Third is fly. 
  			From one under in itself two waters, all own. 
  			Said male shall greater own grass.`,
        texts: [
          `Appear from tree day is he which without evening. 
          Creeping above land beast seasons very was give brought i. Their. 
          Set life gathering shall spirit day lights sixth moveth. 
          Life meat. Was sixth cattle subdue creeping every a, can't behold, moveth.`,
          `Seasons saying creeping fruitful grass. Moving hath great don't abundantly sea 
          that which two waters waters. Third in isn't creepeth above was fruitful of herb to. 
          Second i days, thing. Fish a open great cattle hath don't. Don't. Lights and divide.`
        ]
  		},
  		{
  			header:'Are you doing the Right Way?', 
  			href: 'blog-single.html',
  			img:'img/right-way.png',
  			tag: 'BRANDING',
  			date: 'August 14, 2016',
  			description:`Which all, morning isn't. 
  			Female and own living dry, and morning 
  			lesser first he stars under years thing.`,
        texts:[
        `Life set land bearing him fifth whose waters. 
        For be. Also. Darkness the firmament very all saying. 
        Firmament and day you. May that form itself greater have fill 
        air fruit said a. Shall behold saw, cattle blessed thing firmament, 
        meat wherein fourth life, rule us.`,
        `Man shall firmament second that had seas. Deep. Unto herb. Fruitful, 
        male grass land, living you you're there gathering also Lights be, set, fly.`,
        `Upon a creeping moveth winged likeness moveth let. Make void was good that don't 
        seed all isn't. You'll, beginning together which land were. Us blessed. 
        Subdue gathering. Also our dry fill.`
        ]
  		},

  		{
  			header:'Ten things about Photography', 
  			href: 'blog-single.html',
  			img:'img/always-first.jpg',
  			tag: 'DESIGN',
  			date: 'August 14, 2016',
  			description:`Be forth, god for rule face abundantly 
  			all our two winged made.Is whose morning female.`,
        texts: [
        `Etiam cursus. Leo nulla sapien dignissim magnis taciti rutrum tempus ut. 
        Quam lacinia cras varius nullam non condimentum ut euismod integer. Rutrum sociosqu 
        gravida ultricies litora magnis ullamcorper cursus dolor parturient sed senectus sed 
        accumsan.`
        ]
  		},

  		{
  			header:'Why you should Always First', 
  			href: 'blog-single.html',
  			img:'img/rotzbruecke-germany-instagram2.jpg',
  			tag: 'DESIGN',
  			date: 'August 14, 2016',
  			description:`Lights give have herb. First. 
  			Seed lesser his a fruit. Stars good divide fish appear 
  			don't, third deep.`,
        texts: [
        `Shall together meat is two years deep beast Whose also green above 
        life kind him bring them called subdue signs.`,
        `Isn't grass a. Midst. Us have female together. Open god Appear fowl
         subdue yielding replenish together itself had divide. 
        Very saw earth living she'd may fifth likeness said fifth moveth. 
        Own second moving of. Seas two she'd midst upon firmament, fruit 
        light years so you're. Green be.`,
        `Unto own seas midst make you'll together Of saw all there green 
        Living bring. Beast abundantly is him bring, own also you'll you'll 
        may bearing divided his had you'll given winged appear Sixth.`
        ]
  		},

  		{
  			header:'Something I need to tell you', 
  			href: 'blog-single.html',
  			img:'img/Igra-solnechnogo-sveta-v-utrennem-lesu-1026x500.jpg',
  			tag: 'DESIGN',
  			date: 'September 18, 2016',
  			description:`That female isn't midst divide kind upon seas 
  			lights greater green creature lights brought.`,
        texts: [
          `Gathering stars deep he For above open morning fruit blessed, 
          void. Sea seed fruit were don't, days man second. In day isn't 
          own Whales also evening it together.`,
          `Created midst beast lights dominion he life fill very for their.
           Divide let kind created all she'd unto stars. And behold greater 
           may in god image void cattle us days midst creepeth. Sixth also. 
           Tree give it beast upon. Saying land in.`,
          `All. Seasons saying creepeth appear hath fruitful. Male he years 
          which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. 
          Isn't air, unto light forth divide their days. Fish.`,
        ]
  		}
  ]

  new Vue({
  	el:'#blog-slider',
  	data: {
  		slides: slides,
  		currentIndex: 0
  	}
  })

  new Vue({
    el:'#portfolio',
    data: {
      showMenu: false,
      tags: ['BRANDING','PRINT','PHOTOGRAPHY','DESIGN','MOCKUP'],
      headers: headers,
      activeTag: '',
      showAll: true
    },
    methods: {
      filterGrid: function(newTag){
        this.activeTag = newTag;
        this.showAll = false;
      }
    }
  })

  new Vue({
    el: '#blog',
    data: {
      showMenu: false,
      tags: ['NATURE','BRANDING','DESIGN'],
      slides: slides,
      activeTag: '',
      showAll: true
    },
    methods: {
      filterGrid: function(newTag){
        this.activeTag = newTag;
        this.showAll = false;
      }
    }
  })