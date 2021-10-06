console.log("hello");

const app = Vue.createApp({
    data(){
    return{
        navn: 'John',
        trommer: [
            {
                title: 'tom 1',
                img: 'images/tom1.png',
                sound: new Audio ('lydfiler/tom-1.mp3')
            
            },
            {
                title: 'tom 2',
                img: 'images/tom2.png',
                sound: new Audio ('lydfiler/tom-2.mp3')
            },
            {
                title: 'tom 3',
                img: 'images/tom3.png',
                sound: new Audio ('lydfiler/tom-3.mp3')
                
            },
            {
                title: 'tom 4',
                img: 'images/tom4.png',
                sound: new Audio ('lydfiler/tom-4.mp3')
                
            },
            {
                title: 'crash',
                img: 'images/crash.png',
                sound: new Audio ('lydfiler/crash.mp3')
                
            },
            {
                title: 'kick',
                img: 'images/kick.png',
                sound: new Audio ('lydfiler/kick-bass.mp3')
                
            },
            {
                title: 'snare',
                img: 'images/snare.png',
                sound: new Audio ('lydfiler/snare.mp3')
                
            }
        ]
    }
    },
    methods: {
      play(audio){
        audio.sound.play();
      }
}
}
)

app.mount('#trommesæt')