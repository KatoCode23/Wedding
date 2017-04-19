var log = console.log;

var eleen = {
  name: 'Eleen Halvorsen-Norton',
  role: 'Bride'
}

var kalen = {
  name: 'Kalen Imani Norton',
  role: 'Groome'
}

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

log(other);
log(array);

var groomsmen = [
  {
    name: 'John Vasconcellos',
    title: 'Best Man'
  },
  {
    name: 'Eric Pringle',
    title: 'Groomsmen'
  },
  {
    name: 'Mitch Christiansin',
    title: 'Groomsmen'
  },
  {
    name: 'George Warren',
    title: 'Groomsmen'
  },
  {
    name: 'Brian Liebert',
    title: 'Groomsmen'
  }
];

var names_groomsmen = groomsmen.filter(function(bestMan){
  return bestMan.title === 'Best Man';
});

log(names_groomsmen);

var bridesMaids = [
  {
    name: 'Beata Kanter',
    title: 'Maid of Honor'
  },
  {
    name: 'Ina Halvorsen',
    title: 'Bridesmaid'
  },
  {
    name: 'Jay Miriam',
    title: 'Bridesmaid'
  },
  {
    name: 'Ida Sofie Aasle',
    title: 'Bridesmaid'
  },
  {
    name: 'Gitte Bromander',
    title: 'Bridesmaid'
  }
];

var maids = bridesMaids.map(function(maid){
  return 'Say hello to ' + maid.name + ' our ' + maid.title;
});

log(maids);

function showBridesmaids(){
  document.getElementById('maids').innerHTML = maids;
}
