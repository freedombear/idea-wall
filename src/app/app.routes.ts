import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainPointListComponent } from './pain-points/pain-point-list/pain-point-list.component';
import { IdeaListComponent } from './ideas/idea-list/idea-list.component';
import { ThoughtListComponent } from './thoughts/thought-list/thought-list.component';

export const routes: Routes = [ // add export here
  { path: '', redirectTo: '/pain-points', pathMatch: 'full' }, // 默认重定向到 Pain Points
  { path: 'pain-points', component: PainPointListComponent },
  { path: 'ideas', component: IdeaListComponent },
  { path: 'thoughts', component: ThoughtListComponent },
  // 可以根据需要添加更多路由
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

