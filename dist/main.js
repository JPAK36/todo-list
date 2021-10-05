(()=>{"use strict";const e=e=>{const t=document.createElement("li");return t.setAttribute("class",e),t},t=e=>{const t=document.createElement("span");return t.classList.add(e),t},n=(e,t)=>{const n=document.createElement("img");return n.classList.add(t),n.setAttribute("src",e),n.setAttribute("draggable","false"),n},c=e=>{const t=document.createElement("input");return t.setAttribute("type","text"),t.setAttribute("placeholder",e),t.setAttribute("id","user-input"),t.required=!0,t},s=()=>document.createElement("form"),r=e=>{const t=document.createElement("div");return t.setAttribute("class",e),t},o=()=>null!=document.querySelector("#user-input"),i=()=>{const e=document.querySelector("#user-input"),n=e.parentElement.parentElement,c=t("project-name"),s=document.querySelector("#user-input").value;if(s.match(/^[\s]/))return alert("Project name cannot start with a space");c.textContent=s,e.parentElement.remove(),n.insertBefore(c,n.childNodes[0])},a=()=>{o()||((()=>{const r=document.querySelector(".project-list"),o=e("project-item"),i=s(),a=c("Project name...");i.append(a);const d=t("icons"),l=n("images/edit-icon.svg","edit-icon"),u=n("images/delete-icon.svg","delete-icon");l.classList.add("edit-project"),u.classList.add("delete-project"),d.append(l,u),o.append(i,d),r.insertBefore(o,r.lastElementChild)})(),document.querySelector("#user-input").parentElement.addEventListener("submit",(function(e){e.preventDefault(),i(),o()||(()=>{const e=document.querySelector(".project-list"),t=e.childElementCount-2,n=e.children[t].textContent,c=document.querySelector("#writing-area"),s=r("project"),o=r("skip-line"),i=r("project-heading"),a=document.createElement("h2");a.setAttribute("class","notepad-text"),a.textContent=n;const d=document.createElement("h3");d.setAttribute("class","notepad-text"),d.textContent="Due Date",i.append(a,d),s.append(i),c.append(s,o)})()})))};(()=>{const e=document.getElementById("bars-icon-mobile");screen.width<=1024&&e.classList.contains("hidden")&&e.classList.toggle("hidden");const t=document.getElementById("sidebar"),n=()=>{t.classList.toggle("toggle-sidebar"),screen.width<=1024&&e.classList.toggle("hidden")};document.querySelectorAll(".bars-icon").forEach((e=>{e.addEventListener("click",n)}))})(),document.addEventListener("click",(e=>{e.target.closest(".delete-project")&&e.target.closest(".project-item").remove()})),document.querySelector("[data-add-project]").addEventListener("click",a),document.addEventListener("click",(e=>{e.target.classList.contains("edit-project")&&(e=>{if(o())return;const t=s(),n=c("Project name..."),r=e.target.parentElement.previousElementSibling;n.value=r.textContent,r.remove(),t.append(n);const a=e.target.closest(".project-item");a.insertBefore(t,a.childNodes[0]),t.addEventListener("submit",(function(e){e.preventDefault(),i()}))})(e)})),document.addEventListener("click",(e=>{e.target.classList.contains("task-item")&&e.target.parentElement.classList.toggle("completed")})),document.addEventListener("click",(e=>{e.target.classList.contains("add-task")&&(console.log("add task"),(()=>{const e=t("task-item");e.textContent="user input";const c=t("icons"),s=n("images/edit-icon.svg","edit-icon"),r=n("images/delete-icon.svg","delete-icon");c.append(s,r),e.append(c)})())}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsTUE4Q0EsRUE1QytCQSxJQUN2QixNQUFNQyxFQUFLQyxTQUFTQyxjQUFjLE1BRWxDLE9BREFGLEVBQUdHLGFBQWEsUUFBU0osR0FDbEJDLEdBeUNmLEVBdEMrQkQsSUFDdkIsTUFBTUssRUFBT0gsU0FBU0MsY0FBYyxRQUVwQyxPQURBRSxFQUFLQyxVQUFVQyxJQUFJUCxHQUNaSyxHQW1DZixFQWhDK0IsQ0FBQ0csRUFBS1IsS0FDN0IsTUFBTVMsRUFBTVAsU0FBU0MsY0FBYyxPQUluQyxPQUhBTSxFQUFJSCxVQUFVQyxJQUFJUCxHQUNsQlMsRUFBSUwsYUFBYSxNQUFPSSxHQUN4QkMsRUFBSUwsYUFBYSxZQUFhLFNBQ3ZCSyxHQTJCZixFQW5COEJDLElBQ3RCLE1BQU1DLEVBQVlULFNBQVNDLGNBQWMsU0FNekMsT0FMQVEsRUFBVVAsYUFBYSxPQUFRLFFBQy9CTyxFQUFVUCxhQUFhLGNBQWVNLEdBQ3RDQyxFQUFVUCxhQUFhLEtBQU0sY0FDN0JPLEVBQVVDLFVBQVcsRUFFZEQsR0FZZixFQXhCdUIsSUFDR1QsU0FBU0MsY0FBYyxRQXVCakQsRUFUdUJILElBQ2YsTUFBTWEsRUFBTVgsU0FBU0MsY0FBYyxPQUVuQyxPQURBVSxFQUFJVCxhQUFhLFFBQVNKLEdBQ25CYSxHQ1ZUQyxFQUFnQixJQUVELE1BRENaLFNBQVNhLGNBQWMsZUFhdkNDLEVBQWtCLEtBQ3BCLE1BQU1MLEVBQVlULFNBQVNhLGNBQWMsZUFFbkNFLEVBRFlOLEVBQVVPLGNBQ0VBLGNBQ3hCQyxFQUFjLEVBQWlDLGdCQUcvQ0MsRUFiWWxCLFNBQVNhLGNBQWMsZUFDWE0sTUFhOUIsR0FBSUQsRUFBWUUsTUFBTSxTQUFVLE9BQU9DLE1BQU0sMENBRTdDSixFQUFZSyxZQUFjSixFQUMxQlQsRUFBVU8sY0FBY08sU0FDeEJSLEVBQVlTLGFBQWFQLEVBQWFGLEVBQVlVLFdBQVcsS0EyQjNEQyxFQUFhLEtBQ1hkLE1BbkZvQixNQUN4QixNQUFNZSxFQUFvQjNCLFNBQVNhLGNBQWMsaUJBRTNDZSxFQUFzQixFQUFpQyxnQkFFdkRDLEVBQW1CLElBQ25CQyxFQUFtQixFQUFnQyxtQkFDekRELEVBQWlCRSxPQUFPRCxHQUV4QixNQU1NRSxFQUFXLEVBQWlDLFNBQzVDQyxFQUFXLEVBQWtDLHVCQUF3QixhQUNyRUMsRUFBYSxFQUFrQyx5QkFBMEIsZUFFL0VELEVBQVM3QixVQUFVQyxJQUFJLGdCQUN2QjZCLEVBQVc5QixVQUFVQyxJQUFJLGtCQUV6QjJCLEVBQVNELE9BQU9FLEVBQVVDLEdBQzFCTixFQUFtQkcsT0FBT0YsRUFBa0JHLEdBQzVDTCxFQUFrQkgsYUFBYUksRUFBb0JELEVBQWtCUSxtQkE0RHJFQyxHQUVrQnBDLFNBQVNhLGNBQWMsZUFDYkcsY0FFbEJxQixpQkFBaUIsVUFBVSxTQUFVQyxHQUMzQ0EsRUFBRUMsaUJBQ0Z6QixJQUNLRixLQWxDZSxNQUN4QixNQUFNNEIsRUFBY3hDLFNBQVNhLGNBQWMsaUJBQ3JDNEIsRUFBdUJELEVBQVlFLGtCQUFvQixFQUN2RHhCLEVBQWNzQixFQUFZRyxTQUFTRixHQUFzQm5CLFlBRXpEc0IsRUFBVTVDLFNBQVNhLGNBQWMsaUJBQ2pDZ0MsRUFBYSxFQUF5QixXQUN0Q0MsRUFBVyxFQUF5QixhQUVwQ0MsRUFBaUIsRUFBeUIsbUJBQzFDQyxFQUFLaEQsU0FBU0MsY0FBYyxNQUNsQytDLEVBQUc5QyxhQUFhLFFBQVMsZ0JBQ3pCOEMsRUFBRzFCLFlBQWNKLEVBQ2pCLE1BQU0rQixFQUFLakQsU0FBU0MsY0FBYyxNQUNsQ2dELEVBQUcvQyxhQUFhLFFBQVMsZ0JBQ3pCK0MsRUFBRzNCLFlBQWMsV0FFakJ5QixFQUFlaEIsT0FBT2lCLEVBQUlDLEdBQzFCSixFQUFXZCxPQUFPZ0IsR0FDbEJILEVBQVFiLE9BQU9jLEVBQVlDLElBZURJLFFDMUZKLE1BRXRCLE1BQU1DLEVBQWtCbkQsU0FBU29ELGVBQWUsb0JBQzVDQyxPQUFPQyxPQUFTLE1BQVFILEVBQWdCL0MsVUFBVW1ELFNBQVMsV0FDM0RKLEVBQWdCL0MsVUFBVW9ELE9BQU8sVUFHckMsTUFBTUMsRUFBVXpELFNBQVNvRCxlQUFlLFdBRWxDTSxFQUFnQixLQUNsQkQsRUFBUXJELFVBQVVvRCxPQUFPLGtCQUNyQkgsT0FBT0MsT0FBUyxNQUFNSCxFQUFnQi9DLFVBQVVvRCxPQUFPLFdBRzdDeEQsU0FBUzJELGlCQUFpQixjQUNsQ0MsU0FBUUMsSUFDZEEsRUFBT3hCLGlCQUFpQixRQUFTcUIsT0FoQmYsR0QrRnRCMUQsU0FBU3FDLGlCQUFpQixTQUFVQyxJQUM1QkEsRUFBRXdCLE9BQU9DLFFBQVEsb0JBQ2pCekIsRUFBRXdCLE9BQU9DLFFBQVEsaUJBQWlCeEMsWUMzRXBCdkIsU0FBU2EsY0FBYyxzQkFDL0J3QixpQkFBaUIsUUFBU1gsR0FFeEMxQixTQUFTcUMsaUJBQWlCLFNBQVVDLElBQzVCQSxFQUFFd0IsT0FBTzFELFVBQVVtRCxTQUFTLGlCRDRFcEIsQ0FBQ2pCLElBQ2pCLEdBQUkxQixJQUFpQixPQUNyQixNQUFNb0QsRUFBWSxJQUNaQyxFQUFhLEVBQWdDLG1CQUM3Qy9DLEVBQWNvQixFQUFFd0IsT0FBTzlDLGNBQWNrRCx1QkFFM0NELEVBQVc5QyxNQUFRRCxFQUFZSSxZQUMvQkosRUFBWUssU0FDWnlDLEVBQVVqQyxPQUFPa0MsR0FFakIsTUFBTWxELEVBQWN1QixFQUFFd0IsT0FBT0MsUUFBUSxpQkFDckNoRCxFQUFZUyxhQUFhd0MsRUFBV2pELEVBQVlVLFdBQVcsSUFFM0R1QyxFQUFVM0IsaUJBQWlCLFVBQVUsU0FBVUMsR0FDM0NBLEVBQUVDLGlCQUNGekIsUUMxRklxRCxDQUFZN0IsTUFNcEJ0QyxTQUFTcUMsaUJBQWlCLFNBQVVDLElBQzVCQSxFQUFFd0IsT0FBTzFELFVBQVVtRCxTQUFTLGNBQ1JqQixFQUFFd0IsT0FBTzlDLGNDcEN6QlosVUFBVW9ELE9BQU8sZ0JEeUM3QnhELFNBQVNxQyxpQkFBaUIsU0FBVUMsSUFDNUJBLEVBQUV3QixPQUFPMUQsVUFBVW1ELFNBQVMsY0FDNUJhLFFBQVFDLElBQUksWUN2Q0gsTUFNakIsTUFBTUMsRUFBVyxFQUFpQyxhQUNsREEsRUFBU2hELFlBQWMsYUFFdkIsTUFBTVUsRUFBVyxFQUFpQyxTQUU1Q0MsRUFBVyxFQUFrQyx1QkFBd0IsYUFDckVDLEVBQWEsRUFBa0MseUJBQTBCLGVBRS9FRixFQUFTRCxPQUFPRSxFQUFVQyxHQUMxQm9DLEVBQVN2QyxPQUFPQyxJRHlCUnVDLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlRE9NRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRE9NIEVsZW1lbnRzIEZhY3RvcnkgRnVuY3Rpb25cbmNvbnN0IGNyZWF0ZUVsZW1lbnRzID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZUxpc3RFbGVtZW50ID0gKGh0bWxDbGFzcykgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBodG1sQ2xhc3MpO1xuICAgICAgICByZXR1cm4gbGk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU3BhbkVsZW1lbnQgPSAoaHRtbENsYXNzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChodG1sQ2xhc3MpO1xuICAgICAgICByZXR1cm4gc3BhbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbWFnZUVsZW1lbnQgPSAoc3JjLCBodG1sQ2xhc3MpID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKGh0bWxDbGFzcyk7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICdmYWxzZScpO1xuICAgICAgICByZXR1cm4gaW1nO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjcmVhdGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHJldHVybiBpbnB1dEZvcm07XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSW5wdXRGaWVsZCA9IChwbGFjZWhvbGRlclRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdXNlcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHVzZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXJUZXh0KTtcbiAgICAgICAgdXNlcklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1pbnB1dCcpO1xuICAgICAgICB1c2VySW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB1c2VySW5wdXQ7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRGl2ID0gKGh0bWxDbGFzcykgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBodG1sQ2xhc3MpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRlTGlzdEVsZW1lbnQsIGNyZWF0ZVNwYW5FbGVtZW50LCBjcmVhdGVJbWFnZUVsZW1lbnQsIGNyZWF0ZUlucHV0RmllbGQsIGNyZWF0ZUZvcm0sIGNyZWF0ZURpdn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudHMoKTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudHMgZnJvbSBcIi4vY3JlYXRlRE9NRWxlbWVudHNcIjtcblxuY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0RWxlbWVudCA9ICBjcmVhdGVFbGVtZW50cy5jcmVhdGVMaXN0RWxlbWVudCgncHJvamVjdC1pdGVtJyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdElucHV0Rm9ybSA9IGNyZWF0ZUVsZW1lbnRzLmNyZWF0ZUZvcm0oKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gY3JlYXRlRWxlbWVudHMuY3JlYXRlSW5wdXRGaWVsZCgnUHJvamVjdCBuYW1lLi4uJyk7XG4gICAgcHJvamVjdElucHV0Rm9ybS5hcHBlbmQocHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZUVsZW1lbnRzLmNyZWF0ZVNwYW5FbGVtZW50KCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICAgIH1cblxuICAgIGNvbnN0IGljb25TcGFuID0gY3JlYXRlRWxlbWVudHMuY3JlYXRlU3BhbkVsZW1lbnQoJ2ljb25zJyk7XG4gICAgY29uc3QgZWRpdEljb24gPSBjcmVhdGVFbGVtZW50cy5jcmVhdGVJbWFnZUVsZW1lbnQoJ2ltYWdlcy9lZGl0LWljb24uc3ZnJywgJ2VkaXQtaWNvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBjcmVhdGVFbGVtZW50cy5jcmVhdGVJbWFnZUVsZW1lbnQoJ2ltYWdlcy9kZWxldGUtaWNvbi5zdmcnLCAnZGVsZXRlLWljb24nKTtcbiAgICBcbiAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QnKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgXG4gICAgaWNvblNwYW4uYXBwZW5kKGVkaXRJY29uLCBkZWxldGVJY29uKTtcbiAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kKHByb2plY3RJbnB1dEZvcm0sIGljb25TcGFuKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbnNlcnRCZWZvcmUocHJvamVjdExpc3RFbGVtZW50LCBwcm9qZWN0c0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcblxuICAgIHJldHVybiB7bmV3UHJvamVjdCwgcHJvamVjdE5hbWVJbnB1dCwgcHJvamVjdElucHV0Rm9ybSwgaWNvblNwYW4sIHByb2plY3RMaXN0RWxlbWVudH1cbn1cblxuY29uc3QgYXdhaXRpbmdJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1pbnB1dCcpO1xuICAgIGlmICh1c2VySW5wdXQgIT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGdldFVzZXJJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1pbnB1dCcpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gdXNlcklucHV0LnZhbHVlO1xuXG4gICAgcmV0dXJuIHByb2plY3ROYW1lO1xufVxuXG5jb25zdCBoYW5kbGVVc2VySW5wdXQgPSAoKSA9PiB7IFxuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLWlucHV0JylcbiAgICBjb25zdCBpbnB1dEZvcm0gPSB1c2VySW5wdXQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGlucHV0Rm9ybS5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHByb2plY3RTcGFuID0gY3JlYXRlRWxlbWVudHMuY3JlYXRlU3BhbkVsZW1lbnQoJ3Byb2plY3QtbmFtZScpO1xuXG4gICAgXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRVc2VySW5wdXQoKTtcbiAgICBpZiAocHJvamVjdE5hbWUubWF0Y2goL15bXFxzXS8pKSByZXR1cm4gYWxlcnQoJ1Byb2plY3QgbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCBhIHNwYWNlJyk7XG5cbiAgICBwcm9qZWN0U3Bhbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIHVzZXJJbnB1dC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIHByb2plY3RJdGVtLmluc2VydEJlZm9yZShwcm9qZWN0U3BhbiwgcHJvamVjdEl0ZW0uY2hpbGROb2Rlc1swXSk7IFxufVxuXG5jb25zdCBhZGRQcm9qZWN0VG9Ob3RlcGFkID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0TnVtYmVyID0gcHJvamVjdExpc3QuY2hpbGRFbGVtZW50Q291bnQgLSAyO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdExpc3QuY2hpbGRyZW5bY3VycmVudFByb2plY3ROdW1iZXJdLnRleHRDb250ZW50O1xuXG4gICAgY29uc3Qgbm90ZXBhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cml0aW5nLWFyZWEnKTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlRWxlbWVudHMuY3JlYXRlRGl2KCdwcm9qZWN0Jyk7XG4gICAgY29uc3Qgc2tpcExpbmUgPSBjcmVhdGVFbGVtZW50cy5jcmVhdGVEaXYoJ3NraXAtbGluZScpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gY3JlYXRlRWxlbWVudHMuY3JlYXRlRGl2KCdwcm9qZWN0LWhlYWRpbmcnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdub3RlcGFkLXRleHQnKTtcbiAgICBoMi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25vdGVwYWQtdGV4dCcpO1xuICAgIGgzLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICBcbiAgICBwcm9qZWN0SGVhZGluZy5hcHBlbmQoaDIsIGgzKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0SGVhZGluZyk7XG4gICAgbm90ZXBhZC5hcHBlbmQocHJvamVjdERpdiwgc2tpcExpbmUpO1xuICAgIC8vIFRPRE86IGFkZCBBZGQgVGFzayBidXR0b25cbn1cbi8vIFRPRE86IGNyZWF0ZSBmdW5jdGlvbiB0byB1cGRhdGUgcHJvamVjdCBuYW1lIG9uIG5vdGVwYWQgd2hlbiB1c2VyIGVkaXRzIGl0XG5cbmNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgaWYgKGF3YWl0aW5nSW5wdXQoKSkgcmV0dXJuO1xuICAgIGFkZFByb2plY3RUb1NpZGViYXIoKTtcblxuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLWlucHV0JylcbiAgICBjb25zdCBpbnB1dEZvcm0gPSB1c2VySW5wdXQucGFyZW50RWxlbWVudDtcblxuICAgIGlucHV0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhhbmRsZVVzZXJJbnB1dCgpO1xuICAgICAgICBpZiAoIWF3YWl0aW5nSW5wdXQoKSkgYWRkUHJvamVjdFRvTm90ZXBhZCgpO1xuICAgIH0pO1xufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtcHJvamVjdCcpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiBcbmNvbnN0IGVkaXRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICBpZiAoYXdhaXRpbmdJbnB1dCgpKSByZXR1cm47XG4gICAgY29uc3QgaW5wdXRGb3JtID0gY3JlYXRlRWxlbWVudHMuY3JlYXRlRm9ybSgpO1xuICAgIGNvbnN0IGlucHV0RmllbGQgPSBjcmVhdGVFbGVtZW50cy5jcmVhdGVJbnB1dEZpZWxkKCdQcm9qZWN0IG5hbWUuLi4nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgIGlucHV0RmllbGQudmFsdWUgPSBwcm9qZWN0TmFtZS50ZXh0Q29udGVudDtcbiAgICBwcm9qZWN0TmFtZS5yZW1vdmUoKTtcbiAgICBpbnB1dEZvcm0uYXBwZW5kKGlucHV0RmllbGQpO1xuXG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJyk7XG4gICAgcHJvamVjdEl0ZW0uaW5zZXJ0QmVmb3JlKGlucHV0Rm9ybSwgcHJvamVjdEl0ZW0uY2hpbGROb2Rlc1swXSk7XG5cbiAgICBpbnB1dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoYW5kbGVVc2VySW5wdXQoKTtcbiAgICAgICAgLy9pZiAoIWF3YWl0aW5nSW5wdXQoKSkgZWRpdFByb2plY3RPbk5vdGVwYWQoKTtcbiAgICB9KTtcbi8vICAgIGhhbmRsZVVzZXJJbnB1dCgpO1xufVxuXG5leHBvcnQgeyBcbiAgICBhZGRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZWRpdFByb2plY3QsXG4gICAgY3JlYXRlRWxlbWVudHNcbn0iLCJpbXBvcnQge2FkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHt0b2dnbGVUYXNrLCBhZGRUYXNrVG9ET019IGZyb20gXCIuL3Rhc2tzXCI7XG5cbi8vIFNpZGViYXIgTW9kdWxlXG5jb25zdCBzaWRlYmFyQ29udHJvbGxlciA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBtb2JpbGVUb2dnbGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFycy1pY29uLW1vYmlsZScpO1xuICAgIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNCAmJiBtb2JpbGVUb2dnbGVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBtb2JpbGVUb2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XG4gICAgXG4gICAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUtc2lkZWJhcicpO1xuICAgICAgICBpZiAoc2NyZWVuLndpZHRoIDw9IDEwMjQpIG1vYmlsZVRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhcnMtaWNvbicpO1xuICAgIHRvZ2dsZUJ0bi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXIpO1xuICAgIH0pOyAgICAgICAgXG59KSgpO1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgZGVsZXRlUHJvamVjdCgpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtcHJvamVjdF0nKTtcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG4gICAgXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QnKSkge1xuICAgICAgICAgICAgZWRpdFByb2plY3QoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cbmNvbnN0IHRhc2tDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2staXRlbScpKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB0b2dnbGVUYXNrKHRhc2tFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtdGFzaycpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRhc2snKTtcbiAgICAgICAgICAgIGFkZFRhc2tUb0RPTSgpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn0pKCk7IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnRzIGZyb20gXCIuL2NyZWF0ZURPTUVsZW1lbnRzXCI7XG5cbmNvbnN0IHRvZ2dsZVRhc2sgPSAodGFza0VsZW1lbnQpID0+IHtcbiAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbn1cblxuLy8gVE9ETzogQmVmb3JlIGNvbnRpbnVpbmcgd2l0aCB0aGlzIHN0dWZmLCBnZXQgdGhlIHByb2plY3QgZGl2IHN0dWZmIG9uIG5vdGVwYWQgd2hlbiB1c2VyIGFkZHMgbmV3IHByb2plY3RcbmNvbnN0IGFkZFRhc2tUb0RPTSA9ICgpID0+IHtcbiAgICAvLyBjcmVhdGUgc3BhbiB3aXRoIGNsYXNzICd0YXNrLWl0ZW0nXG4gICAgLy8gc3BhbiBzaG91bGQgZ2V0IHVzZXIgaW5wdXQgYW5kIHNhdmUgaXQgYXMgc3Bhbi50ZXh0Q29udGVudFxuICAgIC8vIGNyZWF0ZSBzcGFuIHdpdGggY2xhc3MgJ2ljb25zJ1xuICAgIC8vIGFkZCBlZGl0IGFuZCBkZWxldGUgaWNvbnNcblxuICAgIGNvbnN0IHRhc2tTcGFuID0gY3JlYXRlRWxlbWVudHMuY3JlYXRlU3BhbkVsZW1lbnQoJ3Rhc2staXRlbScpO1xuICAgIHRhc2tTcGFuLnRleHRDb250ZW50ID0gJ3VzZXIgaW5wdXQnOyAvLyBUT0RPOiBHZXQgdXNlciBpbnB1dFxuXG4gICAgY29uc3QgaWNvblNwYW4gPSBjcmVhdGVFbGVtZW50cy5jcmVhdGVTcGFuRWxlbWVudCgnaWNvbnMnKTtcbiAgICAvLyBUT0RPOiBDYW4ndCBhZGQgc2Vjb25kIGNsYXNzIHdpdGggdGhpcyBtZXRob2Qgc28gZmlndXJlIG91dCBhbm90aGVyIHdheSB0byBhZGQgYSBzZWNvbmQgY2xhc3MgdG8gaWNvbnNcbiAgICBjb25zdCBlZGl0SWNvbiA9IGNyZWF0ZUVsZW1lbnRzLmNyZWF0ZUltYWdlRWxlbWVudCgnaW1hZ2VzL2VkaXQtaWNvbi5zdmcnLCAnZWRpdC1pY29uJyk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGNyZWF0ZUVsZW1lbnRzLmNyZWF0ZUltYWdlRWxlbWVudCgnaW1hZ2VzL2RlbGV0ZS1pY29uLnN2ZycsICdkZWxldGUtaWNvbicpO1xuXG4gICAgaWNvblNwYW4uYXBwZW5kKGVkaXRJY29uLCBkZWxldGVJY29uKTtcbiAgICB0YXNrU3Bhbi5hcHBlbmQoaWNvblNwYW4pO1xuXG4gICAgcmV0dXJuIHRhc2tTcGFuO1xufVxuXG5jb25zdCBhZGREdWVEYXRlVG9ET00gPSAoKSA9PiB7XG4gICAgLy8gY3JlYXRlIHNwYW4gd2l0aCBjbGFzcyAnZHVlLWRhdGUnXG4gICAgLy8gY3JlYXRlIHByaW9yaXR5IGljb24gd2l0aCBjbGFzcyAncHJpb3JpdHktaWNvbiBwcmlvcml0eS1sb3cnXG4gICAgLy8gY3JlYXRlIHNwYW4gd2l0aCBjbGFzcyAnZGF0ZScgYW5kIHNldCB0ZXh0Q29udGVudCB0byBkZWZhdWx0IGRhdGUgKGN1cnJlbnQgZGF0ZSlcbiAgICAvLyBjcmVhdGUgY2FsZW5kYXIgaWNvbiB3aXRoIGNsYXNzICdjYWxlbmRhci1pY29uJ1xuICAgIGNvbnN0IGNyZWF0ZUR1ZURhdGUgPSBjcmVhdGVFbGVtZW50cygpO1xuXG4gICAgLy9jb25zdCBkdWVEYXRlU3BhbiA9IGNyZWF0ZUR1ZURhdGUuXG59XG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgLy8gY3JlYXRlIGxpIHdpdGggY2xhc3MgJ3Rhc2snIGFuZCBhcHBlbmQgZXZlcnl0aGluZyB0byBpdFxuXG59XG5cbmV4cG9ydCB7XG4gICAgdG9nZ2xlVGFzayxcbiAgICBhZGRUYXNrVG9ET00sXG59Il0sIm5hbWVzIjpbImh0bWxDbGFzcyIsImxpIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3BhbiIsImNsYXNzTGlzdCIsImFkZCIsInNyYyIsImltZyIsInBsYWNlaG9sZGVyVGV4dCIsInVzZXJJbnB1dCIsInJlcXVpcmVkIiwiZGl2IiwiYXdhaXRpbmdJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVVc2VySW5wdXQiLCJwcm9qZWN0SXRlbSIsInBhcmVudEVsZW1lbnQiLCJwcm9qZWN0U3BhbiIsInByb2plY3ROYW1lIiwidmFsdWUiLCJtYXRjaCIsImFsZXJ0IiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJpbnNlcnRCZWZvcmUiLCJjaGlsZE5vZGVzIiwiYWRkUHJvamVjdCIsInByb2plY3RzQ29udGFpbmVyIiwicHJvamVjdExpc3RFbGVtZW50IiwicHJvamVjdElucHV0Rm9ybSIsInByb2plY3ROYW1lSW5wdXQiLCJhcHBlbmQiLCJpY29uU3BhbiIsImVkaXRJY29uIiwiZGVsZXRlSWNvbiIsImxhc3RFbGVtZW50Q2hpbGQiLCJhZGRQcm9qZWN0VG9TaWRlYmFyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3RMaXN0IiwiY3VycmVudFByb2plY3ROdW1iZXIiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkcmVuIiwibm90ZXBhZCIsInByb2plY3REaXYiLCJza2lwTGluZSIsInByb2plY3RIZWFkaW5nIiwiaDIiLCJoMyIsImFkZFByb2plY3RUb05vdGVwYWQiLCJtb2JpbGVUb2dnbGVCdG4iLCJnZXRFbGVtZW50QnlJZCIsInNjcmVlbiIsIndpZHRoIiwiY29udGFpbnMiLCJ0b2dnbGUiLCJzaWRlYmFyIiwidG9nZ2xlU2lkZWJhciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsImlucHV0Rm9ybSIsImlucHV0RmllbGQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiZWRpdFByb2plY3QiLCJjb25zb2xlIiwibG9nIiwidGFza1NwYW4iLCJhZGRUYXNrVG9ET00iXSwic291cmNlUm9vdCI6IiJ9