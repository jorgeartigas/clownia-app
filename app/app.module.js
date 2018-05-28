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
var artist_service_1 = require("./shared/artist.service");
var user_service_1 = require("./shared/user/user.service");
// FIREBASE IMPORT
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    persist: true,
    storageBucket: 'gs://clownia-d67a2.appspot.com',
    onAuthStateChanged: function (data) {
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        if (data.loggedIn) {
            console.log("Users+ uid: " + data.user.uid);
            console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        }
    },
}).then(function () {
    console.log("Firebase initialized");
})
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
                artist_service_1.CurrentArtist,
                user_service_1.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLGlCQUFpQjtBQUNqQixzRUFBbUY7QUFDbkYscUVBQW1FO0FBQ25FLHdCQUF3QjtBQUN4QixpREFBK0M7QUFDL0MsNkNBQThEO0FBQzlELGlGQUE4RTtBQUM5RSxnRkFBcUU7QUFDckUsMERBQXdEO0FBQ3hELDJEQUF5RDtBQUN6RCxrQkFBa0I7QUFDbEIsdURBQTJEO0FBRTNELFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDWixPQUFPLEVBQUUsSUFBSTtJQUNiLGFBQWEsRUFBRSxnQ0FBZ0M7SUFDL0Msa0JBQWtCLEVBQUUsVUFBVSxJQUFJO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7SUFDRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtBQUN2QyxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7QUF3QnhDO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUF0QnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2FBQ3pDO1lBQ0QsWUFBWTtnQkFDViw0QkFBWTtxQkFDVCxtQ0FBcUI7Z0JBQ3hCLCtCQUFxQjtnQkFDckIsa0NBQWU7Z0JBQ2YseUNBQWtCO2NBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDJDQUFlO2dCQUNmLDhCQUFhO2dCQUNiLDBCQUFXO2FBQ1o7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuLy8gRFJBV0VSIElNUE9SVFNcbmltcG9ydCB7IFNJREVEUkFXRVJfRElSRUNUSVZFUyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudFwiO1xuLy8gQVBQIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBCb3R0b21CYXJDb21wb25lbnQgfSBmcm9tIFwiLi9zaGFyZWQvYm90dG9tLWJhci9ib3R0b20tYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXV0aEd1YXJkQXJ0aXN0IH0gZnJvbSAnLi9zaGFyZWQvYXV0aC1ndWFyZC1hcnRpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBDdXJyZW50QXJ0aXN0IH0gZnJvbSAnLi9zaGFyZWQvYXJ0aXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZSc7XG4vLyBGSVJFQkFTRSBJTVBPUlRcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUgKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XG5cbmZpcmViYXNlLmluaXQoe1xuICBwZXJzaXN0OiB0cnVlLFxuICBzdG9yYWdlQnVja2V0OiAnZ3M6Ly9jbG93bmlhLWQ2N2EyLmFwcHNwb3QuY29tJyxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbiAoZGF0YSkgeyAvLyBvcHRpb25hbCBidXQgdXNlZnVsIHRvIGltbWVkaWF0ZWx5IHJlLWxvZ29uIHRoZSB1c2VyIHdoZW4gaGUgcmUtdmlzaXRzIHlvdXIgYXBwXG4gICAgY29uc29sZS5sb2coZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKTtcbiAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXJzKyB1aWQ6IFwiK2RhdGEudXNlci51aWQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcidzIGVtYWlsIGFkZHJlc3M6IFwiICsgKGRhdGEudXNlci5lbWFpbCA/IGRhdGEudXNlci5lbWFpbCA6IFwiTi9BXCIpKTtcbiAgICB9XG4gICAgfSxcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgaW5pdGlhbGl6ZWRcIilcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHMsXG4gICAgU0lERURSQVdFUl9ESVJFQ1RJVkVTLFxuICAgIERyYXdlckNvbXBvbmVudCxcbiAgICBCb3R0b21CYXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQXV0aEd1YXJkQXJ0aXN0LFxuICAgIEN1cnJlbnRBcnRpc3QsXG4gICAgVXNlclNlcnZpY2VcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge30iXX0=