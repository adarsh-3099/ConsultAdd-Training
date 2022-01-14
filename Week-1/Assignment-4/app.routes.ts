import { DirectoryComponent } from "./directory/directory.component"
import { HeaderComponent } from "./components/header/header.component"
import { provideRoutes } from "@angular/router"

const APP_ROUTES = [
    {
        path: 'directory',
        component: DirectoryComponent,
    },
    {
        path: '',
        component: HeaderComponent
    }
]

export const APP_ROUTES_PROVIDER = [
    provideRoutes(APP_ROUTES)
]