(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zs="160",hc=0,bo=1,fc=2,Ka=1,dc=2,Tn=3,kn=0,qe=1,An=2,Gn=0,Ui=1,Os=2,wo=3,Ro=4,pc=5,$n=100,mc=101,gc=102,Co=103,Po=104,_c=200,vc=201,xc=202,Mc=203,Bs=204,zs=205,Sc=206,Ec=207,yc=208,Tc=209,Ac=210,bc=211,wc=212,Rc=213,Cc=214,Pc=0,Lc=1,Uc=2,Gr=3,Dc=4,Ic=5,Nc=6,Fc=7,Za=0,Oc=1,Bc=2,Hn=0,zc=1,Gc=2,Hc=3,Vc=4,kc=5,Wc=6,$a=300,Fi=301,Oi=302,Gs=303,Hs=304,qr=306,Vs=1e3,fn=1001,ks=1002,ke=1003,Lo=1004,os=1005,nn=1006,Xc=1007,Qi=1008,Vn=1009,jc=1010,qc=1011,$s=1012,Ja=1013,On=1014,Bn=1015,tr=1016,Qa=1017,tl=1018,Qn=1020,Yc=1021,dn=1023,Kc=1024,Zc=1025,ti=1026,Bi=1027,$c=1028,el=1029,Jc=1030,nl=1031,il=1033,as=33776,ls=33777,cs=33778,us=33779,Uo=35840,Do=35841,Io=35842,No=35843,rl=36196,Fo=37492,Oo=37496,Bo=37808,zo=37809,Go=37810,Ho=37811,Vo=37812,ko=37813,Wo=37814,Xo=37815,jo=37816,qo=37817,Yo=37818,Ko=37819,Zo=37820,$o=37821,hs=36492,Jo=36494,Qo=36495,Qc=36283,ta=36284,ea=36285,na=36286,sl=3e3,ei=3001,tu=3200,eu=3201,nu=0,iu=1,sn="",Ne="srgb",wn="srgb-linear",Js="display-p3",Yr="display-p3-linear",Hr="linear",xe="srgb",Vr="rec709",kr="p3",pi=7680,ia=519,ru=512,su=513,ou=514,ol=515,au=516,lu=517,cu=518,uu=519,ra=35044,sa="300 es",Ws=1035,bn=2e3,Wr=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let o=0,c=r.length;o<c;o++)r[o].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fs=Math.PI/180,Xs=180/Math.PI;function nr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function hu(i,t){return(i%t+t)%t}function ds(i,t,e){return(1-e)*i+e*t}function oa(i){return(i&i-1)===0&&i!==0}function js(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class de{constructor(t=0,e=0){de.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*n-c*r+t.x,this.y=o*r+c*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,r,o,c,a,u,f){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,c,a,u,f)}set(t,e,n,r,o,c,a,u,f){const p=this.elements;return p[0]=t,p[1]=r,p[2]=a,p[3]=e,p[4]=o,p[5]=u,p[6]=n,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,c=n[0],a=n[3],u=n[6],f=n[1],p=n[4],g=n[7],_=n[2],M=n[5],y=n[8],E=r[0],m=r[3],d=r[6],D=r[1],R=r[4],L=r[7],H=r[2],z=r[5],I=r[8];return o[0]=c*E+a*D+u*H,o[3]=c*m+a*R+u*z,o[6]=c*d+a*L+u*I,o[1]=f*E+p*D+g*H,o[4]=f*m+p*R+g*z,o[7]=f*d+p*L+g*I,o[2]=_*E+M*D+y*H,o[5]=_*m+M*R+y*z,o[8]=_*d+M*L+y*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],p=t[8];return e*c*p-e*a*f-n*o*p+n*a*u+r*o*f-r*c*u}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],p=t[8],g=p*c-a*f,_=a*u-p*o,M=f*o-c*u,y=e*g+n*_+r*M;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/y;return t[0]=g*E,t[1]=(r*f-p*n)*E,t[2]=(a*n-r*c)*E,t[3]=_*E,t[4]=(p*e-r*u)*E,t[5]=(r*o-a*e)*E,t[6]=M*E,t[7]=(n*u-f*e)*E,t[8]=(c*e-n*o)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,c,a){const u=Math.cos(o),f=Math.sin(o);return this.set(n*u,n*f,-n*(u*c+f*a)+c+t,-r*f,r*u,-r*(-f*c+u*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ps.makeScale(t,e)),this}rotate(t){return this.premultiply(ps.makeRotation(-t)),this}translate(t,e){return this.premultiply(ps.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ps=new ee;function al(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){const i=Xr("canvas");return i.style.display="block",i}const aa={};function Ji(i){i in aa||(aa[i]=!0,console.warn(i))}const la=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ca=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dr={[wn]:{transfer:Hr,primaries:Vr,toReference:i=>i,fromReference:i=>i},[Ne]:{transfer:xe,primaries:Vr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Yr]:{transfer:Hr,primaries:kr,toReference:i=>i.applyMatrix3(ca),fromReference:i=>i.applyMatrix3(la)},[Js]:{transfer:xe,primaries:kr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ca),fromReference:i=>i.applyMatrix3(la).convertLinearToSRGB()}},du=new Set([wn,Yr]),fe={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!du.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=dr[t].toReference,r=dr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return dr[i].primaries},getTransfer:function(i){return i===sn?Hr:dr[i].transfer}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class ll{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=Xr("canvas")),mi.width=t.width,mi.height=t.height;const n=mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let c=0;c<o.length;c++)o[c]=Di(o[c]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pu=0;class cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=nr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let c=0,a=r.length;c<a;c++)r[c].isDataTexture?o.push(gs(r[c].image)):o.push(gs(r[c]))}else o=gs(r);n.url=o}return e||(t.images[this.uuid]=n),n}}function gs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mu=0;class $e extends Gi{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=fn,r=fn,o=nn,c=Qi,a=dn,u=Vn,f=$e.DEFAULT_ANISOTROPY,p=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=nr(),this.name="",this.source=new cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=u,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===ei?Ne:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$a)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case ks:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case ks:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?ei:sl}set encoding(t){Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ei?Ne:sn}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=$a;$e.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,r=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*n+c[8]*r+c[12]*o,this.y=c[1]*e+c[5]*n+c[9]*r+c[13]*o,this.z=c[2]*e+c[6]*n+c[10]*r+c[14]*o,this.w=c[3]*e+c[7]*n+c[11]*r+c[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o;const u=t.elements,f=u[0],p=u[4],g=u[8],_=u[1],M=u[5],y=u[9],E=u[2],m=u[6],d=u[10];if(Math.abs(p-_)<.01&&Math.abs(g-E)<.01&&Math.abs(y-m)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+E)<.1&&Math.abs(y+m)<.1&&Math.abs(f+M+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(f+1)/2,L=(M+1)/2,H=(d+1)/2,z=(p+_)/4,I=(g+E)/4,it=(y+m)/4;return R>L&&R>H?R<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(R),r=z/n,o=I/n):L>H?L<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),n=z/r,o=it/r):H<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(H),n=I/o,r=it/o),this.set(n,r,o,e),this}let D=Math.sqrt((m-y)*(m-y)+(g-E)*(g-E)+(_-p)*(_-p));return Math.abs(D)<.001&&(D=1),this.x=(m-y)/D,this.y=(g-E)/D,this.z=(_-p)/D,this.w=Math.acos((f+M+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gu extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?Ne:sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new $e(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ul extends $e{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _u extends $e{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,c,a){let u=n[r+0],f=n[r+1],p=n[r+2],g=n[r+3];const _=o[c+0],M=o[c+1],y=o[c+2],E=o[c+3];if(a===0){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=g;return}if(a===1){t[e+0]=_,t[e+1]=M,t[e+2]=y,t[e+3]=E;return}if(g!==E||u!==_||f!==M||p!==y){let m=1-a;const d=u*_+f*M+p*y+g*E,D=d>=0?1:-1,R=1-d*d;if(R>Number.EPSILON){const H=Math.sqrt(R),z=Math.atan2(H,d*D);m=Math.sin(m*z)/H,a=Math.sin(a*z)/H}const L=a*D;if(u=u*m+_*L,f=f*m+M*L,p=p*m+y*L,g=g*m+E*L,m===1-a){const H=1/Math.sqrt(u*u+f*f+p*p+g*g);u*=H,f*=H,p*=H,g*=H}}t[e]=u,t[e+1]=f,t[e+2]=p,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,r,o,c){const a=n[r],u=n[r+1],f=n[r+2],p=n[r+3],g=o[c],_=o[c+1],M=o[c+2],y=o[c+3];return t[e]=a*y+p*g+u*M-f*_,t[e+1]=u*y+p*_+f*g-a*M,t[e+2]=f*y+p*M+a*_-u*g,t[e+3]=p*y-a*g-u*_-f*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,o=t._z,c=t._order,a=Math.cos,u=Math.sin,f=a(n/2),p=a(r/2),g=a(o/2),_=u(n/2),M=u(r/2),y=u(o/2);switch(c){case"XYZ":this._x=_*p*g+f*M*y,this._y=f*M*g-_*p*y,this._z=f*p*y+_*M*g,this._w=f*p*g-_*M*y;break;case"YXZ":this._x=_*p*g+f*M*y,this._y=f*M*g-_*p*y,this._z=f*p*y-_*M*g,this._w=f*p*g+_*M*y;break;case"ZXY":this._x=_*p*g-f*M*y,this._y=f*M*g+_*p*y,this._z=f*p*y+_*M*g,this._w=f*p*g-_*M*y;break;case"ZYX":this._x=_*p*g-f*M*y,this._y=f*M*g+_*p*y,this._z=f*p*y-_*M*g,this._w=f*p*g+_*M*y;break;case"YZX":this._x=_*p*g+f*M*y,this._y=f*M*g+_*p*y,this._z=f*p*y-_*M*g,this._w=f*p*g-_*M*y;break;case"XZY":this._x=_*p*g-f*M*y,this._y=f*M*g-_*p*y,this._z=f*p*y+_*M*g,this._w=f*p*g+_*M*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],o=e[8],c=e[1],a=e[5],u=e[9],f=e[2],p=e[6],g=e[10],_=n+a+g;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(p-u)*M,this._y=(o-f)*M,this._z=(c-r)*M}else if(n>a&&n>g){const M=2*Math.sqrt(1+n-a-g);this._w=(p-u)/M,this._x=.25*M,this._y=(r+c)/M,this._z=(o+f)/M}else if(a>g){const M=2*Math.sqrt(1+a-n-g);this._w=(o-f)/M,this._x=(r+c)/M,this._y=.25*M,this._z=(u+p)/M}else{const M=2*Math.sqrt(1+g-n-a);this._w=(c-r)/M,this._x=(o+f)/M,this._y=(u+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,o=t._z,c=t._w,a=e._x,u=e._y,f=e._z,p=e._w;return this._x=n*p+c*a+r*f-o*u,this._y=r*p+c*u+o*a-n*f,this._z=o*p+c*f+n*u-r*a,this._w=c*p-n*a-r*u-o*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,o=this._z,c=this._w;let a=c*t._w+n*t._x+r*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=c,this._x=n,this._y=r,this._z=o,this;const u=1-a*a;if(u<=Number.EPSILON){const M=1-e;return this._w=M*c+e*this._w,this._x=M*n+e*this._x,this._y=M*r+e*this._y,this._z=M*o+e*this._z,this.normalize(),this}const f=Math.sqrt(u),p=Math.atan2(f,a),g=Math.sin((1-e)*p)/f,_=Math.sin(e*p)/f;return this._w=c*g+this._w*_,this._x=n*g+this._x*_,this._y=r*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(o),n*Math.cos(o),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ua.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=t.elements,c=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*c,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*c,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*c,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,o=t.x,c=t.y,a=t.z,u=t.w,f=2*(c*r-a*n),p=2*(a*e-o*r),g=2*(o*n-c*e);return this.x=e+u*f+c*g-a*p,this.y=n+u*p+a*f-o*g,this.z=r+u*g+o*p-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,o=t.z,c=e.x,a=e.y,u=e.z;return this.x=r*u-o*a,this.y=o*c-n*u,this.z=n*a-r*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _s.copy(this).projectOnVector(t),this.sub(_s)}reflect(t){return this.sub(_s.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _s=new W,ua=new ir;class rr{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,a=o.count;c<a;c++)t.isMesh===!0?t.getVertexPosition(c,ln):ln.fromBufferAttribute(o,c),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const r=t.children;for(let o=0,c=r.length;o<c;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),mr.subVectors(this.max,Yi),gi.subVectors(t.a,Yi),_i.subVectors(t.b,Yi),vi.subVectors(t.c,Yi),Un.subVectors(_i,gi),Dn.subVectors(vi,_i),Xn.subVectors(gi,vi);let e=[0,-Un.z,Un.y,0,-Dn.z,Dn.y,0,-Xn.z,Xn.y,Un.z,0,-Un.x,Dn.z,0,-Dn.x,Xn.z,0,-Xn.x,-Un.y,Un.x,0,-Dn.y,Dn.x,0,-Xn.y,Xn.x,0];return!vs(e,gi,_i,vi,mr)||(e=[1,0,0,0,1,0,0,0,1],!vs(e,gi,_i,vi,mr))?!1:(gr.crossVectors(Un,Dn),e=[gr.x,gr.y,gr.z],vs(e,gi,_i,vi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new W,new W,new W,new W,new W,new W,new W,new W],ln=new W,pr=new rr,gi=new W,_i=new W,vi=new W,Un=new W,Dn=new W,Xn=new W,Yi=new W,mr=new W,gr=new W,jn=new W;function vs(i,t,e,n,r){for(let o=0,c=i.length-3;o<=c;o+=3){jn.fromArray(i,o);const a=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),u=t.dot(jn),f=e.dot(jn),p=n.dot(jn);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>a)return!1}return!0}const vu=new rr,Ki=new W,xs=new W;class Kr{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vu.setFromPoints(t).getCenter(n);let r=0;for(let o=0,c=t.length;o<c;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);const e=Ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ki,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(xs)),this.expandByPoint(Ki.copy(t.center).sub(xs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new W,Ms=new W,_r=new W,In=new W,Ss=new W,vr=new W,Es=new W;class hl{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ms.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),In.copy(this.origin).sub(Ms);const o=t.distanceTo(e)*.5,c=-this.direction.dot(_r),a=In.dot(this.direction),u=-In.dot(_r),f=In.lengthSq(),p=Math.abs(1-c*c);let g,_,M,y;if(p>0)if(g=c*u-a,_=c*a-u,y=o*p,g>=0)if(_>=-y)if(_<=y){const E=1/p;g*=E,_*=E,M=g*(g+c*_+2*a)+_*(c*g+_+2*u)+f}else _=o,g=Math.max(0,-(c*_+a)),M=-g*g+_*(_+2*u)+f;else _=-o,g=Math.max(0,-(c*_+a)),M=-g*g+_*(_+2*u)+f;else _<=-y?(g=Math.max(0,-(-c*o+a)),_=g>0?-o:Math.min(Math.max(-o,-u),o),M=-g*g+_*(_+2*u)+f):_<=y?(g=0,_=Math.min(Math.max(-o,-u),o),M=_*(_+2*u)+f):(g=Math.max(0,-(c*o+a)),_=g>0?o:Math.min(Math.max(-o,-u),o),M=-g*g+_*(_+2*u)+f);else _=c>0?-o:o,g=Math.max(0,-(c*_+a)),M=-g*g+_*(_+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Ms).addScaledVector(_r,_),M}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,o=t.radius*t.radius;if(r>o)return null;const c=Math.sqrt(o-r),a=n-c,u=n+c;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,c,a,u;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return f>=0?(n=(t.min.x-_.x)*f,r=(t.max.x-_.x)*f):(n=(t.max.x-_.x)*f,r=(t.min.x-_.x)*f),p>=0?(o=(t.min.y-_.y)*p,c=(t.max.y-_.y)*p):(o=(t.max.y-_.y)*p,c=(t.min.y-_.y)*p),n>c||o>r||((o>n||isNaN(n))&&(n=o),(c<r||isNaN(r))&&(r=c),g>=0?(a=(t.min.z-_.z)*g,u=(t.max.z-_.z)*g):(a=(t.max.z-_.z)*g,u=(t.min.z-_.z)*g),n>u||a>r)||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,r,o){Ss.subVectors(e,t),vr.subVectors(n,t),Es.crossVectors(Ss,vr);let c=this.direction.dot(Es),a;if(c>0){if(r)return null;a=1}else if(c<0)a=-1,c=-c;else return null;In.subVectors(this.origin,t);const u=a*this.direction.dot(vr.crossVectors(In,vr));if(u<0)return null;const f=a*this.direction.dot(Ss.cross(In));if(f<0||u+f>c)return null;const p=-a*In.dot(Es);return p<0?null:this.at(p/c,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(t,e,n,r,o,c,a,u,f,p,g,_,M,y,E,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,c,a,u,f,p,g,_,M,y,E,m)}set(t,e,n,r,o,c,a,u,f,p,g,_,M,y,E,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=o,d[5]=c,d[9]=a,d[13]=u,d[2]=f,d[6]=p,d[10]=g,d[14]=_,d[3]=M,d[7]=y,d[11]=E,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/xi.setFromMatrixColumn(t,0).length(),o=1/xi.setFromMatrixColumn(t,1).length(),c=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*c,e[9]=n[9]*c,e[10]=n[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,o=t.z,c=Math.cos(n),a=Math.sin(n),u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),g=Math.sin(o);if(t.order==="XYZ"){const _=c*p,M=c*g,y=a*p,E=a*g;e[0]=u*p,e[4]=-u*g,e[8]=f,e[1]=M+y*f,e[5]=_-E*f,e[9]=-a*u,e[2]=E-_*f,e[6]=y+M*f,e[10]=c*u}else if(t.order==="YXZ"){const _=u*p,M=u*g,y=f*p,E=f*g;e[0]=_+E*a,e[4]=y*a-M,e[8]=c*f,e[1]=c*g,e[5]=c*p,e[9]=-a,e[2]=M*a-y,e[6]=E+_*a,e[10]=c*u}else if(t.order==="ZXY"){const _=u*p,M=u*g,y=f*p,E=f*g;e[0]=_-E*a,e[4]=-c*g,e[8]=y+M*a,e[1]=M+y*a,e[5]=c*p,e[9]=E-_*a,e[2]=-c*f,e[6]=a,e[10]=c*u}else if(t.order==="ZYX"){const _=c*p,M=c*g,y=a*p,E=a*g;e[0]=u*p,e[4]=y*f-M,e[8]=_*f+E,e[1]=u*g,e[5]=E*f+_,e[9]=M*f-y,e[2]=-f,e[6]=a*u,e[10]=c*u}else if(t.order==="YZX"){const _=c*u,M=c*f,y=a*u,E=a*f;e[0]=u*p,e[4]=E-_*g,e[8]=y*g+M,e[1]=g,e[5]=c*p,e[9]=-a*p,e[2]=-f*p,e[6]=M*g+y,e[10]=_-E*g}else if(t.order==="XZY"){const _=c*u,M=c*f,y=a*u,E=a*f;e[0]=u*p,e[4]=-g,e[8]=f*p,e[1]=_*g+E,e[5]=c*p,e[9]=M*g-y,e[2]=y*g-M,e[6]=a*p,e[10]=E*g+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xu,t,Mu)}lookAt(t,e,n){const r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Nn.crossVectors(n,Ke),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Nn.crossVectors(n,Ke)),Nn.normalize(),xr.crossVectors(Ke,Nn),r[0]=Nn.x,r[4]=xr.x,r[8]=Ke.x,r[1]=Nn.y,r[5]=xr.y,r[9]=Ke.y,r[2]=Nn.z,r[6]=xr.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,c=n[0],a=n[4],u=n[8],f=n[12],p=n[1],g=n[5],_=n[9],M=n[13],y=n[2],E=n[6],m=n[10],d=n[14],D=n[3],R=n[7],L=n[11],H=n[15],z=r[0],I=r[4],it=r[8],A=r[12],x=r[1],U=r[5],k=r[9],tt=r[13],N=r[2],V=r[6],O=r[10],X=r[14],$=r[3],et=r[7],nt=r[11],ht=r[15];return o[0]=c*z+a*x+u*N+f*$,o[4]=c*I+a*U+u*V+f*et,o[8]=c*it+a*k+u*O+f*nt,o[12]=c*A+a*tt+u*X+f*ht,o[1]=p*z+g*x+_*N+M*$,o[5]=p*I+g*U+_*V+M*et,o[9]=p*it+g*k+_*O+M*nt,o[13]=p*A+g*tt+_*X+M*ht,o[2]=y*z+E*x+m*N+d*$,o[6]=y*I+E*U+m*V+d*et,o[10]=y*it+E*k+m*O+d*nt,o[14]=y*A+E*tt+m*X+d*ht,o[3]=D*z+R*x+L*N+H*$,o[7]=D*I+R*U+L*V+H*et,o[11]=D*it+R*k+L*O+H*nt,o[15]=D*A+R*tt+L*X+H*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],c=t[1],a=t[5],u=t[9],f=t[13],p=t[2],g=t[6],_=t[10],M=t[14],y=t[3],E=t[7],m=t[11],d=t[15];return y*(+o*u*g-r*f*g-o*a*_+n*f*_+r*a*M-n*u*M)+E*(+e*u*M-e*f*_+o*c*_-r*c*M+r*f*p-o*u*p)+m*(+e*f*g-e*a*M-o*c*g+n*c*M+o*a*p-n*f*p)+d*(-r*a*p-e*u*g+e*a*_+r*c*g-n*c*_+n*u*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],p=t[8],g=t[9],_=t[10],M=t[11],y=t[12],E=t[13],m=t[14],d=t[15],D=g*m*f-E*_*f+E*u*M-a*m*M-g*u*d+a*_*d,R=y*_*f-p*m*f-y*u*M+c*m*M+p*u*d-c*_*d,L=p*E*f-y*g*f+y*a*M-c*E*M-p*a*d+c*g*d,H=y*g*u-p*E*u-y*a*_+c*E*_+p*a*m-c*g*m,z=e*D+n*R+r*L+o*H;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return t[0]=D*I,t[1]=(E*_*o-g*m*o-E*r*M+n*m*M+g*r*d-n*_*d)*I,t[2]=(a*m*o-E*u*o+E*r*f-n*m*f-a*r*d+n*u*d)*I,t[3]=(g*u*o-a*_*o-g*r*f+n*_*f+a*r*M-n*u*M)*I,t[4]=R*I,t[5]=(p*m*o-y*_*o+y*r*M-e*m*M-p*r*d+e*_*d)*I,t[6]=(y*u*o-c*m*o-y*r*f+e*m*f+c*r*d-e*u*d)*I,t[7]=(c*_*o-p*u*o+p*r*f-e*_*f-c*r*M+e*u*M)*I,t[8]=L*I,t[9]=(y*g*o-p*E*o-y*n*M+e*E*M+p*n*d-e*g*d)*I,t[10]=(c*E*o-y*a*o+y*n*f-e*E*f-c*n*d+e*a*d)*I,t[11]=(p*a*o-c*g*o-p*n*f+e*g*f+c*n*M-e*a*M)*I,t[12]=H*I,t[13]=(p*E*r-y*g*r+y*n*_-e*E*_-p*n*m+e*g*m)*I,t[14]=(y*a*r-c*E*r-y*n*u+e*E*u+c*n*m-e*a*m)*I,t[15]=(c*g*r-p*a*r+p*n*u-e*g*u-c*n*_+e*a*_)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,c=t.x,a=t.y,u=t.z,f=o*c,p=o*a;return this.set(f*c+n,f*a-r*u,f*u+r*a,0,f*a+r*u,p*a+n,p*u-r*c,0,f*u-r*a,p*u+r*c,o*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,c){return this.set(1,n,o,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,o=e._x,c=e._y,a=e._z,u=e._w,f=o+o,p=c+c,g=a+a,_=o*f,M=o*p,y=o*g,E=c*p,m=c*g,d=a*g,D=u*f,R=u*p,L=u*g,H=n.x,z=n.y,I=n.z;return r[0]=(1-(E+d))*H,r[1]=(M+L)*H,r[2]=(y-R)*H,r[3]=0,r[4]=(M-L)*z,r[5]=(1-(_+d))*z,r[6]=(m+D)*z,r[7]=0,r[8]=(y+R)*I,r[9]=(m-D)*I,r[10]=(1-(_+E))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let o=xi.set(r[0],r[1],r[2]).length();const c=xi.set(r[4],r[5],r[6]).length(),a=xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const f=1/o,p=1/c,g=1/a;return cn.elements[0]*=f,cn.elements[1]*=f,cn.elements[2]*=f,cn.elements[4]*=p,cn.elements[5]*=p,cn.elements[6]*=p,cn.elements[8]*=g,cn.elements[9]*=g,cn.elements[10]*=g,e.setFromRotationMatrix(cn),n.x=o,n.y=c,n.z=a,this}makePerspective(t,e,n,r,o,c,a=bn){const u=this.elements,f=2*o/(e-t),p=2*o/(n-r),g=(e+t)/(e-t),_=(n+r)/(n-r);let M,y;if(a===bn)M=-(c+o)/(c-o),y=-2*c*o/(c-o);else if(a===Wr)M=-c/(c-o),y=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=p,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=M,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,o,c,a=bn){const u=this.elements,f=1/(e-t),p=1/(n-r),g=1/(c-o),_=(e+t)*f,M=(n+r)*p;let y,E;if(a===bn)y=(c+o)*g,E=-2*g;else if(a===Wr)y=o*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-M,u[2]=0,u[6]=0,u[10]=E,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xi=new W,cn=new Ue,xu=new W(0,0,0),Mu=new W(1,1,1),Nn=new W,xr=new W,Ke=new W,ha=new Ue,fa=new ir;class Zr{constructor(t=0,e=0,n=0,r=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,o=r[0],c=r[4],a=r[8],u=r[1],f=r[5],p=r[9],g=r[2],_=r[6],M=r[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,M),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(je(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-je(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(a,M));break;case"XZY":this._z=Math.asin(-je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-p,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ha.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ha,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fa.setFromEuler(this),this.setFromQuaternion(fa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Su=0;const da=new W,Mi=new ir,Sn=new Ue,Mr=new W,Zi=new W,Eu=new W,yu=new ir,pa=new W(1,0,0),ma=new W(0,1,0),ga=new W(0,0,1),Tu={type:"added"},Au={type:"removed"};class Ye extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new W,e=new Zr,n=new ir,r=new W(1,1,1);function o(){n.setFromEuler(e,!1)}function c(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ee}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(pa,t)}rotateY(t){return this.rotateOnAxis(ma,t)}rotateZ(t){return this.rotateOnAxis(ga,t)}translateOnAxis(t,e){return da.copy(t).applyQuaternion(this.quaternion),this.position.add(da.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pa,t)}translateY(t){return this.translateOnAxis(ma,t)}translateZ(t){return this.translateOnAxis(ga,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Zi,Mr,this.up):Sn.lookAt(Mr,Zi,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Tu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Au)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,t,Eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let o=0,c=r.length;o<c;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){const g=u[f];o(t.shapes,g)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,f=this.material.length;u<f;u++)a.push(o(t.materials,this.material[u]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(o(t.animations,u))}}if(e){const a=c(t.geometries),u=c(t.materials),f=c(t.textures),p=c(t.images),g=c(t.shapes),_=c(t.skeletons),M=c(t.animations),y=c(t.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),_.length>0&&(n.skeletons=_),M.length>0&&(n.animations=M),y.length>0&&(n.nodes=y)}return n.object=r,n;function c(a){const u=[];for(const f in a){const p=a[f];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ye.DEFAULT_UP=new W(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new W,En=new W,ys=new W,yn=new W,Si=new W,Ei=new W,_a=new W,Ts=new W,As=new W,bs=new W;let Sr=!1;class hn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),un.subVectors(t,e),r.cross(un);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){un.subVectors(r,e),En.subVectors(n,e),ys.subVectors(t,e);const c=un.dot(un),a=un.dot(En),u=un.dot(ys),f=En.dot(En),p=En.dot(ys),g=c*f-a*a;if(g===0)return o.set(0,0,0),null;const _=1/g,M=(f*u-a*p)*_,y=(c*p-a*u)*_;return o.set(1-M-y,y,M)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(t,e,n,r,o,c,a,u){return Sr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sr=!0),this.getInterpolation(t,e,n,r,o,c,a,u)}static getInterpolation(t,e,n,r,o,c,a,u){return this.getBarycoord(t,e,n,r,yn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,yn.x),u.addScaledVector(c,yn.y),u.addScaledVector(a,yn.z),u)}static isFrontFacing(t,e,n,r){return un.subVectors(n,e),En.subVectors(t,e),un.cross(En).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),En.subVectors(this.a,this.b),un.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,o){return Sr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sr=!0),hn.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}getInterpolation(t,e,n,r,o){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,o=this.c;let c,a;Si.subVectors(r,n),Ei.subVectors(o,n),Ts.subVectors(t,n);const u=Si.dot(Ts),f=Ei.dot(Ts);if(u<=0&&f<=0)return e.copy(n);As.subVectors(t,r);const p=Si.dot(As),g=Ei.dot(As);if(p>=0&&g<=p)return e.copy(r);const _=u*g-p*f;if(_<=0&&u>=0&&p<=0)return c=u/(u-p),e.copy(n).addScaledVector(Si,c);bs.subVectors(t,o);const M=Si.dot(bs),y=Ei.dot(bs);if(y>=0&&M<=y)return e.copy(o);const E=M*f-u*y;if(E<=0&&f>=0&&y<=0)return a=f/(f-y),e.copy(n).addScaledVector(Ei,a);const m=p*y-M*g;if(m<=0&&g-p>=0&&M-y>=0)return _a.subVectors(o,r),a=(g-p)/(g-p+(M-y)),e.copy(r).addScaledVector(_a,a);const d=1/(m+E+_);return c=E*d,a=_*d,e.copy(n).addScaledVector(Si,c).addScaledVector(Ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function ws(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=hu(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,c=2*n-o;this.r=ws(c,o,t+1/3),this.g=ws(c,o,t),this.b=ws(c,o,t-1/3)}return fe.toWorkingColorSpace(this,r),this}setStyle(t,e=Ne){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const c=r[1],a=r[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return fe.fromWorkingColorSpace(ze.copy(this),t),Math.round(je(ze.r*255,0,255))*65536+Math.round(je(ze.g*255,0,255))*256+Math.round(je(ze.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,r=ze.g,o=ze.b,c=Math.max(n,r,o),a=Math.min(n,r,o);let u,f;const p=(a+c)/2;if(a===c)u=0,f=0;else{const g=c-a;switch(f=p<=.5?g/(c+a):g/(2-c-a),c){case n:u=(r-o)/g+(r<o?6:0);break;case r:u=(o-n)/g+2;break;case o:u=(n-r)/g+4;break}u/=6}return t.h=u,t.s=f,t.l=p,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ne){fe.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,r=ze.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Er);const n=ds(Fn.h,Er.h,e),r=ds(Fn.s,Er.s,e),o=ds(Fn.l,Er.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new le;le.NAMES=dl;let bu=0;class sr extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Ui,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bs,this.blendDst=zs,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bs&&(n.blendSrc=this.blendSrc),this.blendDst!==zs&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const c=[];for(const a in o){const u=o[a];delete u.metadata,c.push(u)}return c}if(e){const o=r(t.textures),c=r(t.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pl extends sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new W,yr=new de;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array),o=Xe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ra&&(t.usage=this.usage),t}}class ml extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gl extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ni extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wu=0;const en=new Ue,Rs=new Ye,yi=new W,Ze=new rr,$i=new rr,Le=new W;class Cn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(al(t)?gl:ml)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ee().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Rs.lookAt(t),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ni(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];Ze.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){const a=e[o];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Ze.min,$i.min),Ze.expandByPoint(Le),Le.addVectors(Ze.max,$i.max),Ze.expandByPoint(Le)):(Ze.expandByPoint($i.min),Ze.expandByPoint($i.max))}Ze.getCenter(n);let r=0;for(let o=0,c=t.count;o<c;o++)Le.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(Le));if(e)for(let o=0,c=e.length;o<c;o++){const a=e[o],u=this.morphTargetsRelative;for(let f=0,p=a.count;f<p;f++)Le.fromBufferAttribute(a,f),u&&(yi.fromBufferAttribute(t,f),Le.add(yi)),r=Math.max(r,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,o=e.normal.array,c=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,f=[],p=[];for(let x=0;x<a;x++)f[x]=new W,p[x]=new W;const g=new W,_=new W,M=new W,y=new de,E=new de,m=new de,d=new W,D=new W;function R(x,U,k){g.fromArray(r,x*3),_.fromArray(r,U*3),M.fromArray(r,k*3),y.fromArray(c,x*2),E.fromArray(c,U*2),m.fromArray(c,k*2),_.sub(g),M.sub(g),E.sub(y),m.sub(y);const tt=1/(E.x*m.y-m.x*E.y);isFinite(tt)&&(d.copy(_).multiplyScalar(m.y).addScaledVector(M,-E.y).multiplyScalar(tt),D.copy(M).multiplyScalar(E.x).addScaledVector(_,-m.x).multiplyScalar(tt),f[x].add(d),f[U].add(d),f[k].add(d),p[x].add(D),p[U].add(D),p[k].add(D))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let x=0,U=L.length;x<U;++x){const k=L[x],tt=k.start,N=k.count;for(let V=tt,O=tt+N;V<O;V+=3)R(n[V+0],n[V+1],n[V+2])}const H=new W,z=new W,I=new W,it=new W;function A(x){I.fromArray(o,x*3),it.copy(I);const U=f[x];H.copy(U),H.sub(I.multiplyScalar(I.dot(U))).normalize(),z.crossVectors(it,U);const tt=z.dot(p[x])<0?-1:1;u[x*4]=H.x,u[x*4+1]=H.y,u[x*4+2]=H.z,u[x*4+3]=tt}for(let x=0,U=L.length;x<U;++x){const k=L[x],tt=k.start,N=k.count;for(let V=tt,O=tt+N;V<O;V+=3)A(n[V+0]),A(n[V+1]),A(n[V+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let _=0,M=n.count;_<M;_++)n.setXYZ(_,0,0,0);const r=new W,o=new W,c=new W,a=new W,u=new W,f=new W,p=new W,g=new W;if(t)for(let _=0,M=t.count;_<M;_+=3){const y=t.getX(_+0),E=t.getX(_+1),m=t.getX(_+2);r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,E),c.fromBufferAttribute(e,m),p.subVectors(c,o),g.subVectors(r,o),p.cross(g),a.fromBufferAttribute(n,y),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,m),a.add(p),u.add(p),f.add(p),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(m,f.x,f.y,f.z)}else for(let _=0,M=e.count;_<M;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),c.fromBufferAttribute(e,_+2),p.subVectors(c,o),g.subVectors(r,o),p.cross(g),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,u){const f=a.array,p=a.itemSize,g=a.normalized,_=new f.constructor(u.length*p);let M=0,y=0;for(let E=0,m=u.length;E<m;E++){a.isInterleavedBufferAttribute?M=u[E]*a.data.stride+a.offset:M=u[E]*p;for(let d=0;d<p;d++)_[y++]=f[M++]}return new on(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Cn,n=this.index.array,r=this.attributes;for(const a in r){const u=r[a],f=t(u,n);e.setAttribute(a,f)}const o=this.morphAttributes;for(const a in o){const u=[],f=o[a];for(let p=0,g=f.length;p<g;p++){const _=f[p],M=t(_,n);u.push(M)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let a=0,u=c.length;a<u;a++){const f=c[a];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const f=n[u];t.data.attributes[u]=f.toJSON(t.data)}const r={};let o=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],p=[];for(let g=0,_=f.length;g<_;g++){const M=f[g];p.push(M.toJSON(t.data))}p.length>0&&(r[u]=p,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const f in r){const p=r[f];this.setAttribute(f,p.clone(e))}const o=t.morphAttributes;for(const f in o){const p=[],g=o[f];for(let _=0,M=g.length;_<M;_++)p.push(g[_].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let f=0,p=c.length;f<p;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const va=new Ue,qn=new hl,Tr=new Kr,xa=new W,Ti=new W,Ai=new W,bi=new W,Cs=new W,Ar=new W,br=new de,wr=new de,Rr=new de,Ma=new W,Sa=new W,Ea=new W,Cr=new W,Pr=new W;class zn extends Ye{constructor(t=new Cn,e=new pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(o&&a){Ar.set(0,0,0);for(let u=0,f=o.length;u<f;u++){const p=a[u],g=o[u];p!==0&&(Cs.fromBufferAttribute(g,t),c?Ar.addScaledVector(Cs,p):Ar.addScaledVector(Cs.sub(e),p))}e.add(Ar)}return e}raycast(t,e){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(o),qn.copy(t.ray).recast(t.near),!(Tr.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Tr,xa)===null||qn.origin.distanceToSquared(xa)>(t.far-t.near)**2))&&(va.copy(o).invert(),qn.copy(t.ray).applyMatrix4(va),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let r;const o=this.geometry,c=this.material,a=o.index,u=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,_=o.groups,M=o.drawRange;if(a!==null)if(Array.isArray(c))for(let y=0,E=_.length;y<E;y++){const m=_[y],d=c[m.materialIndex],D=Math.max(m.start,M.start),R=Math.min(a.count,Math.min(m.start+m.count,M.start+M.count));for(let L=D,H=R;L<H;L+=3){const z=a.getX(L),I=a.getX(L+1),it=a.getX(L+2);r=Lr(this,d,t,n,f,p,g,z,I,it),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const y=Math.max(0,M.start),E=Math.min(a.count,M.start+M.count);for(let m=y,d=E;m<d;m+=3){const D=a.getX(m),R=a.getX(m+1),L=a.getX(m+2);r=Lr(this,c,t,n,f,p,g,D,R,L),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(c))for(let y=0,E=_.length;y<E;y++){const m=_[y],d=c[m.materialIndex],D=Math.max(m.start,M.start),R=Math.min(u.count,Math.min(m.start+m.count,M.start+M.count));for(let L=D,H=R;L<H;L+=3){const z=L,I=L+1,it=L+2;r=Lr(this,d,t,n,f,p,g,z,I,it),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const y=Math.max(0,M.start),E=Math.min(u.count,M.start+M.count);for(let m=y,d=E;m<d;m+=3){const D=m,R=m+1,L=m+2;r=Lr(this,c,t,n,f,p,g,D,R,L),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Ru(i,t,e,n,r,o,c,a){let u;if(t.side===qe?u=n.intersectTriangle(c,o,r,!0,a):u=n.intersectTriangle(r,o,c,t.side===kn,a),u===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Pr);return f<e.near||f>e.far?null:{distance:f,point:Pr.clone(),object:i}}function Lr(i,t,e,n,r,o,c,a,u,f){i.getVertexPosition(a,Ti),i.getVertexPosition(u,Ai),i.getVertexPosition(f,bi);const p=Ru(i,t,e,n,Ti,Ai,bi,Cr);if(p){r&&(br.fromBufferAttribute(r,a),wr.fromBufferAttribute(r,u),Rr.fromBufferAttribute(r,f),p.uv=hn.getInterpolation(Cr,Ti,Ai,bi,br,wr,Rr,new de)),o&&(br.fromBufferAttribute(o,a),wr.fromBufferAttribute(o,u),Rr.fromBufferAttribute(o,f),p.uv1=hn.getInterpolation(Cr,Ti,Ai,bi,br,wr,Rr,new de),p.uv2=p.uv1),c&&(Ma.fromBufferAttribute(c,a),Sa.fromBufferAttribute(c,u),Ea.fromBufferAttribute(c,f),p.normal=hn.getInterpolation(Cr,Ti,Ai,bi,Ma,Sa,Ea,new W),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a,b:u,c:f,normal:new W,materialIndex:0};hn.getNormal(Ti,Ai,bi,g.normal),p.face=g}return p}class or extends Cn{constructor(t=1,e=1,n=1,r=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:c};const a=this;r=Math.floor(r),o=Math.floor(o),c=Math.floor(c);const u=[],f=[],p=[],g=[];let _=0,M=0;y("z","y","x",-1,-1,n,e,t,c,o,0),y("z","y","x",1,-1,n,e,-t,c,o,1),y("x","z","y",1,1,t,n,e,r,c,2),y("x","z","y",1,-1,t,n,-e,r,c,3),y("x","y","z",1,-1,t,e,n,r,o,4),y("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(u),this.setAttribute("position",new ni(f,3)),this.setAttribute("normal",new ni(p,3)),this.setAttribute("uv",new ni(g,2));function y(E,m,d,D,R,L,H,z,I,it,A){const x=L/I,U=H/it,k=L/2,tt=H/2,N=z/2,V=I+1,O=it+1;let X=0,$=0;const et=new W;for(let nt=0;nt<O;nt++){const ht=nt*U-tt;for(let ut=0;ut<V;ut++){const Q=ut*x-k;et[E]=Q*D,et[m]=ht*R,et[d]=N,f.push(et.x,et.y,et.z),et[E]=0,et[m]=0,et[d]=z>0?1:-1,p.push(et.x,et.y,et.z),g.push(ut/I),g.push(1-nt/it),X+=1}}for(let nt=0;nt<it;nt++)for(let ht=0;ht<I;ht++){const ut=_+ht+V*nt,Q=_+ht+V*(nt+1),rt=_+(ht+1)+V*(nt+1),xt=_+(ht+1)+V*nt;u.push(ut,Q,xt),u.push(Q,rt,xt),$+=6}a.addGroup(M,$,A),M+=$,_+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=zi(i[e]);for(const r in n)t[r]=n[r]}return t}function Cu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _l(i){return i.getRenderTarget()===null?i.outputColorSpace:fe.workingColorSpace}const Pu={clone:zi,merge:Ve};var Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=Cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vl extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends vl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const u=c.fullWidth,f=c.fullHeight;o+=c.offsetX*r/u,e-=c.offsetY*n/f,r*=c.width/u,n*=c.height/f}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,Ri=1;class Du extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(wi,Ri,t,e);r.layers=this.layers,this.add(r);const o=new rn(wi,Ri,t,e);o.layers=this.layers,this.add(o);const c=new rn(wi,Ri,t,e);c.layers=this.layers,this.add(c);const a=new rn(wi,Ri,t,e);a.layers=this.layers,this.add(a);const u=new rn(wi,Ri,t,e);u.layers=this.layers,this.add(u);const f=new rn(wi,Ri,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,o,c,a,u]=e;for(const f of e)this.remove(f);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,c,a,u,f,p]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,o),t.setRenderTarget(n,1,r),t.render(e,c),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,u),t.setRenderTarget(n,4,r),t.render(e,f),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,r),t.render(e,p),t.setRenderTarget(g,_,M),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class xl extends $e{constructor(t,e,n,r,o,c,a,u,f,p){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,n,r,o,c,a,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Iu extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ei?Ne:sn),this.texture=new xl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new or(5,5,5),o=new ri({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Gn});o.uniforms.tEquirect.value=e;const c=new zn(r,o),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=nn),new Du(1,10,this).update(t,c),e.minFilter=a,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,n,r){const o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,n,r);t.setRenderTarget(o)}}const Ps=new W,Nu=new W,Fu=new ee;class Kn{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ps.subVectors(n,e).cross(Nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ps),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fu.getNormalMatrix(t),r=this.coplanarPoint(Ps).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new Kr,Ur=new W;class Ml{constructor(t=new Kn,e=new Kn,n=new Kn,r=new Kn,o=new Kn,c=new Kn){this.planes=[t,e,n,r,o,c]}set(t,e,n,r,o,c){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(c),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,r=t.elements,o=r[0],c=r[1],a=r[2],u=r[3],f=r[4],p=r[5],g=r[6],_=r[7],M=r[8],y=r[9],E=r[10],m=r[11],d=r[12],D=r[13],R=r[14],L=r[15];if(n[0].setComponents(u-o,_-f,m-M,L-d).normalize(),n[1].setComponents(u+o,_+f,m+M,L+d).normalize(),n[2].setComponents(u+c,_+p,m+y,L+D).normalize(),n[3].setComponents(u-c,_-p,m-y,L-D).normalize(),n[4].setComponents(u-a,_-g,m-E,L-R).normalize(),e===bn)n[5].setComponents(u+a,_+g,m+E,L+R).normalize();else if(e===Wr)n[5].setComponents(a,g,E,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ur.x=r.normal.x>0?t.max.x:t.min.x,Ur.y=r.normal.y>0?t.max.y:t.min.y,Ur.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sl(){let i=null,t=!1,e=null,n=null;function r(o,c){e(o,c),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ou(i,t){const e=t.isWebGL2,n=new WeakMap;function r(f,p){const g=f.array,_=f.usage,M=g.byteLength,y=i.createBuffer();i.bindBuffer(p,y),i.bufferData(p,g,_),f.onUploadCallback();let E;if(g instanceof Float32Array)E=i.FLOAT;else if(g instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(e)E=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=i.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=i.SHORT;else if(g instanceof Uint32Array)E=i.UNSIGNED_INT;else if(g instanceof Int32Array)E=i.INT;else if(g instanceof Int8Array)E=i.BYTE;else if(g instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:M}}function o(f,p,g){const _=p.array,M=p._updateRange,y=p.updateRanges;if(i.bindBuffer(g,f),M.count===-1&&y.length===0&&i.bufferSubData(g,0,_),y.length!==0){for(let E=0,m=y.length;E<m;E++){const d=y[E];e?i.bufferSubData(g,d.start*_.BYTES_PER_ELEMENT,_,d.start,d.count):i.bufferSubData(g,d.start*_.BYTES_PER_ELEMENT,_.subarray(d.start,d.start+d.count))}p.clearUpdateRanges()}M.count!==-1&&(e?i.bufferSubData(g,M.offset*_.BYTES_PER_ELEMENT,_,M.offset,M.count):i.bufferSubData(g,M.offset*_.BYTES_PER_ELEMENT,_.subarray(M.offset,M.offset+M.count)),M.count=-1),p.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);p&&(i.deleteBuffer(p.buffer),n.delete(f))}function u(f,p){if(f.isGLBufferAttribute){const _=n.get(f);(!_||_.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const g=n.get(f);if(g===void 0)n.set(f,r(f,p));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(g.buffer,f,p),g.version=f.version}}return{get:c,remove:a,update:u}}class Qs extends Cn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const o=t/2,c=e/2,a=Math.floor(n),u=Math.floor(r),f=a+1,p=u+1,g=t/a,_=e/u,M=[],y=[],E=[],m=[];for(let d=0;d<p;d++){const D=d*_-c;for(let R=0;R<f;R++){const L=R*g-o;y.push(L,-D,0),E.push(0,0,1),m.push(R/a),m.push(1-d/u)}}for(let d=0;d<u;d++)for(let D=0;D<a;D++){const R=D+f*d,L=D+f*(d+1),H=D+1+f*(d+1),z=D+1+f*d;M.push(R,L,z),M.push(L,H,z)}this.setIndex(M),this.setAttribute("position",new ni(y,3)),this.setAttribute("normal",new ni(E,3)),this.setAttribute("uv",new ni(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ju=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ju=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ah=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ch=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",mh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ah=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ph=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Oh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$h=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,af=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Df=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ed=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,id=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ad=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Bu,alphahash_pars_fragment:zu,alphamap_fragment:Gu,alphamap_pars_fragment:Hu,alphatest_fragment:Vu,alphatest_pars_fragment:ku,aomap_fragment:Wu,aomap_pars_fragment:Xu,batching_pars_vertex:ju,batching_vertex:qu,begin_vertex:Yu,beginnormal_vertex:Ku,bsdfs:Zu,iridescence_fragment:$u,bumpmap_pars_fragment:Ju,clipping_planes_fragment:Qu,clipping_planes_pars_fragment:th,clipping_planes_pars_vertex:eh,clipping_planes_vertex:nh,color_fragment:ih,color_pars_fragment:rh,color_pars_vertex:sh,color_vertex:oh,common:ah,cube_uv_reflection_fragment:lh,defaultnormal_vertex:ch,displacementmap_pars_vertex:uh,displacementmap_vertex:hh,emissivemap_fragment:fh,emissivemap_pars_fragment:dh,colorspace_fragment:ph,colorspace_pars_fragment:mh,envmap_fragment:gh,envmap_common_pars_fragment:_h,envmap_pars_fragment:vh,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Lh,envmap_vertex:Mh,fog_vertex:Sh,fog_pars_vertex:Eh,fog_fragment:yh,fog_pars_fragment:Th,gradientmap_pars_fragment:Ah,lightmap_fragment:bh,lightmap_pars_fragment:wh,lights_lambert_fragment:Rh,lights_lambert_pars_fragment:Ch,lights_pars_begin:Ph,lights_toon_fragment:Uh,lights_toon_pars_fragment:Dh,lights_phong_fragment:Ih,lights_phong_pars_fragment:Nh,lights_physical_fragment:Fh,lights_physical_pars_fragment:Oh,lights_fragment_begin:Bh,lights_fragment_maps:zh,lights_fragment_end:Gh,logdepthbuf_fragment:Hh,logdepthbuf_pars_fragment:Vh,logdepthbuf_pars_vertex:kh,logdepthbuf_vertex:Wh,map_fragment:Xh,map_pars_fragment:jh,map_particle_fragment:qh,map_particle_pars_fragment:Yh,metalnessmap_fragment:Kh,metalnessmap_pars_fragment:Zh,morphcolor_vertex:$h,morphnormal_vertex:Jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:tf,normal_fragment_begin:ef,normal_fragment_maps:nf,normal_pars_fragment:rf,normal_pars_vertex:sf,normal_vertex:of,normalmap_pars_fragment:af,clearcoat_normal_fragment_begin:lf,clearcoat_normal_fragment_maps:cf,clearcoat_pars_fragment:uf,iridescence_pars_fragment:hf,opaque_fragment:ff,packing:df,premultiplied_alpha_fragment:pf,project_vertex:mf,dithering_fragment:gf,dithering_pars_fragment:_f,roughnessmap_fragment:vf,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:Sf,shadowmap_vertex:Ef,shadowmask_pars_fragment:yf,skinbase_vertex:Tf,skinning_pars_vertex:Af,skinning_vertex:bf,skinnormal_vertex:wf,specularmap_fragment:Rf,specularmap_pars_fragment:Cf,tonemapping_fragment:Pf,tonemapping_pars_fragment:Lf,transmission_fragment:Uf,transmission_pars_fragment:Df,uv_pars_fragment:If,uv_pars_vertex:Nf,uv_vertex:Ff,worldpos_vertex:Of,background_vert:Bf,background_frag:zf,backgroundCube_vert:Gf,backgroundCube_frag:Hf,cube_vert:Vf,cube_frag:kf,depth_vert:Wf,depth_frag:Xf,distanceRGBA_vert:jf,distanceRGBA_frag:qf,equirect_vert:Yf,equirect_frag:Kf,linedashed_vert:Zf,linedashed_frag:$f,meshbasic_vert:Jf,meshbasic_frag:Qf,meshlambert_vert:td,meshlambert_frag:ed,meshmatcap_vert:nd,meshmatcap_frag:id,meshnormal_vert:rd,meshnormal_frag:sd,meshphong_vert:od,meshphong_frag:ad,meshphysical_vert:ld,meshphysical_frag:cd,meshtoon_vert:ud,meshtoon_frag:hd,points_vert:fd,points_frag:dd,shadow_vert:pd,shadow_frag:md,sprite_vert:gd,sprite_frag:_d},mt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},gn={basic:{uniforms:Ve([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ve([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new le(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ve([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ve([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ve([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new le(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ve([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ve([mt.points,mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ve([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ve([mt.common,mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ve([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ve([mt.sprite,mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ve([mt.common,mt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ve([mt.lights,mt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};gn.physical={uniforms:Ve([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Dr={r:0,b:0,g:0};function vd(i,t,e,n,r,o,c){const a=new le(0);let u=o===!0?0:1,f,p,g=null,_=0,M=null;function y(m,d){let D=!1,R=d.isScene===!0?d.background:null;R&&R.isTexture&&(R=(d.backgroundBlurriness>0?e:t).get(R)),R===null?E(a,u):R&&R.isColor&&(E(R,1),D=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||D)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),R&&(R.isCubeTexture||R.mapping===qr)?(p===void 0&&(p=new zn(new or(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:zi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,z,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,p.material.toneMapped=fe.getTransfer(R.colorSpace)!==xe,(g!==R||_!==R.version||M!==i.toneMapping)&&(p.material.needsUpdate=!0,g=R,_=R.version,M=i.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(f===void 0&&(f=new zn(new Qs(2,2),new ri({name:"BackgroundMaterial",uniforms:zi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=R,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.toneMapped=fe.getTransfer(R.colorSpace)!==xe,R.matrixAutoUpdate===!0&&R.updateMatrix(),f.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||M!==i.toneMapping)&&(f.material.needsUpdate=!0,g=R,_=R.version,M=i.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null))}function E(m,d){m.getRGB(Dr,_l(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,d,c)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),u=d,E(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(m){u=m,E(a,u)},render:y}}function xd(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),c=n.isWebGL2||o!==null,a={},u=m(null);let f=u,p=!1;function g(N,V,O,X,$){let et=!1;if(c){const nt=E(X,O,V);f!==nt&&(f=nt,M(f.object)),et=d(N,X,O,$),et&&D(N,X,O,$)}else{const nt=V.wireframe===!0;(f.geometry!==X.id||f.program!==O.id||f.wireframe!==nt)&&(f.geometry=X.id,f.program=O.id,f.wireframe=nt,et=!0)}$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(et||p)&&(p=!1,it(N,V,O,X),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function _(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function M(N){return n.isWebGL2?i.bindVertexArray(N):o.bindVertexArrayOES(N)}function y(N){return n.isWebGL2?i.deleteVertexArray(N):o.deleteVertexArrayOES(N)}function E(N,V,O){const X=O.wireframe===!0;let $=a[N.id];$===void 0&&($={},a[N.id]=$);let et=$[V.id];et===void 0&&(et={},$[V.id]=et);let nt=et[X];return nt===void 0&&(nt=m(_()),et[X]=nt),nt}function m(N){const V=[],O=[],X=[];for(let $=0;$<r;$++)V[$]=0,O[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:O,attributeDivisors:X,object:N,attributes:{},index:null}}function d(N,V,O,X){const $=f.attributes,et=V.attributes;let nt=0;const ht=O.getAttributes();for(const ut in ht)if(ht[ut].location>=0){const rt=$[ut];let xt=et[ut];if(xt===void 0&&(ut==="instanceMatrix"&&N.instanceMatrix&&(xt=N.instanceMatrix),ut==="instanceColor"&&N.instanceColor&&(xt=N.instanceColor)),rt===void 0||rt.attribute!==xt||xt&&rt.data!==xt.data)return!0;nt++}return f.attributesNum!==nt||f.index!==X}function D(N,V,O,X){const $={},et=V.attributes;let nt=0;const ht=O.getAttributes();for(const ut in ht)if(ht[ut].location>=0){let rt=et[ut];rt===void 0&&(ut==="instanceMatrix"&&N.instanceMatrix&&(rt=N.instanceMatrix),ut==="instanceColor"&&N.instanceColor&&(rt=N.instanceColor));const xt={};xt.attribute=rt,rt&&rt.data&&(xt.data=rt.data),$[ut]=xt,nt++}f.attributes=$,f.attributesNum=nt,f.index=X}function R(){const N=f.newAttributes;for(let V=0,O=N.length;V<O;V++)N[V]=0}function L(N){H(N,0)}function H(N,V){const O=f.newAttributes,X=f.enabledAttributes,$=f.attributeDivisors;O[N]=1,X[N]===0&&(i.enableVertexAttribArray(N),X[N]=1),$[N]!==V&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),$[N]=V)}function z(){const N=f.newAttributes,V=f.enabledAttributes;for(let O=0,X=V.length;O<X;O++)V[O]!==N[O]&&(i.disableVertexAttribArray(O),V[O]=0)}function I(N,V,O,X,$,et,nt){nt===!0?i.vertexAttribIPointer(N,V,O,$,et):i.vertexAttribPointer(N,V,O,X,$,et)}function it(N,V,O,X){if(n.isWebGL2===!1&&(N.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;R();const $=X.attributes,et=O.getAttributes(),nt=V.defaultAttributeValues;for(const ht in et){const ut=et[ht];if(ut.location>=0){let Q=$[ht];if(Q===void 0&&(ht==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ht==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const rt=Q.normalized,xt=Q.itemSize,Ct=e.get(Q);if(Ct===void 0)continue;const Pt=Ct.buffer,Wt=Ct.type,Xt=Ct.bytesPerElement,Dt=n.isWebGL2===!0&&(Wt===i.INT||Wt===i.UNSIGNED_INT||Q.gpuType===Ja);if(Q.isInterleavedBufferAttribute){const Qt=Q.data,Y=Qt.stride,ne=Q.offset;if(Qt.isInstancedInterleavedBuffer){for(let Et=0;Et<ut.locationSize;Et++)H(ut.location+Et,Qt.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Qt.meshPerAttribute*Qt.count)}else for(let Et=0;Et<ut.locationSize;Et++)L(ut.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Et=0;Et<ut.locationSize;Et++)I(ut.location+Et,xt/ut.locationSize,Wt,rt,Y*Xt,(ne+xt/ut.locationSize*Et)*Xt,Dt)}else{if(Q.isInstancedBufferAttribute){for(let Qt=0;Qt<ut.locationSize;Qt++)H(ut.location+Qt,Q.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Qt=0;Qt<ut.locationSize;Qt++)L(ut.location+Qt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Qt=0;Qt<ut.locationSize;Qt++)I(ut.location+Qt,xt/ut.locationSize,Wt,rt,xt*Xt,xt/ut.locationSize*Qt*Xt,Dt)}}else if(nt!==void 0){const rt=nt[ht];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(ut.location,rt);break;case 3:i.vertexAttrib3fv(ut.location,rt);break;case 4:i.vertexAttrib4fv(ut.location,rt);break;default:i.vertexAttrib1fv(ut.location,rt)}}}}z()}function A(){k();for(const N in a){const V=a[N];for(const O in V){const X=V[O];for(const $ in X)y(X[$].object),delete X[$];delete V[O]}delete a[N]}}function x(N){if(a[N.id]===void 0)return;const V=a[N.id];for(const O in V){const X=V[O];for(const $ in X)y(X[$].object),delete X[$];delete V[O]}delete a[N.id]}function U(N){for(const V in a){const O=a[V];if(O[N.id]===void 0)continue;const X=O[N.id];for(const $ in X)y(X[$].object),delete X[$];delete O[N.id]}}function k(){tt(),p=!0,f!==u&&(f=u,M(f.object))}function tt(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:g,reset:k,resetDefaultState:tt,dispose:A,releaseStatesOfGeometry:x,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:L,disableUnusedAttributes:z}}function Md(i,t,e,n){const r=n.isWebGL2;let o;function c(p){o=p}function a(p,g){i.drawArrays(o,p,g),e.update(g,o,1)}function u(p,g,_){if(_===0)return;let M,y;if(r)M=i,y="drawArraysInstanced";else if(M=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[y](o,p,g,_),e.update(g,o,_)}function f(p,g,_){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_;y++)this.render(p[y],g[y]);else{M.multiDrawArraysWEBGL(o,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];e.update(y,o,1)}}this.setMode=c,this.render=a,this.renderInstances=u,this.renderMultiDraw=f}function Sd(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const u=o(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const f=c||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),E=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,L=c||t.has("OES_texture_float"),H=R&&L,z=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:y,maxAttributes:E,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:D,vertexTextures:R,floatFragmentTextures:L,floatVertexTextures:H,maxSamples:z}}function Ed(i){const t=this;let e=null,n=0,r=!1,o=!1;const c=new Kn,a=new ee,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const M=g.length!==0||_||n!==0||r;return r=_,n=g.length,M},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){e=p(g,_,0)},this.setState=function(g,_,M){const y=g.clippingPlanes,E=g.clipIntersection,m=g.clipShadows,d=i.get(g);if(!r||y===null||y.length===0||o&&!m)o?p(null):f();else{const D=o?0:n,R=D*4;let L=d.clippingState||null;u.value=L,L=p(y,_,R,M);for(let H=0;H!==R;++H)L[H]=e[H];d.clippingState=L,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(g,_,M,y){const E=g!==null?g.length:0;let m=null;if(E!==0){if(m=u.value,y!==!0||m===null){const d=M+E*4,D=_.matrixWorldInverse;a.getNormalMatrix(D),(m===null||m.length<d)&&(m=new Float32Array(d));for(let R=0,L=M;R!==E;++R,L+=4)c.copy(g[R]).applyMatrix4(D,a),c.normal.toArray(m,L),m[L+3]=c.constant}u.value=m,u.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}function yd(i){let t=new WeakMap;function e(c,a){return a===Gs?c.mapping=Fi:a===Hs&&(c.mapping=Oi),c}function n(c){if(c&&c.isTexture){const a=c.mapping;if(a===Gs||a===Hs)if(t.has(c)){const u=t.get(c).texture;return e(u,c.mapping)}else{const u=c.image;if(u&&u.height>0){const f=new Iu(u.height/2);return f.fromEquirectangularTexture(i,c),t.set(c,f),c.addEventListener("dispose",r),e(f.texture,c.mapping)}else return null}}return c}function r(c){const a=c.target;a.removeEventListener("dispose",r);const u=t.get(a);u!==void 0&&(t.delete(a),u.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Td extends vl{constructor(t=-1,e=1,n=1,r=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-t,c=n+t,a=r+e,u=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,a-=p*this.view.offsetY,u=a-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Pi=4,ya=[.125,.215,.35,.446,.526,.582],Jn=20,Ls=new Td,Ta=new le;let Us=null,Ds=0,Is=0;const Zn=(1+Math.sqrt(5))/2,Ci=1/Zn,Aa=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Zn,Ci),new W(0,Zn,-Ci),new W(Ci,0,Zn),new W(-Ci,0,Zn),new W(Zn,Ci,0),new W(-Zn,Ci,0)];class ba{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Us=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Is=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ca(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ra(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Us,Ds,Is),t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Us=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Is=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:tr,format:dn,colorSpace:wn,depthBuffer:!1},r=wa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wa(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ad(o)),this._blurMaterial=bd(o,t,e)}return r}_compileMaterial(t){const e=new zn(this._lodPlanes[0],t);this._renderer.compile(e,Ls)}_sceneToCubeUV(t,e,n,r){const a=new rn(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(Ta),p.toneMapping=Hn,p.autoClear=!1;const M=new pl({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),y=new zn(new or,M);let E=!1;const m=t.background;m?m.isColor&&(M.color.copy(m),t.background=null,E=!0):(M.color.copy(Ta),E=!0);for(let d=0;d<6;d++){const D=d%3;D===0?(a.up.set(0,u[d],0),a.lookAt(f[d],0,0)):D===1?(a.up.set(0,0,u[d]),a.lookAt(0,f[d],0)):(a.up.set(0,u[d],0),a.lookAt(0,0,f[d]));const R=this._cubeSize;Ir(r,D*R,d>2?R:0,R,R),p.setRenderTarget(r),E&&p.render(y,a),p.render(t,a)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=_,p.autoClear=g,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Fi||t.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ca()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ra());const o=r?this._cubemapMaterial:this._equirectMaterial,c=new zn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const u=this._cubeSize;Ir(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(c,Ls)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=Aa[(r-1)%Aa.length];this._blur(t,r-1,r,o,c)}e.autoClear=n}_blur(t,e,n,r,o){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,n,r,"latitudinal",o),this._halfBlur(c,t,n,n,r,"longitudinal",o)}_halfBlur(t,e,n,r,o,c,a){const u=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new zn(this._lodPlanes[r],f),_=f.uniforms,M=this._sizeLods[n]-1,y=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*Jn-1),E=o/y,m=isFinite(o)?1+Math.floor(p*E):Jn;m>Jn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const d=[];let D=0;for(let I=0;I<Jn;++I){const it=I/E,A=Math.exp(-it*it/2);d.push(A),I===0?D+=A:I<m&&(D+=2*A)}for(let I=0;I<d.length;I++)d[I]=d[I]/D;_.envMap.value=t.texture,_.samples.value=m,_.weights.value=d,_.latitudinal.value=c==="latitudinal",a&&(_.poleAxis.value=a);const{_lodMax:R}=this;_.dTheta.value=y,_.mipInt.value=R-n;const L=this._sizeLods[r],H=3*L*(r>R-Pi?r-R+Pi:0),z=4*(this._cubeSize-L);Ir(e,H,z,3*L,2*L),u.setRenderTarget(e),u.render(g,Ls)}}function Ad(i){const t=[],e=[],n=[];let r=i;const o=i-Pi+1+ya.length;for(let c=0;c<o;c++){const a=Math.pow(2,r);e.push(a);let u=1/a;c>i-Pi?u=ya[c-i+Pi-1]:c===0&&(u=0),n.push(u);const f=1/(a-2),p=-f,g=1+f,_=[p,p,g,p,g,g,p,p,g,g,p,g],M=6,y=6,E=3,m=2,d=1,D=new Float32Array(E*y*M),R=new Float32Array(m*y*M),L=new Float32Array(d*y*M);for(let z=0;z<M;z++){const I=z%3*2/3-1,it=z>2?0:-1,A=[I,it,0,I+2/3,it,0,I+2/3,it+1,0,I,it,0,I+2/3,it+1,0,I,it+1,0];D.set(A,E*y*z),R.set(_,m*y*z);const x=[z,z,z,z,z,z];L.set(x,d*y*z)}const H=new Cn;H.setAttribute("position",new on(D,E)),H.setAttribute("uv",new on(R,m)),H.setAttribute("faceIndex",new on(L,d)),t.push(H),r>Pi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wa(i,t,e){const n=new ii(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function bd(i,t,e){const n=new Float32Array(Jn),r=new W(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ra(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ca(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function to(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const u=a.mapping,f=u===Gs||u===Hs,p=u===Fi||u===Oi;if(f||p)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let g=t.get(a);return e===null&&(e=new ba(i)),g=f?e.fromEquirectangular(a,g):e.fromCubemap(a,g),t.set(a,g),g.texture}else{if(t.has(a))return t.get(a).texture;{const g=a.image;if(f&&g&&g.height>0||p&&g&&r(g)){e===null&&(e=new ba(i));const _=f?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,_),a.addEventListener("dispose",o),_.texture}else return null}}}return a}function r(a){let u=0;const f=6;for(let p=0;p<f;p++)a[p]!==void 0&&u++;return u===f}function o(a){const u=a.target;u.removeEventListener("dispose",o);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:c}}function Rd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Cd(i,t,e,n){const r={},o=new WeakMap;function c(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const y in _.attributes)t.remove(_.attributes[y]);for(const y in _.morphAttributes){const E=_.morphAttributes[y];for(let m=0,d=E.length;m<d;m++)t.remove(E[m])}_.removeEventListener("dispose",c),delete r[_.id];const M=o.get(_);M&&(t.remove(M),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function a(g,_){return r[_.id]===!0||(_.addEventListener("dispose",c),r[_.id]=!0,e.memory.geometries++),_}function u(g){const _=g.attributes;for(const y in _)t.update(_[y],i.ARRAY_BUFFER);const M=g.morphAttributes;for(const y in M){const E=M[y];for(let m=0,d=E.length;m<d;m++)t.update(E[m],i.ARRAY_BUFFER)}}function f(g){const _=[],M=g.index,y=g.attributes.position;let E=0;if(M!==null){const D=M.array;E=M.version;for(let R=0,L=D.length;R<L;R+=3){const H=D[R+0],z=D[R+1],I=D[R+2];_.push(H,z,z,I,I,H)}}else if(y!==void 0){const D=y.array;E=y.version;for(let R=0,L=D.length/3-1;R<L;R+=3){const H=R+0,z=R+1,I=R+2;_.push(H,z,z,I,I,H)}}else return;const m=new(al(_)?gl:ml)(_,1);m.version=E;const d=o.get(g);d&&t.remove(d),o.set(g,m)}function p(g){const _=o.get(g);if(_){const M=g.index;M!==null&&_.version<M.version&&f(g)}else f(g);return o.get(g)}return{get:a,update:u,getWireframeAttribute:p}}function Pd(i,t,e,n){const r=n.isWebGL2;let o;function c(M){o=M}let a,u;function f(M){a=M.type,u=M.bytesPerElement}function p(M,y){i.drawElements(o,y,a,M*u),e.update(y,o,1)}function g(M,y,E){if(E===0)return;let m,d;if(r)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](o,y,a,M*u,E),e.update(y,o,E)}function _(M,y,E){if(E===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<E;d++)this.render(M[d]/u,y[d]);else{m.multiDrawElementsWEBGL(o,y,0,a,M,0,E);let d=0;for(let D=0;D<E;D++)d+=y[D];e.update(d,o,1)}}this.setMode=c,this.setIndex=f,this.render=p,this.renderInstances=g,this.renderMultiDraw=_}function Ld(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,a){switch(e.calls++,c){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ud(i,t){return i[0]-t[0]}function Dd(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Id(i,t,e){const n={},r=new Float32Array(8),o=new WeakMap,c=new Fe,a=[];for(let f=0;f<8;f++)a[f]=[f,0];function u(f,p,g){const _=f.morphTargetInfluences;if(t.isWebGL2===!0){const y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,E=y!==void 0?y.length:0;let m=o.get(p);if(m===void 0||m.count!==E){let V=function(){tt.dispose(),o.delete(p),p.removeEventListener("dispose",V)};var M=V;m!==void 0&&m.texture.dispose();const R=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,H=p.morphAttributes.color!==void 0,z=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],it=p.morphAttributes.color||[];let A=0;R===!0&&(A=1),L===!0&&(A=2),H===!0&&(A=3);let x=p.attributes.position.count*A,U=1;x>t.maxTextureSize&&(U=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const k=new Float32Array(x*U*4*E),tt=new ul(k,x,U,E);tt.type=Bn,tt.needsUpdate=!0;const N=A*4;for(let O=0;O<E;O++){const X=z[O],$=I[O],et=it[O],nt=x*U*4*O;for(let ht=0;ht<X.count;ht++){const ut=ht*N;R===!0&&(c.fromBufferAttribute(X,ht),k[nt+ut+0]=c.x,k[nt+ut+1]=c.y,k[nt+ut+2]=c.z,k[nt+ut+3]=0),L===!0&&(c.fromBufferAttribute($,ht),k[nt+ut+4]=c.x,k[nt+ut+5]=c.y,k[nt+ut+6]=c.z,k[nt+ut+7]=0),H===!0&&(c.fromBufferAttribute(et,ht),k[nt+ut+8]=c.x,k[nt+ut+9]=c.y,k[nt+ut+10]=c.z,k[nt+ut+11]=et.itemSize===4?c.w:1)}}m={count:E,texture:tt,size:new de(x,U)},o.set(p,m),p.addEventListener("dispose",V)}let d=0;for(let R=0;R<_.length;R++)d+=_[R];const D=p.morphTargetsRelative?1:1-d;g.getUniforms().setValue(i,"morphTargetBaseInfluence",D),g.getUniforms().setValue(i,"morphTargetInfluences",_),g.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),g.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const y=_===void 0?0:_.length;let E=n[p.id];if(E===void 0||E.length!==y){E=[];for(let L=0;L<y;L++)E[L]=[L,0];n[p.id]=E}for(let L=0;L<y;L++){const H=E[L];H[0]=L,H[1]=_[L]}E.sort(Dd);for(let L=0;L<8;L++)L<y&&E[L][1]?(a[L][0]=E[L][0],a[L][1]=E[L][1]):(a[L][0]=Number.MAX_SAFE_INTEGER,a[L][1]=0);a.sort(Ud);const m=p.morphAttributes.position,d=p.morphAttributes.normal;let D=0;for(let L=0;L<8;L++){const H=a[L],z=H[0],I=H[1];z!==Number.MAX_SAFE_INTEGER&&I?(m&&p.getAttribute("morphTarget"+L)!==m[z]&&p.setAttribute("morphTarget"+L,m[z]),d&&p.getAttribute("morphNormal"+L)!==d[z]&&p.setAttribute("morphNormal"+L,d[z]),r[L]=I,D+=I):(m&&p.hasAttribute("morphTarget"+L)===!0&&p.deleteAttribute("morphTarget"+L),d&&p.hasAttribute("morphNormal"+L)===!0&&p.deleteAttribute("morphNormal"+L),r[L]=0)}const R=p.morphTargetsRelative?1:1-D;g.getUniforms().setValue(i,"morphTargetBaseInfluence",R),g.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function Nd(i,t,e,n){let r=new WeakMap;function o(u){const f=n.render.frame,p=u.geometry,g=t.get(u,p);if(r.get(g)!==f&&(t.update(g),r.set(g,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==f&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const _=u.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return g}function c(){r=new WeakMap}function a(u){const f=u.target;f.removeEventListener("dispose",a),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:c}}class El extends $e{constructor(t,e,n,r,o,c,a,u,f,p){if(p=p!==void 0?p:ti,p!==ti&&p!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===ti&&(n=On),n===void 0&&p===Bi&&(n=Qn),super(null,r,o,c,a,u,p,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=u!==void 0?u:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yl=new $e,Tl=new El(1,1);Tl.compareFunction=ol;const Al=new ul,bl=new _u,wl=new xl,Pa=[],La=[],Ua=new Float32Array(16),Da=new Float32Array(9),Ia=new Float32Array(4);function Hi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let o=Pa[r];if(o===void 0&&(o=new Float32Array(r),Pa[r]=o),t!==0){n.toArray(o,0);for(let c=1,a=0;c!==t;++c)a+=e,i[c].toArray(o,a)}return o}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $r(i,t){let e=La[t];e===void 0&&(e=new Int32Array(t),La[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Gd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Ia.set(n),i.uniformMatrix2fv(this.addr,!1,Ia),Ce(e,n)}}function Hd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Da.set(n),i.uniformMatrix3fv(this.addr,!1,Da),Ce(e,n)}}function Vd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Ua.set(n),i.uniformMatrix4fv(this.addr,!1,Ua),Ce(e,n)}}function kd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function qd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function $d(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const o=this.type===i.SAMPLER_2D_SHADOW?Tl:yl;e.setTexture2D(t||o,r)}function Jd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||bl,r)}function Qd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||wl,r)}function tp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Al,r)}function ep(i){switch(i){case 5126:return Fd;case 35664:return Od;case 35665:return Bd;case 35666:return zd;case 35674:return Gd;case 35675:return Hd;case 35676:return Vd;case 5124:case 35670:return kd;case 35667:case 35671:return Wd;case 35668:case 35672:return Xd;case 35669:case 35673:return jd;case 5125:return qd;case 36294:return Yd;case 36295:return Kd;case 36296:return Zd;case 35678:case 36198:case 36298:case 36306:case 35682:return $d;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return tp}}function np(i,t){i.uniform1fv(this.addr,t)}function ip(i,t){const e=Hi(t,this.size,2);i.uniform2fv(this.addr,e)}function rp(i,t){const e=Hi(t,this.size,3);i.uniform3fv(this.addr,e)}function sp(i,t){const e=Hi(t,this.size,4);i.uniform4fv(this.addr,e)}function op(i,t){const e=Hi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ap(i,t){const e=Hi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lp(i,t){const e=Hi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cp(i,t){i.uniform1iv(this.addr,t)}function up(i,t){i.uniform2iv(this.addr,t)}function hp(i,t){i.uniform3iv(this.addr,t)}function fp(i,t){i.uniform4iv(this.addr,t)}function dp(i,t){i.uniform1uiv(this.addr,t)}function pp(i,t){i.uniform2uiv(this.addr,t)}function mp(i,t){i.uniform3uiv(this.addr,t)}function gp(i,t){i.uniform4uiv(this.addr,t)}function _p(i,t,e){const n=this.cache,r=t.length,o=$r(e,r);Re(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let c=0;c!==r;++c)e.setTexture2D(t[c]||yl,o[c])}function vp(i,t,e){const n=this.cache,r=t.length,o=$r(e,r);Re(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||bl,o[c])}function xp(i,t,e){const n=this.cache,r=t.length,o=$r(e,r);Re(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||wl,o[c])}function Mp(i,t,e){const n=this.cache,r=t.length,o=$r(e,r);Re(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||Al,o[c])}function Sp(i){switch(i){case 5126:return np;case 35664:return ip;case 35665:return rp;case 35666:return sp;case 35674:return op;case 35675:return ap;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return up;case 35668:case 35672:return hp;case 35669:case 35673:return fp;case 5125:return dp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return Mp}}class Ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ep(e.type)}}class yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sp(e.type)}}class Tp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let o=0,c=r.length;o!==c;++o){const a=r[o];a.setValue(t,e[a.id],n)}}}const Ns=/(\w+)(\])?(\[|\.)?/g;function Na(i,t){i.seq.push(t),i.map[t.id]=t}function Ap(i,t,e){const n=i.name,r=n.length;for(Ns.lastIndex=0;;){const o=Ns.exec(n),c=Ns.lastIndex;let a=o[1];const u=o[2]==="]",f=o[3];if(u&&(a=a|0),f===void 0||f==="["&&c+2===r){Na(e,f===void 0?new Ep(a,i,t):new yp(a,i,t));break}else{let g=e.map[a];g===void 0&&(g=new Tp(a),Na(e,g)),e=g}}}class zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),c=t.getUniformLocation(e,o.name);Ap(o,c,this)}}setValue(t,e,n,r){const o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,c=e.length;o!==c;++o){const a=e[o],u=n[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,o=t.length;r!==o;++r){const c=t[r];c.id in e&&n.push(c)}return n}}function Fa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const bp=37297;let wp=0;function Rp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=r;c<o;c++){const a=c+1;n.push(`${a===t?">":" "} ${a}: ${e[c]}`)}return n.join(`
`)}function Cp(i){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(i);let n;switch(t===e?n="":t===kr&&e===Vr?n="LinearDisplayP3ToLinearSRGB":t===Vr&&e===kr&&(n="LinearSRGBToLinearDisplayP3"),i){case wn:case Yr:return[n,"LinearTransferOETF"];case Ne:case Js:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Oa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Rp(i.getShaderSource(t),c)}else return r}function Pp(i,t){const e=Cp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Lp(i,t){let e;switch(t){case zc:e="Linear";break;case Gc:e="Reinhard";break;case Hc:e="OptimizedCineon";break;case Vc:e="ACESFilmic";break;case Wc:e="AgX";break;case kc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Up(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function Dp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Li).join(`
`)}function Ip(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Np(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(t,r),c=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[c]={type:o.type,location:i.getAttribLocation(t,c),locationSize:a}}return e}function Li(i){return i!==""}function Ba(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function za(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function qs(i){return i.replace(Fp,Bp)}const Op=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bp(i,t){let e=Jt[t];if(e===void 0){const n=Op.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qs(e)}const zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ga(i){return i.replace(zp,Gp)}function Gp(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ha(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ka?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function Vp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Oi:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function Wp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Za:t="ENVMAP_BLENDING_MULTIPLY";break;case Oc:t="ENVMAP_BLENDING_MIX";break;case Bc:t="ENVMAP_BLENDING_ADD";break}return t}function Xp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jp(i,t,e,n){const r=i.getContext(),o=e.defines;let c=e.vertexShader,a=e.fragmentShader;const u=Hp(e),f=Vp(e),p=kp(e),g=Wp(e),_=Xp(e),M=e.isWebGL2?"":Up(e),y=Dp(e),E=Ip(o),m=r.createProgram();let d,D,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Li).join(`
`),d.length>0&&(d+=`
`),D=[M,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Li).join(`
`),D.length>0&&(D+=`
`)):(d=[Ha(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),D=[M,Ha(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?Lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Pp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Li).join(`
`)),c=qs(c),c=Ba(c,e),c=za(c,e),a=qs(a),a=Ba(a,e),a=za(a,e),c=Ga(c),a=Ga(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,D=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const L=R+d+c,H=R+D+a,z=Fa(r,r.VERTEX_SHADER,L),I=Fa(r,r.FRAGMENT_SHADER,H);r.attachShader(m,z),r.attachShader(m,I),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function it(k){if(i.debug.checkShaderErrors){const tt=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(z).trim(),V=r.getShaderInfoLog(I).trim();let O=!0,X=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,z,I);else{const $=Oa(r,z,"vertex"),et=Oa(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+$+`
`+et)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(N===""||V==="")&&(X=!1);X&&(k.diagnostics={runnable:O,programLog:tt,vertexShader:{log:N,prefix:d},fragmentShader:{log:V,prefix:D}})}r.deleteShader(z),r.deleteShader(I),A=new zr(r,m),x=Np(r,m)}let A;this.getUniforms=function(){return A===void 0&&it(this),A};let x;this.getAttributes=function(){return x===void 0&&it(this),x};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,bp)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=z,this.fragmentShader=I,this}let qp=0;class Yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Kp(t),e.set(t,n)),n}}class Kp{constructor(t){this.id=qp++,this.code=t,this.usedTimes=0}}function Zp(i,t,e,n,r,o,c){const a=new fl,u=new Yp,f=[],p=r.isWebGL2,g=r.logarithmicDepthBuffer,_=r.vertexTextures;let M=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return A===0?"uv":`uv${A}`}function m(A,x,U,k,tt){const N=k.fog,V=tt.geometry,O=A.isMeshStandardMaterial?k.environment:null,X=(A.isMeshStandardMaterial?e:t).get(A.envMap||O),$=X&&X.mapping===qr?X.image.height:null,et=y[A.type];A.precision!==null&&(M=r.getMaxPrecision(A.precision),M!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=nt!==void 0?nt.length:0;let ut=0;V.morphAttributes.position!==void 0&&(ut=1),V.morphAttributes.normal!==void 0&&(ut=2),V.morphAttributes.color!==void 0&&(ut=3);let Q,rt,xt,Ct;if(et){const Te=gn[et];Q=Te.vertexShader,rt=Te.fragmentShader}else Q=A.vertexShader,rt=A.fragmentShader,u.update(A),xt=u.getVertexShaderID(A),Ct=u.getFragmentShaderID(A);const Pt=i.getRenderTarget(),Wt=tt.isInstancedMesh===!0,Xt=tt.isBatchedMesh===!0,Dt=!!A.map,Qt=!!A.matcap,Y=!!X,ne=!!A.aoMap,Et=!!A.lightMap,Vt=!!A.bumpMap,At=!!A.normalMap,pe=!!A.displacementMap,qt=!!A.emissiveMap,b=!!A.metalnessMap,S=!!A.roughnessMap,K=A.anisotropy>0,ct=A.clearcoat>0,at=A.iridescence>0,st=A.sheen>0,bt=A.transmission>0,_t=K&&!!A.anisotropyMap,yt=ct&&!!A.clearcoatMap,It=ct&&!!A.clearcoatNormalMap,Yt=ct&&!!A.clearcoatRoughnessMap,lt=at&&!!A.iridescenceMap,oe=at&&!!A.iridescenceThicknessMap,Zt=st&&!!A.sheenColorMap,Nt=st&&!!A.sheenRoughnessMap,Lt=!!A.specularMap,Tt=!!A.specularColorMap,Kt=!!A.specularIntensityMap,ie=bt&&!!A.transmissionMap,me=bt&&!!A.thicknessMap,Gt=!!A.gradientMap,ft=!!A.alphaMap,F=A.alphaTest>0,vt=!!A.alphaHash,gt=!!A.extensions,Ft=!!V.attributes.uv1,wt=!!V.attributes.uv2,ae=!!V.attributes.uv3;let ce=Hn;return A.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(ce=i.toneMapping),{isWebGL2:p,shaderID:et,shaderType:A.type,shaderName:A.name,vertexShader:Q,fragmentShader:rt,defines:A.defines,customVertexShaderID:xt,customFragmentShaderID:Ct,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:Xt,instancing:Wt,instancingColor:Wt&&tt.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:wn,map:Dt,matcap:Qt,envMap:Y,envMapMode:Y&&X.mapping,envMapCubeUVHeight:$,aoMap:ne,lightMap:Et,bumpMap:Vt,normalMap:At,displacementMap:_&&pe,emissiveMap:qt,normalMapObjectSpace:At&&A.normalMapType===iu,normalMapTangentSpace:At&&A.normalMapType===nu,metalnessMap:b,roughnessMap:S,anisotropy:K,anisotropyMap:_t,clearcoat:ct,clearcoatMap:yt,clearcoatNormalMap:It,clearcoatRoughnessMap:Yt,iridescence:at,iridescenceMap:lt,iridescenceThicknessMap:oe,sheen:st,sheenColorMap:Zt,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:Tt,specularIntensityMap:Kt,transmission:bt,transmissionMap:ie,thicknessMap:me,gradientMap:Gt,opaque:A.transparent===!1&&A.blending===Ui,alphaMap:ft,alphaTest:F,alphaHash:vt,combine:A.combine,mapUv:Dt&&E(A.map.channel),aoMapUv:ne&&E(A.aoMap.channel),lightMapUv:Et&&E(A.lightMap.channel),bumpMapUv:Vt&&E(A.bumpMap.channel),normalMapUv:At&&E(A.normalMap.channel),displacementMapUv:pe&&E(A.displacementMap.channel),emissiveMapUv:qt&&E(A.emissiveMap.channel),metalnessMapUv:b&&E(A.metalnessMap.channel),roughnessMapUv:S&&E(A.roughnessMap.channel),anisotropyMapUv:_t&&E(A.anisotropyMap.channel),clearcoatMapUv:yt&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:It&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&E(A.sheenRoughnessMap.channel),specularMapUv:Lt&&E(A.specularMap.channel),specularColorMapUv:Tt&&E(A.specularColorMap.channel),specularIntensityMapUv:Kt&&E(A.specularIntensityMap.channel),transmissionMapUv:ie&&E(A.transmissionMap.channel),thicknessMapUv:me&&E(A.thicknessMap.channel),alphaMapUv:ft&&E(A.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(At||K),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:wt,vertexUv3s:ae,pointsUvs:tt.isPoints===!0&&!!V.attributes.uv&&(Dt||ft),fog:!!N,useFog:A.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:tt.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Dt&&A.map.isVideoTexture===!0&&fe.getTransfer(A.map.colorSpace)===xe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===An,flipSided:A.side===qe,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:gt&&A.extensions.derivatives===!0,extensionFragDepth:gt&&A.extensions.fragDepth===!0,extensionDrawBuffers:gt&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&A.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function d(A){const x=[];if(A.shaderID?x.push(A.shaderID):(x.push(A.customVertexShaderID),x.push(A.customFragmentShaderID)),A.defines!==void 0)for(const U in A.defines)x.push(U),x.push(A.defines[U]);return A.isRawShaderMaterial===!1&&(D(x,A),R(x,A),x.push(i.outputColorSpace)),x.push(A.customProgramCacheKey),x.join()}function D(A,x){A.push(x.precision),A.push(x.outputColorSpace),A.push(x.envMapMode),A.push(x.envMapCubeUVHeight),A.push(x.mapUv),A.push(x.alphaMapUv),A.push(x.lightMapUv),A.push(x.aoMapUv),A.push(x.bumpMapUv),A.push(x.normalMapUv),A.push(x.displacementMapUv),A.push(x.emissiveMapUv),A.push(x.metalnessMapUv),A.push(x.roughnessMapUv),A.push(x.anisotropyMapUv),A.push(x.clearcoatMapUv),A.push(x.clearcoatNormalMapUv),A.push(x.clearcoatRoughnessMapUv),A.push(x.iridescenceMapUv),A.push(x.iridescenceThicknessMapUv),A.push(x.sheenColorMapUv),A.push(x.sheenRoughnessMapUv),A.push(x.specularMapUv),A.push(x.specularColorMapUv),A.push(x.specularIntensityMapUv),A.push(x.transmissionMapUv),A.push(x.thicknessMapUv),A.push(x.combine),A.push(x.fogExp2),A.push(x.sizeAttenuation),A.push(x.morphTargetsCount),A.push(x.morphAttributeCount),A.push(x.numDirLights),A.push(x.numPointLights),A.push(x.numSpotLights),A.push(x.numSpotLightMaps),A.push(x.numHemiLights),A.push(x.numRectAreaLights),A.push(x.numDirLightShadows),A.push(x.numPointLightShadows),A.push(x.numSpotLightShadows),A.push(x.numSpotLightShadowsWithMaps),A.push(x.numLightProbes),A.push(x.shadowMapType),A.push(x.toneMapping),A.push(x.numClippingPlanes),A.push(x.numClipIntersection),A.push(x.depthPacking)}function R(A,x){a.disableAll(),x.isWebGL2&&a.enable(0),x.supportsVertexTextures&&a.enable(1),x.instancing&&a.enable(2),x.instancingColor&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),A.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),A.push(a.mask)}function L(A){const x=y[A.type];let U;if(x){const k=gn[x];U=Pu.clone(k.uniforms)}else U=A.uniforms;return U}function H(A,x){let U;for(let k=0,tt=f.length;k<tt;k++){const N=f[k];if(N.cacheKey===x){U=N,++U.usedTimes;break}}return U===void 0&&(U=new jp(i,x,A,o),f.push(U)),U}function z(A){if(--A.usedTimes===0){const x=f.indexOf(A);f[x]=f[f.length-1],f.pop(),A.destroy()}}function I(A){u.remove(A)}function it(){u.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:L,acquireProgram:H,releaseProgram:z,releaseShaderCache:I,programs:f,dispose:it}}function $p(){let i=new WeakMap;function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function e(o){i.delete(o)}function n(o,c,a){i.get(o)[c]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Jp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Va(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ka(){const i=[];let t=0;const e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function c(g,_,M,y,E,m){let d=i[t];return d===void 0?(d={id:g.id,object:g,geometry:_,material:M,groupOrder:y,renderOrder:g.renderOrder,z:E,group:m},i[t]=d):(d.id=g.id,d.object=g,d.geometry=_,d.material=M,d.groupOrder=y,d.renderOrder=g.renderOrder,d.z=E,d.group=m),t++,d}function a(g,_,M,y,E,m){const d=c(g,_,M,y,E,m);M.transmission>0?n.push(d):M.transparent===!0?r.push(d):e.push(d)}function u(g,_,M,y,E,m){const d=c(g,_,M,y,E,m);M.transmission>0?n.unshift(d):M.transparent===!0?r.unshift(d):e.unshift(d)}function f(g,_){e.length>1&&e.sort(g||Jp),n.length>1&&n.sort(_||Va),r.length>1&&r.sort(_||Va)}function p(){for(let g=t,_=i.length;g<_;g++){const M=i[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:a,unshift:u,finish:p,sort:f}}function Qp(){let i=new WeakMap;function t(n,r){const o=i.get(n);let c;return o===void 0?(c=new ka,i.set(n,[c])):r>=o.length?(c=new ka,o.push(c)):c=o[r],c}function e(){i=new WeakMap}return{get:t,dispose:e}}function tm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new le};break;case"SpotLight":e={position:new W,direction:new W,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function em(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let nm=0;function im(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rm(i,t){const e=new tm,n=em(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new W);const o=new W,c=new Ue,a=new Ue;function u(p,g){let _=0,M=0,y=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let E=0,m=0,d=0,D=0,R=0,L=0,H=0,z=0,I=0,it=0,A=0;p.sort(im);const x=g===!0?Math.PI:1;for(let k=0,tt=p.length;k<tt;k++){const N=p[k],V=N.color,O=N.intensity,X=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)_+=V.r*O*x,M+=V.g*O*x,y+=V.b*O*x;else if(N.isLightProbe){for(let et=0;et<9;et++)r.probe[et].addScaledVector(N.sh.coefficients[et],O);A++}else if(N.isDirectionalLight){const et=e.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){const nt=N.shadow,ht=n.get(N);ht.shadowBias=nt.bias,ht.shadowNormalBias=nt.normalBias,ht.shadowRadius=nt.radius,ht.shadowMapSize=nt.mapSize,r.directionalShadow[E]=ht,r.directionalShadowMap[E]=$,r.directionalShadowMatrix[E]=N.shadow.matrix,L++}r.directional[E]=et,E++}else if(N.isSpotLight){const et=e.get(N);et.position.setFromMatrixPosition(N.matrixWorld),et.color.copy(V).multiplyScalar(O*x),et.distance=X,et.coneCos=Math.cos(N.angle),et.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),et.decay=N.decay,r.spot[d]=et;const nt=N.shadow;if(N.map&&(r.spotLightMap[I]=N.map,I++,nt.updateMatrices(N),N.castShadow&&it++),r.spotLightMatrix[d]=nt.matrix,N.castShadow){const ht=n.get(N);ht.shadowBias=nt.bias,ht.shadowNormalBias=nt.normalBias,ht.shadowRadius=nt.radius,ht.shadowMapSize=nt.mapSize,r.spotShadow[d]=ht,r.spotShadowMap[d]=$,z++}d++}else if(N.isRectAreaLight){const et=e.get(N);et.color.copy(V).multiplyScalar(O),et.halfWidth.set(N.width*.5,0,0),et.halfHeight.set(0,N.height*.5,0),r.rectArea[D]=et,D++}else if(N.isPointLight){const et=e.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity*x),et.distance=N.distance,et.decay=N.decay,N.castShadow){const nt=N.shadow,ht=n.get(N);ht.shadowBias=nt.bias,ht.shadowNormalBias=nt.normalBias,ht.shadowRadius=nt.radius,ht.shadowMapSize=nt.mapSize,ht.shadowCameraNear=nt.camera.near,ht.shadowCameraFar=nt.camera.far,r.pointShadow[m]=ht,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=N.shadow.matrix,H++}r.point[m]=et,m++}else if(N.isHemisphereLight){const et=e.get(N);et.skyColor.copy(N.color).multiplyScalar(O*x),et.groundColor.copy(N.groundColor).multiplyScalar(O*x),r.hemi[R]=et,R++}}D>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_FLOAT_1,r.rectAreaLTC2=mt.LTC_FLOAT_2):(r.rectAreaLTC1=mt.LTC_HALF_1,r.rectAreaLTC2=mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_FLOAT_1,r.rectAreaLTC2=mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_HALF_1,r.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=M,r.ambient[2]=y;const U=r.hash;(U.directionalLength!==E||U.pointLength!==m||U.spotLength!==d||U.rectAreaLength!==D||U.hemiLength!==R||U.numDirectionalShadows!==L||U.numPointShadows!==H||U.numSpotShadows!==z||U.numSpotMaps!==I||U.numLightProbes!==A)&&(r.directional.length=E,r.spot.length=d,r.rectArea.length=D,r.point.length=m,r.hemi.length=R,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=z,r.spotShadowMap.length=z,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=z+I-it,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=it,r.numLightProbes=A,U.directionalLength=E,U.pointLength=m,U.spotLength=d,U.rectAreaLength=D,U.hemiLength=R,U.numDirectionalShadows=L,U.numPointShadows=H,U.numSpotShadows=z,U.numSpotMaps=I,U.numLightProbes=A,r.version=nm++)}function f(p,g){let _=0,M=0,y=0,E=0,m=0;const d=g.matrixWorldInverse;for(let D=0,R=p.length;D<R;D++){const L=p[D];if(L.isDirectionalLight){const H=r.directional[_];H.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),H.direction.sub(o),H.direction.transformDirection(d),_++}else if(L.isSpotLight){const H=r.spot[y];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(d),H.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),H.direction.sub(o),H.direction.transformDirection(d),y++}else if(L.isRectAreaLight){const H=r.rectArea[E];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(d),a.identity(),c.copy(L.matrixWorld),c.premultiply(d),a.extractRotation(c),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),H.halfWidth.applyMatrix4(a),H.halfHeight.applyMatrix4(a),E++}else if(L.isPointLight){const H=r.point[M];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(d),M++}else if(L.isHemisphereLight){const H=r.hemi[m];H.direction.setFromMatrixPosition(L.matrixWorld),H.direction.transformDirection(d),m++}}}return{setup:u,setupView:f,state:r}}function Wa(i,t){const e=new rm(i,t),n=[],r=[];function o(){n.length=0,r.length=0}function c(g){n.push(g)}function a(g){r.push(g)}function u(g){e.setup(n,g)}function f(g){e.setupView(n,g)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:u,setupLightsView:f,pushLight:c,pushShadow:a}}function sm(i,t){let e=new WeakMap;function n(o,c=0){const a=e.get(o);let u;return a===void 0?(u=new Wa(i,t),e.set(o,[u])):c>=a.length?(u=new Wa(i,t),a.push(u)):u=a[c],u}function r(){e=new WeakMap}return{get:n,dispose:r}}class om extends sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class am extends sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function um(i,t,e){let n=new Ml;const r=new de,o=new de,c=new Fe,a=new om({depthPacking:eu}),u=new am,f={},p=e.maxTextureSize,g={[kn]:qe,[qe]:kn,[An]:An},_=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:lm,fragmentShader:cm}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const y=new Cn;y.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new zn(y,_),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let d=this.type;this.render=function(z,I,it){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||z.length===0)return;const A=i.getRenderTarget(),x=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Gn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const tt=d!==Tn&&this.type===Tn,N=d===Tn&&this.type!==Tn;for(let V=0,O=z.length;V<O;V++){const X=z[V],$=X.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const et=$.getFrameExtents();if(r.multiply(et),o.copy($.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/et.x),r.x=o.x*et.x,$.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/et.y),r.y=o.y*et.y,$.mapSize.y=o.y)),$.map===null||tt===!0||N===!0){const ht=this.type!==Tn?{minFilter:ke,magFilter:ke}:{};$.map!==null&&$.map.dispose(),$.map=new ii(r.x,r.y,ht),$.map.texture.name=X.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const nt=$.getViewportCount();for(let ht=0;ht<nt;ht++){const ut=$.getViewport(ht);c.set(o.x*ut.x,o.y*ut.y,o.x*ut.z,o.y*ut.w),k.viewport(c),$.updateMatrices(X,ht),n=$.getFrustum(),L(I,it,$.camera,X,this.type)}$.isPointLightShadow!==!0&&this.type===Tn&&D($,it),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(A,x,U)};function D(z,I){const it=t.update(E);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ii(r.x,r.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(I,null,it,_,E,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(I,null,it,M,E,null)}function R(z,I,it,A){let x=null;const U=it.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(U!==void 0)x=U;else if(x=it.isPointLight===!0?u:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const k=x.uuid,tt=I.uuid;let N=f[k];N===void 0&&(N={},f[k]=N);let V=N[tt];V===void 0&&(V=x.clone(),N[tt]=V,I.addEventListener("dispose",H)),x=V}if(x.visible=I.visible,x.wireframe=I.wireframe,A===Tn?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:g[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,it.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=it}return x}function L(z,I,it,A,x){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&x===Tn)&&(!z.frustumCulled||n.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,z.matrixWorld);const tt=t.update(z),N=z.material;if(Array.isArray(N)){const V=tt.groups;for(let O=0,X=V.length;O<X;O++){const $=V[O],et=N[$.materialIndex];if(et&&et.visible){const nt=R(z,et,A,x);z.onBeforeShadow(i,z,I,it,tt,nt,$),i.renderBufferDirect(it,null,tt,nt,z,$),z.onAfterShadow(i,z,I,it,tt,nt,$)}}}else if(N.visible){const V=R(z,N,A,x);z.onBeforeShadow(i,z,I,it,tt,V,null),i.renderBufferDirect(it,null,tt,V,z,null),z.onAfterShadow(i,z,I,it,tt,V,null)}}const k=z.children;for(let tt=0,N=k.length;tt<N;tt++)L(k[tt],I,it,A,x)}function H(z){z.target.removeEventListener("dispose",H);for(const it in f){const A=f[it],x=z.target.uuid;x in A&&(A[x].dispose(),delete A[x])}}}function hm(i,t,e){const n=e.isWebGL2;function r(){let F=!1;const vt=new Fe;let gt=null;const Ft=new Fe(0,0,0,0);return{setMask:function(wt){gt!==wt&&!F&&(i.colorMask(wt,wt,wt,wt),gt=wt)},setLocked:function(wt){F=wt},setClear:function(wt,ae,ce,Se,Te){Te===!0&&(wt*=Se,ae*=Se,ce*=Se),vt.set(wt,ae,ce,Se),Ft.equals(vt)===!1&&(i.clearColor(wt,ae,ce,Se),Ft.copy(vt))},reset:function(){F=!1,gt=null,Ft.set(-1,0,0,0)}}}function o(){let F=!1,vt=null,gt=null,Ft=null;return{setTest:function(wt){wt?Xt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(wt){vt!==wt&&!F&&(i.depthMask(wt),vt=wt)},setFunc:function(wt){if(gt!==wt){switch(wt){case Pc:i.depthFunc(i.NEVER);break;case Lc:i.depthFunc(i.ALWAYS);break;case Uc:i.depthFunc(i.LESS);break;case Gr:i.depthFunc(i.LEQUAL);break;case Dc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Nc:i.depthFunc(i.GREATER);break;case Fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=wt}},setLocked:function(wt){F=wt},setClear:function(wt){Ft!==wt&&(i.clearDepth(wt),Ft=wt)},reset:function(){F=!1,vt=null,gt=null,Ft=null}}}function c(){let F=!1,vt=null,gt=null,Ft=null,wt=null,ae=null,ce=null,Se=null,Te=null;return{setTest:function(ue){F||(ue?Xt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(ue){vt!==ue&&!F&&(i.stencilMask(ue),vt=ue)},setFunc:function(ue,ye,Je){(gt!==ue||Ft!==ye||wt!==Je)&&(i.stencilFunc(ue,ye,Je),gt=ue,Ft=ye,wt=Je)},setOp:function(ue,ye,Je){(ae!==ue||ce!==ye||Se!==Je)&&(i.stencilOp(ue,ye,Je),ae=ue,ce=ye,Se=Je)},setLocked:function(ue){F=ue},setClear:function(ue){Te!==ue&&(i.clearStencil(ue),Te=ue)},reset:function(){F=!1,vt=null,gt=null,Ft=null,wt=null,ae=null,ce=null,Se=null,Te=null}}}const a=new r,u=new o,f=new c,p=new WeakMap,g=new WeakMap;let _={},M={},y=new WeakMap,E=[],m=null,d=!1,D=null,R=null,L=null,H=null,z=null,I=null,it=null,A=new le(0,0,0),x=0,U=!1,k=null,tt=null,N=null,V=null,O=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,et=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(nt)[1]),$=et>=1):nt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),$=et>=2);let ht=null,ut={};const Q=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),xt=new Fe().fromArray(Q),Ct=new Fe().fromArray(rt);function Pt(F,vt,gt,Ft){const wt=new Uint8Array(4),ae=i.createTexture();i.bindTexture(F,ae),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<gt;ce++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(vt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(vt+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return ae}const Wt={};Wt[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Wt[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Wt[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Wt[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Xt(i.DEPTH_TEST),u.setFunc(Gr),qt(!1),b(bo),Xt(i.CULL_FACE),At(Gn);function Xt(F){_[F]!==!0&&(i.enable(F),_[F]=!0)}function Dt(F){_[F]!==!1&&(i.disable(F),_[F]=!1)}function Qt(F,vt){return M[F]!==vt?(i.bindFramebuffer(F,vt),M[F]=vt,n&&(F===i.DRAW_FRAMEBUFFER&&(M[i.FRAMEBUFFER]=vt),F===i.FRAMEBUFFER&&(M[i.DRAW_FRAMEBUFFER]=vt)),!0):!1}function Y(F,vt){let gt=E,Ft=!1;if(F)if(gt=y.get(vt),gt===void 0&&(gt=[],y.set(vt,gt)),F.isWebGLMultipleRenderTargets){const wt=F.texture;if(gt.length!==wt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,ce=wt.length;ae<ce;ae++)gt[ae]=i.COLOR_ATTACHMENT0+ae;gt.length=wt.length,Ft=!0}}else gt[0]!==i.COLOR_ATTACHMENT0&&(gt[0]=i.COLOR_ATTACHMENT0,Ft=!0);else gt[0]!==i.BACK&&(gt[0]=i.BACK,Ft=!0);Ft&&(e.isWebGL2?i.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function ne(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const Et={[$n]:i.FUNC_ADD,[mc]:i.FUNC_SUBTRACT,[gc]:i.FUNC_REVERSE_SUBTRACT};if(n)Et[Co]=i.MIN,Et[Po]=i.MAX;else{const F=t.get("EXT_blend_minmax");F!==null&&(Et[Co]=F.MIN_EXT,Et[Po]=F.MAX_EXT)}const Vt={[_c]:i.ZERO,[vc]:i.ONE,[xc]:i.SRC_COLOR,[Bs]:i.SRC_ALPHA,[Ac]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[Sc]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[zs]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[Ec]:i.ONE_MINUS_DST_ALPHA,[bc]:i.CONSTANT_COLOR,[wc]:i.ONE_MINUS_CONSTANT_COLOR,[Rc]:i.CONSTANT_ALPHA,[Cc]:i.ONE_MINUS_CONSTANT_ALPHA};function At(F,vt,gt,Ft,wt,ae,ce,Se,Te,ue){if(F===Gn){d===!0&&(Dt(i.BLEND),d=!1);return}if(d===!1&&(Xt(i.BLEND),d=!0),F!==pc){if(F!==D||ue!==U){if((R!==$n||z!==$n)&&(i.blendEquation(i.FUNC_ADD),R=$n,z=$n),ue)switch(F){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Os:i.blendFunc(i.ONE,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Os:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}L=null,H=null,I=null,it=null,A.set(0,0,0),x=0,D=F,U=ue}return}wt=wt||vt,ae=ae||gt,ce=ce||Ft,(vt!==R||wt!==z)&&(i.blendEquationSeparate(Et[vt],Et[wt]),R=vt,z=wt),(gt!==L||Ft!==H||ae!==I||ce!==it)&&(i.blendFuncSeparate(Vt[gt],Vt[Ft],Vt[ae],Vt[ce]),L=gt,H=Ft,I=ae,it=ce),(Se.equals(A)===!1||Te!==x)&&(i.blendColor(Se.r,Se.g,Se.b,Te),A.copy(Se),x=Te),D=F,U=!1}function pe(F,vt){F.side===An?Dt(i.CULL_FACE):Xt(i.CULL_FACE);let gt=F.side===qe;vt&&(gt=!gt),qt(gt),F.blending===Ui&&F.transparent===!1?At(Gn):At(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),u.setFunc(F.depthFunc),u.setTest(F.depthTest),u.setMask(F.depthWrite),a.setMask(F.colorWrite);const Ft=F.stencilWrite;f.setTest(Ft),Ft&&(f.setMask(F.stencilWriteMask),f.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),f.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),K(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Xt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(F){k!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),k=F)}function b(F){F!==hc?(Xt(i.CULL_FACE),F!==tt&&(F===bo?i.cullFace(i.BACK):F===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),tt=F}function S(F){F!==N&&($&&i.lineWidth(F),N=F)}function K(F,vt,gt){F?(Xt(i.POLYGON_OFFSET_FILL),(V!==vt||O!==gt)&&(i.polygonOffset(vt,gt),V=vt,O=gt)):Dt(i.POLYGON_OFFSET_FILL)}function ct(F){F?Xt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function at(F){F===void 0&&(F=i.TEXTURE0+X-1),ht!==F&&(i.activeTexture(F),ht=F)}function st(F,vt,gt){gt===void 0&&(ht===null?gt=i.TEXTURE0+X-1:gt=ht);let Ft=ut[gt];Ft===void 0&&(Ft={type:void 0,texture:void 0},ut[gt]=Ft),(Ft.type!==F||Ft.texture!==vt)&&(ht!==gt&&(i.activeTexture(gt),ht=gt),i.bindTexture(F,vt||Wt[F]),Ft.type=F,Ft.texture=vt)}function bt(){const F=ut[ht];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Yt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(F){xt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),xt.copy(F))}function ie(F){Ct.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ct.copy(F))}function me(F,vt){let gt=g.get(vt);gt===void 0&&(gt=new WeakMap,g.set(vt,gt));let Ft=gt.get(F);Ft===void 0&&(Ft=i.getUniformBlockIndex(vt,F.name),gt.set(F,Ft))}function Gt(F,vt){const Ft=g.get(vt).get(F);p.get(vt)!==Ft&&(i.uniformBlockBinding(vt,Ft,F.__bindingPointIndex),p.set(vt,Ft))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},ht=null,ut={},M={},y=new WeakMap,E=[],m=null,d=!1,D=null,R=null,L=null,H=null,z=null,I=null,it=null,A=new le(0,0,0),x=0,U=!1,k=null,tt=null,N=null,V=null,O=null,xt.set(0,0,i.canvas.width,i.canvas.height),Ct.set(0,0,i.canvas.width,i.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:Xt,disable:Dt,bindFramebuffer:Qt,drawBuffers:Y,useProgram:ne,setBlending:At,setMaterial:pe,setFlipSided:qt,setCullFace:b,setLineWidth:S,setPolygonOffset:K,setScissorTest:ct,activeTexture:at,bindTexture:st,unbindTexture:bt,compressedTexImage2D:_t,compressedTexImage3D:yt,texImage2D:Lt,texImage3D:Tt,updateUBOMapping:me,uniformBlockBinding:Gt,texStorage2D:Zt,texStorage3D:Nt,texSubImage2D:It,texSubImage3D:Yt,compressedTexSubImage2D:lt,compressedTexSubImage3D:oe,scissor:Kt,viewport:ie,reset:ft}}function fm(i,t,e,n,r,o,c){const a=r.isWebGL2,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,S){return M?new OffscreenCanvas(b,S):Xr("canvas")}function E(b,S,K,ct){let at=1;if((b.width>ct||b.height>ct)&&(at=ct/Math.max(b.width,b.height)),at<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const st=S?js:Math.floor,bt=st(at*b.width),_t=st(at*b.height);g===void 0&&(g=y(bt,_t));const yt=K?y(bt,_t):g;return yt.width=bt,yt.height=_t,yt.getContext("2d").drawImage(b,0,0,bt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+bt+"x"+_t+")."),yt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return oa(b.width)&&oa(b.height)}function d(b){return a?!1:b.wrapS!==fn||b.wrapT!==fn||b.minFilter!==ke&&b.minFilter!==nn}function D(b,S){return b.generateMipmaps&&S&&b.minFilter!==ke&&b.minFilter!==nn}function R(b){i.generateMipmap(b)}function L(b,S,K,ct,at=!1){if(a===!1)return S;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let st=S;if(S===i.RED&&(K===i.FLOAT&&(st=i.R32F),K===i.HALF_FLOAT&&(st=i.R16F),K===i.UNSIGNED_BYTE&&(st=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(st=i.R8UI),K===i.UNSIGNED_SHORT&&(st=i.R16UI),K===i.UNSIGNED_INT&&(st=i.R32UI),K===i.BYTE&&(st=i.R8I),K===i.SHORT&&(st=i.R16I),K===i.INT&&(st=i.R32I)),S===i.RG&&(K===i.FLOAT&&(st=i.RG32F),K===i.HALF_FLOAT&&(st=i.RG16F),K===i.UNSIGNED_BYTE&&(st=i.RG8)),S===i.RGBA){const bt=at?Hr:fe.getTransfer(ct);K===i.FLOAT&&(st=i.RGBA32F),K===i.HALF_FLOAT&&(st=i.RGBA16F),K===i.UNSIGNED_BYTE&&(st=bt===xe?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function H(b,S,K){return D(b,K)===!0||b.isFramebufferTexture&&b.minFilter!==ke&&b.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function z(b){return b===ke||b===Lo||b===os?i.NEAREST:i.LINEAR}function I(b){const S=b.target;S.removeEventListener("dispose",I),A(S),S.isVideoTexture&&p.delete(S)}function it(b){const S=b.target;S.removeEventListener("dispose",it),U(S)}function A(b){const S=n.get(b);if(S.__webglInit===void 0)return;const K=b.source,ct=_.get(K);if(ct){const at=ct[S.__cacheKey];at.usedTimes--,at.usedTimes===0&&x(b),Object.keys(ct).length===0&&_.delete(K)}n.remove(b)}function x(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const K=b.source,ct=_.get(K);delete ct[S.__cacheKey],c.memory.textures--}function U(b){const S=b.texture,K=n.get(b),ct=n.get(S);if(ct.__webglTexture!==void 0&&(i.deleteTexture(ct.__webglTexture),c.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(K.__webglFramebuffer[at]))for(let st=0;st<K.__webglFramebuffer[at].length;st++)i.deleteFramebuffer(K.__webglFramebuffer[at][st]);else i.deleteFramebuffer(K.__webglFramebuffer[at]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[at])}else{if(Array.isArray(K.__webglFramebuffer))for(let at=0;at<K.__webglFramebuffer.length;at++)i.deleteFramebuffer(K.__webglFramebuffer[at]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let at=0;at<K.__webglColorRenderbuffer.length;at++)K.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[at]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let at=0,st=S.length;at<st;at++){const bt=n.get(S[at]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),c.memory.textures--),n.remove(S[at])}n.remove(S),n.remove(b)}let k=0;function tt(){k=0}function N(){const b=k;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),k+=1,b}function V(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function O(b,S){const K=n.get(b);if(b.isVideoTexture&&pe(b),b.isRenderTargetTexture===!1&&b.version>0&&K.__version!==b.version){const ct=b.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(K,b,S);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function X(b,S){const K=n.get(b);if(b.version>0&&K.__version!==b.version){xt(K,b,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function $(b,S){const K=n.get(b);if(b.version>0&&K.__version!==b.version){xt(K,b,S);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function et(b,S){const K=n.get(b);if(b.version>0&&K.__version!==b.version){Ct(K,b,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}const nt={[Vs]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[ks]:i.MIRRORED_REPEAT},ht={[ke]:i.NEAREST,[Lo]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Xc]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},ut={[ru]:i.NEVER,[uu]:i.ALWAYS,[su]:i.LESS,[ol]:i.LEQUAL,[ou]:i.EQUAL,[cu]:i.GEQUAL,[au]:i.GREATER,[lu]:i.NOTEQUAL};function Q(b,S,K){if(K?(i.texParameteri(b,i.TEXTURE_WRAP_S,nt[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,nt[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,nt[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ht[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ht[S.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==fn||S.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,z(S.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,z(S.minFilter)),S.minFilter!==ke&&S.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ct=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===ke||S.minFilter!==os&&S.minFilter!==Qi||S.type===Bn&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===tr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(b,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function rt(b,S){let K=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",I));const ct=S.source;let at=_.get(ct);at===void 0&&(at={},_.set(ct,at));const st=V(S);if(st!==b.__cacheKey){at[st]===void 0&&(at[st]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,K=!0),at[st].usedTimes++;const bt=at[b.__cacheKey];bt!==void 0&&(at[b.__cacheKey].usedTimes--,bt.usedTimes===0&&x(S)),b.__cacheKey=st,b.__webglTexture=at[st].texture}return K}function xt(b,S,K){let ct=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=i.TEXTURE_3D);const at=rt(b,S),st=S.source;e.bindTexture(ct,b.__webglTexture,i.TEXTURE0+K);const bt=n.get(st);if(st.version!==bt.__version||at===!0){e.activeTexture(i.TEXTURE0+K);const _t=fe.getPrimaries(fe.workingColorSpace),yt=S.colorSpace===sn?null:fe.getPrimaries(S.colorSpace),It=S.colorSpace===sn||_t===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Yt=d(S)&&m(S.image)===!1;let lt=E(S.image,Yt,!1,r.maxTextureSize);lt=qt(S,lt);const oe=m(lt)||a,Zt=o.convert(S.format,S.colorSpace);let Nt=o.convert(S.type),Lt=L(S.internalFormat,Zt,Nt,S.colorSpace,S.isVideoTexture);Q(ct,S,oe);let Tt;const Kt=S.mipmaps,ie=a&&S.isVideoTexture!==!0&&Lt!==rl,me=bt.__version===void 0||at===!0,Gt=H(S,lt,oe);if(S.isDepthTexture)Lt=i.DEPTH_COMPONENT,a?S.type===Bn?Lt=i.DEPTH_COMPONENT32F:S.type===On?Lt=i.DEPTH_COMPONENT24:S.type===Qn?Lt=i.DEPTH24_STENCIL8:Lt=i.DEPTH_COMPONENT16:S.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ti&&Lt===i.DEPTH_COMPONENT&&S.type!==$s&&S.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=On,Nt=o.convert(S.type)),S.format===Bi&&Lt===i.DEPTH_COMPONENT&&(Lt=i.DEPTH_STENCIL,S.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Qn,Nt=o.convert(S.type))),me&&(ie?e.texStorage2D(i.TEXTURE_2D,1,Lt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,lt.width,lt.height,0,Zt,Nt,null));else if(S.isDataTexture)if(Kt.length>0&&oe){ie&&me&&e.texStorage2D(i.TEXTURE_2D,Gt,Lt,Kt[0].width,Kt[0].height);for(let ft=0,F=Kt.length;ft<F;ft++)Tt=Kt[ft],ie?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,Zt,Nt,Tt.data):e.texImage2D(i.TEXTURE_2D,ft,Lt,Tt.width,Tt.height,0,Zt,Nt,Tt.data);S.generateMipmaps=!1}else ie?(me&&e.texStorage2D(i.TEXTURE_2D,Gt,Lt,lt.width,lt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Zt,Nt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,lt.width,lt.height,0,Zt,Nt,lt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ie&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Lt,Kt[0].width,Kt[0].height,lt.depth);for(let ft=0,F=Kt.length;ft<F;ft++)Tt=Kt[ft],S.format!==dn?Zt!==null?ie?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Tt.width,Tt.height,lt.depth,Zt,Tt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Lt,Tt.width,Tt.height,lt.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Tt.width,Tt.height,lt.depth,Zt,Nt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Lt,Tt.width,Tt.height,lt.depth,0,Zt,Nt,Tt.data)}else{ie&&me&&e.texStorage2D(i.TEXTURE_2D,Gt,Lt,Kt[0].width,Kt[0].height);for(let ft=0,F=Kt.length;ft<F;ft++)Tt=Kt[ft],S.format!==dn?Zt!==null?ie?e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,Zt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Lt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,Zt,Nt,Tt.data):e.texImage2D(i.TEXTURE_2D,ft,Lt,Tt.width,Tt.height,0,Zt,Nt,Tt.data)}else if(S.isDataArrayTexture)ie?(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Lt,lt.width,lt.height,lt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Zt,Nt,lt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,lt.width,lt.height,lt.depth,0,Zt,Nt,lt.data);else if(S.isData3DTexture)ie?(me&&e.texStorage3D(i.TEXTURE_3D,Gt,Lt,lt.width,lt.height,lt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Zt,Nt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,lt.width,lt.height,lt.depth,0,Zt,Nt,lt.data);else if(S.isFramebufferTexture){if(me)if(ie)e.texStorage2D(i.TEXTURE_2D,Gt,Lt,lt.width,lt.height);else{let ft=lt.width,F=lt.height;for(let vt=0;vt<Gt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Lt,ft,F,0,Zt,Nt,null),ft>>=1,F>>=1}}else if(Kt.length>0&&oe){ie&&me&&e.texStorage2D(i.TEXTURE_2D,Gt,Lt,Kt[0].width,Kt[0].height);for(let ft=0,F=Kt.length;ft<F;ft++)Tt=Kt[ft],ie?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Zt,Nt,Tt):e.texImage2D(i.TEXTURE_2D,ft,Lt,Zt,Nt,Tt);S.generateMipmaps=!1}else ie?(me&&e.texStorage2D(i.TEXTURE_2D,Gt,Lt,lt.width,lt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Zt,Nt,lt)):e.texImage2D(i.TEXTURE_2D,0,Lt,Zt,Nt,lt);D(S,oe)&&R(ct),bt.__version=st.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ct(b,S,K){if(S.image.length!==6)return;const ct=rt(b,S),at=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+K);const st=n.get(at);if(at.version!==st.__version||ct===!0){e.activeTexture(i.TEXTURE0+K);const bt=fe.getPrimaries(fe.workingColorSpace),_t=S.colorSpace===sn?null:fe.getPrimaries(S.colorSpace),yt=S.colorSpace===sn||bt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const It=S.isCompressedTexture||S.image[0].isCompressedTexture,Yt=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let ft=0;ft<6;ft++)!It&&!Yt?lt[ft]=E(S.image[ft],!1,!0,r.maxCubemapSize):lt[ft]=Yt?S.image[ft].image:S.image[ft],lt[ft]=qt(S,lt[ft]);const oe=lt[0],Zt=m(oe)||a,Nt=o.convert(S.format,S.colorSpace),Lt=o.convert(S.type),Tt=L(S.internalFormat,Nt,Lt,S.colorSpace),Kt=a&&S.isVideoTexture!==!0,ie=st.__version===void 0||ct===!0;let me=H(S,oe,Zt);Q(i.TEXTURE_CUBE_MAP,S,Zt);let Gt;if(It){Kt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,me,Tt,oe.width,oe.height);for(let ft=0;ft<6;ft++){Gt=lt[ft].mipmaps;for(let F=0;F<Gt.length;F++){const vt=Gt[F];S.format!==dn?Nt!==null?Kt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,F,0,0,vt.width,vt.height,Nt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,F,Tt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,F,0,0,vt.width,vt.height,Nt,Lt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,F,Tt,vt.width,vt.height,0,Nt,Lt,vt.data)}}}else{Gt=S.mipmaps,Kt&&ie&&(Gt.length>0&&me++,e.texStorage2D(i.TEXTURE_CUBE_MAP,me,Tt,lt[0].width,lt[0].height));for(let ft=0;ft<6;ft++)if(Yt){Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,lt[ft].width,lt[ft].height,Nt,Lt,lt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Tt,lt[ft].width,lt[ft].height,0,Nt,Lt,lt[ft].data);for(let F=0;F<Gt.length;F++){const gt=Gt[F].image[ft].image;Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,F+1,0,0,gt.width,gt.height,Nt,Lt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,F+1,Tt,gt.width,gt.height,0,Nt,Lt,gt.data)}}else{Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Nt,Lt,lt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Tt,Nt,Lt,lt[ft]);for(let F=0;F<Gt.length;F++){const vt=Gt[F];Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,F+1,0,0,Nt,Lt,vt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,F+1,Tt,Nt,Lt,vt.image[ft])}}}D(S,Zt)&&R(i.TEXTURE_CUBE_MAP),st.__version=at.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Pt(b,S,K,ct,at,st){const bt=o.convert(K.format,K.colorSpace),_t=o.convert(K.type),yt=L(K.internalFormat,bt,_t,K.colorSpace);if(!n.get(S).__hasExternalTextures){const Yt=Math.max(1,S.width>>st),lt=Math.max(1,S.height>>st);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,st,yt,Yt,lt,S.depth,0,bt,_t,null):e.texImage2D(at,st,yt,Yt,lt,0,bt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),At(S)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,at,n.get(K).__webglTexture,0,Vt(S)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,at,n.get(K).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(b,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let ct=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||At(S)){const at=S.depthTexture;at&&at.isDepthTexture&&(at.type===Bn?ct=i.DEPTH_COMPONENT32F:at.type===On&&(ct=i.DEPTH_COMPONENT24));const st=Vt(S);At(S)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,ct,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ct,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ct,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const ct=Vt(S);K&&At(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,S.width,S.height):At(S)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const ct=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let at=0;at<ct.length;at++){const st=ct[at],bt=o.convert(st.format,st.colorSpace),_t=o.convert(st.type),yt=L(st.internalFormat,bt,_t,st.colorSpace),It=Vt(S);K&&At(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,yt,S.width,S.height):At(S)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,yt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,yt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xt(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const ct=n.get(S.depthTexture).__webglTexture,at=Vt(S);if(S.depthTexture.format===ti)At(S)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(S.depthTexture.format===Bi)At(S)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Dt(b){const S=n.get(b),K=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Xt(S.__webglFramebuffer,b)}else if(K){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]=i.createRenderbuffer(),Wt(S.__webglDepthbuffer[ct],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Wt(S.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(b,S,K){const ct=n.get(b);S!==void 0&&Pt(ct.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Dt(b)}function Y(b){const S=b.texture,K=n.get(b),ct=n.get(S);b.addEventListener("dispose",it),b.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=S.version,c.memory.textures++);const at=b.isWebGLCubeRenderTarget===!0,st=b.isWebGLMultipleRenderTargets===!0,bt=m(b)||a;if(at){K.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(a&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[_t]=[];for(let yt=0;yt<S.mipmaps.length;yt++)K.__webglFramebuffer[_t][yt]=i.createFramebuffer()}else K.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let _t=0;_t<S.mipmaps.length;_t++)K.__webglFramebuffer[_t]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(st)if(r.drawBuffers){const _t=b.texture;for(let yt=0,It=_t.length;yt<It;yt++){const Yt=n.get(_t[yt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&At(b)===!1){const _t=st?S:[S];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let yt=0;yt<_t.length;yt++){const It=_t[yt];K.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[yt]);const Yt=o.convert(It.format,It.colorSpace),lt=o.convert(It.type),oe=L(It.internalFormat,Yt,lt,It.colorSpace,b.isXRRenderTarget===!0),Zt=Vt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,oe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,K.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(K.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Q(i.TEXTURE_CUBE_MAP,S,bt);for(let _t=0;_t<6;_t++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)Pt(K.__webglFramebuffer[_t][yt],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,yt);else Pt(K.__webglFramebuffer[_t],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);D(S,bt)&&R(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){const _t=b.texture;for(let yt=0,It=_t.length;yt<It;yt++){const Yt=_t[yt],lt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),Q(i.TEXTURE_2D,Yt,bt),Pt(K.__webglFramebuffer,b,Yt,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),D(Yt,bt)&&R(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?_t=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,ct.__webglTexture),Q(_t,S,bt),a&&S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)Pt(K.__webglFramebuffer[yt],b,S,i.COLOR_ATTACHMENT0,_t,yt);else Pt(K.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,_t,0);D(S,bt)&&R(_t),e.unbindTexture()}b.depthBuffer&&Dt(b)}function ne(b){const S=m(b)||a,K=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ct=0,at=K.length;ct<at;ct++){const st=K[ct];if(D(st,S)){const bt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(st).__webglTexture;e.bindTexture(bt,_t),R(bt),e.unbindTexture()}}}function Et(b){if(a&&b.samples>0&&At(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],K=b.width,ct=b.height;let at=i.COLOR_BUFFER_BIT;const st=[],bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(b),yt=b.isWebGLMultipleRenderTargets===!0;if(yt)for(let It=0;It<S.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let It=0;It<S.length;It++){st.push(i.COLOR_ATTACHMENT0+It),b.depthBuffer&&st.push(bt);const Yt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(Yt===!1&&(b.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),yt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[It]),Yt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[bt])),yt){const lt=n.get(S[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,K,ct,0,0,K,ct,at,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let It=0;It<S.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,_t.__webglColorRenderbuffer[It]);const Yt=n.get(S[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function Vt(b){return Math.min(r.maxSamples,b.samples)}function At(b){const S=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(b){const S=c.render.frame;p.get(b)!==S&&(p.set(b,S),b.update())}function qt(b,S){const K=b.colorSpace,ct=b.format,at=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ws||K!==wn&&K!==sn&&(fe.getTransfer(K)===xe?a===!1?t.has("EXT_sRGB")===!0&&ct===dn?(b.format=Ws,b.minFilter=nn,b.generateMipmaps=!1):S=ll.sRGBToLinear(S):(ct!==dn||at!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}this.allocateTextureUnit=N,this.resetTextureUnits=tt,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=et,this.rebindTextures=Qt,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=At}function dm(i,t,e){const n=e.isWebGL2;function r(o,c=sn){let a;const u=fe.getTransfer(c);if(o===Vn)return i.UNSIGNED_BYTE;if(o===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(o===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(o===jc)return i.BYTE;if(o===qc)return i.SHORT;if(o===$s)return i.UNSIGNED_SHORT;if(o===Ja)return i.INT;if(o===On)return i.UNSIGNED_INT;if(o===Bn)return i.FLOAT;if(o===tr)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Yc)return i.ALPHA;if(o===dn)return i.RGBA;if(o===Kc)return i.LUMINANCE;if(o===Zc)return i.LUMINANCE_ALPHA;if(o===ti)return i.DEPTH_COMPONENT;if(o===Bi)return i.DEPTH_STENCIL;if(o===Ws)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===$c)return i.RED;if(o===el)return i.RED_INTEGER;if(o===Jc)return i.RG;if(o===nl)return i.RG_INTEGER;if(o===il)return i.RGBA_INTEGER;if(o===as||o===ls||o===cs||o===us)if(u===xe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===as)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===as)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ls)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===cs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===us)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Uo||o===Do||o===Io||o===No)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Uo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Do)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Io)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===No)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===rl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Fo||o===Oo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Fo)return u===xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Oo)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Bo||o===zo||o===Go||o===Ho||o===Vo||o===ko||o===Wo||o===Xo||o===jo||o===qo||o===Yo||o===Ko||o===Zo||o===$o)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Bo)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===zo)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Go)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ho)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Vo)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ko)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Wo)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Xo)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===jo)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===qo)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Yo)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Ko)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Zo)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===$o)return u===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===hs||o===Jo||o===Qo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(o===hs)return u===xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Qc||o===ta||o===ea||o===na)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(o===hs)return a.COMPRESSED_RED_RGTC1_EXT;if(o===ta)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===ea)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===na)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Qn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class pm extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Nr extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mm={type:"move"};class Fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,c=null;const a=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(const E of t.hand.values()){const m=e.getJointPose(E,n),d=this._getHandJoint(f,E);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],_=p.position.distanceTo(g.position),M=.02,y=.005;f.inputState.pinching&&_>M+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=M-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Nr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class gm extends Gi{constructor(t,e){super();const n=this;let r=null,o=1,c=null,a="local-floor",u=1,f=null,p=null,g=null,_=null,M=null,y=null;const E=e.getContextAttributes();let m=null,d=null;const D=[],R=[],L=new de;let H=null;const z=new rn;z.layers.enable(1),z.viewport=new Fe;const I=new rn;I.layers.enable(2),I.viewport=new Fe;const it=[z,I],A=new pm;A.layers.enable(1),A.layers.enable(2);let x=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let rt=D[Q];return rt===void 0&&(rt=new Fs,D[Q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let rt=D[Q];return rt===void 0&&(rt=new Fs,D[Q]=rt),rt.getGripSpace()},this.getHand=function(Q){let rt=D[Q];return rt===void 0&&(rt=new Fs,D[Q]=rt),rt.getHandSpace()};function k(Q){const rt=R.indexOf(Q.inputSource);if(rt===-1)return;const xt=D[rt];xt!==void 0&&(xt.update(Q.inputSource,Q.frame,f||c),xt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function tt(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",tt),r.removeEventListener("inputsourceschange",N);for(let Q=0;Q<D.length;Q++){const rt=R[Q];rt!==null&&(R[Q]=null,D[Q].disconnect(rt))}x=null,U=null,t.setRenderTarget(m),M=null,_=null,g=null,r=null,d=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(H),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(Q){f=Q},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return g},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",tt),r.addEventListener("inputsourceschange",N),E.xrCompatible!==!0&&await e.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const rt={antialias:r.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),d=new ii(M.framebufferWidth,M.framebufferHeight,{format:dn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil})}else{let rt=null,xt=null,Ct=null;E.depth&&(Ct=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=E.stencil?Bi:ti,xt=E.stencil?Qn:On);const Pt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:o};g=new XRWebGLBinding(r,e),_=g.createProjectionLayer(Pt),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),d=new ii(_.textureWidth,_.textureHeight,{format:dn,type:Vn,depthTexture:new El(_.textureWidth,_.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0});const Wt=t.properties.get(d);Wt.__ignoreDepthValues=_.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(u),f=null,c=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(Q){for(let rt=0;rt<Q.removed.length;rt++){const xt=Q.removed[rt],Ct=R.indexOf(xt);Ct>=0&&(R[Ct]=null,D[Ct].disconnect(xt))}for(let rt=0;rt<Q.added.length;rt++){const xt=Q.added[rt];let Ct=R.indexOf(xt);if(Ct===-1){for(let Wt=0;Wt<D.length;Wt++)if(Wt>=R.length){R.push(xt),Ct=Wt;break}else if(R[Wt]===null){R[Wt]=xt,Ct=Wt;break}if(Ct===-1)break}const Pt=D[Ct];Pt&&Pt.connect(xt)}}const V=new W,O=new W;function X(Q,rt,xt){V.setFromMatrixPosition(rt.matrixWorld),O.setFromMatrixPosition(xt.matrixWorld);const Ct=V.distanceTo(O),Pt=rt.projectionMatrix.elements,Wt=xt.projectionMatrix.elements,Xt=Pt[14]/(Pt[10]-1),Dt=Pt[14]/(Pt[10]+1),Qt=(Pt[9]+1)/Pt[5],Y=(Pt[9]-1)/Pt[5],ne=(Pt[8]-1)/Pt[0],Et=(Wt[8]+1)/Wt[0],Vt=Xt*ne,At=Xt*Et,pe=Ct/(-ne+Et),qt=pe*-ne;rt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(qt),Q.translateZ(pe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const b=Xt+pe,S=Dt+pe,K=Vt-qt,ct=At+(Ct-qt),at=Qt*Dt/S*b,st=Y*Dt/S*b;Q.projectionMatrix.makePerspective(K,ct,at,st,b,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function $(Q,rt){rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;A.near=I.near=z.near=Q.near,A.far=I.far=z.far=Q.far,(x!==A.near||U!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),x=A.near,U=A.far);const rt=Q.parent,xt=A.cameras;$(A,rt);for(let Ct=0;Ct<xt.length;Ct++)$(xt[Ct],rt);xt.length===2?X(A,z,I):A.projectionMatrix.copy(z.projectionMatrix),et(Q,A,rt)};function et(Q,rt,xt){xt===null?Q.matrix.copy(rt.matrixWorld):(Q.matrix.copy(xt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&M===null))return u},this.setFoveation=function(Q){u=Q,_!==null&&(_.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)};let nt=null;function ht(Q,rt){if(p=rt.getViewerPose(f||c),y=rt,p!==null){const xt=p.views;M!==null&&(t.setRenderTargetFramebuffer(d,M.framebuffer),t.setRenderTarget(d));let Ct=!1;xt.length!==A.cameras.length&&(A.cameras.length=0,Ct=!0);for(let Pt=0;Pt<xt.length;Pt++){const Wt=xt[Pt];let Xt=null;if(M!==null)Xt=M.getViewport(Wt);else{const Qt=g.getViewSubImage(_,Wt);Xt=Qt.viewport,Pt===0&&(t.setRenderTargetTextures(d,Qt.colorTexture,_.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(d))}let Dt=it[Pt];Dt===void 0&&(Dt=new rn,Dt.layers.enable(Pt),Dt.viewport=new Fe,it[Pt]=Dt),Dt.matrix.fromArray(Wt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Wt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Pt===0&&(A.matrix.copy(Dt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ct===!0&&A.cameras.push(Dt)}}for(let xt=0;xt<D.length;xt++){const Ct=R[xt],Pt=D[xt];Ct!==null&&Pt!==void 0&&Pt.update(Ct,rt,f||c)}nt&&nt(Q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),y=null}const ut=new Sl;ut.setAnimationLoop(ht),this.setAnimationLoop=function(Q){nt=Q},this.dispose=function(){}}}function _m(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,_l(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,D,R,L){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),g(m,d)):d.isMeshPhongMaterial?(o(m,d),p(m,d)):d.isMeshStandardMaterial?(o(m,d),_(m,d),d.isMeshPhysicalMaterial&&M(m,d,L)):d.isMeshMatcapMaterial?(o(m,d),y(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),E(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(c(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?u(m,d,D,R):d.isSpriteMaterial?f(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===qe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===qe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const D=t.get(d).envMap;if(D&&(m.envMap.value=D,m.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const R=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*R,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function u(m,d,D,R){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*D,m.scale.value=R*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function p(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function g(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function _(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function M(m,d,D){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=D.texture,m.transmissionSamplerSize.value.set(D.width,D.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function E(m,d){const D=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(D.matrixWorld),m.nearDistance.value=D.shadow.camera.near,m.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vm(i,t,e,n){let r={},o={},c=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(D,R){const L=R.program;n.uniformBlockBinding(D,L)}function f(D,R){let L=r[D.id];L===void 0&&(y(D),L=p(D),r[D.id]=L,D.addEventListener("dispose",m));const H=R.program;n.updateUBOMapping(D,H);const z=t.render.frame;o[D.id]!==z&&(_(D),o[D.id]=z)}function p(D){const R=g();D.__bindingPointIndex=R;const L=i.createBuffer(),H=D.__size,z=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,H,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,L),L}function g(){for(let D=0;D<a;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const R=r[D.id],L=D.uniforms,H=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let z=0,I=L.length;z<I;z++){const it=Array.isArray(L[z])?L[z]:[L[z]];for(let A=0,x=it.length;A<x;A++){const U=it[A];if(M(U,z,A,H)===!0){const k=U.__offset,tt=Array.isArray(U.value)?U.value:[U.value];let N=0;for(let V=0;V<tt.length;V++){const O=tt[V],X=E(O);typeof O=="number"||typeof O=="boolean"?(U.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,k+N,U.__data)):O.isMatrix3?(U.__data[0]=O.elements[0],U.__data[1]=O.elements[1],U.__data[2]=O.elements[2],U.__data[3]=0,U.__data[4]=O.elements[3],U.__data[5]=O.elements[4],U.__data[6]=O.elements[5],U.__data[7]=0,U.__data[8]=O.elements[6],U.__data[9]=O.elements[7],U.__data[10]=O.elements[8],U.__data[11]=0):(O.toArray(U.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(D,R,L,H){const z=D.value,I=R+"_"+L;if(H[I]===void 0)return typeof z=="number"||typeof z=="boolean"?H[I]=z:H[I]=z.clone(),!0;{const it=H[I];if(typeof z=="number"||typeof z=="boolean"){if(it!==z)return H[I]=z,!0}else if(it.equals(z)===!1)return it.copy(z),!0}return!1}function y(D){const R=D.uniforms;let L=0;const H=16;for(let I=0,it=R.length;I<it;I++){const A=Array.isArray(R[I])?R[I]:[R[I]];for(let x=0,U=A.length;x<U;x++){const k=A[x],tt=Array.isArray(k.value)?k.value:[k.value];for(let N=0,V=tt.length;N<V;N++){const O=tt[N],X=E(O),$=L%H;$!==0&&H-$<X.boundary&&(L+=H-$),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=L,L+=X.storage}}}const z=L%H;return z>0&&(L+=H-z),D.__size=L,D.__cache={},this}function E(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function m(D){const R=D.target;R.removeEventListener("dispose",m);const L=c.indexOf(R.__bindingPointIndex);c.splice(L,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete o[R.id]}function d(){for(const D in r)i.deleteBuffer(r[D]);c=[],r={},o={}}return{bind:u,update:f,dispose:d}}class Rl{constructor(t={}){const{canvas:e=fu(),context:n=null,depth:r=!0,stencil:o=!0,alpha:c=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1}=t;this.isWebGLRenderer=!0;let _;n!==null?_=n.getContextAttributes().alpha:_=c;const M=new Uint32Array(4),y=new Int32Array(4);let E=null,m=null;const d=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;const R=this;let L=!1,H=0,z=0,I=null,it=-1,A=null;const x=new Fe,U=new Fe;let k=null;const tt=new le(0);let N=0,V=e.width,O=e.height,X=1,$=null,et=null;const nt=new Fe(0,0,V,O),ht=new Fe(0,0,V,O);let ut=!1;const Q=new Ml;let rt=!1,xt=!1,Ct=null;const Pt=new Ue,Wt=new de,Xt=new W,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qt(){return I===null?X:1}let Y=n;function ne(T,G){for(let Z=0;Z<T.length;Z++){const J=T[Z],q=e.getContext(J,G);if(q!==null)return q}return null}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zs}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",vt,!1),Y===null){const G=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&G.shift(),Y=ne(G,T),Y===null)throw ne(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Et,Vt,At,pe,qt,b,S,K,ct,at,st,bt,_t,yt,It,Yt,lt,oe,Zt,Nt,Lt,Tt,Kt,ie;function me(){Et=new Rd(Y),Vt=new Sd(Y,Et,t),Et.init(Vt),Tt=new dm(Y,Et,Vt),At=new hm(Y,Et,Vt),pe=new Ld(Y),qt=new $p,b=new fm(Y,Et,At,qt,Vt,Tt,pe),S=new yd(R),K=new wd(R),ct=new Ou(Y,Vt),Kt=new xd(Y,Et,ct,Vt),at=new Cd(Y,ct,pe,Kt),st=new Nd(Y,at,ct,pe),Zt=new Id(Y,Vt,b),Yt=new Ed(qt),bt=new Zp(R,S,K,Et,Vt,Kt,Yt),_t=new _m(R,qt),yt=new Qp,It=new sm(Et,Vt),oe=new vd(R,S,K,At,st,_,u),lt=new um(R,st,Vt),ie=new vm(Y,pe,Vt,At),Nt=new Md(Y,Et,pe,Vt),Lt=new Pd(Y,Et,pe,Vt),pe.programs=bt.programs,R.capabilities=Vt,R.extensions=Et,R.properties=qt,R.renderLists=yt,R.shadowMap=lt,R.state=At,R.info=pe}me();const Gt=new gm(R,Y);this.xr=Gt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=Et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(V,O,!1))},this.getSize=function(T){return T.set(V,O)},this.setSize=function(T,G,Z=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,O=G,e.width=Math.floor(T*X),e.height=Math.floor(G*X),Z===!0&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(V*X,O*X).floor()},this.setDrawingBufferSize=function(T,G,Z){V=T,O=G,X=Z,e.width=Math.floor(T*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(nt)},this.setViewport=function(T,G,Z,J){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,G,Z,J),At.viewport(x.copy(nt).multiplyScalar(X).floor())},this.getScissor=function(T){return T.copy(ht)},this.setScissor=function(T,G,Z,J){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,G,Z,J),At.scissor(U.copy(ht).multiplyScalar(X).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(T){At.setScissorTest(ut=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){et=T},this.getClearColor=function(T){return T.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(T=!0,G=!0,Z=!0){let J=0;if(T){let q=!1;if(I!==null){const pt=I.texture.format;q=pt===il||pt===nl||pt===el}if(q){const pt=I.texture.type,St=pt===Vn||pt===On||pt===$s||pt===Qn||pt===Qa||pt===tl,Ut=oe.getClearColor(),Ot=oe.getClearAlpha(),jt=Ut.r,kt=Ut.g,Ht=Ut.b;St?(M[0]=jt,M[1]=kt,M[2]=Ht,M[3]=Ot,Y.clearBufferuiv(Y.COLOR,0,M)):(y[0]=jt,y[1]=kt,y[2]=Ht,y[3]=Ot,Y.clearBufferiv(Y.COLOR,0,y))}else J|=Y.COLOR_BUFFER_BIT}G&&(J|=Y.DEPTH_BUFFER_BIT),Z&&(J|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),yt.dispose(),It.dispose(),qt.dispose(),S.dispose(),K.dispose(),st.dispose(),Kt.dispose(),ie.dispose(),bt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Te),Gt.removeEventListener("sessionend",ue),Ct&&(Ct.dispose(),Ct=null),ye.stop()};function ft(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=pe.autoReset,G=lt.enabled,Z=lt.autoUpdate,J=lt.needsUpdate,q=lt.type;me(),pe.autoReset=T,lt.enabled=G,lt.autoUpdate=Z,lt.needsUpdate=J,lt.type=q}function vt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gt(T){const G=T.target;G.removeEventListener("dispose",gt),Ft(G)}function Ft(T){wt(T),qt.remove(T)}function wt(T){const G=qt.get(T).programs;G!==void 0&&(G.forEach(function(Z){bt.releaseProgram(Z)}),T.isShaderMaterial&&bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,Z,J,q,pt){G===null&&(G=Dt);const St=q.isMesh&&q.matrixWorld.determinant()<0,Ut=oi(T,G,Z,J,q);At.setMaterial(J,St);let Ot=Z.index,jt=1;if(J.wireframe===!0){if(Ot=at.getWireframeAttribute(Z),Ot===void 0)return;jt=2}const kt=Z.drawRange,Ht=Z.attributes.position;let re=kt.start*jt,Oe=(kt.start+kt.count)*jt;pt!==null&&(re=Math.max(re,pt.start*jt),Oe=Math.min(Oe,(pt.start+pt.count)*jt)),Ot!==null?(re=Math.max(re,0),Oe=Math.min(Oe,Ot.count)):Ht!=null&&(re=Math.max(re,0),Oe=Math.min(Oe,Ht.count));const Ee=Oe-re;if(Ee<0||Ee===1/0)return;Kt.setup(q,J,Ut,Z,Ot);let Ae,he=Nt;if(Ot!==null&&(Ae=ct.get(Ot),he=Lt,he.setIndex(Ae)),q.isMesh)J.wireframe===!0?(At.setLineWidth(J.wireframeLinewidth*Qt()),he.setMode(Y.LINES)):he.setMode(Y.TRIANGLES);else if(q.isLine){let $t=J.linewidth;$t===void 0&&($t=1),At.setLineWidth($t*Qt()),q.isLineSegments?he.setMode(Y.LINES):q.isLineLoop?he.setMode(Y.LINE_LOOP):he.setMode(Y.LINE_STRIP)}else q.isPoints?he.setMode(Y.POINTS):q.isSprite&&he.setMode(Y.TRIANGLES);if(q.isBatchedMesh)he.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)he.renderInstances(re,Ee,q.count);else if(Z.isInstancedBufferGeometry){const $t=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,li=Math.min(Z.instanceCount,$t);he.renderInstances(re,Ee,li)}else he.render(re,Ee)};function ae(T,G,Z){T.transparent===!0&&T.side===An&&T.forceSinglePass===!1?(T.side=qe,T.needsUpdate=!0,Ge(T,G,Z),T.side=kn,T.needsUpdate=!0,Ge(T,G,Z),T.side=An):Ge(T,G,Z)}this.compile=function(T,G,Z=null){Z===null&&(Z=T),m=It.get(Z),m.init(),D.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),T!==Z&&T.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(R._useLegacyLights);const J=new Set;return T.traverse(function(q){const pt=q.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){const Ut=pt[St];ae(Ut,Z,q),J.add(Ut)}else ae(pt,Z,q),J.add(pt)}),D.pop(),m=null,J},this.compileAsync=function(T,G,Z=null){const J=this.compile(T,G,Z);return new Promise(q=>{function pt(){if(J.forEach(function(St){qt.get(St).currentProgram.isReady()&&J.delete(St)}),J.size===0){q(T);return}setTimeout(pt,10)}Et.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ce=null;function Se(T){ce&&ce(T)}function Te(){ye.stop()}function ue(){ye.start()}const ye=new Sl;ye.setAnimationLoop(Se),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(T){ce=T,Gt.setAnimationLoop(T),T===null?ye.stop():ye.start()},Gt.addEventListener("sessionstart",Te),Gt.addEventListener("sessionend",ue),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(G),G=Gt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,G,I),m=It.get(T,D.length),m.init(),D.push(m),Pt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(Pt),xt=this.localClippingEnabled,rt=Yt.init(this.clippingPlanes,xt),E=yt.get(T,d.length),E.init(),d.push(E),Je(T,G,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort($,et),this.info.render.frame++,rt===!0&&Yt.beginShadows();const Z=m.state.shadowsArray;if(lt.render(Z,T,G),rt===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(E,T),m.setupLights(R._useLegacyLights),G.isArrayCamera){const J=G.cameras;for(let q=0,pt=J.length;q<pt;q++){const St=J[q];Qe(E,T,St,St.viewport)}}else Qe(E,T,G);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(R,T,G),Kt.resetDefaultState(),it=-1,A=null,D.pop(),D.length>0?m=D[D.length-1]:m=null,d.pop(),d.length>0?E=d[d.length-1]:E=null};function Je(T,G,Z,J){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){J&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Pt);const St=st.update(T),Ut=T.material;Ut.visible&&E.push(T,St,Ut,Z,Xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const St=st.update(T),Ut=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Xt.copy(St.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ut)){const Ot=St.groups;for(let jt=0,kt=Ot.length;jt<kt;jt++){const Ht=Ot[jt],re=Ut[Ht.materialIndex];re&&re.visible&&E.push(T,St,re,Z,Xt.z,Ht)}}else Ut.visible&&E.push(T,St,Ut,Z,Xt.z,null)}}const pt=T.children;for(let St=0,Ut=pt.length;St<Ut;St++)Je(pt[St],G,Z,J)}function Qe(T,G,Z,J){const q=T.opaque,pt=T.transmissive,St=T.transparent;m.setupLightsView(Z),rt===!0&&Yt.setGlobalState(R.clippingPlanes,Z),pt.length>0&&_n(q,pt,G,Z),J&&At.viewport(x.copy(J)),q.length>0&&Wn(q,G,Z),pt.length>0&&Wn(pt,G,Z),St.length>0&&Wn(St,G,Z),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function _n(T,G,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const pt=Vt.isWebGL2;Ct===null&&(Ct=new ii(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?tr:Vn,minFilter:Qi,samples:pt?4:0})),R.getDrawingBufferSize(Wt),pt?Ct.setSize(Wt.x,Wt.y):Ct.setSize(js(Wt.x),js(Wt.y));const St=R.getRenderTarget();R.setRenderTarget(Ct),R.getClearColor(tt),N=R.getClearAlpha(),N<1&&R.setClearColor(16777215,.5),R.clear();const Ut=R.toneMapping;R.toneMapping=Hn,Wn(T,Z,J),b.updateMultisampleRenderTarget(Ct),b.updateRenderTargetMipmap(Ct);let Ot=!1;for(let jt=0,kt=G.length;jt<kt;jt++){const Ht=G[jt],re=Ht.object,Oe=Ht.geometry,Ee=Ht.material,Ae=Ht.group;if(Ee.side===An&&re.layers.test(J.layers)){const he=Ee.side;Ee.side=qe,Ee.needsUpdate=!0,Me(re,Z,J,Oe,Ee,Ae),Ee.side=he,Ee.needsUpdate=!0,Ot=!0}}Ot===!0&&(b.updateMultisampleRenderTarget(Ct),b.updateRenderTargetMipmap(Ct)),R.setRenderTarget(St),R.setClearColor(tt,N),R.toneMapping=Ut}function Wn(T,G,Z){const J=G.isScene===!0?G.overrideMaterial:null;for(let q=0,pt=T.length;q<pt;q++){const St=T[q],Ut=St.object,Ot=St.geometry,jt=J===null?St.material:J,kt=St.group;Ut.layers.test(Z.layers)&&Me(Ut,G,Z,Ot,jt,kt)}}function Me(T,G,Z,J,q,pt){T.onBeforeRender(R,G,Z,J,q,pt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(R,G,Z,J,T,pt),q.transparent===!0&&q.side===An&&q.forceSinglePass===!1?(q.side=qe,q.needsUpdate=!0,R.renderBufferDirect(Z,G,J,q,T,pt),q.side=kn,q.needsUpdate=!0,R.renderBufferDirect(Z,G,J,q,T,pt),q.side=An):R.renderBufferDirect(Z,G,J,q,T,pt),T.onAfterRender(R,G,Z,J,q,pt)}function Ge(T,G,Z){G.isScene!==!0&&(G=Dt);const J=qt.get(T),q=m.state.lights,pt=m.state.shadowsArray,St=q.state.version,Ut=bt.getParameters(T,q.state,pt,G,Z),Ot=bt.getProgramCacheKey(Ut);let jt=J.programs;J.environment=T.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(T.isMeshStandardMaterial?K:S).get(T.envMap||J.environment),jt===void 0&&(T.addEventListener("dispose",gt),jt=new Map,J.programs=jt);let kt=jt.get(Ot);if(kt!==void 0){if(J.currentProgram===kt&&J.lightsStateVersion===St)return ar(T,Ut),kt}else Ut.uniforms=bt.getUniforms(T),T.onBuild(Z,Ut,R),T.onBeforeCompile(Ut,R),kt=bt.acquireProgram(Ut,Ot),jt.set(Ot,kt),J.uniforms=Ut.uniforms;const Ht=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ht.clippingPlanes=Yt.uniform),ar(T,Ut),J.needsLights=ai(T),J.lightsStateVersion=St,J.needsLights&&(Ht.ambientLightColor.value=q.state.ambient,Ht.lightProbe.value=q.state.probe,Ht.directionalLights.value=q.state.directional,Ht.directionalLightShadows.value=q.state.directionalShadow,Ht.spotLights.value=q.state.spot,Ht.spotLightShadows.value=q.state.spotShadow,Ht.rectAreaLights.value=q.state.rectArea,Ht.ltc_1.value=q.state.rectAreaLTC1,Ht.ltc_2.value=q.state.rectAreaLTC2,Ht.pointLights.value=q.state.point,Ht.pointLightShadows.value=q.state.pointShadow,Ht.hemisphereLights.value=q.state.hemi,Ht.directionalShadowMap.value=q.state.directionalShadowMap,Ht.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ht.spotShadowMap.value=q.state.spotShadowMap,Ht.spotLightMatrix.value=q.state.spotLightMatrix,Ht.spotLightMap.value=q.state.spotLightMap,Ht.pointShadowMap.value=q.state.pointShadowMap,Ht.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=kt,J.uniformsList=null,kt}function si(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=zr.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function ar(T,G){const Z=qt.get(T);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function oi(T,G,Z,J,q){G.isScene!==!0&&(G=Dt),b.resetTextureUnits();const pt=G.fog,St=J.isMeshStandardMaterial?G.environment:null,Ut=I===null?R.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wn,Ot=(J.isMeshStandardMaterial?K:S).get(J.envMap||St),jt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,kt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ht=!!Z.morphAttributes.position,re=!!Z.morphAttributes.normal,Oe=!!Z.morphAttributes.color;let Ee=Hn;J.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ee=R.toneMapping);const Ae=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,he=Ae!==void 0?Ae.length:0,$t=qt.get(J),li=m.state.lights;if(rt===!0&&(xt===!0||T!==A)){const He=T===A&&J.id===it;Yt.setState(J,T,He)}let ge=!1;J.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==li.state.version||$t.outputColorSpace!==Ut||q.isBatchedMesh&&$t.batching===!1||!q.isBatchedMesh&&$t.batching===!0||q.isInstancedMesh&&$t.instancing===!1||!q.isInstancedMesh&&$t.instancing===!0||q.isSkinnedMesh&&$t.skinning===!1||!q.isSkinnedMesh&&$t.skinning===!0||q.isInstancedMesh&&$t.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&$t.instancingColor===!1&&q.instanceColor!==null||$t.envMap!==Ot||J.fog===!0&&$t.fog!==pt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Yt.numPlanes||$t.numIntersection!==Yt.numIntersection)||$t.vertexAlphas!==jt||$t.vertexTangents!==kt||$t.morphTargets!==Ht||$t.morphNormals!==re||$t.morphColors!==Oe||$t.toneMapping!==Ee||Vt.isWebGL2===!0&&$t.morphTargetsCount!==he)&&(ge=!0):(ge=!0,$t.__version=J.version);let vn=$t.currentProgram;ge===!0&&(vn=Ge(J,G,q));let lr=!1,Pn=!1,ci=!1;const we=vn.getUniforms(),mn=$t.uniforms;if(At.useProgram(vn.program)&&(lr=!0,Pn=!0,ci=!0),J.id!==it&&(it=J.id,Pn=!0),lr||A!==T){we.setValue(Y,"projectionMatrix",T.projectionMatrix),we.setValue(Y,"viewMatrix",T.matrixWorldInverse);const He=we.map.cameraPosition;He!==void 0&&He.setValue(Y,Xt.setFromMatrixPosition(T.matrixWorld)),Vt.logarithmicDepthBuffer&&we.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&we.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Pn=!0,ci=!0)}if(q.isSkinnedMesh){we.setOptional(Y,q,"bindMatrix"),we.setOptional(Y,q,"bindMatrixInverse");const He=q.skeleton;He&&(Vt.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),we.setValue(Y,"boneTexture",He.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(we.setOptional(Y,q,"batchingTexture"),we.setValue(Y,"batchingTexture",q._matricesTexture,b));const Pe=Z.morphAttributes;if((Pe.position!==void 0||Pe.normal!==void 0||Pe.color!==void 0&&Vt.isWebGL2===!0)&&Zt.update(q,Z,vn),(Pn||$t.receiveShadow!==q.receiveShadow)&&($t.receiveShadow=q.receiveShadow,we.setValue(Y,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(mn.envMap.value=Ot,mn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Pn&&(we.setValue(Y,"toneMappingExposure",R.toneMappingExposure),$t.needsLights&&Vi(mn,ci),pt&&J.fog===!0&&_t.refreshFogUniforms(mn,pt),_t.refreshMaterialUniforms(mn,J,X,O,Ct),zr.upload(Y,si($t),mn,b)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(zr.upload(Y,si($t),mn,b),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&we.setValue(Y,"center",q.center),we.setValue(Y,"modelViewMatrix",q.modelViewMatrix),we.setValue(Y,"normalMatrix",q.normalMatrix),we.setValue(Y,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const He=J.uniformsGroups;for(let ui=0,hi=He.length;ui<hi;ui++)if(Vt.isWebGL2){const ki=He[ui];ie.update(ki,vn),ie.bind(ki,vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vn}function Vi(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function ai(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,G,Z){qt.get(T.texture).__webglTexture=G,qt.get(T.depthTexture).__webglTexture=Z;const J=qt.get(T);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,G){const Z=qt.get(T);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,Z=0){I=T,H=G,z=Z;let J=!0,q=null,pt=!1,St=!1;if(T){const Ot=qt.get(T);Ot.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(Y.FRAMEBUFFER,null),J=!1):Ot.__webglFramebuffer===void 0?b.setupRenderTarget(T):Ot.__hasExternalTextures&&b.rebindTextures(T,qt.get(T.texture).__webglTexture,qt.get(T.depthTexture).__webglTexture);const jt=T.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(St=!0);const kt=qt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[G])?q=kt[G][Z]:q=kt[G],pt=!0):Vt.isWebGL2&&T.samples>0&&b.useMultisampledRTT(T)===!1?q=qt.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?q=kt[Z]:q=kt,x.copy(T.viewport),U.copy(T.scissor),k=T.scissorTest}else x.copy(nt).multiplyScalar(X).floor(),U.copy(ht).multiplyScalar(X).floor(),k=ut;if(At.bindFramebuffer(Y.FRAMEBUFFER,q)&&Vt.drawBuffers&&J&&At.drawBuffers(T,q),At.viewport(x),At.scissor(U),At.setScissorTest(k),pt){const Ot=qt.get(T.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ot.__webglTexture,Z)}else if(St){const Ot=qt.get(T.texture),jt=G||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ot.__webglTexture,Z||0,jt)}it=-1},this.readRenderTargetPixels=function(T,G,Z,J,q,pt,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=qt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Ut=Ut[St]),Ut){At.bindFramebuffer(Y.FRAMEBUFFER,Ut);try{const Ot=T.texture,jt=Ot.format,kt=Ot.type;if(jt!==dn&&Tt.convert(jt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=kt===tr&&(Et.has("EXT_color_buffer_half_float")||Vt.isWebGL2&&Et.has("EXT_color_buffer_float"));if(kt!==Vn&&Tt.convert(kt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===Bn&&(Vt.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-J&&Z>=0&&Z<=T.height-q&&Y.readPixels(G,Z,J,q,Tt.convert(jt),Tt.convert(kt),pt)}finally{const Ot=I!==null?qt.get(I).__webglFramebuffer:null;At.bindFramebuffer(Y.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(T,G,Z=0){const J=Math.pow(2,-Z),q=Math.floor(G.image.width*J),pt=Math.floor(G.image.height*J);b.setTexture2D(G,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Z,0,0,T.x,T.y,q,pt),At.unbindTexture()},this.copyTextureToTexture=function(T,G,Z,J=0){const q=G.image.width,pt=G.image.height,St=Tt.convert(Z.format),Ut=Tt.convert(Z.type);b.setTexture2D(Z,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,J,T.x,T.y,q,pt,St,Ut,G.image.data):G.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,J,T.x,T.y,G.mipmaps[0].width,G.mipmaps[0].height,St,G.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,J,T.x,T.y,St,Ut,G.image),J===0&&Z.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(T,G,Z,J,q=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=T.max.x-T.min.x+1,St=T.max.y-T.min.y+1,Ut=T.max.z-T.min.z+1,Ot=Tt.convert(J.format),jt=Tt.convert(J.type);let kt;if(J.isData3DTexture)b.setTexture3D(J,0),kt=Y.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)b.setTexture2DArray(J,0),kt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,J.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,J.unpackAlignment);const Ht=Y.getParameter(Y.UNPACK_ROW_LENGTH),re=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Oe=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Ee=Y.getParameter(Y.UNPACK_SKIP_ROWS),Ae=Y.getParameter(Y.UNPACK_SKIP_IMAGES),he=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,he.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,he.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,T.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,T.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,T.min.z),Z.isDataTexture||Z.isData3DTexture?Y.texSubImage3D(kt,q,G.x,G.y,G.z,pt,St,Ut,Ot,jt,he.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(kt,q,G.x,G.y,G.z,pt,St,Ut,Ot,he.data)):Y.texSubImage3D(kt,q,G.x,G.y,G.z,pt,St,Ut,Ot,jt,he),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ht),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,re),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Oe),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ee),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ae),q===0&&J.generateMipmaps&&Y.generateMipmap(kt),At.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),At.unbindTexture()},this.resetState=function(){H=0,z=0,I=null,At.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Js?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Yr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?ei:sl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ei?Ne:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class xm extends Rl{}xm.prototype.isWebGL1Renderer=!0;class Mm extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Cl extends sr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xa=new Ue,Ys=new hl,Fr=new Kr,Or=new W;class Sm extends Ye{constructor(t=new Cn,e=new Cl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Fr.radius+=o,t.ray.intersectsSphere(Fr)===!1)return;Xa.copy(r).invert(),Ys.copy(t.ray).applyMatrix4(Xa);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,f=n.index,g=n.attributes.position;if(f!==null){const _=Math.max(0,c.start),M=Math.min(f.count,c.start+c.count);for(let y=_,E=M;y<E;y++){const m=f.getX(y);Or.fromBufferAttribute(g,m),ja(Or,m,u,r,t,e,this)}}else{const _=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let y=_,E=M;y<E;y++)Or.fromBufferAttribute(g,y),ja(Or,y,u,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ja(i,t,e,n,r,o,c){const a=Ys.distanceSqToPoint(i);if(a<e){const u=new W;Ys.closestPointToPoint(i,u),u.applyMatrix4(n);const f=r.ray.origin.distanceTo(u);if(f<r.near||f>r.far)return;o.push({distance:f,distanceToRay:Math.sqrt(a),point:u,index:t,face:null,object:c})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zs);var Ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Em={};(function(){var i;function t(s){var l=0;return function(){return l<s.length?{done:!1,value:s[l++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,h){return s==Array.prototype||s==Object.prototype||(s[l]=h.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ii=="object"&&Ii];for(var l=0;l<s.length;++l){var h=s[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function o(s,l){if(l)t:{var h=r;s=s.split(".");for(var v=0;v<s.length-1;v++){var w=s[v];if(!(w in h))break t;h=h[w]}s=s[s.length-1],v=h[s],l=l(v),l!=v&&l!=null&&e(h,s,{configurable:!0,writable:!0,value:l})}}o("Symbol",function(s){function l(P){if(this instanceof l)throw new TypeError("Symbol is not a constructor");return new h(v+(P||"")+"_"+w++,P)}function h(P,C){this.h=P,e(this,"description",{configurable:!0,writable:!0,value:C})}if(s)return s;h.prototype.toString=function(){return this.h};var v="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",w=0;return l}),o("Symbol.iterator",function(s){if(s)return s;s=Symbol("Symbol.iterator");for(var l="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),h=0;h<l.length;h++){var v=r[l[h]];typeof v=="function"&&typeof v.prototype[s]!="function"&&e(v.prototype,s,{configurable:!0,writable:!0,value:function(){return c(t(this))}})}return s});function c(s){return s={next:s},s[Symbol.iterator]=function(){return this},s}function a(s){var l=typeof Symbol<"u"&&Symbol.iterator&&s[Symbol.iterator];return l?l.call(s):{next:t(s)}}function u(s){if(!(s instanceof Array)){s=a(s);for(var l,h=[];!(l=s.next()).done;)h.push(l.value);s=h}return s}var f=typeof Object.assign=="function"?Object.assign:function(s,l){for(var h=1;h<arguments.length;h++){var v=arguments[h];if(v)for(var w in v)Object.prototype.hasOwnProperty.call(v,w)&&(s[w]=v[w])}return s};o("Object.assign",function(s){return s||f});var p=typeof Object.create=="function"?Object.create:function(s){function l(){}return l.prototype=s,new l},g;if(typeof Object.setPrototypeOf=="function")g=Object.setPrototypeOf;else{var _;t:{var M={a:!0},y={};try{y.__proto__=M,_=y.a;break t}catch{}_=!1}g=_?function(s,l){if(s.__proto__=l,s.__proto__!==l)throw new TypeError(s+" is not extensible");return s}:null}var E=g;function m(s,l){if(s.prototype=p(l.prototype),s.prototype.constructor=s,E)E(s,l);else for(var h in l)if(h!="prototype")if(Object.defineProperties){var v=Object.getOwnPropertyDescriptor(l,h);v&&Object.defineProperty(s,h,v)}else s[h]=l[h];s.ya=l.prototype}function d(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function D(s){if(s.m)throw new TypeError("Generator is already running");s.m=!0}d.prototype.u=function(s){this.i=s};function R(s,l){s.l={ma:l,na:!0},s.h=s.s||s.v}d.prototype.return=function(s){this.l={return:s},this.h=this.v};function L(s,l,h){return s.h=h,{value:l}}function H(s){this.h=new d,this.i=s}function z(s,l){D(s.h);var h=s.h.j;return h?I(s,"return"in h?h.return:function(v){return{value:v,done:!0}},l,s.h.return):(s.h.return(l),it(s))}function I(s,l,h,v){try{var w=l.call(s.h.j,h);if(!(w instanceof Object))throw new TypeError("Iterator result "+w+" is not an object");if(!w.done)return s.h.m=!1,w;var P=w.value}catch(C){return s.h.j=null,R(s.h,C),it(s)}return s.h.j=null,v.call(s.h,P),it(s)}function it(s){for(;s.h.h;)try{var l=s.i(s.h);if(l)return s.h.m=!1,{value:l.value,done:!1}}catch(h){s.h.i=void 0,R(s.h,h)}if(s.h.m=!1,s.h.l){if(l=s.h.l,s.h.l=null,l.na)throw l.ma;return{value:l.return,done:!0}}return{value:void 0,done:!0}}function A(s){this.next=function(l){return D(s.h),s.h.j?l=I(s,s.h.j.next,l,s.h.u):(s.h.u(l),l=it(s)),l},this.throw=function(l){return D(s.h),s.h.j?l=I(s,s.h.j.throw,l,s.h.u):(R(s.h,l),l=it(s)),l},this.return=function(l){return z(s,l)},this[Symbol.iterator]=function(){return this}}function x(s){function l(v){return s.next(v)}function h(v){return s.throw(v)}return new Promise(function(v,w){function P(C){C.done?v(C.value):Promise.resolve(C.value).then(l,h).then(P,w)}P(s.next())})}function U(s){return x(new A(new H(s)))}o("Promise",function(s){function l(C){this.i=0,this.j=void 0,this.h=[],this.u=!1;var B=this.l();try{C(B.resolve,B.reject)}catch(j){B.reject(j)}}function h(){this.h=null}function v(C){return C instanceof l?C:new l(function(B){B(C)})}if(s)return s;h.prototype.i=function(C){if(this.h==null){this.h=[];var B=this;this.j(function(){B.m()})}this.h.push(C)};var w=r.setTimeout;h.prototype.j=function(C){w(C,0)},h.prototype.m=function(){for(;this.h&&this.h.length;){var C=this.h;this.h=[];for(var B=0;B<C.length;++B){var j=C[B];C[B]=null;try{j()}catch(ot){this.l(ot)}}}this.h=null},h.prototype.l=function(C){this.j(function(){throw C})},l.prototype.l=function(){function C(ot){return function(dt){j||(j=!0,ot.call(B,dt))}}var B=this,j=!1;return{resolve:C(this.I),reject:C(this.m)}},l.prototype.I=function(C){if(C===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(C instanceof l)this.L(C);else{t:switch(typeof C){case"object":var B=C!=null;break t;case"function":B=!0;break t;default:B=!1}B?this.F(C):this.s(C)}},l.prototype.F=function(C){var B=void 0;try{B=C.then}catch(j){this.m(j);return}typeof B=="function"?this.M(B,C):this.s(C)},l.prototype.m=function(C){this.v(2,C)},l.prototype.s=function(C){this.v(1,C)},l.prototype.v=function(C,B){if(this.i!=0)throw Error("Cannot settle("+C+", "+B+"): Promise already settled in state"+this.i);this.i=C,this.j=B,this.i===2&&this.K(),this.H()},l.prototype.K=function(){var C=this;w(function(){if(C.D()){var B=r.console;typeof B<"u"&&B.error(C.j)}},1)},l.prototype.D=function(){if(this.u)return!1;var C=r.CustomEvent,B=r.Event,j=r.dispatchEvent;return typeof j>"u"?!0:(typeof C=="function"?C=new C("unhandledrejection",{cancelable:!0}):typeof B=="function"?C=new B("unhandledrejection",{cancelable:!0}):(C=r.document.createEvent("CustomEvent"),C.initCustomEvent("unhandledrejection",!1,!0,C)),C.promise=this,C.reason=this.j,j(C))},l.prototype.H=function(){if(this.h!=null){for(var C=0;C<this.h.length;++C)P.i(this.h[C]);this.h=null}};var P=new h;return l.prototype.L=function(C){var B=this.l();C.T(B.resolve,B.reject)},l.prototype.M=function(C,B){var j=this.l();try{C.call(B,j.resolve,j.reject)}catch(ot){j.reject(ot)}},l.prototype.then=function(C,B){function j(Rt,Mt){return typeof Rt=="function"?function(zt){try{ot(Rt(zt))}catch(te){dt(te)}}:Mt}var ot,dt,Bt=new l(function(Rt,Mt){ot=Rt,dt=Mt});return this.T(j(C,ot),j(B,dt)),Bt},l.prototype.catch=function(C){return this.then(void 0,C)},l.prototype.T=function(C,B){function j(){switch(ot.i){case 1:C(ot.j);break;case 2:B(ot.j);break;default:throw Error("Unexpected state: "+ot.i)}}var ot=this;this.h==null?P.i(j):this.h.push(j),this.u=!0},l.resolve=v,l.reject=function(C){return new l(function(B,j){j(C)})},l.race=function(C){return new l(function(B,j){for(var ot=a(C),dt=ot.next();!dt.done;dt=ot.next())v(dt.value).T(B,j)})},l.all=function(C){var B=a(C),j=B.next();return j.done?v([]):new l(function(ot,dt){function Bt(zt){return function(te){Rt[zt]=te,Mt--,Mt==0&&ot(Rt)}}var Rt=[],Mt=0;do Rt.push(void 0),Mt++,v(j.value).T(Bt(Rt.length-1),dt),j=B.next();while(!j.done)})},l});function k(s,l){s instanceof String&&(s+="");var h=0,v=!1,w={next:function(){if(!v&&h<s.length){var P=h++;return{value:l(P,s[P]),done:!1}}return v=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}o("Array.prototype.keys",function(s){return s||function(){return k(this,function(l){return l})}}),o("Array.prototype.fill",function(s){return s||function(l,h,v){var w=this.length||0;for(0>h&&(h=Math.max(0,w+h)),(v==null||v>w)&&(v=w),v=Number(v),0>v&&(v=Math.max(0,w+v)),h=Number(h||0);h<v;h++)this[h]=l;return this}});function tt(s){return s||Array.prototype.fill}o("Int8Array.prototype.fill",tt),o("Uint8Array.prototype.fill",tt),o("Uint8ClampedArray.prototype.fill",tt),o("Int16Array.prototype.fill",tt),o("Uint16Array.prototype.fill",tt),o("Int32Array.prototype.fill",tt),o("Uint32Array.prototype.fill",tt),o("Float32Array.prototype.fill",tt),o("Float64Array.prototype.fill",tt),o("Object.is",function(s){return s||function(l,h){return l===h?l!==0||1/l===1/h:l!==l&&h!==h}}),o("Array.prototype.includes",function(s){return s||function(l,h){var v=this;v instanceof String&&(v=String(v));var w=v.length;for(h=h||0,0>h&&(h=Math.max(h+w,0));h<w;h++){var P=v[h];if(P===l||Object.is(P,l))return!0}return!1}}),o("String.prototype.includes",function(s){return s||function(l,h){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(l instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(l,h||0)!==-1}});var N=this||self;function V(s,l){s=s.split(".");var h=N;s[0]in h||typeof h.execScript>"u"||h.execScript("var "+s[0]);for(var v;s.length&&(v=s.shift());)s.length||l===void 0?h[v]&&h[v]!==Object.prototype[v]?h=h[v]:h=h[v]={}:h[v]=l}function O(s){var l;t:{if((l=N.navigator)&&(l=l.userAgent))break t;l=""}return l.indexOf(s)!=-1}var X=Array.prototype.map?function(s,l){return Array.prototype.map.call(s,l,void 0)}:function(s,l){for(var h=s.length,v=Array(h),w=typeof s=="string"?s.split(""):s,P=0;P<h;P++)P in w&&(v[P]=l.call(void 0,w[P],P,s));return v},$={},et=null;function nt(s){var l=s.length,h=3*l/4;h%3?h=Math.floor(h):"=.".indexOf(s[l-1])!=-1&&(h="=.".indexOf(s[l-2])!=-1?h-2:h-1);var v=new Uint8Array(h),w=0;return ht(s,function(P){v[w++]=P}),w!==h?v.subarray(0,w):v}function ht(s,l){function h(j){for(;v<s.length;){var ot=s.charAt(v++),dt=et[ot];if(dt!=null)return dt;if(!/^[\s\xa0]*$/.test(ot))throw Error("Unknown base64 encoding at char: "+ot)}return j}ut();for(var v=0;;){var w=h(-1),P=h(0),C=h(64),B=h(64);if(B===64&&w===-1)break;l(w<<2|P>>4),C!=64&&(l(P<<4&240|C>>2),B!=64&&l(C<<6&192|B))}}function ut(){if(!et){et={};for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),l=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var v=s.concat(l[h].split(""));$[h]=v;for(var w=0;w<v.length;w++){var P=v[w];et[P]===void 0&&(et[P]=w)}}}}var Q=typeof Uint8Array<"u",rt=!(O("Trident")||O("MSIE"))&&typeof N.btoa=="function";function xt(s){if(!rt){var l;l===void 0&&(l=0),ut(),l=$[l];for(var h=Array(Math.floor(s.length/3)),v=l[64]||"",w=0,P=0;w<s.length-2;w+=3){var C=s[w],B=s[w+1],j=s[w+2],ot=l[C>>2];C=l[(C&3)<<4|B>>4],B=l[(B&15)<<2|j>>6],j=l[j&63],h[P++]=ot+C+B+j}switch(ot=0,j=v,s.length-w){case 2:ot=s[w+1],j=l[(ot&15)<<2]||v;case 1:s=s[w],h[P]=l[s>>2]+l[(s&3)<<4|ot>>4]+j+v}return h.join("")}for(l="";10240<s.length;)l+=String.fromCharCode.apply(null,s.subarray(0,10240)),s=s.subarray(10240);return l+=String.fromCharCode.apply(null,s),btoa(l)}var Ct=RegExp("[-_.]","g");function Pt(s){switch(s){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Wt(s){if(!rt)return nt(s);Ct.test(s)&&(s=s.replace(Ct,Pt)),s=atob(s);for(var l=new Uint8Array(s.length),h=0;h<s.length;h++)l[h]=s.charCodeAt(h);return l}var Xt;function Dt(){return Xt||(Xt=new Uint8Array(0))}var Qt={},Y=typeof Uint8Array.prototype.slice=="function",ne=0,Et=0;function Vt(s){var l=0>s;s=Math.abs(s);var h=s>>>0;s=Math.floor((s-h)/4294967296),l&&(h=a(pe(h,s)),l=h.next().value,s=h.next().value,h=l),ne=h>>>0,Et=s>>>0}var At=typeof BigInt=="function";function pe(s,l){return l=~l,s?s=~s+1:l+=1,[s,l]}function qt(s,l){this.i=s>>>0,this.h=l>>>0}function b(s){if(!s)return S||(S=new qt(0,0));if(!/^-?\d+$/.test(s))return null;if(16>s.length)Vt(Number(s));else if(At)s=BigInt(s),ne=Number(s&BigInt(4294967295))>>>0,Et=Number(s>>BigInt(32)&BigInt(4294967295));else{var l=+(s[0]==="-");Et=ne=0;for(var h=s.length,v=l,w=(h-l)%6+l;w<=h;v=w,w+=6)v=Number(s.slice(v,w)),Et*=1e6,ne=1e6*ne+v,4294967296<=ne&&(Et+=ne/4294967296|0,ne%=4294967296);l&&(l=a(pe(ne,Et)),s=l.next().value,l=l.next().value,ne=s,Et=l)}return new qt(ne,Et)}var S;function K(s,l){return Error("Invalid wire type: "+s+" (at position "+l+")")}function ct(){return Error("Failed to read varint, encoding is invalid.")}function at(s,l){return Error("Tried to read past the end of the data "+l+" > "+s)}function st(){throw Error("Invalid UTF8")}function bt(s,l){return l=String.fromCharCode.apply(null,l),s==null?l:s+l}var _t=void 0,yt,It=typeof TextDecoder<"u",Yt,lt=typeof TextEncoder<"u",oe;function Zt(s){if(s!==Qt)throw Error("illegal external caller")}function Nt(s,l){if(Zt(l),this.V=s,s!=null&&s.length===0)throw Error("ByteString should be constructed with non-empty values")}function Lt(){return oe||(oe=new Nt(null,Qt))}function Tt(s){Zt(Qt);var l=s.V;return l=l==null||Q&&l!=null&&l instanceof Uint8Array?l:typeof l=="string"?Wt(l):null,l==null?l:s.V=l}function Kt(s){if(typeof s=="string")return{buffer:Wt(s),C:!1};if(Array.isArray(s))return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Uint8Array)return{buffer:s,C:!1};if(s.constructor===ArrayBuffer)return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Nt)return{buffer:Tt(s)||Dt(),C:!0};if(s instanceof Uint8Array)return{buffer:new Uint8Array(s.buffer,s.byteOffset,s.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function ie(s,l){this.i=null,this.m=!1,this.h=this.j=this.l=0,me(this,s,l)}function me(s,l,h){h=h===void 0?{}:h,s.S=h.S===void 0?!1:h.S,l&&(l=Kt(l),s.i=l.buffer,s.m=l.C,s.l=0,s.j=s.i.length,s.h=s.l)}ie.prototype.reset=function(){this.h=this.l};function Gt(s,l){if(s.h=l,l>s.j)throw at(s.j,l)}function ft(s){var l=s.i,h=s.h,v=l[h++],w=v&127;if(v&128&&(v=l[h++],w|=(v&127)<<7,v&128&&(v=l[h++],w|=(v&127)<<14,v&128&&(v=l[h++],w|=(v&127)<<21,v&128&&(v=l[h++],w|=v<<28,v&128&&l[h++]&128&&l[h++]&128&&l[h++]&128&&l[h++]&128&&l[h++]&128)))))throw ct();return Gt(s,h),w}function F(s,l){if(0>l)throw Error("Tried to read a negative byte length: "+l);var h=s.h,v=h+l;if(v>s.j)throw at(l,s.j-h);return s.h=v,h}var vt=[];function gt(){this.h=[]}gt.prototype.length=function(){return this.h.length},gt.prototype.end=function(){var s=this.h;return this.h=[],s};function Ft(s,l,h){for(;0<h||127<l;)s.h.push(l&127|128),l=(l>>>7|h<<25)>>>0,h>>>=7;s.h.push(l)}function wt(s,l){for(;127<l;)s.h.push(l&127|128),l>>>=7;s.h.push(l)}function ae(s,l){if(vt.length){var h=vt.pop();me(h,s,l),s=h}else s=new ie(s,l);this.h=s,this.j=this.h.h,this.i=this.l=-1,this.setOptions(l)}ae.prototype.setOptions=function(s){s=s===void 0?{}:s,this.ca=s.ca===void 0?!1:s.ca},ae.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function ce(s){var l=s.h;if(l.h==l.j)return!1;s.j=s.h.h;var h=ft(s.h)>>>0;if(l=h>>>3,h&=7,!(0<=h&&5>=h))throw K(h,s.j);if(1>l)throw Error("Invalid field number: "+l+" (at position "+s.j+")");return s.l=l,s.i=h,!0}function Se(s){switch(s.i){case 0:if(s.i!=0)Se(s);else t:{s=s.h;for(var l=s.h,h=l+10,v=s.i;l<h;)if(!(v[l++]&128)){Gt(s,l);break t}throw ct()}break;case 1:s=s.h,Gt(s,s.h+8);break;case 2:s.i!=2?Se(s):(l=ft(s.h)>>>0,s=s.h,Gt(s,s.h+l));break;case 5:s=s.h,Gt(s,s.h+4);break;case 3:l=s.l;do{if(!ce(s))throw Error("Unmatched start-group tag: stream EOF");if(s.i==4){if(s.l!=l)throw Error("Unmatched end-group tag");break}Se(s)}while(!0);break;default:throw K(s.i,s.j)}}var Te=[];function ue(){this.j=[],this.i=0,this.h=new gt}function ye(s,l){l.length!==0&&(s.j.push(l),s.i+=l.length)}function Je(s,l){if(l=l.R){ye(s,s.h.end());for(var h=0;h<l.length;h++)ye(s,Tt(l[h])||Dt())}}var Qe=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function _n(s,l){return Qe?s[Qe]|=l:s.A!==void 0?s.A|=l:(Object.defineProperties(s,{A:{value:l,configurable:!0,writable:!0,enumerable:!1}}),l)}function Wn(s,l){Qe?s[Qe]&&(s[Qe]&=~l):s.A!==void 0&&(s.A&=~l)}function Me(s){var l;return Qe?l=s[Qe]:l=s.A,l??0}function Ge(s,l){Qe?s[Qe]=l:s.A!==void 0?s.A=l:Object.defineProperties(s,{A:{value:l,configurable:!0,writable:!0,enumerable:!1}})}function si(s){return _n(s,1),s}function ar(s,l){Ge(l,(s|0)&-51)}function oi(s,l){Ge(l,(s|18)&-41)}var Vi={};function ai(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)&&s.constructor===Object}var T,G=[];Ge(G,23),T=Object.freeze(G);function Z(s){if(Me(s.o)&2)throw Error("Cannot mutate an immutable Message")}function J(s){var l=s.length;(l=l?s[l-1]:void 0)&&ai(l)?l.g=1:(l={},s.push((l.g=1,l)))}function q(s){var l=s.i+s.G;return s.B||(s.B=s.o[l]={})}function pt(s,l){return l===-1?null:l>=s.i?s.B?s.B[l]:void 0:s.o[l+s.G]}function St(s,l,h,v){Z(s),Ut(s,l,h,v)}function Ut(s,l,h,v){s.j&&(s.j=void 0),l>=s.i||v?q(s)[l]=h:(s.o[l+s.G]=h,(s=s.B)&&l in s&&delete s[l])}function Ot(s,l,h,v){var w=pt(s,l);Array.isArray(w)||(w=T);var P=Me(w);if(P&1||si(w),v)P&2||_n(w,2),h&1||Object.freeze(w);else{v=!(h&2);var C=P&2;h&1||!C?v&&P&16&&!C&&Wn(w,16):(w=si(Array.prototype.slice.call(w)),Ut(s,l,w))}return w}function jt(s,l){var h=pt(s,l),v=h==null?h:typeof h=="number"||h==="NaN"||h==="Infinity"||h==="-Infinity"?Number(h):void 0;return v!=null&&v!==h&&Ut(s,l,v),v}function kt(s,l,h,v,w){s.h||(s.h={});var P=s.h[h],C=Ot(s,h,3,w);if(!P){var B=C;P=[];var j=!!(Me(s.o)&16);C=!!(Me(B)&2);var ot=B;!w&&C&&(B=Array.prototype.slice.call(B));for(var dt=C,Bt=0;Bt<B.length;Bt++){var Rt=B[Bt],Mt=l,zt=!1;if(zt=zt===void 0?!1:zt,Rt=Array.isArray(Rt)?new Mt(Rt):zt?new Mt:void 0,Rt!==void 0){Mt=Rt.o;var te=zt=Me(Mt);C&&(te|=2),j&&(te|=16),te!=zt&&Ge(Mt,te),Mt=te,dt=dt||!!(2&Mt),P.push(Rt)}}return s.h[h]=P,j=Me(B),l=j|33,l=dt?l&-9:l|8,j!=l&&(dt=B,Object.isFrozen(dt)&&(dt=Array.prototype.slice.call(dt)),Ge(dt,l),B=dt),ot!==B&&Ut(s,h,B),(w||v&&C)&&_n(P,2),v&&Object.freeze(P),P}return w||(w=Object.isFrozen(P),v&&!w?Object.freeze(P):!v&&w&&(P=Array.prototype.slice.call(P),s.h[h]=P)),P}function Ht(s,l,h){var v=!!(Me(s.o)&2);if(l=kt(s,l,h,v,v),s=Ot(s,h,3,v),!(v||Me(s)&8)){for(v=0;v<l.length;v++){if(h=l[v],Me(h.o)&2){var w=mn(h,!1);w.j=h}else w=h;h!==w&&(l[v]=w,s[v]=w.o)}_n(s,8)}return l}function re(s,l,h){if(h!=null&&typeof h!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof h+": "+h);St(s,l,h)}function Oe(s,l,h,v,w){Z(s);var P=kt(s,h,l,!1,!1);return h=v??new h,s=Ot(s,l,2,!1),w!=null?(P.splice(w,0,h),s.splice(w,0,h.o)):(P.push(h),s.push(h.o)),h.C()&&Wn(s,8),h}function Ee(s,l){return s??l}function Ae(s,l,h){return h=h===void 0?0:h,Ee(jt(s,l),h)}var he;function $t(s){switch(typeof s){case"number":return isFinite(s)?s:String(s);case"object":if(s)if(Array.isArray(s)){if(Me(s)&128)return s=Array.prototype.slice.call(s),J(s),s}else{if(Q&&s!=null&&s instanceof Uint8Array)return xt(s);if(s instanceof Nt){var l=s.V;return l==null?"":typeof l=="string"?l:s.V=xt(l)}}}return s}function li(s,l,h,v){if(s!=null){if(Array.isArray(s))s=ge(s,l,h,v!==void 0);else if(ai(s)){var w={},P;for(P in s)w[P]=li(s[P],l,h,v);s=w}else s=l(s,v);return s}}function ge(s,l,h,v){var w=Me(s);v=v?!!(w&16):void 0,s=Array.prototype.slice.call(s);for(var P=0;P<s.length;P++)s[P]=li(s[P],l,h,v);return h(w,s),s}function vn(s){return s.ja===Vi?s.toJSON():$t(s)}function lr(s,l){s&128&&J(l)}function Pn(s,l,h){if(h=h===void 0?oi:h,s!=null){if(Q&&s instanceof Uint8Array)return s.length?new Nt(new Uint8Array(s),Qt):Lt();if(Array.isArray(s)){var v=Me(s);return v&2?s:l&&!(v&32)&&(v&16||v===0)?(Ge(s,v|2),s):(s=ge(s,Pn,v&4?oi:h,!0),l=Me(s),l&4&&l&2&&Object.freeze(s),s)}return s.ja===Vi?we(s):s}}function ci(s,l,h,v,w,P,C){if(s=s.h&&s.h[h]){if(v=Me(s),v&2?v=s:(P=X(s,we),oi(v,P),Object.freeze(P),v=P),Z(l),C=v==null?T:si([]),v!=null){for(P=!!v.length,s=0;s<v.length;s++){var B=v[s];P=P&&!(Me(B.o)&2),C[s]=B.o}P=(P?8:0)|1,s=Me(C),(s&P)!==P&&(Object.isFrozen(C)&&(C=Array.prototype.slice.call(C)),Ge(C,s|P)),l.h||(l.h={}),l.h[h]=v}else l.h&&(l.h[h]=void 0);Ut(l,h,C,w)}else St(l,h,Pn(v,P,C),w)}function we(s){return Me(s.o)&2||(s=mn(s,!0),_n(s.o,2)),s}function mn(s,l){var h=s.o,v=[];_n(v,16);var w=s.constructor.h;if(w&&v.push(w),w=s.B,w){v.length=h.length,v.fill(void 0,v.length,h.length);var P={};v[v.length-1]=P}Me(h)&128&&J(v),l=l||s.C()?oi:ar,P=s.constructor,he=v,v=new P(v),he=void 0,s.R&&(v.R=s.R.slice()),P=!!(Me(h)&16);for(var C=w?h.length-1:h.length,B=0;B<C;B++)ci(s,v,B-s.G,h[B],!1,P,l);if(w)for(var j in w)ci(s,v,+j,w[j],!0,P,l);return v}function Pe(s,l,h){s==null&&(s=he),he=void 0;var v=this.constructor.i||0,w=0<v,P=this.constructor.h,C=!1;if(s==null){s=P?[P]:[];var B=48,j=!0;w&&(v=0,B|=128),Ge(s,B)}else{if(!Array.isArray(s)||P&&P!==s[0])throw Error();var ot=B=_n(s,0);if((j=(16&ot)!==0)&&((C=(32&ot)!==0)||(ot|=32)),w){if(128&ot)v=0;else if(0<s.length){var dt=s[s.length-1];if(ai(dt)&&"g"in dt){v=0,ot|=128,delete dt.g;var Bt=!0,Rt;for(Rt in dt){Bt=!1;break}Bt&&s.pop()}}}else if(128&ot)throw Error();B!==ot&&Ge(s,ot)}this.G=(P?0:-1)-v,this.h=void 0,this.o=s;t:{if(P=this.o.length,v=P-1,P&&(P=this.o[v],ai(P))){this.B=P,this.i=v-this.G;break t}l!==void 0&&-1<l?(this.i=Math.max(l,v+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!w&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(h){l=j&&!C&&!0,w=this.i;var Mt;for(j=0;j<h.length;j++)C=h[j],C<w?(C+=this.G,(v=s[C])?He(v,l):s[C]=T):(Mt||(Mt=q(this)),(v=Mt[C])?He(v,l):Mt[C]=T)}}Pe.prototype.toJSON=function(){return ge(this.o,vn,lr)},Pe.prototype.C=function(){return!!(Me(this.o)&2)};function He(s,l){if(Array.isArray(s)){var h=Me(s),v=1;!l||h&2||(v|=16),(h&v)!==v&&Ge(s,h|v)}}Pe.prototype.ja=Vi,Pe.prototype.toString=function(){return this.o.toString()};function ui(s,l,h){if(h){var v={},w;for(w in h){var P=h[w],C=P.qa;C||(v.J=P.wa||P.oa.W,P.ia?(v.aa=so(P.ia),C=function(B){return function(j,ot,dt){return B.J(j,ot,dt,B.aa)}}(v)):P.ka?(v.Z=oo(P.da.P,P.ka),C=function(B){return function(j,ot,dt){return B.J(j,ot,dt,B.Z)}}(v)):C=v.J,P.qa=C),C(l,s,P.da),v={J:v.J,aa:v.aa,Z:v.Z}}}Je(l,s)}var hi=Symbol();function ki(s,l,h){return s[hi]||(s[hi]=function(v,w){return l(v,w,h)})}function no(s){var l=s[hi];if(!l){var h=ts(s);l=function(v,w){return ao(v,w,h)},s[hi]=l}return l}function Dl(s){var l=s.ia;if(l)return no(l);if(l=s.va)return ki(s.da.P,l,s.ka)}function Il(s){var l=Dl(s),h=s.da,v=s.oa.U;return l?function(w,P){return v(w,P,h,l)}:function(w,P){return v(w,P,h)}}function io(s,l){var h=s[l];return typeof h=="function"&&h.length===0&&(h=h(),s[l]=h),Array.isArray(h)&&(Xi in h||Wi in h||0<h.length&&typeof h[0]=="function")?h:void 0}function ro(s,l,h,v,w,P){l.P=s[0];var C=1;if(s.length>C&&typeof s[C]!="number"){var B=s[C++];h(l,B)}for(;C<s.length;){h=s[C++];for(var j=C+1;j<s.length&&typeof s[j]!="number";)j++;switch(B=s[C++],j-=C,j){case 0:v(l,h,B);break;case 1:(j=io(s,C))?(C++,w(l,h,B,j)):v(l,h,B,s[C++]);break;case 2:j=C++,j=io(s,j),w(l,h,B,j,s[C++]);break;case 3:P(l,h,B,s[C++],s[C++],s[C++]);break;case 4:P(l,h,B,s[C++],s[C++],s[C++],s[C++]);break;default:throw Error("unexpected number of binary field arguments: "+j)}}return l}var cr=Symbol();function so(s){var l=s[cr];if(!l){var h=Qr(s);l=function(v,w){return lo(v,w,h)},s[cr]=l}return l}function oo(s,l){var h=s[cr];return h||(h=function(v,w){return ui(v,w,l)},s[cr]=h),h}var Wi=Symbol();function Nl(s,l){s.push(l)}function Fl(s,l,h){s.push(l,h.W)}function Ol(s,l,h,v){var w=so(v),P=Qr(v).P,C=h.W;s.push(l,function(B,j,ot){return C(B,j,ot,P,w)})}function Bl(s,l,h,v,w,P){var C=oo(v,P),B=h.W;s.push(l,function(j,ot,dt){return B(j,ot,dt,v,C)})}function Qr(s){var l=s[Wi];return l||(l=ro(s,s[Wi]=[],Nl,Fl,Ol,Bl),Xi in s&&Wi in s&&(s.length=0),l)}var Xi=Symbol();function zl(s,l){s[0]=l}function Gl(s,l,h,v){var w=h.U;s[l]=v?function(P,C,B){return w(P,C,B,v)}:w}function Hl(s,l,h,v,w){var P=h.U,C=no(v),B=ts(v).P;s[l]=function(j,ot,dt){return P(j,ot,dt,B,C,w)}}function Vl(s,l,h,v,w,P,C){var B=h.U,j=ki(v,w,P);s[l]=function(ot,dt,Bt){return B(ot,dt,Bt,v,j,C)}}function ts(s){var l=s[Xi];return l||(l=ro(s,s[Xi]={},zl,Gl,Hl,Vl),Xi in s&&Wi in s&&(s.length=0),l)}function ao(s,l,h){for(;ce(l)&&l.i!=4;){var v=l.l,w=h[v];if(!w){var P=h[0];P&&(P=P[v])&&(w=h[v]=Il(P))}if(!w||!w(l,s,v)){w=l,v=s,P=w.j,Se(w);var C=w;if(!C.ca){if(w=C.h.h-P,C.h.h=P,C=C.h,w==0)w=Lt();else{if(P=F(C,w),C.S&&C.m)w=C.i.subarray(P,P+w);else{C=C.i;var B=P;w=P+w,w=B===w?Dt():Y?C.slice(B,w):new Uint8Array(C.subarray(B,w))}w=w.length==0?Lt():new Nt(w,Qt)}(P=v.R)?P.push(w):v.R=[w]}}}return s}function lo(s,l,h){for(var v=h.length,w=v%2==1,P=w?1:0;P<v;P+=2)(0,h[P+1])(l,s,h[P]);ui(s,l,w?h[0]:void 0)}function ji(s,l){return{U:s,W:l}}var an=ji(function(s,l,h){if(s.i!==5)return!1;s=s.h;var v=s.i,w=s.h,P=v[w],C=v[w+1],B=v[w+2];return v=v[w+3],Gt(s,s.h+4),C=(P<<0|C<<8|B<<16|v<<24)>>>0,s=2*(C>>31)+1,P=C>>>23&255,C&=8388607,St(l,h,P==255?C?NaN:1/0*s:P==0?s*Math.pow(2,-149)*C:s*Math.pow(2,P-150)*(C+Math.pow(2,23))),!0},function(s,l,h){if(l=jt(l,h),l!=null){wt(s.h,8*h+5),s=s.h;var v=+l;v===0?0<1/v?ne=Et=0:(Et=0,ne=2147483648):isNaN(v)?(Et=0,ne=2147483647):(v=(h=0>v?-2147483648:0)?-v:v,34028234663852886e22<v?(Et=0,ne=(h|2139095040)>>>0):11754943508222875e-54>v?(v=Math.round(v/Math.pow(2,-149)),Et=0,ne=(h|v)>>>0):(l=Math.floor(Math.log(v)/Math.LN2),v*=Math.pow(2,-l),v=Math.round(8388608*v),16777216<=v&&++l,Et=0,ne=(h|l+127<<23|v&8388607)>>>0)),h=ne,s.h.push(h>>>0&255),s.h.push(h>>>8&255),s.h.push(h>>>16&255),s.h.push(h>>>24&255)}}),kl=ji(function(s,l,h){if(s.i!==0)return!1;var v=s.h,w=0,P=s=0,C=v.i,B=v.h;do{var j=C[B++];w|=(j&127)<<P,P+=7}while(32>P&&j&128);for(32<P&&(s|=(j&127)>>4),P=3;32>P&&j&128;P+=7)j=C[B++],s|=(j&127)<<P;if(Gt(v,B),128>j)v=w>>>0,j=s>>>0,(s=j&2147483648)&&(v=~v+1>>>0,j=~j>>>0,v==0&&(j=j+1>>>0)),v=4294967296*j+(v>>>0);else throw ct();return St(l,h,s?-v:v),!0},function(s,l,h){l=pt(l,h),l!=null&&(typeof l=="string"&&b(l),l!=null&&(wt(s.h,8*h),typeof l=="number"?(s=s.h,Vt(l),Ft(s,ne,Et)):(h=b(l),Ft(s.h,h.i,h.h))))}),Wl=ji(function(s,l,h){return s.i!==0?!1:(St(l,h,ft(s.h)),!0)},function(s,l,h){if(l=pt(l,h),l!=null&&l!=null)if(wt(s.h,8*h),s=s.h,h=l,0<=h)wt(s,h);else{for(l=0;9>l;l++)s.h.push(h&127|128),h>>=7;s.h.push(1)}}),co=ji(function(s,l,h){if(s.i!==2)return!1;var v=ft(s.h)>>>0;s=s.h;var w=F(s,v);if(s=s.i,It){var P=s,C;(C=yt)||(C=yt=new TextDecoder("utf-8",{fatal:!0})),s=w+v,P=w===0&&s===P.length?P:P.subarray(w,s);try{var B=C.decode(P)}catch(Bt){if(_t===void 0){try{C.decode(new Uint8Array([128]))}catch{}try{C.decode(new Uint8Array([97])),_t=!0}catch{_t=!1}}throw!_t&&(yt=void 0),Bt}}else{B=w,v=B+v,w=[];for(var j=null,ot,dt;B<v;)ot=s[B++],128>ot?w.push(ot):224>ot?B>=v?st():(dt=s[B++],194>ot||(dt&192)!==128?(B--,st()):w.push((ot&31)<<6|dt&63)):240>ot?B>=v-1?st():(dt=s[B++],(dt&192)!==128||ot===224&&160>dt||ot===237&&160<=dt||((P=s[B++])&192)!==128?(B--,st()):w.push((ot&15)<<12|(dt&63)<<6|P&63)):244>=ot?B>=v-2?st():(dt=s[B++],(dt&192)!==128||(ot<<28)+(dt-144)>>30||((P=s[B++])&192)!==128||((C=s[B++])&192)!==128?(B--,st()):(ot=(ot&7)<<18|(dt&63)<<12|(P&63)<<6|C&63,ot-=65536,w.push((ot>>10&1023)+55296,(ot&1023)+56320))):st(),8192<=w.length&&(j=bt(j,w),w.length=0);B=bt(j,w)}return St(l,h,B),!0},function(s,l,h){if(l=pt(l,h),l!=null){var v=!1;if(v=v===void 0?!1:v,lt){if(v&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(l))throw Error("Found an unpaired surrogate");l=(Yt||(Yt=new TextEncoder)).encode(l)}else{for(var w=0,P=new Uint8Array(3*l.length),C=0;C<l.length;C++){var B=l.charCodeAt(C);if(128>B)P[w++]=B;else{if(2048>B)P[w++]=B>>6|192;else{if(55296<=B&&57343>=B){if(56319>=B&&C<l.length){var j=l.charCodeAt(++C);if(56320<=j&&57343>=j){B=1024*(B-55296)+j-56320+65536,P[w++]=B>>18|240,P[w++]=B>>12&63|128,P[w++]=B>>6&63|128,P[w++]=B&63|128;continue}else C--}if(v)throw Error("Found an unpaired surrogate");B=65533}P[w++]=B>>12|224,P[w++]=B>>6&63|128}P[w++]=B&63|128}}l=w===P.length?P:P.subarray(0,w)}wt(s.h,8*h+2),wt(s.h,l.length),ye(s,s.h.end()),ye(s,l)}}),uo=ji(function(s,l,h,v,w){if(s.i!==2)return!1;l=Oe(l,h,v),h=s.h.j,v=ft(s.h)>>>0;var P=s.h.h+v,C=P-h;if(0>=C&&(s.h.j=P,w(l,s,void 0,void 0,void 0),C=P-s.h.h),C)throw Error("Message parsing ended unexpectedly. Expected to read "+(v+" bytes, instead read "+(v-C)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return s.h.h=P,s.h.j=h,!0},function(s,l,h,v,w){if(l=Ht(l,v,h),l!=null)for(v=0;v<l.length;v++){var P=s;wt(P.h,8*h+2);var C=P.h.end();ye(P,C),C.push(P.i),P=C,w(l[v],s),C=s;var B=P.pop();for(B=C.i+C.h.length()-B;127<B;)P.push(B&127|128),B>>>=7,C.i++;P.push(B),C.i++}});function es(s){return function(l,h){t:{if(Te.length){var v=Te.pop();v.setOptions(h),me(v.h,l,h),l=v}else l=new ae(l,h);try{var w=ts(s),P=ao(new w.P,l,w);break t}finally{w=l.h,w.i=null,w.m=!1,w.l=0,w.j=0,w.h=0,w.S=!1,l.l=-1,l.i=-1,100>Te.length&&Te.push(l)}P=void 0}return P}}function ns(s){return function(){var l=new ue;lo(this,l,Qr(s)),ye(l,l.h.end());for(var h=new Uint8Array(l.i),v=l.j,w=v.length,P=0,C=0;C<w;C++){var B=v[C];h.set(B,P),P+=B.length}return l.j=[h],h}}function fi(s){Pe.call(this,s)}m(fi,Pe);var ho=[fi,1,Wl,2,an,3,co,4,co];fi.prototype.l=ns(ho);function is(s){Pe.call(this,s,-1,Xl)}m(is,Pe),is.prototype.addClassification=function(s,l){return Oe(this,1,fi,s,l),this};var Xl=[1],fo=es([is,1,uo,ho]);function di(s){Pe.call(this,s)}m(di,Pe);var po=[di,1,an,2,an,3,an,4,an,5,an];di.prototype.l=ns(po);function mo(s){Pe.call(this,s,-1,jl)}m(mo,Pe);var jl=[1],go=es([mo,1,uo,po]);function ur(s){Pe.call(this,s)}m(ur,Pe);var _o=[ur,1,an,2,an,3,an,4,an,5,an,6,kl],ql=es(_o);ur.prototype.l=ns(_o);function vo(s,l,h){if(h=s.createShader(h===0?s.VERTEX_SHADER:s.FRAGMENT_SHADER),s.shaderSource(h,l),s.compileShader(h),!s.getShaderParameter(h,s.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+s.getShaderInfoLog(h));return h}function xo(s){return Ht(s,fi,1).map(function(l){var h=pt(l,1);return{index:h??0,score:Ae(l,2),label:pt(l,3)!=null?Ee(pt(l,3),""):void 0,displayName:pt(l,4)!=null?Ee(pt(l,4),""):void 0}})}function Mo(s){return{x:Ae(s,1),y:Ae(s,2),z:Ae(s,3),visibility:jt(s,4)!=null?Ae(s,4):void 0}}function So(s){return s.map(function(l){return Ht(go(l),di,1).map(Mo)})}function rs(s,l){this.i=s,this.h=l,this.m=0}function Eo(s,l,h){return Yl(s,l),typeof s.h.canvas.transferToImageBitmap=="function"?Promise.resolve(s.h.canvas.transferToImageBitmap()):h?Promise.resolve(s.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(s.h.canvas):(s.j===void 0&&(s.j=document.createElement("canvas")),new Promise(function(v){s.j.height=s.h.canvas.height,s.j.width=s.h.canvas.width,s.j.getContext("2d",{}).drawImage(s.h.canvas,0,0,s.h.canvas.width,s.h.canvas.height),v(s.j)}))}function Yl(s,l){var h=s.h;if(s.s===void 0){var v=vo(h,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),w=vo(h,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),P=h.createProgram();if(h.attachShader(P,v),h.attachShader(P,w),h.linkProgram(P),!h.getProgramParameter(P,h.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+h.getProgramInfoLog(P));v=s.s=P,h.useProgram(v),w=h.getUniformLocation(v,"sampler0"),s.l={O:h.getAttribLocation(v,"aVertex"),N:h.getAttribLocation(v,"aTex"),xa:w},s.v=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,s.v),h.enableVertexAttribArray(s.l.O),h.vertexAttribPointer(s.l.O,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),s.u=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,s.u),h.enableVertexAttribArray(s.l.N),h.vertexAttribPointer(s.l.N,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),h.uniform1i(w,0)}v=s.l,h.useProgram(s.s),h.canvas.width=l.width,h.canvas.height=l.height,h.viewport(0,0,l.width,l.height),h.activeTexture(h.TEXTURE0),s.i.bindTexture2d(l.glName),h.enableVertexAttribArray(v.O),h.bindBuffer(h.ARRAY_BUFFER,s.v),h.vertexAttribPointer(v.O,2,h.FLOAT,!1,0,0),h.enableVertexAttribArray(v.N),h.bindBuffer(h.ARRAY_BUFFER,s.u),h.vertexAttribPointer(v.N,2,h.FLOAT,!1,0,0),h.bindFramebuffer(h.DRAW_FRAMEBUFFER?h.DRAW_FRAMEBUFFER:h.FRAMEBUFFER,null),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.colorMask(!0,!0,!0,!0),h.drawArrays(h.TRIANGLE_FAN,0,4),h.disableVertexAttribArray(v.O),h.disableVertexAttribArray(v.N),h.bindBuffer(h.ARRAY_BUFFER,null),s.i.bindTexture2d(0)}function Kl(s){this.h=s}var Zl=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function $l(s,l){return l+s}function yo(s,l){window[s]=l}function Jl(s){var l=document.createElement("script");return l.setAttribute("src",s),l.setAttribute("crossorigin","anonymous"),new Promise(function(h){l.addEventListener("load",function(){h()},!1),l.addEventListener("error",function(){h()},!1),document.body.appendChild(l)})}function Ql(){return U(function(s){switch(s.h){case 1:return s.s=2,L(s,WebAssembly.instantiate(Zl),4);case 4:s.h=3,s.s=0;break;case 2:return s.s=0,s.l=null,s.return(!1);case 3:return s.return(!0)}})}function ss(s){if(this.h=s,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=s&&s.locateFile||$l,typeof window=="object")var l=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")l=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=l,s.options){l=a(Object.keys(s.options));for(var h=l.next();!h.done;h=l.next()){h=h.value;var v=s.options[h].default;v!==void 0&&(this.l[h]=typeof v=="function"?v():v)}}}i=ss.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function tc(s){var l,h,v,w,P,C,B,j,ot,dt,Bt;return U(function(Rt){switch(Rt.h){case 1:return s.ga?(l=s.h.files===void 0?[]:typeof s.h.files=="function"?s.h.files(s.l):s.h.files,L(Rt,Ql(),2)):Rt.return();case 2:if(h=Rt.i,typeof window=="object")return yo("createMediapipeSolutionsWasm",{locateFile:s.locateFile}),yo("createMediapipeSolutionsPackedAssets",{locateFile:s.locateFile}),C=l.filter(function(Mt){return Mt.data!==void 0}),B=l.filter(function(Mt){return Mt.data===void 0}),j=Promise.all(C.map(function(Mt){var zt=hr(s,Mt.url);if(Mt.path!==void 0){var te=Mt.path;zt=zt.then(function(ve){return s.overrideFile(te,ve),Promise.resolve(ve)})}return zt})),ot=Promise.all(B.map(function(Mt){return Mt.simd===void 0||Mt.simd&&h||!Mt.simd&&!h?Jl(s.locateFile(Mt.url,s.ha)):Promise.resolve()})).then(function(){var Mt,zt,te;return U(function(ve){if(ve.h==1)return Mt=window.createMediapipeSolutionsWasm,zt=window.createMediapipeSolutionsPackedAssets,te=s,L(ve,Mt(zt),2);te.i=ve.i,ve.h=0})}),dt=function(){return U(function(Mt){return s.h.graph&&s.h.graph.url?Mt=L(Mt,hr(s,s.h.graph.url),0):(Mt.h=0,Mt=void 0),Mt})}(),L(Rt,Promise.all([ot,j,dt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return v=l.filter(function(Mt){return Mt.simd===void 0||Mt.simd&&h||!Mt.simd&&!h}).map(function(Mt){return s.locateFile(Mt.url,s.ha)}),importScripts.apply(null,u(v)),w=s,L(Rt,createMediapipeSolutionsWasm(Module),6);case 6:w.i=Rt.i,s.m=new OffscreenCanvas(1,1),s.i.canvas=s.m,P=s.i.GL.createContext(s.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),s.i.GL.makeContextCurrent(P),Rt.h=4;break;case 7:if(s.m=document.createElement("canvas"),Bt=s.m.getContext("webgl2",{}),!Bt&&(Bt=s.m.getContext("webgl",{}),!Bt))return alert("Failed to create WebGL canvas context when passing video frame."),Rt.return();s.K=Bt,s.i.canvas=s.m,s.i.createContext(s.m,!0,!0,{});case 4:s.j=new s.i.SolutionWasm,s.ga=!1,Rt.h=0}})}function ec(s){var l,h,v,w,P,C,B,j;return U(function(ot){if(ot.h==1){if(s.h.graph&&s.h.graph.url&&s.fa===s.h.graph.url)return ot.return();if(s.u=!0,!s.h.graph||!s.h.graph.url){ot.h=2;return}return s.fa=s.h.graph.url,L(ot,hr(s,s.h.graph.url),3)}for(ot.h!=2&&(l=ot.i,s.j.loadGraph(l)),h=a(Object.keys(s.D)),v=h.next();!v.done;v=h.next())w=v.value,s.j.overrideFile(w,s.D[w]);if(s.D={},s.h.listeners)for(P=a(s.h.listeners),C=P.next();!C.done;C=P.next())B=C.value,sc(s,B);j=s.l,s.l={},s.setOptions(j),ot.h=0})}i.reset=function(){var s=this;return U(function(l){s.j&&(s.j.reset(),s.s={},s.v={}),l.h=0})},i.setOptions=function(s,l){var h=this;if(l=l||this.h.options){for(var v=[],w=[],P={},C=a(Object.keys(s)),B=C.next();!B.done;P={X:P.X,Y:P.Y},B=C.next())if(B=B.value,!(B in this.l&&this.l[B]===s[B])){this.l[B]=s[B];var j=l[B];j!==void 0&&(j.onChange&&(P.X=j.onChange,P.Y=s[B],v.push(function(ot){return function(){var dt;return U(function(Bt){if(Bt.h==1)return L(Bt,ot.X(ot.Y),2);dt=Bt.i,dt===!0&&(h.u=!0),Bt.h=0})}}(P))),j.graphOptionXref&&(B=Object.assign({},{calculatorName:"",calculatorIndex:0},j.graphOptionXref,{valueNumber:j.type===1?s[B]:0,valueBoolean:j.type===0?s[B]:!1,valueString:j.type===2?s[B]:""}),w.push(B)))}(v.length!==0||w.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(w),this.F=(this.F===void 0?[]:this.F).concat(v))}};function nc(s){var l,h,v,w,P,C,B;return U(function(j){switch(j.h){case 1:if(!s.u)return j.return();if(!s.F){j.h=2;break}l=a(s.F),h=l.next();case 3:if(h.done){j.h=5;break}return v=h.value,L(j,v(),4);case 4:h=l.next(),j.h=3;break;case 5:s.F=void 0;case 2:if(s.H){for(w=new s.i.GraphOptionChangeRequestList,P=a(s.H),C=P.next();!C.done;C=P.next())B=C.value,w.push_back(B);s.j.changeOptions(w),w.delete(),s.H=void 0}s.u=!1,j.h=0}})}i.initialize=function(){var s=this;return U(function(l){return l.h==1?L(l,tc(s),2):l.h!=3?L(l,ec(s),3):L(l,nc(s),0)})};function hr(s,l){var h,v;return U(function(w){return l in s.L?w.return(s.L[l]):(h=s.locateFile(l,""),v=fetch(h).then(function(P){return P.arrayBuffer()}),s.L[l]=v,w.return(v))})}i.overrideFile=function(s,l){this.j?this.j.overrideFile(s,l):this.D[s]=l},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(s,l){var h=this,v,w,P,C,B,j,ot,dt,Bt;return U(function(Rt){switch(Rt.h){case 1:return h.h.inputs?(v=1e3*(l??performance.now()),L(Rt,h.I,2)):Rt.return();case 2:return L(Rt,h.initialize(),3);case 3:for(w=new h.i.PacketDataList,P=a(Object.keys(s)),C=P.next();!C.done;C=P.next())if(B=C.value,j=h.h.inputs[B]){t:{var Mt=s[B];switch(j.type){case"video":var zt=h.s[j.stream];if(zt||(zt=new rs(h.i,h.K),h.s[j.stream]=zt),zt.m===0&&(zt.m=zt.i.createTexture()),typeof HTMLVideoElement<"u"&&Mt instanceof HTMLVideoElement)var te=Mt.videoWidth,ve=Mt.videoHeight;else typeof HTMLImageElement<"u"&&Mt instanceof HTMLImageElement?(te=Mt.naturalWidth,ve=Mt.naturalHeight):(te=Mt.width,ve=Mt.height);ve={glName:zt.m,width:te,height:ve},te=zt.h,te.canvas.width=ve.width,te.canvas.height=ve.height,te.activeTexture(te.TEXTURE0),zt.i.bindTexture2d(zt.m),te.texImage2D(te.TEXTURE_2D,0,te.RGBA,te.RGBA,te.UNSIGNED_BYTE,Mt),zt.i.bindTexture2d(0),zt=ve;break t;case"detections":for(zt=h.s[j.stream],zt||(zt=new Kl(h.i),h.s[j.stream]=zt),zt.data||(zt.data=new zt.h.DetectionListData),zt.data.reset(Mt.length),ve=0;ve<Mt.length;++ve){te=Mt[ve];var _e=zt.data,De=_e.setBoundingBox,tn=ve,We=te.la,se=new ur;if(re(se,1,We.ra),re(se,2,We.sa),re(se,3,We.height),re(se,4,We.width),re(se,5,We.rotation),St(se,6,We.pa),We=se.l(),De.call(_e,tn,We),te.ea)for(_e=0;_e<te.ea.length;++_e){se=te.ea[_e],De=zt.data,tn=De.addNormalizedLandmark,We=ve,se=Object.assign({},se,{visibility:se.visibility?se.visibility:0});var Ie=new di;re(Ie,1,se.x),re(Ie,2,se.y),re(Ie,3,se.z),se.visibility&&re(Ie,4,se.visibility),se=Ie.l(),tn.call(De,We,se)}if(te.ba)for(_e=0;_e<te.ba.length;++_e)De=zt.data,tn=De.addClassification,We=ve,se=te.ba[_e],Ie=new fi,re(Ie,2,se.score),se.index&&St(Ie,1,se.index),se.label&&St(Ie,3,se.label),se.displayName&&St(Ie,4,se.displayName),se=Ie.l(),tn.call(De,We,se)}zt=zt.data;break t;default:zt={}}}switch(ot=zt,dt=j.stream,j.type){case"video":w.pushTexture2d(Object.assign({},ot,{stream:dt,timestamp:v}));break;case"detections":Bt=ot,Bt.stream=dt,Bt.timestamp=v,w.pushDetectionList(Bt);break;default:throw Error("Unknown input config type: '"+j.type+"'")}}return h.j.send(w),L(Rt,h.I,4);case 4:w.delete(),Rt.h=0}})};function ic(s,l,h){var v,w,P,C,B,j,ot,dt,Bt,Rt,Mt,zt,te,ve;return U(function(_e){switch(_e.h){case 1:if(!h)return _e.return(l);for(v={},w=0,P=a(Object.keys(h)),C=P.next();!C.done;C=P.next())B=C.value,j=h[B],typeof j!="string"&&j.type==="texture"&&l[j.stream]!==void 0&&++w;1<w&&(s.M=!1),ot=a(Object.keys(h)),C=ot.next();case 2:if(C.done){_e.h=4;break}if(dt=C.value,Bt=h[dt],typeof Bt=="string")return te=v,ve=dt,L(_e,rc(s,dt,l[Bt]),14);if(Rt=l[Bt.stream],Bt.type==="detection_list"){if(Rt){for(var De=Rt.getRectList(),tn=Rt.getLandmarksList(),We=Rt.getClassificationsList(),se=[],Ie=0;Ie<De.size();++Ie){var Ln=ql(De.get(Ie)),oc=Ae(Ln,1),ac=Ae(Ln,2),lc=Ae(Ln,3),cc=Ae(Ln,4),uc=Ae(Ln,5,0),fr=void 0;fr=fr===void 0?0:fr,Ln={la:{ra:oc,sa:ac,height:lc,width:cc,rotation:uc,pa:Ee(pt(Ln,6),fr)},ea:Ht(go(tn.get(Ie)),di,1).map(Mo),ba:xo(fo(We.get(Ie)))},se.push(Ln)}De=se}else De=[];v[dt]=De,_e.h=7;break}if(Bt.type==="proto_list"){if(Rt){for(De=Array(Rt.size()),tn=0;tn<Rt.size();tn++)De[tn]=Rt.get(tn);Rt.delete()}else De=[];v[dt]=De,_e.h=7;break}if(Rt===void 0){_e.h=3;break}if(Bt.type==="float_list"){v[dt]=Rt,_e.h=7;break}if(Bt.type==="proto"){v[dt]=Rt,_e.h=7;break}if(Bt.type!=="texture")throw Error("Unknown output config type: '"+Bt.type+"'");return Mt=s.v[dt],Mt||(Mt=new rs(s.i,s.K),s.v[dt]=Mt),L(_e,Eo(Mt,Rt,s.M),13);case 13:zt=_e.i,v[dt]=zt;case 7:Bt.transform&&v[dt]&&(v[dt]=Bt.transform(v[dt])),_e.h=3;break;case 14:te[ve]=_e.i;case 3:C=ot.next(),_e.h=2;break;case 4:return _e.return(v)}})}function rc(s,l,h){var v;return U(function(w){return typeof h=="number"||h instanceof Uint8Array||h instanceof s.i.Uint8BlobList?w.return(h):h instanceof s.i.Texture2dDataOut?(v=s.v[l],v||(v=new rs(s.i,s.K),s.v[l]=v),w.return(Eo(v,h,s.M))):w.return(void 0)})}function sc(s,l){for(var h=l.name||"$",v=[].concat(u(l.wants)),w=new s.i.StringList,P=a(l.wants),C=P.next();!C.done;C=P.next())w.push_back(C.value);P=s.i.PacketListener.implement({onResults:function(B){for(var j={},ot=0;ot<l.wants.length;++ot)j[v[ot]]=B.get(ot);var dt=s.listeners[h];dt&&(s.I=ic(s,j,l.outs).then(function(Bt){Bt=dt(Bt);for(var Rt=0;Rt<l.wants.length;++Rt){var Mt=j[v[Rt]];typeof Mt=="object"&&Mt.hasOwnProperty&&Mt.hasOwnProperty("delete")&&Mt.delete()}Bt&&(s.I=Bt)}))}}),s.j.attachMultiListener(w,P),w.delete()}i.onResults=function(s,l){this.listeners[l||"$"]=s},V("Solution",ss),V("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function To(s){return s===void 0&&(s=0),s===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Ao(s){var l=this;s=s||{},this.h=new ss({locateFile:s.locateFile,files:function(h){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:To(h.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:So},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:So},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(h){return h.map(function(v){return xo(fo(v))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(h){var v,w,P;return U(function(C){return C.h==1?(v=To(h),w="third_party/mediapipe/modules/hand_landmark/"+v,L(C,hr(l.h,v),2)):(P=C.i,l.h.overrideFile(w,P),C.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=Ao.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(s){this.h.onResults(s)},i.initialize=function(){var s=this;return U(function(l){return L(l,s.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(s){var l=this;return U(function(h){return L(h,l.h.send(s),0)})},i.setOptions=function(s){this.h.setOptions(s)},V("Hands",Ao),V("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),V("VERSION","0.4.1675469240")}).call(Ii);var ym={};(function(){function i(x){var U=0;return function(){return U<x.length?{done:!1,value:x[U++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(x,U,k){return x==Array.prototype||x==Object.prototype||(x[U]=k.value),x};function e(x){x=[typeof globalThis=="object"&&globalThis,x,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ii=="object"&&Ii];for(var U=0;U<x.length;++U){var k=x[U];if(k&&k.Math==Math)return k}throw Error("Cannot find global object")}var n=e(this);function r(x,U){if(U)t:{var k=n;x=x.split(".");for(var tt=0;tt<x.length-1;tt++){var N=x[tt];if(!(N in k))break t;k=k[N]}x=x[x.length-1],tt=k[x],U=U(tt),U!=tt&&U!=null&&t(k,x,{configurable:!0,writable:!0,value:U})}}r("Symbol",function(x){function U(V){if(this instanceof U)throw new TypeError("Symbol is not a constructor");return new k(tt+(V||"")+"_"+N++,V)}function k(V,O){this.g=V,t(this,"description",{configurable:!0,writable:!0,value:O})}if(x)return x;k.prototype.toString=function(){return this.g};var tt="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",N=0;return U}),r("Symbol.iterator",function(x){if(x)return x;x=Symbol("Symbol.iterator");for(var U="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),k=0;k<U.length;k++){var tt=n[U[k]];typeof tt=="function"&&typeof tt.prototype[x]!="function"&&t(tt.prototype,x,{configurable:!0,writable:!0,value:function(){return o(i(this))}})}return x});function o(x){return x={next:x},x[Symbol.iterator]=function(){return this},x}function c(x){var U=typeof Symbol<"u"&&Symbol.iterator&&x[Symbol.iterator];return U?U.call(x):{next:i(x)}}function a(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function u(x){if(x.i)throw new TypeError("Generator is already running");x.i=!0}a.prototype.l=function(x){this.o=x};function f(x,U){x.h={F:U,G:!0},x.j=x.m}a.prototype.return=function(x){this.h={return:x},this.j=this.m};function p(x){this.g=new a,this.h=x}function g(x,U){u(x.g);var k=x.g.g;return k?_(x,"return"in k?k.return:function(tt){return{value:tt,done:!0}},U,x.g.return):(x.g.return(U),M(x))}function _(x,U,k,tt){try{var N=U.call(x.g.g,k);if(!(N instanceof Object))throw new TypeError("Iterator result "+N+" is not an object");if(!N.done)return x.g.i=!1,N;var V=N.value}catch(O){return x.g.g=null,f(x.g,O),M(x)}return x.g.g=null,tt.call(x.g,V),M(x)}function M(x){for(;x.g.j;)try{var U=x.h(x.g);if(U)return x.g.i=!1,{value:U.value,done:!1}}catch(k){x.g.o=void 0,f(x.g,k)}if(x.g.i=!1,x.g.h){if(U=x.g.h,x.g.h=null,U.G)throw U.F;return{value:U.return,done:!0}}return{value:void 0,done:!0}}function y(x){this.next=function(U){return u(x.g),x.g.g?U=_(x,x.g.g.next,U,x.g.l):(x.g.l(U),U=M(x)),U},this.throw=function(U){return u(x.g),x.g.g?U=_(x,x.g.g.throw,U,x.g.l):(f(x.g,U),U=M(x)),U},this.return=function(U){return g(x,U)},this[Symbol.iterator]=function(){return this}}function E(x){function U(tt){return x.next(tt)}function k(tt){return x.throw(tt)}return new Promise(function(tt,N){function V(O){O.done?tt(O.value):Promise.resolve(O.value).then(U,k).then(V,N)}V(x.next())})}r("Promise",function(x){function U(O){this.h=0,this.i=void 0,this.g=[],this.o=!1;var X=this.j();try{O(X.resolve,X.reject)}catch($){X.reject($)}}function k(){this.g=null}function tt(O){return O instanceof U?O:new U(function(X){X(O)})}if(x)return x;k.prototype.h=function(O){if(this.g==null){this.g=[];var X=this;this.i(function(){X.l()})}this.g.push(O)};var N=n.setTimeout;k.prototype.i=function(O){N(O,0)},k.prototype.l=function(){for(;this.g&&this.g.length;){var O=this.g;this.g=[];for(var X=0;X<O.length;++X){var $=O[X];O[X]=null;try{$()}catch(et){this.j(et)}}}this.g=null},k.prototype.j=function(O){this.i(function(){throw O})},U.prototype.j=function(){function O(et){return function(nt){$||($=!0,et.call(X,nt))}}var X=this,$=!1;return{resolve:O(this.A),reject:O(this.l)}},U.prototype.A=function(O){if(O===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(O instanceof U)this.C(O);else{t:switch(typeof O){case"object":var X=O!=null;break t;case"function":X=!0;break t;default:X=!1}X?this.v(O):this.m(O)}},U.prototype.v=function(O){var X=void 0;try{X=O.then}catch($){this.l($);return}typeof X=="function"?this.D(X,O):this.m(O)},U.prototype.l=function(O){this.u(2,O)},U.prototype.m=function(O){this.u(1,O)},U.prototype.u=function(O,X){if(this.h!=0)throw Error("Cannot settle("+O+", "+X+"): Promise already settled in state"+this.h);this.h=O,this.i=X,this.h===2&&this.B(),this.H()},U.prototype.B=function(){var O=this;N(function(){if(O.I()){var X=n.console;typeof X<"u"&&X.error(O.i)}},1)},U.prototype.I=function(){if(this.o)return!1;var O=n.CustomEvent,X=n.Event,$=n.dispatchEvent;return typeof $>"u"?!0:(typeof O=="function"?O=new O("unhandledrejection",{cancelable:!0}):typeof X=="function"?O=new X("unhandledrejection",{cancelable:!0}):(O=n.document.createEvent("CustomEvent"),O.initCustomEvent("unhandledrejection",!1,!0,O)),O.promise=this,O.reason=this.i,$(O))},U.prototype.H=function(){if(this.g!=null){for(var O=0;O<this.g.length;++O)V.h(this.g[O]);this.g=null}};var V=new k;return U.prototype.C=function(O){var X=this.j();O.s(X.resolve,X.reject)},U.prototype.D=function(O,X){var $=this.j();try{O.call(X,$.resolve,$.reject)}catch(et){$.reject(et)}},U.prototype.then=function(O,X){function $(ut,Q){return typeof ut=="function"?function(rt){try{et(ut(rt))}catch(xt){nt(xt)}}:Q}var et,nt,ht=new U(function(ut,Q){et=ut,nt=Q});return this.s($(O,et),$(X,nt)),ht},U.prototype.catch=function(O){return this.then(void 0,O)},U.prototype.s=function(O,X){function $(){switch(et.h){case 1:O(et.i);break;case 2:X(et.i);break;default:throw Error("Unexpected state: "+et.h)}}var et=this;this.g==null?V.h($):this.g.push($),this.o=!0},U.resolve=tt,U.reject=function(O){return new U(function(X,$){$(O)})},U.race=function(O){return new U(function(X,$){for(var et=c(O),nt=et.next();!nt.done;nt=et.next())tt(nt.value).s(X,$)})},U.all=function(O){var X=c(O),$=X.next();return $.done?tt([]):new U(function(et,nt){function ht(rt){return function(xt){ut[rt]=xt,Q--,Q==0&&et(ut)}}var ut=[],Q=0;do ut.push(void 0),Q++,tt($.value).s(ht(ut.length-1),nt),$=X.next();while(!$.done)})},U});var m=typeof Object.assign=="function"?Object.assign:function(x,U){for(var k=1;k<arguments.length;k++){var tt=arguments[k];if(tt)for(var N in tt)Object.prototype.hasOwnProperty.call(tt,N)&&(x[N]=tt[N])}return x};r("Object.assign",function(x){return x||m});var d=this||self,D={facingMode:"user",width:640,height:480};function R(x,U){this.video=x,this.i=0,this.h=Object.assign(Object.assign({},D),U)}R.prototype.stop=function(){var x=this,U,k,tt,N;return E(new y(new p(function(V){if(x.g){for(U=x.g.getTracks(),k=c(U),tt=k.next();!tt.done;tt=k.next())N=tt.value,N.stop();x.g=void 0}V.j=0})))},R.prototype.start=function(){var x=this,U;return E(new y(new p(function(k){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),U=x.h,k.return(navigator.mediaDevices.getUserMedia({video:{facingMode:U.facingMode,width:U.width,height:U.height}}).then(function(tt){H(x,tt)}).catch(function(tt){var N="Failed to acquire camera feed: "+tt;throw console.error(N),alert(N),tt}))})))};function L(x){window.requestAnimationFrame(function(){z(x)})}function H(x,U){x.g=U,x.video.srcObject=U,x.video.onloadedmetadata=function(){x.video.play(),L(x)}}function z(x){var U=null;x.video.paused||x.video.currentTime===x.i||(x.i=x.video.currentTime,U=x.h.onFrame()),U?U.then(function(){L(x)}):L(x)}var I=["Camera"],it=d;I[0]in it||typeof it.execScript>"u"||it.execScript("var "+I[0]);for(var A;I.length&&(A=I.shift());)I.length||R===void 0?it[A]&&it[A]!==Object.prototype[A]?it=it[A]:it=it[A]={}:it[A]=R}).call(Ii);const Rn={particleCount:5e3,particleSize:.05,defaultColor:16777215,cameraZ:5},pn={template:"heart",color:Rn.defaultColor,handDistance:0,currentScale:1},Pl=new Mm,jr=new rn(75,window.innerWidth/window.innerHeight,.1,1e3);jr.position.z=Rn.cameraZ;const Jr=new Rl({canvas:document.getElementById("output-canvas"),alpha:!0});Jr.setSize(window.innerWidth,window.innerHeight);Jr.setPixelRatio(window.devicePixelRatio);const er=new Cn,Tm=new Float32Array(Rn.particleCount*3),Am=new Float32Array(Rn.particleCount*3);er.setAttribute("position",new on(Tm,3));er.setAttribute("color",new on(Am,3));const bm=new Cl({size:Rn.particleSize,vertexColors:!0,blending:Os,depthWrite:!1,transparent:!0}),Ks=new Sm(er,bm);Pl.add(Ks);function wm(i){const t=16*Math.pow(Math.sin(i),3),e=13*Math.cos(i)-5*Math.cos(2*i)-2*Math.cos(3*i)-Math.cos(4*i);return new W(t*.1,e*.1,0)}function Rm(i,t=5){const e=Math.cos(t*i),n=e*Math.cos(i),r=e*Math.sin(i);return new W(n*2,r*2,0)}function Cm(){if(Math.random()>.3){const i=Math.random(),t=Math.random(),e=2*Math.PI*i,n=Math.acos(2*t-1),r=1,o=r*Math.sin(n)*Math.cos(e),c=r*Math.sin(n)*Math.sin(e),a=r*Math.cos(n);return new W(o,c,a)}else{const i=Math.random()*Math.PI*2,t=1.5+Math.random()*1,e=t*Math.cos(i),n=t*Math.sin(i);return new W(e,.1*(Math.random()-.5),n)}}function Pm(){const i=Math.random();if(i<.4){const t=Math.random(),e=Math.random(),n=2*Math.PI*t,r=Math.acos(2*e-1),o=1;return new W(o*Math.sin(r)*Math.cos(n),o*Math.sin(r)*Math.sin(n)-1,o*Math.cos(r))}else if(i<.7){const t=Math.random(),e=Math.random(),n=2*Math.PI*t,r=Math.acos(2*e-1),o=.8;return new W(o*Math.sin(r)*Math.cos(n),o*Math.sin(r)*Math.sin(n)+.5,o*Math.cos(r))}else{const t=Math.random(),e=Math.random(),n=2*Math.PI*t,r=Math.acos(2*e-1),o=.5;return new W(o*Math.sin(r)*Math.cos(n),o*Math.sin(r)*Math.sin(n)+1.6,o*Math.cos(r))}}function Lm(){const i=Math.random(),t=Math.random(),e=2*Math.PI*i,n=Math.acos(2*t-1),r=Math.random()*3;return new W(r*Math.sin(n)*Math.cos(e),r*Math.sin(n)*Math.sin(e),r*Math.cos(n))}const Ni=new Float32Array(Rn.particleCount*3);function Ll(){for(let i=0;i<Rn.particleCount;i++){let t;switch(pn.template){case"heart":t=wm(Math.random()*Math.PI*2),t.z+=(Math.random()-.5)*.5;break;case"flower":t=Rm(Math.random()*Math.PI*2),t.z+=(Math.random()-.5)*.5;break;case"saturn":t=Cm(),t.applyAxisAngle(new W(1,0,1).normalize(),.5);break;case"buddha":t=Pm();break;case"fireworks":t=Lm();break;default:t=new W}Ni[i*3]=t.x,Ni[i*3+1]=t.y,Ni[i*3+2]=t.z}}Ll();function Ul(){requestAnimationFrame(Ul);const i=.5+pn.handDistance*2.5;pn.currentScale+=(i-pn.currentScale)*.1,Ks.scale.setScalar(pn.currentScale),Ks.rotation.y+=.002;const t=er.attributes.position,e=t.array;for(let o=0;o<Rn.particleCount;o++){const c=o*3,a=o*3+1,u=o*3+2;e[c]+=(Ni[c]-e[c])*.05,e[a]+=(Ni[a]-e[a])*.05,e[u]+=(Ni[u]-e[u])*.05}t.needsUpdate=!0;const n=new le(pn.color),r=er.attributes.color;for(let o=0;o<Rn.particleCount;o++)r.setXYZ(o,n.r,n.g,n.b);r.needsUpdate=!0,Jr.render(Pl,jr)}Ul();document.getElementById("template-select").addEventListener("change",i=>{pn.template=i.target.value,Ll()});document.getElementById("color-picker").addEventListener("input",i=>{pn.color=i.target.value});const qa=document.getElementById("input-video"),Br=document.getElementById("tracking-status"),Ya=document.getElementById("gesture-status"),eo=new Em.Hands({locateFile:i=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${i}`});eo.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5});eo.onResults(Um);function Um(i){if(i.multiHandLandmarks&&i.multiHandLandmarks.length>0)if(Br.textContent=`Tracking ${i.multiHandLandmarks.length} hand(s)`,Br.style.color="#4caf50",i.multiHandLandmarks.length===2){const t=i.multiHandLandmarks[0][9],e=i.multiHandLandmarks[1][9],n=t.x-e.x,r=t.y-e.y,o=Math.sqrt(n*n+r*r),c=Math.max(0,Math.min(1,(o-.1)*2));pn.handDistance=c,Ya.textContent=`Distance: ${o.toFixed(2)}`}else pn.handDistance=.2,Ya.textContent="One Hand";else Br.textContent="No hands detected",Br.style.color="#f44336",pn.handDistance=.2}const Dm=new ym.Camera(qa,{onFrame:async()=>{await eo.send({image:qa})},width:640,height:480});Dm.start();window.addEventListener("resize",()=>{jr.aspect=window.innerWidth/window.innerHeight,jr.updateProjectionMatrix(),Jr.setSize(window.innerWidth,window.innerHeight)});
