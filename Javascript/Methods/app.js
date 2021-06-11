const cat = {
    name: 'funke',
    color: 'grey',
    breed: 'dhade',
    meow() {
        console.log('meow');
    },
    roar: function () {
        console.log(this.meow());
    }
}