import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LoginComponent } from "./posts/auth/login/login.component"
import { SignUpComponent } from "./posts/auth/signup/signup.component"
import { PostListComponent } from "./posts/post-list/post-list.component"
import { PostCreateComponent } from "./posts/posts-create/post-create.component"

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:postId', component: PostCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
