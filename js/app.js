/* ============ ROUTER ============ */
let J={};
const FT=[["Company",[["About Us","about"],["Services","services"],["Industries","industries"],["Careers","candidates"],["Gallery","gallery"],["Insights","insights"],["Contact","contact"]]],["For Employers",[["Hire Talent","employers"],["Submit Requirement","employers"],["Workforce Solutions","services/workforce-solutions"]]],["For Candidates",[["Find Jobs","jobs"],["Submit Resume","candidates"],["Career Advice","insights"]]],["Services",SV.map(s=>[s[1],"services/"+s[0]])]];
$=s=>document.querySelector(s);
$("#mS").innerHTML=SV.map(s=>`<a href="#/services/${s[0]}">${s[1]}</a>`).join("");
$("#mI").innerHTML=IN.map(s=>`<a href="#/industries/${s[0]}">${s[1]}</a>`).join("");
$("#ft").innerHTML=`<div><div class="logo" style="color:#fff"><b>ACE</b> TALENT<small>CONSULTING</small></div><p style="color:#c9d5f2;margin-top:14px">Talent consulting, recruitment, staffing and workforce solutions for the work ahead.</p><p>${CO.phone}<br>${CO.email}<br>${CO.addr}</p><p>LinkedIn · Instagram · Facebook · YouTube</p></div>`+FT.map(c=>`<div><h4>${c[0]}</h4>${c[1].map(l=>`<a href="#/${l[1]}">${l[0]}</a>`).join("")}</div>`).join("");
function route(){const raw=location.hash.replace(/^#\/?/,""),[path,anchor]=raw.split("#"),p=path.split("/");let h,t="ACE Talent Consulting";
const k=p[0];
if(!k)h=P.home();else if(k=="services")h=p[1]?P.service(p[1]):P.services();else if(k=="industries")h=p[1]?P.industry(p[1]):P.industries();else if(k=="jobs")h=p[1]?P.job(p[1]):P.jobs();else if(k=="apply")h=P.apply(p[1]);else if(k=="privacy")h=P.legal("Privacy Policy");else if(k=="terms")h=P.legal("Terms & Conditions");else h=(P[{about:"about","for-employers":"employers","for-candidates":"candidates","contact-us":"contact"}[k]||k]||P.home)();
$("#app").innerHTML=h;document.title=(k?k.replace(/-/g," ")+" | ":"")+"ACE Talent Consulting";
$("#hd").classList.remove("open");$("#bg").setAttribute("aria-expanded","false");
const el=anchor&&document.getElementById(anchor);if(el)el.scrollIntoView();else scrollTo(0,0);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add("in");e.target.querySelectorAll("[data-c]").forEach(c=>{const to=+c.dataset.c;let n=0;const st=()=>{n+=Math.ceil(to/40);if(n>=to){c.textContent=to+c.dataset.s}else{c.textContent=n;requestAnimationFrame(st)}};st()});io.unobserve(e.target)}),{threshold:.12});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
const sf=$("#jsf");if(sf)sf.onsubmit=e=>{e.preventDefault();J={q:$("#q").value,loc:$("#l").value,exp:$("#x").value,type:$("#t").value,page:1};location.hash="#/jobs"};
const jf=$("#jf");if(jf){jf.onsubmit=e=>{e.preventDefault();const d=new FormData(jf);J={page:1};d.forEach((v,k)=>J[k]=v);route()};jf.onreset=e=>{e.preventDefault();J={};route()}}}
addEventListener("hashchange",()=>{if(!location.hash.startsWith("#/jobs")&&!location.hash.startsWith("#/apply"))J={};route()});
document.addEventListener("click",e=>{const b=e.target.closest("[data-pg]");if(b){J.page=+b.dataset.pg;route()}
const d=e.target.closest(".dd>a");if(d&&innerWidth<=980){e.preventDefault();d.parentElement.classList.toggle("o")}});
$("#bg").onclick=()=>{const o=$("#hd").classList.toggle("open");$("#bg").setAttribute("aria-expanded",o)};
route();
