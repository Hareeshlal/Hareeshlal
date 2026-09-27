document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('#nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('#nav').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

function formData(){
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const training=document.getElementById('trainingSelect').value;
  const message=document.getElementById('message').value.trim();
  return {name,email,phone,training,message};
}
function sendWhatsApp(){
  const d=formData();
  const text=`Hello Hareesh, I would like to enquire about training.%0A%0AName: ${encodeURIComponent(d.name)}%0APhone: ${encodeURIComponent(d.phone)}%0AEmail: ${encodeURIComponent(d.email)}%0ATraining: ${encodeURIComponent(d.training)}%0AMessage: ${encodeURIComponent(d.message)}`;
  window.open(`https://wa.me/919544900152?text=${text}`,'_blank');
}
function sendEmail(){
  const d=formData();
  const subject=encodeURIComponent(`Training enquiry - ${d.training}`);
  const body=encodeURIComponent(`Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nTraining: ${d.training}\n\nMessage:\n${d.message}`);
  window.location.href=`mailto:hareeshlal1@gmail.com?subject=${subject}&body=${body}`;
}
