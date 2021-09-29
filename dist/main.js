(()=>{"use strict";const e=()=>({createListElement:()=>{const e=document.createElement("li");return e.setAttribute("class","project-item"),e},createSpanElement:e=>{const t=document.createElement("span");return t.classList.add(e),t},createImageElement:(e,t)=>{const n=document.createElement("img");return n.classList.add(t),n.setAttribute("src",e),n.setAttribute("draggable","false"),n},createInputField:()=>{const e=document.createElement("input");return e.setAttribute("type","text"),e.setAttribute("placeholder","Project name..."),e.setAttribute("id","user-input"),e.required=!0,e},createForm:()=>document.createElement("form")}),t=()=>null!=document.querySelector("#user-input"),n=()=>{const t=document.querySelector("#user-input"),n=t.parentElement,c=n.parentElement,r=e().createSpanElement("project-name");n.addEventListener("submit",(function(e){e.preventDefault();const n=t.value;if(n.match(/^[\s]/))return alert("Project name cannot start with a space");r.textContent=n,t.parentElement.remove(),c.insertBefore(r,c.childNodes[0])}))},c=()=>{t()||((()=>{const t=e(),n=document.querySelector(".project-list"),c=t.createListElement(),r=t.createForm(),s=t.createInputField();r.append(s);const a=t.createSpanElement("icons"),i=t.createImageElement("images/edit-icon.svg","edit-icon"),o=t.createImageElement("images/delete-icon.svg","delete-icon");a.append(i,o),c.append(r,a),n.insertBefore(c,n.lastElementChild)})(),n())};(()=>{const e=document.getElementById("bars-icon-mobile");screen.width<=1024&&e.classList.contains("hidden")&&e.classList.toggle("hidden");const t=document.getElementById("sidebar"),n=()=>{t.classList.toggle("toggle-sidebar"),screen.width<=1024&&e.classList.toggle("hidden")};document.querySelectorAll(".bars-icon").forEach((e=>{e.addEventListener("click",n)}))})(),document.addEventListener("click",(e=>{e.target.closest(".delete-icon")&&e.target.closest(".project-item").remove()})),document.querySelector("[data-add-project]").addEventListener("click",c),document.addEventListener("click",(c=>{"edit-icon"===c.target.className&&(c=>{if(t())return;const r=e().createForm(),s=e().createInputField(),a=c.target.parentElement.previousElementSibling;s.value=a.textContent,a.remove(),r.append(s);const i=c.target.closest(".project-item");i.insertBefore(r,i.childNodes[0]),n()})(c)})),document.addEventListener("click",(e=>{if(e.target.classList.contains("task-item")){(e=>{e.classList.toggle("completed")})(e.target.parentElement)}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDOUJjLEVBQWNGLEVBQUVpQyxPQUFPckMsY0FBY3lDLHVCQUUzQ0QsRUFBV2pDLE1BQVFELEVBQVlJLFlBQy9CSixFQUFZSyxTQUNaWixFQUFVcUIsT0FBT29CLEdBRWpCLE1BQU12QyxFQUFjRyxFQUFFaUMsT0FBT0MsUUFBUSxpQkFDckNyQyxFQUFZVyxhQUFhYixFQUFXRSxFQUFZWSxXQUFXLElBRTNEZixLQ3pGUTRDLENBQVl0QyxNQU1wQnZCLFNBQVNzQixpQkFBaUIsU0FBVUMsSUFDaEMsR0FBSUEsRUFBRWlDLE9BQU9sRCxVQUFVMkMsU0FBUyxhQUFjLENDdENuQyxDQUFDYSxJQUNoQkEsRUFBWXhELFVBQVU0QyxPQUFPLGNEdUNyQixDQURvQjNCLEVBQUVpQyxPQUFPckMsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIERPTSBFbGVtZW50cyBGYWN0b3J5IEZ1bmN0aW9uXG5jb25zdCBjcmVhdGVFbGVtZW50cyA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVMaXN0RWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtaXRlbScpO1xuICAgICAgICByZXR1cm4gbGk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU3BhbkVsZW1lbnQgPSAoaHRtbENsYXNzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChodG1sQ2xhc3MpO1xuICAgICAgICByZXR1cm4gc3BhbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbWFnZUVsZW1lbnQgPSAoc3JjLCBodG1sQ2xhc3MpID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKGh0bWxDbGFzcyk7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICdmYWxzZScpO1xuICAgICAgICByZXR1cm4gaW1nO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjcmVhdGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHJldHVybiBpbnB1dEZvcm07XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSW5wdXRGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdXNlcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHVzZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgbmFtZS4uLicpO1xuICAgICAgICB1c2VySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VyLWlucHV0Jyk7XG4gICAgICAgIHVzZXJJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZUxpc3RFbGVtZW50LCBjcmVhdGVTcGFuRWxlbWVudCwgY3JlYXRlSW1hZ2VFbGVtZW50LCBjcmVhdGVJbnB1dEZpZWxkLCBjcmVhdGVGb3JtfVxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0RE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBjcmVhdGVFbGVtZW50cygpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3RFbGVtZW50ID0gIGNyZWF0ZVByb2plY3QuY3JlYXRlTGlzdEVsZW1lbnQoKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0SW5wdXRGb3JtID0gY3JlYXRlUHJvamVjdC5jcmVhdGVGb3JtKCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGNyZWF0ZVByb2plY3QuY3JlYXRlSW5wdXRGaWVsZCgpO1xuICAgIHByb2plY3RJbnB1dEZvcm0uYXBwZW5kKHByb2plY3ROYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0LmNyZWF0ZVNwYW5FbGVtZW50KCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICAgIH1cblxuICAgIGNvbnN0IGljb25TcGFuID0gY3JlYXRlUHJvamVjdC5jcmVhdGVTcGFuRWxlbWVudCgnaWNvbnMnKTtcbiAgICBjb25zdCBlZGl0SWNvbiA9IGNyZWF0ZVByb2plY3QuY3JlYXRlSW1hZ2VFbGVtZW50KCdpbWFnZXMvZWRpdC1pY29uLnN2ZycsICdlZGl0LWljb24nKTtcbiAgICBjb25zdCBkZWxldGVJY29uID0gY3JlYXRlUHJvamVjdC5jcmVhdGVJbWFnZUVsZW1lbnQoJ2ltYWdlcy9kZWxldGUtaWNvbi5zdmcnLCAnZGVsZXRlLWljb24nKTtcbiAgICBcbiAgICBpY29uU3Bhbi5hcHBlbmQoZWRpdEljb24sIGRlbGV0ZUljb24pO1xuICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmQocHJvamVjdElucHV0Rm9ybSwgaWNvblNwYW4pO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmluc2VydEJlZm9yZShwcm9qZWN0TGlzdEVsZW1lbnQsIHByb2plY3RzQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuXG4gICAgcmV0dXJuIHtuZXdQcm9qZWN0LCBwcm9qZWN0TmFtZUlucHV0LCBwcm9qZWN0SW5wdXRGb3JtLCBpY29uU3BhbiwgcHJvamVjdExpc3RFbGVtZW50fVxufVxuXG5jb25zdCBhd2FpdGluZ0lucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLWlucHV0Jyk7XG4gICAgaWYgKHVzZXJJbnB1dCAhPSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgaGFuZGxlVXNlcklucHV0ID0gKCkgPT4geyBcbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1pbnB1dCcpXG4gICAgY29uc3QgaW5wdXRGb3JtID0gdXNlcklucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBpbnB1dEZvcm0ucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBwcm9qZWN0U3BhbiA9IGNyZWF0ZUVsZW1lbnRzKCkuY3JlYXRlU3BhbkVsZW1lbnQoJ3Byb2plY3QtbmFtZScpO1xuXG4gICAgaW5wdXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB1c2VySW5wdXQudmFsdWU7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZS5tYXRjaCgvXltcXHNdLykpIHJldHVybiBhbGVydCgnUHJvamVjdCBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIGEgc3BhY2UnKTtcbiAgICAgICAgcHJvamVjdFNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdXNlcklucHV0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHByb2plY3RJdGVtLmluc2VydEJlZm9yZShwcm9qZWN0U3BhbiwgcHJvamVjdEl0ZW0uY2hpbGROb2Rlc1swXSk7IFxuICAgIH0pO1xufVxuXG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGlmIChhd2FpdGluZ0lucHV0KCkpIHJldHVybjtcbiAgICBjcmVhdGVQcm9qZWN0RE9NKCk7XG4gICAgaGFuZGxlVXNlcklucHV0KCk7XG59XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBBZGQgZGVsZXRlLXByb2plY3QgY2xhc3MgdG8gZGVsZXRlIGJ0biB0byBhdm9pZCBlcnJvcnMgd2hlbiB1c2VyIGNsaWNrcyBkZWxldGUgdGFzayBidG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtaWNvbicpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiBcbmNvbnN0IGVkaXRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICBpZiAoYXdhaXRpbmdJbnB1dCgpKSByZXR1cm47XG4gICAgY29uc3QgaW5wdXRGb3JtID0gY3JlYXRlRWxlbWVudHMoKS5jcmVhdGVGb3JtKCk7XG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGNyZWF0ZUVsZW1lbnRzKCkuY3JlYXRlSW5wdXRGaWVsZCgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgaW5wdXRGaWVsZC52YWx1ZSA9IHByb2plY3ROYW1lLnRleHRDb250ZW50O1xuICAgIHByb2plY3ROYW1lLnJlbW92ZSgpO1xuICAgIGlucHV0Rm9ybS5hcHBlbmQoaW5wdXRGaWVsZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWl0ZW0nKTtcbiAgICBwcm9qZWN0SXRlbS5pbnNlcnRCZWZvcmUoaW5wdXRGb3JtLCBwcm9qZWN0SXRlbS5jaGlsZE5vZGVzWzBdKTtcblxuICAgIGhhbmRsZVVzZXJJbnB1dCgpO1xufVxuXG5leHBvcnQgeyBcbiAgICBhZGRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZWRpdFByb2plY3Rcbn0iLCJpbXBvcnQge2FkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHRvZ2dsZVRhc2sgZnJvbSBcIi4vdGFza3NcIjtcblxuLy8gU2lkZWJhciBNb2R1bGVcbmNvbnN0IHNpZGViYXJDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IG1vYmlsZVRvZ2dsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXJzLWljb24tbW9iaWxlJyk7XG4gICAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0ICYmIG1vYmlsZVRvZ2dsZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIG1vYmlsZVRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICBcbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZS1zaWRlYmFyJyk7XG4gICAgICAgIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNCkgbW9iaWxlVG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFycy1pY29uJyk7XG4gICAgdG9nZ2xlQnRuLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhcik7XG4gICAgfSk7ICAgICAgICBcbn0pKCk7XG5cbmNvbnN0IHByb2plY3RDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBkZWxldGVQcm9qZWN0KCk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC1wcm9qZWN0XScpO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcbiAgICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdlZGl0LWljb24nKSB7XG4gICAgICAgICAgICBlZGl0UHJvamVjdChlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuY29uc3QgdGFza0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1pdGVtJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHRvZ2dsZVRhc2sodGFza0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpOyIsImNvbnN0IHRvZ2dsZVRhc2sgPSAodGFza0VsZW1lbnQpID0+IHtcbiAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlVGFzazsiXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudHMiLCJjcmVhdGVMaXN0RWxlbWVudCIsImxpIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlU3BhbkVsZW1lbnQiLCJodG1sQ2xhc3MiLCJzcGFuIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlSW1hZ2VFbGVtZW50Iiwic3JjIiwiaW1nIiwiY3JlYXRlSW5wdXRGaWVsZCIsInVzZXJJbnB1dCIsInJlcXVpcmVkIiwiY3JlYXRlRm9ybSIsImF3YWl0aW5nSW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiaGFuZGxlVXNlcklucHV0IiwiaW5wdXRGb3JtIiwicGFyZW50RWxlbWVudCIsInByb2plY3RJdGVtIiwicHJvamVjdFNwYW4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvamVjdE5hbWUiLCJ2YWx1ZSIsIm1hdGNoIiwiYWxlcnQiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSIsImluc2VydEJlZm9yZSIsImNoaWxkTm9kZXMiLCJhZGRQcm9qZWN0IiwiY3JlYXRlUHJvamVjdCIsInByb2plY3RzQ29udGFpbmVyIiwicHJvamVjdExpc3RFbGVtZW50IiwicHJvamVjdElucHV0Rm9ybSIsInByb2plY3ROYW1lSW5wdXQiLCJhcHBlbmQiLCJpY29uU3BhbiIsImVkaXRJY29uIiwiZGVsZXRlSWNvbiIsImxhc3RFbGVtZW50Q2hpbGQiLCJjcmVhdGVQcm9qZWN0RE9NIiwibW9iaWxlVG9nZ2xlQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JlZW4iLCJ3aWR0aCIsImNvbnRhaW5zIiwidG9nZ2xlIiwic2lkZWJhciIsInRvZ2dsZVNpZGViYXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJjbGFzc05hbWUiLCJpbnB1dEZpZWxkIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImVkaXRQcm9qZWN0IiwidGFza0VsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9