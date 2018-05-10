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
var auth_guard_artist_service_1 = require("./shared/auth-guard-artist.service");
var auth_guard_login_service_1 = require("./shared/auth-guard-login.service");
var artist_service_1 = require("./shared/artist.service");
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
            providers: [
                auth_guard_artist_service_1.AuthGuardArtist,
                auth_guard_login_service_1.AuthGuardLogin,
                artist_service_1.CurrentArtist
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLGlCQUFpQjtBQUNqQixzRUFBbUY7QUFDbkYscUVBQW1FO0FBQ25FLHdCQUF3QjtBQUN4QixpREFBK0M7QUFDL0MsNkNBQThEO0FBQzlELGlGQUE4RTtBQUM5RSxnRkFBcUU7QUFDckUsOEVBQW1FO0FBQ25FLDBEQUF3RDtBQUN4RCxrQkFBa0I7QUFDbEIsdURBQTJEO0FBRTNELFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDWixPQUFPLEVBQUUsS0FBSztJQUNkLGFBQWEsRUFBRSxnQ0FBZ0M7SUFDL0Msa0JBQWtCLEVBQUUsVUFBVSxJQUFJO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RixDQUFDO0lBQ0wsQ0FBQztDQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQztLQUMvQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7QUF3QnRDO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUF0QnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2FBQ3pDO1lBQ0QsWUFBWTtnQkFDViw0QkFBWTtxQkFDVCxtQ0FBcUI7Z0JBQ3hCLCtCQUFxQjtnQkFDckIsa0NBQWU7Z0JBQ2YseUNBQWtCO2NBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDJDQUFlO2dCQUNmLHlDQUFjO2dCQUNkLDhCQUFhO2FBQ2Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuLy8gRFJBV0VSIElNUE9SVFNcbmltcG9ydCB7IFNJREVEUkFXRVJfRElSRUNUSVZFUyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudFwiO1xuLy8gQVBQIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBCb3R0b21CYXJDb21wb25lbnQgfSBmcm9tIFwiLi9zaGFyZWQvYm90dG9tLWJhci9ib3R0b20tYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXV0aEd1YXJkQXJ0aXN0IH0gZnJvbSAnLi9zaGFyZWQvYXV0aC1ndWFyZC1hcnRpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoR3VhcmRMb2dpbiB9IGZyb20gJy4vc2hhcmVkL2F1dGgtZ3VhcmQtbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBDdXJyZW50QXJ0aXN0IH0gZnJvbSAnLi9zaGFyZWQvYXJ0aXN0LnNlcnZpY2UnO1xuLy8gRklSRUJBU0UgSU1QT1JUXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlICgnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZScpO1xuXG5maXJlYmFzZS5pbml0KHtcbiAgcGVyc2lzdDogZmFsc2UsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdnczovL2Nsb3duaWEtZDY3YTIuYXBwc3BvdC5jb20nLFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uIChkYXRhKSB7IC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICBjb25zb2xlLmxvZyhkYXRhLmxvZ2dlZEluID8gXCJMb2dnZWQgaW4gdG8gZmlyZWJhc2VcIiA6IFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcidzIGVtYWlsIGFkZHJlc3M6IFwiICsgKGRhdGEudXNlci5lbWFpbCA/IGRhdGEudXNlci5lbWFpbCA6IFwiTi9BXCIpKTtcbiAgICB9XG59LFxufSkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpKVxuICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzLFxuICAgIFNJREVEUkFXRVJfRElSRUNUSVZFUyxcbiAgICBEcmF3ZXJDb21wb25lbnQsXG4gICAgQm90dG9tQmFyQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEF1dGhHdWFyZEFydGlzdCxcbiAgICBBdXRoR3VhcmRMb2dpbixcbiAgICBDdXJyZW50QXJ0aXN0XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9Il19