(function(){
  function goTo(id){
    var el = document.getElementById(id);
    if(!el) return;
    el.scrollIntoView({behavior:'smooth',block:'start'});
  }
  document.addEventListener('click', function(e){
    var t = e.target;
    if(t.matches('.nav-right')){
      var tgt = t.getAttribute('data-target');
      if(tgt) goTo(tgt);
    }
    if(t.matches('.nav-left')){
      var tgt = t.getAttribute('data-target');
      if(tgt) goTo(tgt);
    }
  }, false);
  var startBtn = document.getElementById('startBtn');
  var audio = document.getElementById('bgm');
  function startAudio(){
    if(!audio) return;
    audio.volume = 0.4;
    var p = audio.play();
    if(p && p.catch) p.catch(function(){/* autoplay prevented */});
  }
  if(startBtn){
    startBtn.addEventListener('click', function(){
      startAudio();
      startBtn.textContent = 'yesss';
      startBtn.disabled = true;
      startBtn.style.opacity = 0.9;
      goTo('opening');
    });
  }
  function createClover(x){
    var el = document.createElement('div');
    el.className='clover';
    var size = 12 + Math.random()*44;
    el.style.left = ( (x!==undefined) ? x : Math.random()*100 ) + 'vw';
    el.style.width = size+'px';
    el.style.height = size+'px';
    el.style.animationDuration = (5 + Math.random()*5)+'s';
    el.style.opacity = 0.6;
    el.innerHTML = '<svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-7.5-4.6-9.3-7.2C-0.6 9.6 4 .3 8.4 4.9 10 6 12 7.5 12 7.5s2-1.5 3.6-2.6C20 .3 25.6 9.6 21.3 13.8 19.5 16.4 12 21 12 21z"/></svg>';
    document.querySelector('.rain-layer').appendChild(el);
    setTimeout(function(){ el.remove(); }, 10000);
  }
  var cloverInterval = null;
  function startClover(rate){
    stopClover();
    cloverInterval = setInterval(function(){ createClover(); }, rate||300);
  }
  function stopClover(){ if(cloverInterval) clearInterval(cloverInterval); }
  startClover(400);
  if(startBtn){
    startBtn.addEventListener('keydown', function(e){
      if(e.key === 'Enter') startBtn.click();
    });
  }
})();