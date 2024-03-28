import{BufferAttribute,BufferGeometry,Float32BufferAttribute,InterleavedBuffer,InterleavedBufferAttribute,TriangleFanDrawMode,TriangleStripDrawMode,TrianglesDrawMode,Vector3}from"../../../build/three.module.js";function computeTangents(t){t.computeTangents()}function mergeBufferGeometries(t,e=!1){const r=null!==t[0].index,n=new Set(Object.keys(t[0].attributes)),o=new Set(Object.keys(t[0].morphAttributes)),i={},u={},s=t[0].morphTargetsRelative,a=new BufferGeometry;let l=0;for(let f=0;f<t.length;++f){const c=t[f];let m=0;if(r!==(null!==c.index))return null;for(const t in c.attributes){if(!n.has(t))return null;void 0===i[t]&&(i[t]=[]),i[t].push(c.attributes[t]),m++}if(m!==n.size)return null;if(s!==c.morphTargetsRelative)return null;for(const t in c.morphAttributes){if(!o.has(t))return null;void 0===u[t]&&(u[t]=[]),u[t].push(c.morphAttributes[t])}if(a.userData.mergedUserData=a.userData.mergedUserData||[],a.userData.mergedUserData.push(c.userData),e){let t;if(r)t=c.index.count;else{if(void 0===c.attributes.position)return null;t=c.attributes.position.count}a.addGroup(l,t,f),l+=t}}if(r){let e=0;const r=[];for(let n=0;n<t.length;++n){const o=t[n].index;for(let t=0;t<o.count;++t)r.push(o.getX(t)+e);e+=t[n].attributes.position.count}a.setIndex(r)}for(const t in i){const e=mergeBufferAttributes(i[t]);if(!e)return null;a.setAttribute(t,e)}for(const t in u){const e=u[t][0].length;if(0===e)break;a.morphAttributes=a.morphAttributes||{},a.morphAttributes[t]=[];for(let r=0;r<e;++r){const e=[];for(let n=0;n<u[t].length;++n)e.push(u[t][n][r]);const n=mergeBufferAttributes(e);if(!n)return null;a.morphAttributes[t].push(n)}}return a}function mergeBufferAttributes(t){let e,r,n,o=0;for(let i=0;i<t.length;++i){const u=t[i];if(u.isInterleavedBufferAttribute)return null;if(void 0===e&&(e=u.array.constructor),e!==u.array.constructor)return null;if(void 0===r&&(r=u.itemSize),r!==u.itemSize)return null;if(void 0===n&&(n=u.normalized),n!==u.normalized)return null;o+=u.array.length}const i=new e(o);let u=0;for(let e=0;e<t.length;++e)i.set(t[e].array,u),u+=t[e].array.length;return new BufferAttribute(i,r,n)}function interleaveAttributes(t){let e,r=0,n=0;for(let o=0,i=t.length;o<i;++o){const i=t[o];if(void 0===e&&(e=i.array.constructor),e!==i.array.constructor)return null;r+=i.array.length,n+=i.itemSize}const o=new InterleavedBuffer(new e(r),n);let i=0;const u=[],s=["getX","getY","getZ","getW"],a=["setX","setY","setZ","setW"];for(let e=0,r=t.length;e<r;e++){const r=t[e],n=r.itemSize,l=r.count,f=new InterleavedBufferAttribute(o,n,i,r.normalized);u.push(f),i+=n;for(let t=0;t<l;t++)for(let e=0;e<n;e++)f[a[e]](t,r[s[e]](t))}return u}function estimateBytesUsed(t){let e=0;for(const r in t.attributes){const n=t.getAttribute(r);e+=n.count*n.itemSize*n.array.BYTES_PER_ELEMENT}const r=t.getIndex();return e+=r?r.count*r.itemSize*r.array.BYTES_PER_ELEMENT:0,e}function mergeVertices(t,e=1e-4){e=Math.max(e,Number.EPSILON);const r={},n=t.getIndex(),o=t.getAttribute("position"),i=n?n.count:o.count;let u=0;const s=Object.keys(t.attributes),a={},l={},f=[],c=["getX","getY","getZ","getW"];for(let e=0,r=s.length;e<r;e++){const r=s[e];a[r]=[];const n=t.morphAttributes[r];n&&(l[r]=new Array(n.length).fill().map((()=>[])))}const m=Math.log10(1/e),g=Math.pow(10,m);for(let e=0;e<i;e++){const o=n?n.getX(e):e;let i="";for(let e=0,r=s.length;e<r;e++){const r=s[e],n=t.getAttribute(r),u=n.itemSize;for(let t=0;t<u;t++)i+=~~(n[c[t]](o)*g)+","}if(i in r)f.push(r[i]);else{for(let e=0,r=s.length;e<r;e++){const r=s[e],n=t.getAttribute(r),i=t.morphAttributes[r],u=n.itemSize,f=a[r],m=l[r];for(let t=0;t<u;t++){const e=c[t];if(f.push(n[e](o)),i)for(let t=0,r=i.length;t<r;t++)m[t].push(i[t][e](o))}}r[i]=u,f.push(u),u++}}const d=t.clone();for(let e=0,r=s.length;e<r;e++){const r=s[e],n=t.getAttribute(r),o=new n.array.constructor(a[r]),i=new BufferAttribute(o,n.itemSize,n.normalized);if(d.setAttribute(r,i),r in l)for(let e=0;e<l[r].length;e++){const n=t.morphAttributes[r][e],o=new n.array.constructor(l[r][e]),i=new BufferAttribute(o,n.itemSize,n.normalized);d.morphAttributes[r][e]=i}}return d.setIndex(f),d}function toTrianglesDrawMode(t,e){if(e===TrianglesDrawMode)return t;if(e===TriangleFanDrawMode||e===TriangleStripDrawMode){let r=t.getIndex();if(null===r){const e=[],n=t.getAttribute("position");if(void 0===n)return t;for(let t=0;t<n.count;t++)e.push(t);t.setIndex(e),r=t.getIndex()}const n=r.count-2,o=[];if(e===TriangleFanDrawMode)for(let t=1;t<=n;t++)o.push(r.getX(0)),o.push(r.getX(t)),o.push(r.getX(t+1));else for(let t=0;t<n;t++)t%2==0?(o.push(r.getX(t)),o.push(r.getX(t+1)),o.push(r.getX(t+2))):(o.push(r.getX(t+2)),o.push(r.getX(t+1)),o.push(r.getX(t)));o.length;const i=t.clone();return i.setIndex(o),i.clearGroups(),i}return t}function computeMorphedAttributes(t){if(!0!==t.geometry.isBufferGeometry)return null;const e=new Vector3,r=new Vector3,n=new Vector3,o=new Vector3,i=new Vector3,u=new Vector3,s=new Vector3,a=new Vector3,l=new Vector3;function f(t,f,c,m,g,d,h,b,p){e.fromBufferAttribute(c,d),r.fromBufferAttribute(c,h),n.fromBufferAttribute(c,b);const A=t.morphTargetInfluences;if(f.morphTargets&&m&&A){s.set(0,0,0),a.set(0,0,0),l.set(0,0,0);for(let t=0,f=m.length;t<f;t++){const f=A[t],c=m[t];0!==f&&(o.fromBufferAttribute(c,d),i.fromBufferAttribute(c,h),u.fromBufferAttribute(c,b),g?(s.addScaledVector(o,f),a.addScaledVector(i,f),l.addScaledVector(u,f)):(s.addScaledVector(o.sub(e),f),a.addScaledVector(i.sub(r),f),l.addScaledVector(u.sub(n),f)))}e.add(s),r.add(a),n.add(l)}t.isSkinnedMesh&&(t.boneTransform(d,e),t.boneTransform(h,r),t.boneTransform(b,n)),p[3*d+0]=e.x,p[3*d+1]=e.y,p[3*d+2]=e.z,p[3*h+0]=r.x,p[3*h+1]=r.y,p[3*h+2]=r.z,p[3*b+0]=n.x,p[3*b+1]=n.y,p[3*b+2]=n.z}const c=t.geometry,m=t.material;let g,d,h;const b=c.index,p=c.attributes.position,A=c.morphAttributes.position,w=c.morphTargetsRelative,y=c.attributes.normal,B=c.morphAttributes.position,S=c.groups,M=c.drawRange;let x,T,z,X,v,V,I,D;const E=new Float32Array(p.count*p.itemSize),F=new Float32Array(y.count*y.itemSize);if(null!==b)if(Array.isArray(m))for(x=0,z=S.length;x<z;x++)for(v=S[x],V=m[v.materialIndex],I=Math.max(v.start,M.start),D=Math.min(v.start+v.count,M.start+M.count),T=I,X=D;T<X;T+=3)g=b.getX(T),d=b.getX(T+1),h=b.getX(T+2),f(t,V,p,A,w,g,d,h,E),f(t,V,y,B,w,g,d,h,F);else for(I=Math.max(0,M.start),D=Math.min(b.count,M.start+M.count),x=I,z=D;x<z;x+=3)g=b.getX(x),d=b.getX(x+1),h=b.getX(x+2),f(t,m,p,A,w,g,d,h,E),f(t,m,y,B,w,g,d,h,F);else if(void 0!==p)if(Array.isArray(m))for(x=0,z=S.length;x<z;x++)for(v=S[x],V=m[v.materialIndex],I=Math.max(v.start,M.start),D=Math.min(v.start+v.count,M.start+M.count),T=I,X=D;T<X;T+=3)g=T,d=T+1,h=T+2,f(t,V,p,A,w,g,d,h,E),f(t,V,y,B,w,g,d,h,F);else for(I=Math.max(0,M.start),D=Math.min(p.count,M.start+M.count),x=I,z=D;x<z;x+=3)g=x,d=x+1,h=x+2,f(t,m,p,A,w,g,d,h,E),f(t,m,y,B,w,g,d,h,F);return{positionAttribute:p,normalAttribute:y,morphedPositionAttribute:new Float32BufferAttribute(E,3),morphedNormalAttribute:new Float32BufferAttribute(F,3)}}export{computeTangents,mergeBufferGeometries,mergeBufferAttributes,interleaveAttributes,estimateBytesUsed,mergeVertices,toTrianglesDrawMode,computeMorphedAttributes};