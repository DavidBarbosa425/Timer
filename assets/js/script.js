  class Stopwatch {
      constructor() {
          this.hh = 0;
          this.mm = 0;
          this.ss = 0;
          this.cron;
      }


          timer() {
    
    this.ss++
    if(this.ss === 60) {
      this.ss = 0;
      this.mm++
    }

    if(this.mm === 60) {
      this.mm = 0;
      this.hh++
    }

  this.format = (this.hh < 10 ? '0'+ this.hh : this.hh ) + ':' + (this.mm < 10 ?'0'+ this.mm : this.mm) + ':' + (this.ss < 10 ? '0' + this.ss : this.ss)
    document.querySelector('.timer').innerHTML = this.format
  }

            start() {
    if(this.ss >= 1 && !document.querySelector('.timer').classList.contains('red')) return;
      
        document.querySelector('.timer').classList.remove('red')
        this.cron = setInterval(() => { this.timer()
      
        }, 1000)
      

  }

          stop() {
    clearInterval(this.cron)
    document.querySelector('.timer').classList.add('red')
    
    
    
  }

          reset() {

    document.querySelector('.timer').innerHTML = '00:00:00';
    document.querySelector('.timer').classList.add('red')
    this.hh = 0;
    this.mm = 0;
    this.ss = 0;
    clearInterval(this.cron)


  }

          captureClick() {
            document.addEventListener('click', e => {

              let el = e.target;
              if(el.classList.contains('start')) this.start()
              if(el.classList.contains('stop')) this.stop()
              if(el.classList.contains('reset')) this.reset()
            
            })
          }

  }

  let stopwatch = new Stopwatch();
  stopwatch.captureClick()
