import fs from 'node:fs';
const html=fs.readFileSync('src/original-content.html','utf8');
const clean=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const section=id=>html.split(`<section id="${id}"`)[1].split('</section>')[0];
const skills=[...section('skills').matchAll(/<h3>(.*?)<\/h3>([\s\S]*?)(?=<h3>|$)/g)].map(m=>({title:clean(m[1]),items:[...m[2].matchAll(/class="hex-label">(.*?)<\/div>/g)].map(x=>clean(x[1]))}));
const timeline=id=>[...section(id).matchAll(/<h3>(.*?)<\/h3>[\s\S]*?class="tl-date">(.*?)<\/span>[\s\S]*?class="tl-sub">(.*?)<\/p>[\s\S]*?class="tl-desc">([\s\S]*?)<\/p>/g)].map(m=>({title:clean(m[1]),date:clean(m[2]),place:clean(m[3]),description:clean(m[4])}));
const about=[...section('about').matchAll(/<img[\s\S]*?src="(.*?)"[\s\S]*?<h3>(.*?)<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>/g)].map(m=>({image:m[1],title:clean(m[2]),description:clean(m[3])}));
fs.writeFileSync('src/profile.json',JSON.stringify({skills,education:timeline('education'),experience:timeline('experience'),about},null,2));
