const products=[
 {name:"Premium Chiffon",type:"Chiffon",tag:"NEW",img:"images/Premium Chiffon.avif"},
 {name:"Classic Pattern",type:"Pattern",tag:"POPULAR",img:"images/Classic Pattern.avif"},
 {name:"Abstract Print",type:"Abstract",tag:"TRENDING",img:"images/Abstract Print.avif"},
 {name:"Multi Print Fabric",type:"Pattern",tag:"NEW",img:"images/Multi Print Fabric.avif"},
 {name:"Premium Plain",type:"Plain",tag:"BASIC",img:"images/Premium Plain.avif"},
 {name:"Floral Chiffon",type:"Chiffon",tag:"POPULAR",img:"images/Floral Chiffon.avif"},
 {name:"Elegant Lace",type:"Lace",tag:"NEW",img:"images/Elegant Lace.avif"},
 {name:"Soft Cotton",type:"Cotton",tag:"EVERYDAY",img:"images/Soft Cotton.avif"}
];
const grid=document.getElementById("productGrid"), search=document.getElementById("searchInput"), noResults=document.getElementById("noResults"), count=document.getElementById("cartCount"), toast=document.getElementById("toast");
let active="All", shortlist=0;
function render(){
 const q=search.value.toLowerCase().trim();
 const list=products.filter(p=>(active==="All"||p.type===active)&&(p.name.toLowerCase().includes(q)||p.type.toLowerCase().includes(q)));
 grid.innerHTML=list.map((p,i)=>`<article class="product"><div class="product-img"><img src="${p.img}" alt="${p.name}" loading="lazy"><button class="heart" data-add="${i}" aria-label="Add ${p.name}">♡</button></div><div class="product-info"><small>${p.tag} · ${p.type}</small><h3>${p.name}</h3><p>Premium quality fabric · Ask for available colours & yardage.</p><a class="inquire" target="_blank" href="https://wa.me/2347084750902?text=${encodeURIComponent("Hello KFAB, I'm interested in "+p.name+". Please share available colours, price and yardage.")}">◔ Inquire on WhatsApp</a></div></article>`).join("");
 noResults.style.display=list.length?"none":"block";
}
document.querySelectorAll(".filters button").forEach(b=>b.addEventListener("click",()=>{active=b.dataset.filter;document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()}));
document.querySelectorAll(".category").forEach(b=>b.addEventListener("click",()=>{active=b.dataset.filter;document.querySelectorAll(".filters button").forEach(x=>{x.classList.toggle("active",x.dataset.filter===active)});document.getElementById("fabrics").scrollIntoView({behavior:"smooth"});render()}));
search.addEventListener("input",render);
grid.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;shortlist++;count.textContent=shortlist;b.textContent="♥";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1500)});
document.getElementById("menuBtn").addEventListener("click",()=>{const n=document.getElementById("navMenu");n.style.display=n.style.display==="flex"?"none":"flex";n.style.position="absolute";n.style.top="68px";n.style.left="0";n.style.right="0";n.style.background="#fff";n.style.padding="22px";n.style.flexDirection="column";n.style.boxShadow="0 12px 20px rgba(0,0,0,.08)"});
document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<951)document.getElementById("navMenu").style.display="none"}));
document.getElementById("cartBtn").addEventListener("click",()=>{toast.textContent=shortlist?`${shortlist} fabric${shortlist>1?"s":""} shortlisted — contact KFAB on WhatsApp to order.`:"Tap ♡ on fabrics to shortlist them.";toast.classList.add("show");setTimeout(()=>{toast.classList.remove("show");toast.textContent="Added to your shortlist."},2200)});
render();
