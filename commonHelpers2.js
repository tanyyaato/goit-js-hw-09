import"./assets/styles-ebda3d91.js";const t=document.querySelector("form"),s=t.elements.email,l=t.elements.message;document.querySelector("button");const r="feedback-form-state",e={email:"",message:""},m=localStorage.getItem(r);let o={};if(m)try{o=JSON.parse(m)}catch{}s.value=o.email||"";l.value=o.message||"";t.addEventListener("input",n);t.addEventListener("submit",i);function n(a){e.email=s.value.trim(),e.message=l.value.trim(),localStorage.setItem(r,JSON.stringify(e))}function i(a){if(a.preventDefault(),!s.value||!l.value)return alert("Fill please all fields");console.log(e),localStorage.removeItem(r),e.email="",e.message="",t.reset()}
//# sourceMappingURL=commonHelpers2.js.map