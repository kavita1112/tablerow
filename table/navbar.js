
const reference=document.getElementById('reference');
const link=document.getElementById('link-reference');

reference.addEventListener('mouseenter',()=>{
   link.classList.remove('hidden');
});

reference.addEventListener('mouseleave',()=>{
  link.classList.add('hidden');
});

const guide=document.getElementById('guides');
const links=document.getElementById('links');
guide.addEventListener('mouseenter',()=>{
  links.classList.remove('hidden');
});

guide.addEventListener('mouseleave',()=>{
  links.classList.add('hidden');
});

const mdnPlus=document.getElementById('mdnPlus');
const link1=document.getElementById('link1')

mdnPlus.addEventListener('mouseenter',()=>{
  link1.classList.remove('hidden');
});

mdnPlus.addEventListener('mouseleave',()=>{
  link1.classList.add('hidden');
});
