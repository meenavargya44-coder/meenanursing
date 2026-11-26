/* Loader, scroll reveal, counters, WhatsApp prefill */
(function(){
  var $=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
  window.addEventListener('load',function(){setTimeout(function(){document.getElementById('loader').classList.add('done')},350)});
  document.getElementById('yr').textContent=new Date().getFullYear();

  // Scroll reveal on sections' children
  $('.card,.why li,.steps li,figure,details,.about-text,.sec h2').forEach(function(el){el.classList.add('rv')});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  $('.rv').forEach(function(el){io.observe(el)});

  // Counters (edit numbers in index.html via data-count)
  var co=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;var el=e.target,n=+el.dataset.count,s=el.dataset.suffix||'',t0=performance.now();
    (function tick(t){var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+(p===1?s:'');if(p<1)requestAnimationFrame(tick)})(t0);
    co.unobserve(el)})},{threshold:.5});
  $('[data-count]').forEach(function(el){co.observe(el)});

  // "Book this service" fills the WhatsApp message
  var wa=document.getElementById('waMain');
  $('[data-svc]').forEach(function(a){a.addEventListener('click',function(){
    wa.href='https://wa.me/916354662372?text='+encodeURIComponent('Hello Meena, I would like to book: '+a.dataset.svc)})});
})();
