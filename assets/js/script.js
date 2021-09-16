let hh = 0;
let mm = 0;
let ss = 0;
let cron;

function timer() {
  
  ss++
  if(ss === 60) {
    ss = 0;
    mm++
  }

  if(mm === 60) {
    mm = 0;
    hh++
  }

  let format = (hh < 10 ? '0'+ hh : hh ) + ':' + (mm < 10 ?'0'+ mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
  document.querySelector('.timer').innerHTML = format
}

function start() {
  if(ss >= 1 && !document.querySelector('.timer').classList.contains('red')) return;
    
      document.querySelector('.timer').classList.remove('red')
      cron = setInterval(function() { timer()
    
      }, 1000)
    

}

function stop() {
  clearInterval(cron)
  document.querySelector('.timer').classList.add('red')
  
  
  
}

function reset() {

  document.querySelector('.timer').innerHTML = '00:00:00';
  document.querySelector('.timer').classList.add('red')
  hh = 0;
  mm = 0;
  ss = 0;
  clearInterval(cron)


}


document.addEventListener('click', e => {

  let el = e.target;
  if(el.classList.contains('start')) start()
  if(el.classList.contains('stop')) stop()
  if(el.classList.contains('reset')) reset()

})
