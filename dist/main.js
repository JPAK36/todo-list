(()=>{"use strict";const e=()=>{let e=!0;const t=(()=>{const e=()=>document.createElement("li"),t=e=>{const t=document.createElement("span");return t.classList.add(e),t},n=(e,t)=>{const n=document.createElement("img");return n.classList.add(t),n.setAttribute("src",e),n},c=()=>{const e=document.createElement("input");return e.setAttribute("type","text"),e.setAttribute("placeholder","Project name..."),e.setAttribute("id","user-input"),e.required=!0,e},r=()=>document.createElement("form"),o=document.querySelector(".project-list"),s=e(),i=r(),a=c();i.append(a);const d=t("icons"),l=n("images/edit-icon.svg","edit-icon"),u=n("images/delete-icon.svg","delete-icon");return d.append(l,u),s.append(i,d),o.insertBefore(s,o.lastElementChild),{newProject:e=>{const n=t("project-name");return n.textContent=e,n},projectNameInput:a,projectInputForm:i,iconSpan:d,projectListElement:s}})();t.projectInputForm.addEventListener("submit",(function(n){n.preventDefault();const c=t.projectNameInput.value;return c.match(/^[\s]/)?alert("Project name cannot start with a space"):(t.projectInputForm.remove(),t.projectListElement.insertBefore(t.newProject(c),t.iconSpan),e=!1)}))};(()=>{const t=document.getElementById("bars-icon-mobile");screen.width<=1024&&t.classList.contains("hidden")&&t.classList.toggle("hidden");const n=document.getElementById("sidebar"),c=()=>{n.classList.toggle("toggle-sidebar"),screen.width<=1024&&t.classList.toggle("hidden")};document.querySelectorAll(".bars-icon").forEach((e=>{e.addEventListener("click",c)})),document.querySelector("[data-add-project]").addEventListener("click",e)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBRUEsTUEwRkEsRUF4Qm1CLEtBT2YsSUFBSUEsR0FBZ0IsRUFFcEIsTUFBTUMsRUFyQ2UsTUFDckIsTUFBTUMsRUFyQ29CLElBQ1hDLFNBQVNDLGNBQWMsTUFvQ2hDRixFQWhDcUJHLElBQ3ZCLE1BQU1DLEVBQU9ILFNBQVNDLGNBQWMsUUFFcEMsT0FEQUUsRUFBS0MsVUFBVUMsSUFBSUgsR0FDWkMsR0E2QkxKLEVBMUJxQixDQUFDTyxFQUFLSixLQUM3QixNQUFNSyxFQUFNUCxTQUFTQyxjQUFjLE9BR25DLE9BRkFNLEVBQUlILFVBQVVDLElBQUlILEdBQ2xCSyxFQUFJQyxhQUFhLE1BQU9GLEdBQ2pCQyxHQXNCTFIsRUFkbUIsS0FDckIsTUFBTVUsRUFBWVQsU0FBU0MsY0FBYyxTQU16QyxPQUxBUSxFQUFVRCxhQUFhLE9BQVEsUUFDL0JDLEVBQVVELGFBQWEsY0FBZSxtQkFDdENDLEVBQVVELGFBQWEsS0FBTSxjQUM3QkMsRUFBVUMsVUFBVyxFQUVkRCxHQU9MVixFQW5CYSxJQUNHQyxTQUFTQyxjQUFjLFFBbUJ2Q1UsRUFBb0JYLFNBQVNZLGNBQWMsaUJBRTNDQyxFQUFzQmQsSUFFdEJlLEVBQW1CZixJQUNuQmdCLEVBQW1CaEIsSUFDekJlLEVBQWlCRSxPQUFPRCxHQUV4QixNQU1NRSxFQUFXbEIsRUFBZ0MsU0FDM0NtQixFQUFXbkIsRUFBaUMsdUJBQXdCLGFBQ3BFb0IsRUFBYXBCLEVBQWlDLHlCQUEwQixlQU05RSxPQUpBa0IsRUFBU0QsT0FBT0UsRUFBVUMsR0FDMUJOLEVBQW1CRyxPQUFPRixFQUFrQkcsR0FDNUNOLEVBQWtCUyxhQUFhUCxFQUFvQkYsRUFBa0JVLGtCQUU5RCxDQUFDQyxXQWRZQyxJQUNoQixNQUFNRCxFQUFhdkIsRUFBZ0MsZ0JBRW5ELE9BREF1QixFQUFXRSxZQUFjRCxFQUNsQkQsR0FXU1AsaUJBQUFBLEVBQWtCRCxpQkFBQUEsRUFBa0JHLFNBQUFBLEVBQVVKLG1CQUFBQSxJQWF4Q1ksR0FFMUIzQixFQUFrQmdCLGlCQUFpQlksaUJBQWlCLFVBQVUsU0FBVUMsR0FDcEVBLEVBQUVDLGlCQUNGLE1BQU1DLEVBQWMvQixFQUFrQmlCLGlCQUFpQmUsTUFFdkQsT0FBSUQsRUFBWUUsTUFBTSxTQUFpQkMsTUFBTSwyQ0FFN0NsQyxFQUFrQmdCLGlCQUFpQm1CLFNBQ25DbkMsRUFBa0JlLG1CQUFtQk8sYUFBYXRCLEVBQWtCd0IsV0FBV08sR0FBYy9CLEVBQWtCbUIsVUFDeEdwQixHQUFnQixPQ3BGTCxNQUV0QixNQUFNcUMsRUFBa0JsQyxTQUFTbUMsZUFBZSxvQkFDNUNDLE9BQU9DLE9BQVMsTUFBUUgsRUFBZ0I5QixVQUFVa0MsU0FBUyxXQUMzREosRUFBZ0I5QixVQUFVbUMsT0FBTyxVQUdyQyxNQUFNQyxFQUFVeEMsU0FBU21DLGVBQWUsV0FFbENNLEVBQWdCLEtBQ2xCRCxFQUFRcEMsVUFBVW1DLE9BQU8sa0JBQ3JCSCxPQUFPQyxPQUFTLE1BQU1ILEVBQWdCOUIsVUFBVW1DLE9BQU8sV0FHN0N2QyxTQUFTMEMsaUJBQWlCLGNBQ2xDQyxTQUFRQyxJQUNkQSxFQUFPbEIsaUJBQWlCLFFBQVNlLE1BR2Z6QyxTQUFTWSxjQUFjLHNCQUMvQmMsaUJBQWlCLFFBQVMsSUFwQmxCLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gRE9NIEVsZW1lbnRzIEZhY3RvcnkgRnVuY3Rpb25cbmNvbnN0IGNyZWF0ZUVsZW1lbnRzID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZUxpc3RFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHJldHVybiBsaTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTcGFuRWxlbWVudCA9IChodG1sQ2xhc3MpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKGh0bWxDbGFzcyk7XG4gICAgICAgIHJldHVybiBzcGFuO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUltYWdlRWxlbWVudCA9IChzcmMsIGh0bWxDbGFzcykgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoaHRtbENsYXNzKTtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICAgICAgcmV0dXJuIGltZztcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICByZXR1cm4gaW5wdXRGb3JtO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUlucHV0RmllbGQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHVzZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB1c2VySW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IG5hbWUuLi4nKTtcbiAgICAgICAgdXNlcklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1pbnB1dCcpO1xuICAgICAgICB1c2VySW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB1c2VySW5wdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtjcmVhdGVMaXN0RWxlbWVudCwgY3JlYXRlU3BhbkVsZW1lbnQsIGNyZWF0ZUltYWdlRWxlbWVudCwgY3JlYXRlSW5wdXRGaWVsZCwgY3JlYXRlRm9ybX1cbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdERPTSA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gY3JlYXRlRWxlbWVudHMoKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0RWxlbWVudCA9ICBjcmVhdGVQcm9qZWN0LmNyZWF0ZUxpc3RFbGVtZW50KCk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdElucHV0Rm9ybSA9IGNyZWF0ZVByb2plY3QuY3JlYXRlRm9ybSgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBjcmVhdGVQcm9qZWN0LmNyZWF0ZUlucHV0RmllbGQoKTtcbiAgICBwcm9qZWN0SW5wdXRGb3JtLmFwcGVuZChwcm9qZWN0TmFtZUlucHV0KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdC5jcmVhdGVTcGFuRWxlbWVudCgncHJvamVjdC1uYW1lJyk7XG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBpY29uU3BhbiA9IGNyZWF0ZVByb2plY3QuY3JlYXRlU3BhbkVsZW1lbnQoJ2ljb25zJyk7XG4gICAgY29uc3QgZWRpdEljb24gPSBjcmVhdGVQcm9qZWN0LmNyZWF0ZUltYWdlRWxlbWVudCgnaW1hZ2VzL2VkaXQtaWNvbi5zdmcnLCAnZWRpdC1pY29uJyk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGNyZWF0ZVByb2plY3QuY3JlYXRlSW1hZ2VFbGVtZW50KCdpbWFnZXMvZGVsZXRlLWljb24uc3ZnJywgJ2RlbGV0ZS1pY29uJyk7XG4gICAgXG4gICAgaWNvblNwYW4uYXBwZW5kKGVkaXRJY29uLCBkZWxldGVJY29uKTtcbiAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kKHByb2plY3RJbnB1dEZvcm0sIGljb25TcGFuKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbnNlcnRCZWZvcmUocHJvamVjdExpc3RFbGVtZW50LCBwcm9qZWN0c0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcblxuICAgIHJldHVybiB7bmV3UHJvamVjdCwgcHJvamVjdE5hbWVJbnB1dCwgcHJvamVjdElucHV0Rm9ybSwgaWNvblNwYW4sIHByb2plY3RMaXN0RWxlbWVudH1cbn1cblxuLy8gQWRkIFByb2plY3QgRmFjdG9yeSBGdW5jdGlvblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAvKiBUT0RPOiB1c2UgYXdhaXRpbmdJbnB1dCB2YXJpYWJsZSB0byBwcmV2ZW50IGFkZCBwcm9qZWN0IGJ1dHRvbiBcbiAgICBiZWluZyBwcmVzc2VkIG11bHRpcGxlIHRpbWVzLlxuXG4gICAgQWxzbyBtYWtlIGl0IHNvIHRoYXQgaWYgdGhlIHVzZXIgY2xpY2tzIGFkZCBwcm9qZWN0IGFuZCB0aGVuIGNsaWNrcyBcbiAgICBzb21ldGhpbmcgZWxzZSB3aXRoIG91dCBjaG9vc2luZyBhIG5hbWUgdG8gcmVtb3ZlIGl0XG4gICAgKi9cbiAgICBsZXQgYXdhaXRpbmdJbnB1dCA9IHRydWU7XG5cbiAgICBjb25zdCBjcmVhdGVET01FbGVtZW50cyA9IGNyZWF0ZVByb2plY3RET00oKTtcbiAgIFxuICAgIGNyZWF0ZURPTUVsZW1lbnRzLnByb2plY3RJbnB1dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGNyZWF0ZURPTUVsZW1lbnRzLnByb2plY3ROYW1lSW5wdXQudmFsdWU7XG5cbiAgICAgICAgaWYgKHByb2plY3ROYW1lLm1hdGNoKC9eW1xcc10vKSkgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0IG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggYSBzcGFjZScpO1xuXG4gICAgICAgIGNyZWF0ZURPTUVsZW1lbnRzLnByb2plY3RJbnB1dEZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIGNyZWF0ZURPTUVsZW1lbnRzLnByb2plY3RMaXN0RWxlbWVudC5pbnNlcnRCZWZvcmUoY3JlYXRlRE9NRWxlbWVudHMubmV3UHJvamVjdChwcm9qZWN0TmFtZSksIGNyZWF0ZURPTUVsZW1lbnRzLmljb25TcGFuKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0aW5nSW5wdXQgPSBmYWxzZTtcbiAgICB9KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0IiwiaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuLy8gU2lkZWJhciBNb2R1bGVcbmNvbnN0IHNpZGViYXJDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IG1vYmlsZVRvZ2dsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXJzLWljb24tbW9iaWxlJyk7XG4gICAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0ICYmIG1vYmlsZVRvZ2dsZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIG1vYmlsZVRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICBcbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZS1zaWRlYmFyJyk7XG4gICAgICAgIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNCkgbW9iaWxlVG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFycy1pY29uJyk7XG4gICAgdG9nZ2xlQnRuLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhcik7XG4gICAgfSk7ICAgIFxuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC1wcm9qZWN0XScpO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcbn0pKCk7Il0sIm5hbWVzIjpbImF3YWl0aW5nSW5wdXQiLCJjcmVhdGVET01FbGVtZW50cyIsImNyZWF0ZVByb2plY3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJodG1sQ2xhc3MiLCJzcGFuIiwiY2xhc3NMaXN0IiwiYWRkIiwic3JjIiwiaW1nIiwic2V0QXR0cmlidXRlIiwidXNlcklucHV0IiwicmVxdWlyZWQiLCJwcm9qZWN0c0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0TGlzdEVsZW1lbnQiLCJwcm9qZWN0SW5wdXRGb3JtIiwicHJvamVjdE5hbWVJbnB1dCIsImFwcGVuZCIsImljb25TcGFuIiwiZWRpdEljb24iLCJkZWxldGVJY29uIiwiaW5zZXJ0QmVmb3JlIiwibGFzdEVsZW1lbnRDaGlsZCIsIm5ld1Byb2plY3QiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJjcmVhdGVQcm9qZWN0RE9NIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3ROYW1lIiwidmFsdWUiLCJtYXRjaCIsImFsZXJ0IiwicmVtb3ZlIiwibW9iaWxlVG9nZ2xlQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JlZW4iLCJ3aWR0aCIsImNvbnRhaW5zIiwidG9nZ2xlIiwic2lkZWJhciIsInRvZ2dsZVNpZGViYXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=