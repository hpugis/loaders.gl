(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{KnHi:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ut})),r.d(t,"renderToDOM",(function(){return lt}));var n,a=r("JX7q"),s=r("dI71"),i=r("q1tI"),o=r.n(i),c=r("i8i4"),u=r("iein"),l=r("OklE"),p=r("vOnD"),f=r("KQm4"),d=r("rePB"),m=r("o0o1"),h=r.n(m),_=(r("wcNg"),r("HaE+")),b=r("kD43"),E=r("VLYs");function x(e){return T.apply(this,arguments)}function T(){return(T=Object(_.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.modules||{}).basis){e.next=3;break}return e.abrupt("return",r.basis);case 3:return n=n||g(t),e.next=6,n;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=Object(_.a)(h.a.mark((function e(t){var r,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,n=null,e.t0=Promise,e.next=5,Object(b.a)("basis_transcoder.js","basis",t);case 5:return e.t1=e.sent,e.next=8,Object(b.a)("basis_transcoder.wasm","basis",t);case 8:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=12,e.t0.all.call(e.t0,e.t3);case 12:return a=e.sent,r=a[0],n=a[1],r=r||E.a.BASIS,e.next=18,y(r,n);case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){var r={};return t&&(r.wasmBinary=t),new Promise((function(t){e(r).then((function(e){var r=e.BasisFile;(0,e.initializeBasis)(),t({BasisFile:r})}))}))}var U=33776,w=33778,O=33779,A=37488,R=37490,D=37492,I=37493,P=37496,S=35840,C=35842,F=35841,L=35843,N=36196,B=37808,M=37809,j=37810,k=37811,G=37812,X=37813,z=37814,H=37815,V=37816,W=37817,Z=37818,K=37819,Y=37820,J=37821,q={etc1:{basisFormat:0,compressed:!0},etc2:{basisFormat:1,compressed:!0},bc1:{basisFormat:2,compressed:!0,format:U},bc3:{basisFormat:3,compressed:!0,format:O},bc4:{basisFormat:4,compressed:!0},bc5:{basisFormat:5,compressed:!0},"bc7-m6-opaque-only":{basisFormat:6,compressed:!0},"bc7-m5":{basisFormat:7,compressed:!0},"pvrtc1-4-rgb":{basisFormat:8,compressed:!0},"pvrtc1-4-rgba":{basisFormat:9,compressed:!0},"astc-4x4":{basisFormat:10,compressed:!0},"atc-rgb":{basisFormat:11,compressed:!0},"atc-rgba-interpolated-alpha":{basisFormat:12,compressed:!0},rgba32:{basisFormat:13,compressed:!1},rgb565:{basisFormat:14,compressed:!1},bgr565:{basisFormat:15,compressed:!1},rgba4444:{basisFormat:16,compressed:!1}};function Q(){return(Q=Object(_.a)(h.a.mark((function e(t,r){var n,a,s,i,o,c,u,l,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(r);case 2:if(n=e.sent,a=n.BasisFile,s=new a(new Uint8Array(t)),e.prev=5,s.startTranscoding()){e.next=8;break}return e.abrupt("return",null);case 8:for(i=s.getNumImages(),o=[],c=0;c<i;c++){for(u=s.getNumLevels(c),l=[],p=0;p<u;p++)l.push($(s,c,p,r));o.push(l)}return e.abrupt("return",o);case 12:return e.prev=12,s.close(),s.delete(),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[5,,12,16]])})))).apply(this,arguments)}function $(e,t,r,n){var a=e.getImageWidth(t,r),s=e.getImageHeight(t,r),i=e.getHasAlpha(),o=function(e,t){var r=e&&e.basis&&e.basis.format;return"object"==typeof r&&(r=t?r.alpha:r.noAlpha),r=r.toLowerCase(),q[r]}(n,i),c=o.compressed,u=o.format,l=o.basisFormat,p=e.getImageTranscodedSizeInBytes(t,r,l),f=new Uint8Array(p);return e.transcodeImage(f,t,r,l,0,0)?{width:a,height:s,data:f,compressed:c,hasAlpha:i,format:u}:null}function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re="undefined"!=typeof __VERSION__?__VERSION__:"latest",ne=te(te({},{id:"basis",name:"Basis",version:re,extensions:["basis"],mimeTypes:["application/octet-stream"],tests:["sB"],binary:!0,options:{basis:{format:"rgb565",libraryPath:"libs/",workerUrl:"https://unpkg.com/@loaders.gl/textures@"+re+"/dist/basis-loader.worker.js"}}}),{},{parse:function(e,t){return Q.apply(this,arguments)}}),ae=r("pkf7"),se=[171,75,84,88,32,50,48,187,13,10,26,10];var ie=r("P+ME");function oe(e,t){for(var r=new Array(t.mipMapLevels),n=t.width,a=t.height,s=0,i=0;i<t.mipMapLevels;++i){var o=t.sizeFunction(n,a);r[i]={compressed:!0,format:t.internalFormat,data:new Uint8Array(e.buffer,e.byteOffset+s,o),width:n,height:a,levelSize:o},n=Math.max(1,n>>1),a=Math.max(1,a>>1),s+=o}return r}var ce={MAGIC_NUMBER:542327876,HEADER_LENGTH:31,MAGIC_NUMBER_INDEX:0,HEADER_SIZE_INDEX:1,HEADER_FLAGS_INDEX:2,HEADER_HEIGHT_INDEX:3,HEADER_WIDTH_INDEX:4,MIPMAPCOUNT_INDEX:7,HEADER_PF_FLAGS_INDEX:20,HEADER_PF_FOURCC_INDEX:21,DDSD_MIPMAPCOUNT:131072,DDPF_FOURCC:4,PIXEL_FORMATS:{DXT1:U,DXT3:w,DXT5:O},SIZE_FUNCTIONS:{DXT1:le,DXT3:pe,DXT5:pe}};function ue(e){var t=new Int32Array(e,0,ce.HEADER_LENGTH),r=t[ce.HEADER_PF_FOURCC_INDEX];Object(ie.a)(Boolean(t[ce.HEADER_PF_FLAGS_INDEX]&ce.DDPF_FOURCC),"DDS: Unsupported format, must contain a FourCC code");var n,a=(n=r,String.fromCharCode(255&n,n>>8&255,n>>16&255,n>>24&255)),s=ce.PIXEL_FORMATS[a],i=ce.SIZE_FUNCTIONS[a];Object(ie.a)(s&&i,"DDS: Unknown pixel format "+r);var o=1;t[ce.HEADER_FLAGS_INDEX]&ce.DDSD_MIPMAPCOUNT&&(o=Math.max(1,t[ce.MIPMAPCOUNT_INDEX]));var c=t[ce.HEADER_HEIGHT_INDEX],u=t[ce.HEADER_HEIGHT_INDEX],l=t[ce.HEADER_SIZE_INDEX]+4;return oe(new Uint8Array(e,l),{mipMapLevels:o,width:c,height:u,sizeFunction:i,internalFormat:s})}function le(e,t){return(e+3>>2)*(t+3>>2)*8}function pe(e,t){return(e+3>>2)*(t+3>>2)*16}var fe=55727696,de=1347834371,me=13,he=52,_e=0,be=2,Ee=6,xe=7,Te=11,ge=12,ve={0:F,1:L,2:S,3:C,6:N,7:U,9:w,11:O,22:D,23:I,24:P,25:A,26:R,27:B,28:M,29:j,30:k,31:G,32:X,33:z,34:H,35:V,36:W,37:Z,38:K,39:Y,40:J},ye={0:Ue,1:Ue,2:we,3:we,6:Oe,7:Oe,9:Ae,11:Ae,22:Oe,23:Ae,24:Oe,25:Oe,26:Ae,27:Ae,28:function(e,t){return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16},29:function(e,t){return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16},30:function(e,t){return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16},31:function(e,t){return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16},32:function(e,t){return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16},33:function(e,t){return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16},34:function(e,t){return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16},35:function(e,t){return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16},36:function(e,t){return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16},37:function(e,t){return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16},38:function(e,t){return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16},39:function(e,t){return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16},40:function(e,t){return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16}};function Ue(e,t){return(e=Math.max(e,16))*(t=Math.max(t,8))/4}function we(e,t){return(e=Math.max(e,8))*(t=Math.max(t,8))/2}function Oe(e,t){return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8}function Ae(e,t){return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16}function Re(e){if(function(e){var t=new Uint8Array(e.buffer||e,e.byteOffset||0,se.length);return!(t[0]!==se[0]||t[1]!==se[1]||t[2]!==se[2]||t[3]!==se[3]||t[4]!==se[4]||t[5]!==se[5]||t[6]!==se[6]||t[7]!==se[7]||t[8]!==se[8]||t[9]!==se[9]||t[10]!==se[10]||t[11]!==se[11])}(e))return t=new Uint8Array(e),Object(ae.a)(t);var t;if(function(e){return new Uint32Array(e,0,ce.HEADER_LENGTH)[ce.MAGIC_NUMBER_INDEX]===ce.MAGIC_NUMBER}(e))return ue(e);if(function(e){var t=new Uint32Array(e,0,me)[_e];return t===fe||t===de}(e))return function(e){var t=new Uint32Array(e,0,me),r=t[be],n=ve[r],a=ye[r],s=t[Te],i=t[xe],o=t[Ee],c=he+t[ge];return oe(new Uint8Array(e,c),{mipMapLevels:s,width:i,height:o,sizeFunction:a,internalFormat:n})}(e);throw new Error("Texture container format not recognized")}function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Pe,Se,Ce=Ie(Ie({},{id:"compressed-texture",name:"CompressedTexture",version:"undefined"!=typeof __VERSION__?__VERSION__:"latest",extensions:["ktx","ktx2","dds","pvr"],mimeTypes:["application/octet-stream"],binary:!0,options:{basis:{libraryPath:"libs/"}}}),{},{parse:(Pe=Object(_.a)(h.a.mark((function e(t,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Re(t));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return Pe.apply(this,arguments)})});function Fe(e){return Le.apply(this,arguments)}function Le(){return(Le=Object(_.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.modules||{}).crunch){e.next=3;break}return e.abrupt("return",r.crunch);case 3:return e.abrupt("return",Ne(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ne(e){return Be.apply(this,arguments)}function Be(){return(Be=Object(_.a)(h.a.mark((function e(t){var r,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Se){e.next=2;break}return e.abrupt("return",Se);case 2:return r=null,e.t0=Promise,e.next=6,Object(b.a)("crunch.js","basis",t);case 6:return e.t1=e.sent,e.t2=[e.t1],e.next=10,e.t0.all.call(e.t0,e.t2);case 10:return n=e.sent,r=(r=n[0])||E.a.LoadCrunchDecoder,Se=r(),e.abrupt("return",Se);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Me=1,je=2,ke={};ke[0]={pixelFormat:U,sizeFunction:le},ke[Me]={pixelFormat:w,sizeFunction:pe},ke[je]={pixelFormat:O,sizeFunction:pe};var Ge=0,Xe=null;function ze(){return(ze=Object(_.a)(h.a.mark((function e(t,r){var n,a,s,i,o,c,u,l,p,f,d,m;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r&&(r={}),e.next=3,Fe(r);case 3:for(n=e.sent,a=t.byteLength,s=new Uint8Array(t),i=n._malloc(a),He(s,n.HEAPU8,i,a),o=n._crn_get_dxt_format(i,a),Object(ie.a)(Boolean(ke[o]),"Unsupported format"),c=n._crn_get_levels(i,a),u=n._crn_get_width(i,a),l=n._crn_get_height(i,a),p=ke[o].sizeFunction,f=0,d=0;d<c;++d)f+=p(u>>d,l>>d);return Ge<f&&(Xe&&n._free(Xe),Xe=n._malloc(f),Ge=f),n._crn_decompress(i,a,Xe,f,0,c),n._free(i),m=new Uint8Array(n.HEAPU8.buffer,Xe,f).slice(),e.abrupt("return",oe(m,{mipMapLevels:c,width:u,height:l,sizeFunction:p,internalFormat:ke[o].pixelFormat}));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function He(e,t,r,n){var a,s=r/4,i=n%4,o=new Uint32Array(e.buffer,0,(n-i)/4),c=new Uint32Array(t.buffer);for(a=0;a<o.length;a++)c[s+a]=o[a];for(a=n-i;a<n;a++)t[r+a]=e[a]}function Ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function We(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ze=We(We({},{id:"crunch",name:"Crunch",version:"undefined"!=typeof __VERSION__?__VERSION__:"latest",extensions:["crn"],mimeTypes:["application/octet-stream"],binary:!0,options:{basis:{libraryPath:"libs/"}}}),{},{parse:function(e,t){return ze.apply(this,arguments)}}),Ke=r("gQyj"),Ye=r("tXnp"),Je=r("xlp0"),qe=r("24Wh"),Qe=r("f5Sf");function $e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function et(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var tt=p.c.button.withConfig({displayName:"texture__TextureButton",componentId:"sc-2lsi4u-0"})(["height:256px;width:256px;border:1px solid black;margin:1em;position:relative;"]),rt=p.c.h1.withConfig({displayName:"texture__ImageFormatHeader",componentId:"sc-2lsi4u-1"})(["position:absolute;top:0;left:0;margin:0;color:white;font-size:16px;"]),nt=p.c.h1.withConfig({displayName:"texture__ErrorFormatHeader",componentId:"sc-2lsi4u-2"})(["color:red;font-size:16px;"]),at=p.c.ul.withConfig({displayName:"texture__TextureInfo",componentId:"sc-2lsi4u-3"})(["position:absolute;transition:opacity 0.2s;top:20px;display:flex;flex-flow:column nowrap;align-items:flex-start;padding:10px;opacity:0.8;background-color:black;color:white;border-radius:5px;min-width:200px;list-style:none;font-size:14px;"]);Object(Ye.b)([ne,Ce,Ke.a]);var st=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={supportedFormats:r.getSupportedFormats(t.gl),loadOptions:{basis:{},worker:!1},textureError:null,showStats:!1,stats:[]},r.getTextureDataUrl=r.getTextureDataUrl.bind(Object(a.a)(r)),r.renderImageTexture=r.renderImageTexture.bind(Object(a.a)(r)),r.renderCompressedTexture=r.renderCompressedTexture.bind(Object(a.a)(r)),r.setupBasisLoadOptionsIfNeeded=r.setupBasisLoadOptionsIfNeeded.bind(Object(a.a)(r)),r.addStat=r.addStat.bind(Object(a.a)(r)),r}Object(s.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=Object(_.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupBasisLoadOptionsIfNeeded(),e.next=3,this.getTextureDataUrl();case 3:t=e.sent,this.setState({dataUrl:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.getSupportedFormats=function(){var e=this.props.gl;return{DXT:Boolean(e.getExtension("WEBGL_compressed_texture_s3tc")),PVRTC:Boolean(e.getExtension("WEBGL_compressed_texture_pvrtc")),ATC:Boolean(e.getExtension("WEBGL_compressed_texture_atc")),ETC1:Boolean(e.getExtension("WEBGL_compressed_texture_etc1"))}},r.setupBasisLoadOptionsIfNeeded=function(){if(this.state.supportedFormats.DTX){var e=et(et({},this.state.loadOptions),{},{basis:{format:{alpha:"BC3",noAlpha:"BC1"}}});this.setState({loadOptions:e})}},r.getTextureDataUrl=function(){var e=Object(_.a)(h.a.mark((function e(){var t,r,n,a,s,i,o,c,u,l,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.loadOptions,r=this.props,n=r.canvas,a=r.gl,s=r.program,i=r.image,o=i.src,this.addStat("File Size",Math.floor(i.size/1024),"Kb"),e.prev=4,c="https://raw.githubusercontent.com/visgl/loaders.gl/master/modules/textures/test/data/"+o,e.next=8,Object(Je.a)(c,[Ce,Ze,ne,Ke.a]);case 8:if(u=e.sent,e.t0=u,!e.t0){e.next=14;break}return e.next=13,Object(qe.a)(c,u,t);case 13:e.t0=e.sent;case 14:l=e.t0,e.t1=u&&u.name,e.next="Crunch"===e.t1||"CompressedTexture"===e.t1?18:"Images"===e.t1?21:"Basis"===e.t1?24:28;break;case 18:return this.renderEmptyTexture(a,s),this.renderCompressedTexture(a,s,l,u.name,o),e.abrupt("break",29);case 21:return this.renderEmptyTexture(a,s),this.renderImageTexture(a,s,l),e.abrupt("break",29);case 24:return p=l[0],this.renderEmptyTexture(a,s),this.renderCompressedTexture(a,s,p,u.name,o),e.abrupt("break",29);case 28:throw new Error("Unknown texture loader");case 29:e.next=36;break;case 31:e.prev=31,e.t2=e.catch(4),console.error(e.t2),this.renderEmptyTexture(a,s),this.setState({textureError:e.t2.message});case 36:return e.abrupt("return",n.toDataURL());case 37:case"end":return e.stop()}}),e,this,[[4,31]])})));return function(){return e.apply(this,arguments)}}(),r.createCompressedTexture2D=function(e,t){var r;return new Qe.a(e,{data:t,compressed:!0,parameters:(r={},r[e.TEXTURE_MAG_FILTER]=e.LINEAR,r[e.TEXTURE_MIN_FILTER]=t.length>1?e.LINEAR_MIPMAP_NEAREST:e.LINEAR,r[e.TEXTURE_WRAP_S]=e.CLAMP_TO_EDGE,r[e.TEXTURE_WRAP_T]=e.CLAMP_TO_EDGE,r)}).handle},r.createCompressedTexture=function(e,t){var r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);for(var n=0;n<t.length;++n){var a=t[n],s=a.width,i=a.height,o=a.format,c=a.data;e.compressedTexImage2D(e.TEXTURE_2D,n,o,s,i,0,c)}return t.length>1?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_NEAREST)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)),r},r.renderEmptyTexture=function(e,t){var r,n=new Uint8Array([68,0,0,255]),a=new Qe.a(e,{width:1,height:1,data:n,mipmaps:!0,parameters:(r={},r[e.TEXTURE_MAG_FILTER]=e.LINEAR,r[e.TEXTURE_MIN_FILTER]=e.LINEAR,r[e.TEXTURE_WRAP_S]=e.CLAMP_TO_EDGE,r[e.TEXTURE_WRAP_T]=e.CLAMP_TO_EDGE,r)}).handle;e.useProgram(t),e.bindTexture(e.TEXTURE_2D,a),e.drawArrays(e.TRIANGLE_STRIP,0,4)},r.renderImageTexture=function(e,t,r){e.useProgram(t);var n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n);var a=new Date;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r),e.drawArrays(e.TRIANGLE_STRIP,0,8);var s=Date.now()-a;this.addStat("Upload time",Math.floor(s)+" ms"),this.addStat("Dimensions",r.width+" x "+r.height),this.addStat("Size in memory (Lvl 0)",Math.floor(r.width*r.height*4/1024),"Kb")},r.renderCompressedTexture=function(e,t,r,n,a){if(!r||!r.length)throw new Error(n+" loader doesn't support texture "+a+" format");var s=r[0],i=s.format,o=s.width,c=s.height,u=s.levelSize;if(!this.isFormatSupported(i))throw new Error("Texture format "+i+" not supported by this GPU");var l=new Date,p=this.createCompressedTexture(e,r);e.bindTexture(e.TEXTURE_2D,p),e.useProgram(t),e.drawArrays(e.TRIANGLE_STRIP,0,4);var f=Date.now()-l;this.addStat("Upload time",Math.floor(f)+" ms"),this.addStat("Dimensions",o+" x "+c),u&&this.addStat("Size in memory (Lvl 0)",Math.floor(u/1024),"Kb")},r.isFormatSupported=function(e){if("number"!=typeof e)throw new Error("Invalid internal format of compressed texture");var t=this.state.supportedFormats,r=t.DXT,n=t.PVRTC,a=t.ATC,s=t.ETC1;switch(e){case 33776:case 33778:case 33779:case 33777:return r;case 35840:case 35842:case 35841:case 35843:return n;case 35986:case 35987:case 34798:return a;case 36196:return s;default:return!1}},r.addStat=function(e,t,r){void 0===r&&(r="");var n=[].concat(Object(f.a)(this.state.stats),[{name:e,value:t,units:r}]);this.setState({stats:n})},r.renderStats=function(){var e=this.state.stats;if(!e.length)return null;for(var t=[],r=0;r<e.length;r++)t.push(o.a.createElement("li",null,e[r].name+": "+e[r].value+e[r].units));return o.a.createElement(at,{style:{opacity:this.state.showStats?.8:0}},t)},r.render=function(){var e=this,t=this.state,r=t.dataUrl,n=t.textureError,a=this.props.image.format;return r?o.a.createElement(tt,{style:{backgroundImage:"url("+r+")"},onMouseEnter:function(){return e.setState({showStats:!0})},onMouseLeave:function(){return e.setState({showStats:!1})}},n?o.a.createElement(nt,{style:{color:"red"}},n):o.a.createElement(rt,null,a),this.renderStats()):null},t}(i.PureComponent);st.defaultProps={canvas:null,image:null,gl:null,loadOptions:null,program:null};var it=p.c.h2.withConfig({displayName:"textures-block__Header",componentId:"sc-1txod8c-0"})(["border-bottom:1px solid black;"]),ot=function(e){function t(t){var r;return(r=e.call(this,t)||this).renderTextures=r.renderTextures.bind(Object(a.a)(r)),r}Object(s.a)(t,e);var r=t.prototype;return r.renderTextures=function(e,t,r,n){return n.map((function(n,a){return o.a.createElement(st,{key:a,image:n,canvas:t,gl:e,program:r})}))},r.render=function(){var e=this.props,t=e.gl,r=e.canvas,n=e.program,a=e.images,s=e.blockName;return o.a.createElement("div",null,o.a.createElement(it,null,s),this.renderTextures(t,r,n,a))},t}(i.PureComponent);ot.defaultProps={gl:null,canvas:null,program:null,blockName:"Texture format",images:[]};var ct=[{formatName:"Browser Native Formats (Uncompressed)",description:"Standard image formats. No mipmaps, need to be fully decompressed in GPU texture memory.",codeSample:"load(url, ImageLoader)",images:[{format:"JPG",src:"shannon.jpg",size:99488},{format:"GIF",src:"shannon.gif",size:133577},{format:"PNG",src:"shannon.png",size:463987},{format:"BMP",src:"shannon.bmp",size:786488},{format:"WEBP",src:"shannon.webp",size:33378}]},{formatName:"S3 Texture Compression (WEBGL_compressed_texture_s3tc)",description:"S3TC (aka DXTn, DXTC, or BCn).",availability:"DXT5 is popular on desktop GPUs.",link:"https://en.wikipedia.org/wiki/S3_Texture_Compression",codeSample:"load(url, CompressedTextureLoader)",images:[{format:"DXT1",src:"shannon-dxt1.dds",size:174904},{format:"DXT3",src:"shannon-dxt3.dds",size:262272},{format:"DXT5",src:"shannon-dxt5.dds",size:349680}]},{formatName:"PowerVR Texture Compression (WEBGL_compressed_texture_pvrtc)",description:"Lossy, fixed-rate GPU texture compression format",availability:"Mobile devices with PowerVR chipsets, including iPhone, iPod Touch and iPad and certain Android devices.",link:"https://en.wikipedia.org/wiki/PVRTC",codeSample:"load(url, CompressedTextureLoader)",images:[{format:"PVRTC (2BPP RGB)",src:"shannon-pvrtc-2bpp-rgb.pvr",size:87555},{format:"PVRTC (2BPP RGBA)",src:"shannon-pvrtc-2bpp-rgba.pvr",size:87555},{format:"PVRTC (4BPP RGB)",src:"shannon-pvrtc-4bpp-rgb.pvr",size:174915},{format:"PVRTC (2BPP RGBA)",src:"shannon-pvrtc-4bpp-rgba.pvr",size:174915}]},{formatName:"ATC (WEBGL_compressed_texture_atc)",codeSample:"load(url, CompressedTextureLoader)",images:[{format:"ATC (RGB)",src:"shannon-atc-rgb.dds",size:131200},{format:"ATC (RGBA, Explicit)",src:"shannon-atc-rgba-explicit.dds",size:262272},{format:"ATC (RGBA, Interpolated)",src:"shannon-atc-rgba-interpolated.dds",size:262272}]},{formatName:"ASTN (WEBGL_compressed_texture_astn)",images:[]},{formatName:"ETC1 (WEBGL_compressed_texture_etc1)",images:[{format:"ETC1",src:"shannon-etc1.pvr",size:174843}]},{formatName:"Crunch",description:"Advanced DXTn texture compression library.",link:"https://github.com/BinomialLLC/crunch",codeSample:"load(url, CrunchLoader)",images:[{format:"DXT1 (Crunch)",src:"shannon-dxt1.crn",size:63186},{format:"DXT5 (Crunch)",src:"shannon-dxt5.crn",size:71722}]},{formatName:"Basis Universal",description:"Supercompressed GPU Texture Codec",link:"https://github.com/BinomialLLC/basis_universal",codeSample:"load(url, BasisLoader)",images:[{format:"BASIS",src:"alpha3.basis",size:148691},{format:"BASIS",src:"kodim01.basis",size:95914},{format:"BASIS",src:"kodim18.basis",size:2143},{format:"BASIS",src:"kodim20_1024x1024.basis",size:90783},{format:"BASIS",src:"kodim20.basis",size:52496}]}],ut=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={canvas:null,gl:null,program:null},r.setupCanvas=r.setupCanvas.bind(Object(a.a)(r)),r.createAndFillBufferObject=r.createAndFillBufferObject.bind(Object(a.a)(r)),r.renderTexturesBlocks=r.renderTexturesBlocks.bind(Object(a.a)(r)),r.renderDescription=r.renderDescription.bind(Object(a.a)(r)),r}Object(s.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this.setupCanvas(),t=e.getContext("webgl");Object(u.d)(t),this.createAndFillBufferObject(t);var r=new l.a(t,{vs:"\nprecision highp float;\n\nattribute vec2 position;\nvarying vec2 uv;\n\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n  uv = vec2(position.x * .5, -position.y * .5) + vec2(.5, .5);\n}\n",fs:"\nprecision highp float;\n\nuniform sampler2D tex;\nvarying vec2 uv;\n\nvoid main() {\n  gl_FragColor = vec4(texture2D(tex, uv).rgb, 1.);\n}\n"});this.setState({canvas:e,gl:t,program:r.handle})},r.setupCanvas=function(){var e=document.createElement("canvas");return e.width=256,e.height=256,e},r.createAndFillBufferObject=function(e){var t=new Float32Array([-1,-1,-1,1,1,-1,1,1]),r=e.createBuffer();r||console.error("Failed to create the buffer object"),e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(0),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0)},r.renderTexturesBlocks=function(){var e=this.state,t=e.canvas,r=e.gl,n=e.program;return ct.map((function(e,a){var s=e.formatName,i=e.images;return o.a.createElement(ot,{key:a,gl:r,canvas:t,program:n,blockName:s,images:i})}))},r.renderDescription=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Texture Loaders"),o.a.createElement("p",null,o.a.createElement("i",null,"Inspired by toji's ",o.a.createElement("a",{href:"http://toji.github.io/texture-tester"},"texture-tester"))),o.a.createElement("p",null,"This page loads every texture format supported by loaders.gl and attempts to display them in WebGL using the"," ",o.a.createElement("a",{href:"https://luma.gl"},o.a.createElement("b",null,"luma.gl"))," ",o.a.createElement("code",null,"Texture2D")," class. It demonstrates working code for using loaders.gl to load compressed textures, and also shows which formats your browser/device supports."),o.a.createElement("p",null,o.a.createElement("i",null,"Note: It is expected that multiple textures on this page will fail to display due to lack of GPU support. (For example: DXT formats are usually only supported on Desktops while PVRTC is typically only available on mobile devices with PowerVR chipsets.) Your hardware may support other formats beyond what is shown here, but only the following formats have had WebGL extensions specified for their use.")))},r.render=function(){return o.a.createElement("div",null,this.renderDescription(),this.state.gl&&this.renderTexturesBlocks())},t}(i.PureComponent);function lt(e){Object(c.render)(o.a.createElement(ut,null),e)}},pkf7:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return b}));var n=r("vuIU"),a=r("1OyB");new Uint8Array([0]);var s,i,o,c,u,l,p,f,d=[171,75,84,88,32,50,48,187,13,10,26,10];!function(e){e[e.NONE=0]="NONE",e[e.BASISLZ=1]="BASISLZ",e[e.ZSTD=2]="ZSTD",e[e.ZLIB=3]="ZLIB"}(s||(s={})),function(e){e[e.BASICFORMAT=0]="BASICFORMAT"}(i||(i={})),function(e){e[e.UNSPECIFIED=0]="UNSPECIFIED",e[e.ETC1S=163]="ETC1S",e[e.UASTC=166]="UASTC"}(o||(o={})),function(e){e[e.UNSPECIFIED=0]="UNSPECIFIED",e[e.SRGB=1]="SRGB"}(c||(c={})),function(e){e[e.UNSPECIFIED=0]="UNSPECIFIED",e[e.LINEAR=1]="LINEAR",e[e.SRGB=2]="SRGB",e[e.ITU=3]="ITU",e[e.NTSC=4]="NTSC",e[e.SLOG=5]="SLOG",e[e.SLOG2=6]="SLOG2"}(u||(u={})),function(e){e[e.ALPHA_STRAIGHT=0]="ALPHA_STRAIGHT",e[e.ALPHA_PREMULTIPLIED=1]="ALPHA_PREMULTIPLIED"}(l||(l={})),function(e){e[e.RGB=0]="RGB",e[e.RRR=3]="RRR",e[e.GGG=4]="GGG",e[e.AAA=15]="AAA"}(p||(p={})),function(e){e[e.RGB=0]="RGB",e[e.RGBA=3]="RGBA",e[e.RRR=4]="RRR",e[e.RRRG=5]="RRRG"}(f||(f={}));var m=function e(){Object(a.a)(this,e),this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=s.NONE,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:i.BASICFORMAT,versionNumber:2,descriptorBlockSize:40,colorModel:o.UNSPECIFIED,colorPrimaries:c.SRGB,transferFunction:c.SRGB,flags:l.ALPHA_STRAIGHT,texelBlockDimension:{x:4,y:4,z:1,w:1},bytesPlane:[],samples:[]}],this.keyValue={},this.globalData=null},h=function(){function e(t,r,n,s){Object(a.a)(this,e),this._dataView=new DataView(t.buffer,t.byteOffset+r,n),this._littleEndian=s,this._offset=0}return Object(n.a)(e,[{key:"_nextUint8",value:function(){var e=this._dataView.getUint8(this._offset);return this._offset+=1,e}},{key:"_nextUint16",value:function(){var e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}},{key:"_nextUint32",value:function(){var e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}},{key:"_nextUint64",value:function(){var e=this._dataView.getUint32(this._offset,this._littleEndian)+Math.pow(2,32)*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}},{key:"_skip",value:function(e){return this._offset+=e,this}},{key:"_scan",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=this._offset,n=0;this._dataView.getUint8(this._offset)!==t&&n<e;)n++,this._offset++;return n<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+r,n)}}]),e}();function _(t){return"undefined"!=typeof TextDecoder?(new TextDecoder).decode(t):e.from(t).toString("utf8")}function b(e){var t=new Uint8Array(e.buffer,e.byteOffset,d.length);if(t[0]!==d[0]||t[1]!==d[1]||t[2]!==d[2]||t[3]!==d[3]||t[4]!==d[4]||t[5]!==d[5]||t[6]!==d[6]||t[7]!==d[7]||t[8]!==d[8]||t[9]!==d[9]||t[10]!==d[10]||t[11]!==d[11])throw new Error("Missing KTX 2.0 identifier.");var r=new m,n=17*Uint32Array.BYTES_PER_ELEMENT,a=new h(e,d.length,n,!0);r.vkFormat=a._nextUint32(),r.typeSize=a._nextUint32(),r.pixelWidth=a._nextUint32(),r.pixelHeight=a._nextUint32(),r.pixelDepth=a._nextUint32(),r.layerCount=a._nextUint32(),r.faceCount=a._nextUint32();var s=a._nextUint32();r.supercompressionScheme=a._nextUint32();for(var i=a._nextUint32(),o=a._nextUint32(),c=a._nextUint32(),u=a._nextUint32(),l=a._nextUint64(),p=a._nextUint64(),f=new h(e,d.length+n,3*s*8,!0),b=0;b<s;b++)r.levels.push({levelData:new Uint8Array(e.buffer,e.byteOffset+f._nextUint64(),f._nextUint64()),uncompressedByteLength:f._nextUint64()});for(var E=new h(e,i,o,!0),x={vendorId:E._skip(4)._nextUint16(),descriptorType:E._nextUint16(),versionNumber:E._nextUint16(),descriptorBlockSize:E._nextUint16(),colorModel:E._nextUint8(),colorPrimaries:E._nextUint8(),transferFunction:E._nextUint8(),flags:E._nextUint8(),texelBlockDimension:{x:E._nextUint8()+1,y:E._nextUint8()+1,z:E._nextUint8()+1,w:E._nextUint8()+1},bytesPlane:[E._nextUint8(),E._nextUint8(),E._nextUint8(),E._nextUint8(),E._nextUint8(),E._nextUint8(),E._nextUint8(),E._nextUint8()],samples:[]},T=(x.descriptorBlockSize/4-6)/4,g=0;g<T;g++)x.samples[g]={bitOffset:E._nextUint16(),bitLength:E._nextUint8(),channelID:E._nextUint8(),samplePosition:[E._nextUint8(),E._nextUint8(),E._nextUint8(),E._nextUint8()],sampleLower:E._nextUint32(),sampleUpper:E._nextUint32()};r.dataFormatDescriptor.length=0,r.dataFormatDescriptor.push(x);for(var v=new h(e,c,u,!0);v._offset<u;){var y=v._nextUint32(),U=v._scan(y),w=_(U),O=v._scan(y-U.byteLength);r.keyValue[w]=w.match(/^ktx/i)?_(O):O,y%4&&v._skip(4-y%4)}if(p<=0)return r;for(var A=new h(e,l,p,!0),R=A._nextUint16(),D=A._nextUint16(),I=A._nextUint32(),P=A._nextUint32(),S=A._nextUint32(),C=A._nextUint32(),F=[],L=0;L<s;L++)F.push({imageFlags:A._nextUint32(),rgbSliceByteOffset:A._nextUint32(),rgbSliceByteLength:A._nextUint32(),alphaSliceByteOffset:A._nextUint32(),alphaSliceByteLength:A._nextUint32()});var N=l+A._offset,B=N+I,M=B+P,j=M+S,k=new Uint8Array(e.buffer,e.byteOffset+N,I),G=new Uint8Array(e.buffer,e.byteOffset+B,P),X=new Uint8Array(e.buffer,e.byteOffset+M,S),z=new Uint8Array(e.buffer,e.byteOffset+j,C);return r.globalData={endpointCount:R,selectorCount:D,imageDescs:F,endpointsData:k,selectorsData:G,tablesData:X,extendedData:z},r}}).call(this,r("HDXh").Buffer)}}]);