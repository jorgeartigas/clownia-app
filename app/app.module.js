"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
// DRAWER IMPORTS
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var drawer_component_1 = require("./shared/drawer/drawer.component");
// APP COMPONENT IMPORTS
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var bottom_bar_component_1 = require("./shared/bottom-bar/bottom-bar.component");
// FIREBASE IMPORT
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    persist: false,
    storageBucket: 'gs://clownia-d67a2.appspot.com',
    onAuthStateChanged: function (data) {
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        if (data.loggedIn) {
            console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        }
    },
}).then(function () { return console.log("Firebase initialized"); })
    .catch(function (error) { return console.log(error); });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(app_routing_1.navigatableComponents, [
                angular_1.SIDEDRAWER_DIRECTIVES,
                drawer_component_1.DrawerComponent,
                bottom_bar_component_1.BottomBarComponent
            ]),
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLGlCQUFpQjtBQUNqQixzRUFBbUY7QUFDbkYscUVBQW1FO0FBQ25FLHdCQUF3QjtBQUN4QixpREFBK0M7QUFDL0MsNkNBQThEO0FBQzlELGlGQUE4RTtBQUU5RSxrQkFBa0I7QUFDbEIsdURBQTJEO0FBRTNELFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDWixPQUFPLEVBQUUsS0FBSztJQUNkLGFBQWEsRUFBRSxnQ0FBZ0M7SUFDL0Msa0JBQWtCLEVBQUUsVUFBVSxJQUFJO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RixDQUFDO0lBQ0wsQ0FBQztDQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQztLQUMvQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7QUFtQnRDO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFqQnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2FBQ3pDO1lBQ0QsWUFBWTtnQkFDViw0QkFBWTtxQkFDVCxtQ0FBcUI7Z0JBQ3hCLCtCQUFxQjtnQkFDckIsa0NBQWU7Z0JBQ2YseUNBQWtCO2NBQ25CO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbi8vIERSQVdFUiBJTVBPUlRTXG5pbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5jb21wb25lbnRcIjtcbi8vIEFQUCBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQm90dG9tQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vc2hhcmVkL2JvdHRvbS1iYXIvYm90dG9tLWJhci5jb21wb25lbnRcIjtcblxuLy8gRklSRUJBU0UgSU1QT1JUXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlICgnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZScpO1xuXG5maXJlYmFzZS5pbml0KHtcbiAgcGVyc2lzdDogZmFsc2UsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdnczovL2Nsb3duaWEtZDY3YTIuYXBwc3BvdC5jb20nLFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uIChkYXRhKSB7IC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICBjb25zb2xlLmxvZyhkYXRhLmxvZ2dlZEluID8gXCJMb2dnZWQgaW4gdG8gZmlyZWJhc2VcIiA6IFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcidzIGVtYWlsIGFkZHJlc3M6IFwiICsgKGRhdGEudXNlci5lbWFpbCA/IGRhdGEudXNlci5lbWFpbCA6IFwiTi9BXCIpKTtcbiAgICB9XG59LFxufSkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpKVxuICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzLFxuICAgIFNJREVEUkFXRVJfRElSRUNUSVZFUyxcbiAgICBEcmF3ZXJDb21wb25lbnQsXG4gICAgQm90dG9tQmFyQ29tcG9uZW50XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9Il19